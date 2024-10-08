import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    NavContainer, NavUser, NavUserImage, NavUserInfo, ConfigImage, ConfigBlock
} from './NavHeader.styles'; 
import ConfigLogo from '../../assets/images/ConfigLogo.png'; 
import userFoto from '../../assets/images/user_Default_Avatar.png';
export default function NavHeader() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ userName: '', fotoPerfil: '' });


    return (
        <NavContainer>
            <NavUser>
                <NavUserImage src={userData.fotoPerfil || userFoto} alt="Avatar do usuário" />
                <NavUserInfo>{userData.userName || "Usuário"}</NavUserInfo>
            </NavUser>
            <ConfigBlock>
            <ConfigImage onClick={() => navigate('/settings')}
            src={ConfigLogo} alt='Config' />
             </ConfigBlock>
        </NavContainer>
    );
}
