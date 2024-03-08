import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faBars,
	faUser,
	faArrowLeft,
	faAddressBook,
	faMoneyCheckAlt,
	faFileAlt,
	faUsers,
	faWallet,
	faEnvelopeOpenText,
	faPowerOff,
	faMoneyCheck,
	faBullhorn,
	faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';
import {
	Container,
	TopStrip,
	TopImage,
	MainStrip,
	LogoImage,
	MenuButton,
	UserArea,
	UserOptionsContainer,
	UserOption,
	SideBarArea,
	SideBarHeader,
	SidebarLogo,
	SideBarCloseButton,
	SideBarButtonsContainer,
	SideBarButton,
	SideBarButtonText,
	SideBarCollapseArea,
	SideBarOption,
	ContainerUserArea,
} from './styles';
import { CardContainer, CheckboxLabel, FilterContainer, SearchButton, SearchInput, UserIconContainer } from '../../styles/charges-batch';
import { productsData } from '../data';
import Products from '../Products/products';
import KitchenSinkExample from '../Card';



const modules = [
	{
		name: 'Home',
		icon: faHome,
		onClick: () => router.push(`/home`),
	  },
	  {
		name: 'Anunciar',
		icon: faBullhorn,
		onClick: () => {
		  // Handle Anunciar button click
		},
	  },
	  {
		name: 'Créditos',
		icon: faMoneyCheck,
		onClick: () => {
		  // Handle Creditos button click
		},
	  },
	  {
		name: 'Perfil',
		icon: faUser,
		onClick: () => {
		  // Handle Perfil button click
		},
	  },
	  {
		name: 'Logoff',
		icon: faPowerOff,
		onClick: () => {
		  // Handle LogOff button click
		},
	},
	];


export default function Header(){
	const theme = useTheme();
	const router = useRouter();
	const { subscription } = router.query;
	const userButton = useRef(null);
	const userOptions = useRef(null);
	const [showMenu, setShowMenu] = useState(false);
	const [showUserMenu, setShowUserMenu] = useState(false);
	const [selectedModules, setSelectedModules] = useState([]);
	const [selectedCity, setSelectedCity] = useState('');
	const [selectedState, setSelectedState] = useState('');
  	const [searchTerm, setSearchTerm] = useState('');
	/* const [filteredCityState, setFilteredCityState] = useState(productsData) */
	const [value, setValue] = useState('')
	const [cityCheckboxChecked, setCityCheckboxChecked] = useState(false);
	const [stateCheckboxChecked, setStateCheckboxChecked] = useState(false);
	const [filteredItems, setFilteredItems] = useState(productsData);


	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);


	function handleClickOutside(event) {
		if (!userButton.current){
			return;
		}

		if (!userButton.current.contains(event.target) && !userOptions.current.contains(event.target)) {
			setShowUserMenu(false);
		}
	}


	function _setSelectedModules(name){
		if (selectedModules.includes(name)){
			setSelectedModules(selectedModules.filter(i => i !== name));
			return;
		} else {
			setSelectedModules([...selectedModules, name]);
		}
	}


	const onChange = (e) => {
		setValue(e.target.value)
		onSearch(e.target.value)
	}

	const onSearch = (searchTerm) => {

		console.log("pesquisando", filteredItems)

		const newFilteredItems = productsData.filter((item) => {
			const cityMatch = cityCheckboxChecked
			  ? item.cidade.toLowerCase().includes(searchTerm.toLowerCase())
			  : true;
		
			const stateMatch = stateCheckboxChecked
			  ? item.estado.toLowerCase().includes(searchTerm.toLowerCase())
			  : true;
		
			return cityMatch || stateMatch;
		  });
  
	setFilteredItems(newFilteredItems);
	}

	

	const onCityCheckboxChange = (e) => {
		setCityCheckboxChecked(e.target.checked);
		onSearch(value)
	}
	
	const onStateCheckboxChange = (e) => {
		setStateCheckboxChecked(e.target.checked);
		onSearch(value)
	}


	function _renderModule(item, index){

		const options = item.options.filter(option => {

				return true;
		});

		if (!options.length){
			return null;
		}

		return (
			<React.Fragment key={index}>
				<SideBarButton onClick={() => _setSelectedModules(item.name)}>
					<FontAwesomeIcon
						icon={item.icon}
						color={theme.light_mode ? '#fff' : '#000'}
					/>
					<SideBarButtonText>{item.name}</SideBarButtonText>
				</SideBarButton>
				<SideBarCollapseArea collapsed={!selectedModules.includes(item.name)}>
					{options.map((option, index) =>
						(
							<Link key={index} href={{ pathname: option.target, query: { subscription } }}>
								<a>
									<SideBarOption>{option.name}</SideBarOption>
								</a>
							</Link>
						)
					)}
				</SideBarCollapseArea>
			</React.Fragment>
		);
	}


	return (
		<Container>
			<MainStrip
				style={'center'}
			>
				 <MenuButton onClick={() => setShowMenu(true)}>
					<FontAwesomeIcon icon={faBars} color={theme.colors.primary}/>
				</MenuButton>
				<LogoImage alt='' src={theme.assets.logo}/>
					<FilterContainer id="filter-container">
						<CheckboxLabel>
							<input type="checkbox" id="city-checkbox" onChange={onCityCheckboxChange}/>Cidade
						</CheckboxLabel>

						<CheckboxLabel>
							<input type="checkbox" id="state-checkbox" onChange={onStateCheckboxChange}/>Estado
						</CheckboxLabel>

						<SearchInput type="text" id="search-bar" placeholder="Pesquisar..." onChange={onChange}/>
							
						<SearchButton onClick={() => onSearch(value)}>
							<FontAwesomeIcon icon={faSearch} color='white'/>
						</SearchButton> 
					</FilterContainer>
					<ContainerUserArea>
						<UserArea
							ref={userButton}
							onClick={() => setShowUserMenu(!showUserMenu)}
						>
							<FontAwesomeIcon icon={faUser} color={theme.colors.primary}/>
							<UserOptionsContainer
								ref={userOptions}
								style={showUserMenu ? {display: 'flex'} : {display: 'none'}}
							>
								<UserOption >Sair</UserOption>
							</UserOptionsContainer>
						</UserArea>
					</ContainerUserArea>
			</MainStrip>
			 <SideBarArea visible={showMenu}>
				<SideBarHeader>
					<SideBarCloseButton onClick={() => setShowMenu(false)}>
						<FontAwesomeIcon
							icon={faArrowLeft}
							color={theme.light_mode ? '#fff' : '#000'}
						/>
					</SideBarCloseButton>
					<SidebarLogo alt='' src={theme.assets.logo}/>
					<SideBarCloseButton/>
				</SideBarHeader>
				<SideBarButtonsContainer>
					{modules.map((item, index) => (
						<SideBarButton
						key={index}
						onClick={item.onClick}
						style={{ marginBottom: 12 }}
					>
						<FontAwesomeIcon
							icon={item.icon}
							color={theme.light_mode ? '#fff' : '#000'}
						/>
						<SideBarButtonText>{item.name}</SideBarButtonText>
					</SideBarButton>
					))}
				</SideBarButtonsContainer>
			</SideBarArea>
		</Container>
	);
}
