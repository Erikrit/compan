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
	faCalendarAlt,
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
} from './styles';


const modules = [
	{
		name: 'Agenda',
		icon: faCalendarAlt,
		options: [{ name: 'Agenda', target: '/[subscription]/schedule' }]
	},
	{
		name: 'Contatos',
		icon: faAddressBook,
		options: [{ name: 'Cadastro', target: '/[subscription]/contacts', permission: 'Contatos' },
			      { name: 'Relatórios', target: '/[subscription]/reportsContacts', permission: 'RelatorioContatos' },]

	},
	{
		name: 'Financeiro',
		icon: faMoneyCheckAlt,
		options: [
			{ name: 'Contas', target: '/[subscription]/accounts' },
			{ name: 'Lançamentos', target: '/[subscription]/bills' },
			{ name: 'Relatórios', target: '/[subscription]/reports', permission: 'Relatorio' },
			{ name: 'Resgate de valores', target: '/[subscription]/rescues', permission: 'Resgate'}
		]
	},
	{
		name: 'Repis',
		icon: faWallet,
		segment: 'union',
		options: [
			{ name: 'Campanhas', target: '/[subscription]/repis-campaigns', permission: 'Repis' },
			{ name: 'Adesões', target: '/[subscription]/repis-adhesions', permission: 'Repis' },
		],
	},
	{
		name: 'Cartas de oposição',
		icon: faEnvelopeOpenText,
		segment: 'union',
		options: [
			{ name: 'Campanhas', target: '/[subscription]/opposition-letter-campaigns', permission: 'Carta de oposição' },
			{ name: 'Solicitações', target: '/[subscription]/opposition-letter-adhesions', permission: 'Carta de oposição' },
		],
	},
	{
		name: 'Documentos',
		icon: faFileAlt,
		options: [{ name: 'Documentos', target: '/[subscription]/documents' }]
	},
	{
		name: 'Usuários',
		icon: faUsers,
		options: [
			{ name: 'Usuários', target: '/[subscription]/users' },
		]
	}
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
					<SideBarButton
						onClick={() => router.push(`/home`)}
						style={{ marginBottom: 12 }}
					>
						<FontAwesomeIcon
							icon={faHome}
							color={theme.light_mode ? '#fff' : '#000'}
						/>
						<SideBarButtonText>Home</SideBarButtonText>
					</SideBarButton>
				</SideBarButtonsContainer>
			</SideBarArea>
		</Container>
	);
}
