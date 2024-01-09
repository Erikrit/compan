import React from 'react'
import { CardButton, CardContainer, CardContent, CardImage, CardImageContainer, CardInfo, CardInfoCity, CardInfoState, CardTitle, ContainerInfoCity } from '../../styles/charges-batch'
import styled from 'styled-components';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Products(props) {
  return (
    <CardContainer>
            <CardImageContainer src={props.url} alt="product-img"/>
            <CardTitle>{props.name}</CardTitle>
            <CardInfo>{props.description}</CardInfo>
            <CardInfoCity>{props.cidade}</CardInfoCity>
            <CardInfoState>{props.estado}</CardInfoState>
            <CardButton>Whatsapp</CardButton>
    </CardContainer>
  )
}
