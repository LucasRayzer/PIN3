import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    NavContainer, NavUser, NavUserImage, NavUserInfo, ConfigImage, ConfigBlock, LogoutButton
} from './NavHeader.styles'; 
import ConfigLogo from '../../assets/images/ConfigLogo.png'; 
import userFoto from '../../assets/images/user_Default_Avatar.png';
import AuthContext from '../../AuthContext';

export default function NavHeader() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ userName: '', fotoPerfil: '' });
    const { authData, setAuthData } = useContext(AuthContext);

    useEffect(() => {
        const fetchUserName = async (idU) => {
            try {
                const response = await axios.get(`http://localhost:8080/user/nomeUser/${idU}`);
                setUserData(prevData => ({ ...prevData, userName: response.data }));
            } catch (error) {
                console.error('Erro ao buscar nome do coordenador:', error);
            }
        };
        
        fetchUserName(authData.idU);
    }, [authData.idU]);

    const handleLogoff = () => {
        // Limpa os dados de autenticação
        setAuthData(null);
        localStorage.removeItem('authToken'); // Exemplo se você salva o token no localStorage
        navigate('/login'); // Redireciona para a página de login
    };

    return (
        <NavContainer>
            <NavUser>
                <NavUserImage src={userData.fotoPerfil || userFoto} alt="Avatar do usuário" />
                <NavUserInfo>{userData.userName || "Usuário"}</NavUserInfo>
            </NavUser>
            <ConfigBlock>
                <ConfigImage onClick={() => navigate('/settings')} src={ConfigLogo} alt='Config' />
                <LogoutButton onClick={handleLogoff}>Logoff</LogoutButton>
            </ConfigBlock>
        </NavContainer>
    );
}
