import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { rgba } from 'polished';


const ResponsiveGridLayout = WidthProvider(Responsive);


export const STabs = styled(Tabs)`
	display: flex;
	flex-direction: column;
`;


export const STabList = styled(TabList)`
	list-style-type: none;
	padding: 4px;
	gap: 3px;
	margin: 0;
	display: ${props => props.hidden ? 'none' : 'flex'};
	overflow-x: auto;
`;


export const STab = styled(Tab)`
	display: ${props => !props.visible ? 'none' : 'initial'};
	border-bottom: 3px solid ${props => rgba(props.theme.colors.primary, 0.5)};
	padding: 4px 15px;
	min-width: 150px;
	margin-bottom: 20px;
	text-align: center;
	user-select: none;
	cursor: pointer;

	&.selected {
		border-bottom: 3px solid ${props => props.theme.colors.primary};
	}
`;


export const STabPanel = styled(TabPanel)`
	display: none;

	&.selected {
		display: block;
	}
`;


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 25px 30px;

	@media (max-width: 600px){
		margin: 5px;
	}
`;


export const PageTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
	color: ${props => rgba(props.theme.colors.secondary, 0.7)};
	font-size: 30px;
	margin-bottom: 10px;

	svg {
		font-size: 28px;
	}
`;


export const UserMessage = styled.div`
	font-size: 16px;
	color: ${props => props.theme.colors.primary};
	align-self: center;
`;


export const CardsArea = styled(ResponsiveGridLayout).attrs({
	className: 'layout',
	breakpoints: { normal: 800, small: 0 },
	cols: { normal: 2, small: 1 },
	rowHeight: 10,
})`
	.react-grid-item {
		display: flex;
		flex-direction: column;
		background-color: ${props => props.theme.colors.background};
		border-radius: 4px;
		box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);
		overflow: auto;
	}

	.react-resizable-handle {
		position: sticky;
		min-width: 20px;
		min-height: 20px;
		margin-left: auto;
		margin-top: auto;
	}
`;
