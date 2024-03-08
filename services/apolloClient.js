import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import Router from 'next/router';
import axios from 'axios';
import { isEqual } from 'lodash';


export async function getUserToken(){
	const user = JSON.parse(localStorage.getItem('@user'));

	if (!user){
		return;
	}

	if (new Date(user.sessionExpiresIn) < new Date()){
		try{
			const { data } = await axios.get('/api/refresh-session', {
				headers: { Authorization: `Bearer ${localStorage.getItem('@apiToken')}` }
			});

			if (!data){
				localStorage.removeItem('@user');
				localStorage.removeItem('@apiToken');
				Router.reload(window.location.pathname);
				return;
			}

			localStorage.setItem('@user', JSON.stringify(data.user));
			localStorage.setItem('@apiToken', data.token);
			user.sessionExpiresIn = data.user.sessionExpiresIn;

			if (!isEqual(user, data.user)){
				Router.reload(window.location.pathname);
			}
		} catch(error){
			localStorage.removeItem('@user');
			localStorage.removeItem('@apiToken');
			Router.reload(window.location.pathname);
		}
	}

	return localStorage.getItem('@apiToken');
}


export async function getPersonToken(){
	const person = JSON.parse(localStorage.getItem('@publicToolsPerson'));

	if (!person){
		return;
	}

	if (new Date(person.sessionExpiresIn) < new Date()){
		try{
			const { data } = await axios.get('/api/refresh-session', {
				headers: {
					'X-Public-Tools-Token': `Bearer ${localStorage.getItem('@personApiToken')}`,
				}
			});

			if (!data){
				localStorage.removeItem('@publicToolsPerson');
				localStorage.removeItem('@personApiToken');
				Router.reload(window.location.pathname);
				return;
			}

			localStorage.setItem('@publicToolsPerson', JSON.stringify(data.person));
			localStorage.setItem('@personApiToken', data.token);
			person.sessionExpiresIn = data.person.sessionExpiresIn;

			if (!isEqual(person, data.person)){
				Router.reload(window.location.pathname);
			}
		} catch(error){
			localStorage.removeItem('@publicToolsPerson');
			localStorage.removeItem('@personApiToken');
			Router.reload(window.location.pathname);
		}
	}

	return localStorage.getItem('@personApiToken');
}


const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors){
		graphQLErrors.forEach(({ extensions }) => {
			if (['UNAUTHENTICATED', 'FORBIDDEN'].includes(extensions.code)){
				localStorage.removeItem('@user');
				localStorage.removeItem('@apiToken');
				localStorage.removeItem('@publicToolsPerson');
				localStorage.removeItem('@personApiToken');
				Router.reload(window.location.pathname);
			}
		});
	}
});


const httpLink = createUploadLink({
	uri: '/api/graphql',
});


const authLink = setContext(async (_, { headers }) => {
	const token = await getUserToken();
	const personToken = await getPersonToken();

	return {
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : '',
			'X-Public-Tools-Token': personToken ? `Bearer ${personToken}` : '',
			credentials: 'same-origin',
		}
	}
});


const client = new ApolloClient({
	link: errorLink.concat(authLink.concat(httpLink)),
	cache: new InMemoryCache(),
});


export default client;
