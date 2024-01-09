import Head from "next/head";
import {Container} from "../../components/Header/styles";
import {faChartPie} from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import KitchenSinkExample from "../../components/Card/index"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Navbar } from "../../src/companents/navbar/Navbar";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Anuncio from "../Anuncio/anuncio";
import Credit from "../Credit/credit";
import Perfil from "../Perfil/Perfil";
import Products from "../Products/Products";
import Cart from "../Cart/cart";
import LoginSingup from "../Login/LoginSingup";
import HomeShop from "../HomeShop/HomeShop";



export default function HomePage(){

    return (
        <div>
           <BrowserRouter>
           <Navbar/>
            <Routes>
                <Route path="/" element={<HomeShop/>}/>
                <Route path="/anuncio" element={<Anuncio/>}/>
                <Route path="/credit" element={<Credit/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="products" element={<Products/>}>
                    <Route path=":produtID" element={<Products/>}/>
                </Route>
                <Route path="cart" element={<Cart/>}/>
                <Route path="login" element={<LoginSingup/>}/>
            </Routes>


           </BrowserRouter>
        

            
            
        </div>
    );

} 


{/* <Header/>
<KitchenSinkExample/> */}