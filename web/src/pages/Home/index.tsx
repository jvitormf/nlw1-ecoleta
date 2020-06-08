import React from 'react';
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import './styles.css'

import logo from '../../assets/logo.svg';

import baterias from "../../assets/items/baterias.png";
import eletronicos from "../../assets/items/eletronicos.png";
import lampadas from "../../assets/items/lampadas.png";
import oleo from "../../assets/items/oleo.png";
import papeis_papelao from "../../assets/items/papeis_papelao.png";
import organicos from "../../assets/items/organicos.png";

const Home = () => {
 return (
   <div id="page-home">
     <div className="content">
       <header>
         <img src={logo} alt="Ecoleta"/>
       </header>

       <div className="items">
          <img src={baterias} alt="Baterias" title="Baterias" />
          <img src={eletronicos} alt="Baterias" title="Eletrônicos" />
          <img src={lampadas} alt="Baterias" title="Lâmpadas" />
          <img src={organicos} alt="Baterias" title="Orgânicos" />
          <img src={oleo} alt="Baterias" title="Óleo de Cozinha" />
          <img src={papeis_papelao} alt="Baterias" title="Papéis e papelão" />
       </div>

       <main>
         <h1>Seu marketplace de coleta de resíduos.</h1>
         <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

         <Link to="/create-point">
           <span>
             <FiLogIn />
           </span>
           <strong>Cadastre um ponto de coleta</strong>
         </Link>
       </main>
     </div>
   </div>
 )
}

export default Home;
