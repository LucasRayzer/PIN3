import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {
    HomeBody, HomeContainer
} from './HomePage.styles'; // Estilos conforme seu padrão
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';

export default function HomePage() {
    const navigate = useNavigate();

    const projects = [
        { name: "Projeto 1", status: "concluido" },
        { name: "Projeto 2", status: "atrasado" },
        { name: "Projeto 3", status: "em andamento" },
        { name: "Projeto 4", status: "em análise" },
    ];

    return (
        <HomeBody>
            <NavHeader/>

            <HomeContainer>
                
            </HomeContainer>
            
        </HomeBody>
    );
}
