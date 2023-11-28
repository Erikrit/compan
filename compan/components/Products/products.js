import React from 'react'
import { CardButton, CardContainer, CardContent, CardImage, CardImageContainer, CardInfo, CardTitle } from '../../styles/charges-batch'

export default function Products(props) {
  return (
    <CardContainer>
            <CardImageContainer src={props.url} alt="product-img"/>
            <CardTitle>{props.name}</CardTitle>
            <CardInfo>{props.description}</CardInfo>
    </CardContainer>
  )
}
