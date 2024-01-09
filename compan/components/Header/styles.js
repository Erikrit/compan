import styled from 'styled-components';


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	border-bottom: 2px solid ${props => props.theme.colors.primary};
`;


export const TopStrip = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 28px;
	width: 100%;
	padding: 4px 0;
	background-color: ${props => props.theme.colors.primary};
`;


export const TopImage = styled.img`
	height: 75%;
`;


export const MainStrip = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
	width: 100%;
`;


export const LogoImage = styled.img`
	height: 32px;
	margin: 12px 0;
`;


export const MenuButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	cursor: pointer;
	margin: 0 5px;

	svg{
		font-size: 20px;
	}
`;

export const ContainerUserArea = styled.div`
	position: absolute;
	top: 10px; 
	right: 10px; 
`;

export const UserArea = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	height: 40px;
	width: 40px;
	margin: 0 5px;
	cursor: pointer;


	&:hover {
		border: 2px solid ${props => props.theme.colors.primary};
		height: 36px;
		width: 36px;
	}

	svg{
		font-size: 20px;
	}
`;


export const UserOptionsContainer = styled.div`
	position: absolute;
	background-color: #fff;
	max-width: 400px;
	top: 100%;
	right: 10px;
	margin-top: 5px;
	border-radius: 3px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, .4);
	display: none;
`;


export const UserOption = styled.div`
	padding: 5px 10px 5px 10px;
	width: 100%;
	min-width: 100px;
	text-align: right;
	cursor: pointer;
	white-space: nowrap;
	border-radius: 3px;
	gap: 5px;

	&:hover {
		background-color: #dadce0;
	}
`;


export const SideBarArea = styled.div`
	position: fixed;
	top: 0;
	left: ${props => props.visible ? 0 : '-100%'};
	background: ${props => props.theme.colors.primary};
	height: 100%;
	width: 230px;
	box-shadow: 0px 0px 15px 0px #000;
	padding: 10px;
	transition: left 0.4s linear;
	overflow: auto;
	z-index: 100;
`;


export const SideBarHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 15px 0;
	padding-bottom: 10px;
	border-bottom: 1px solid ${props => props.theme.light_mode ? '#fff' : '#000'};
`;


export const SidebarLogo = styled.img`
	width: 100px;
	filter: brightness(0) invert(1);
`;


export const SideBarCloseButton = styled.div`
	width: 35px;
	margin: 0 15px;
	cursor: pointer;

	svg{
		font-size: 25px;
	}
`;


export const SideBarButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 15px;
`;


export const SideBarButton = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5px;
	width: 100%;
	margin: 5px;
	padding-left: 10px;
	cursor: pointer;

	svg{
		min-width: 30px;
		font-size: 22px;
	}
`;


export const SideBarButtonText = styled.div`
	color: #fff;
	font-size: 18px;
	user-select: none;
`;


export const SideBarCollapseArea = styled.div`
	max-height: ${props => props.collapsed ? '0px' : '100px'};
	background-color: #fff;
	width: 92%;
	border-radius: 5px;
	margin-bottom: 12px;
	padding: ${props => props.collapsed ? '0 7px' : '7px'};
	transition: ${props => props.collapsed ? 'max-height .3s linear' : 'max-height .8s linear'};
	transition: padding .1s linear;
	overflow: hidden;

	a{
		text-decoration: none;
	}
`;


export const SideBarOption = styled.div`
	color: rgba(0, 0, 0, .8);
	font-size: 16px;
	padding: 2px;
	cursor: pointer;
	user-select: none;

	&:hover {
		background-color: #dadce0;
	}
`;
