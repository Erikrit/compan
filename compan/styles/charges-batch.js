import styled from 'styled-components';
import { Form } from '@unform/web';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { rgba } from 'polished';


export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  border-radius: 4px;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);
  padding: 20px 25px;
  margin: 35px 55px;

  @media (max-width: 600px){
    box-shadow: none;
    padding: 0;
    margin: 35px 15px;
  }
`;


export const Title = styled.div`
  color: ${props => rgba(props.theme.colors.secondary, 0.8)};
  font-size: 30px;
`;


export const HorizontalArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;


export const VerticalArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  flex: 1;
`;


export const Label = styled.label`
	color: ${props => rgba(props.theme.colors.secondary, 0.8)};
	font-size: 16px;
	margin-top: 10px;
`;


export const STabs = styled(Tabs)`
	display: flex;
	flex-direction: column;
  margin-top: 10px;
`;


export const STabList = styled(TabList)`
	list-style-type: none;
	padding: 4px;
	gap: 3px;
	margin: 0;
	display: flex;
	overflow-x: auto;
`;


export const STab = styled(Tab)`
	border-bottom: 3px solid ${props => rgba(props.theme.colors.primary, 0.5)};
	padding: 4px 15px;
	min-width: 200px;
  width: 100%;
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
		display: flex;
    flex-direction: column;
	}
`;


export const ChargesArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span{
    color: ${props => rgba(props.theme.colors.secondary, 0.8)};
    font-size: 16px;
    font-weight: bold;
    align-self: center;
    padding: 20px;
  }
`;


export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  padding: 10px;
  gap: 5px;
  flex-wrap: nowrap;

  &:hover {
    border: 2px solid ${props => rgba(props.theme.colors.primary, 0.5)};
  }
`;


export const CardInput = styled.input.attrs({
  type: 'text',
})`
  margin-left: auto;
  height: 20px;
  width: 70px;
`;


export const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: ${props => props.theme.colors.alert};
  border-radius: 4px;
  margin-left: 15px;
  cursor: pointer;

  &:hover{
    background-color: ${props => rgba(props.theme.colors.alert, 0.8)};
  }

  svg{
    font-size: 14px;
  }
`;


export const ButtonsArea = styled.div`
	display: flex;
	flex-direction: row;
	align-self: flex-end;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 20px;

	@media (max-width: 600px){
    align-self: center;
    justify-content: center;
  }
`;


export const Button = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
	justify-content: center;
	min-width: 150px;
	background-color: ${props => rgba(props.theme.colors.primary, 0.4)};
	color: ${props => rgba(props.theme.colors.secondary, 0.6)};
	font-weight: bold;
	border-radius: 3px;
	padding: 10px;
	font-size: 16px;
	cursor: pointer;

	&:hover{
		background-color: ${props => rgba(props.theme.colors.primary, 0.2)};
	}
`;
