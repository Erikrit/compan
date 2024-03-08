import qs from 'qs';
import axios from 'axios';
import prisma from './prisma';


const asaasApi = axios.create(process.env.AMBIENTE == 'DEV'
    ? {baseURL: 'https://sandbox.asaas.com/api/v3/'}
    : {baseURL: 'https://www.asaas.com/api/v3/'});


class Authorization {
    constructor(clientId, clientSecret, resourceToken, fee) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.resourceToken = resourceToken;
        this.fee = fee;
        this.token = null;
        this.expiresAt = null;
    }

    async getToken() {
        if (!this.token || this.expiresAt < new Date()) {
            await this.authenticate();
        }

        return this.token;
    }

    async authenticate() {
        const data = new Buffer.from(this.clientId + ':' + this.clientSecret);

        if (process.env.AMBIENTE == 'DEV') {
           const url = 'https://sandbox.asaas.com/api/v3/'
        } else {
           const url = 'https://www.asaas.com/api/v3/';
        }

        const response = await axios.post(url, qs.stringify({
            'grant_type': 'client_credentials',
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${data.toString('base64')}`,
            },
        });

        const expiresAt = new Date();
        this.expiresAt = expiresAt.setSeconds(expiresAt.getSeconds() + response.data.expires_in - 300);
        this.token = response.data.access_token;
    }
}

export default class AsaasApi {
    constructor(subscriptionId) {
        this.subscriptionId = subscriptionId;
        this.api = asaasApi;
    }

    get credential() {
        if (!AsaasApi._credentials) {
            return null;
        }

        return AsaasApi._credentials[this.subscriptionId];
    }

    async setCredential() {
        if (this.credential) {
            return;
        }

        const userCredentials = await prisma.credential.findFirst({
            where: {
                name: 'asaas',
                subscription_id: this.subscriptionId,
            }
        });

        if (!userCredentials) {
            throw new Error('Failed to find credentials');
        }

        const authorization = new Authorization(
            userCredentials.data.client_id,
            userCredentials.data.client_secret,
            userCredentials.data.resource_token,
            userCredentials.data.fee,
        );

        if (!AsaasApi._credentials) {
            AsaasApi._credentials = {};
        }

        AsaasApi._credentials[this.subscriptionId] = authorization;
    }

/*    async setWebHook() {
        const response = await this.post('notifications/webhooks', {
            url: `${process.env.SERVER_URL}/api/asaas/notifications`,
            eventTypes: ['CHARGE_STATUS_CHANGED']
        });

        const {secret} = response.data;

        await prisma.credential.updateMany({
            where: {
                name: 'asaas',
                subscription_id: this.subscriptionId,
            },
            data: {
                data: {
                    client_id: this.credential.clientId,
                    client_secret: this.credential.clientSecret,
                    resource_token: this.credential.resourceToken,
                    fee: this.credential.fee,
                    webhook_secret: secret
                }
            }
        });
    }*/

    async get(url, config = {}) {
        config.headers = {
            'Content-Type': 'application/json',
            'access_token': this.credential.resourceToken
        }
        return await this.api.get(url, config);
    }

    async post(url, data, config = {}) {
        // const token = await this.credential.getToken();
        config.headers = {
            'Content-Type': 'application/json',
            'access_token': this.credential.resourceToken
        }

        return await this.api.post(url, data, config);
    }

    async put(url, data, config = {}) {
        // const token = await this.credential.getToken();
        config.headers = {
            'Content-Type': 'application/json',
            'access_token': this.credential.resourceToken
        }

        return await this.api.put(url, data, config);
    }

    async delete(url, config = {}) {
        //const token = await this.credential.getToken();
        config.headers = {
            'Content-Type': 'application/json',
            'access_token': this.credential.resourceToken
        }


        return await this.api.delete(url, config);
    }
}
