import Head from "next/head";

import {Container} from "../../components/Header/styles";
import {faChartPie} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import KitchenSinkExample from "../../components/Card/index"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
export default function HomePage(){

    return (
        <div>
            <Header/>
            <KitchenSinkExample/>
        </div>
    );

}