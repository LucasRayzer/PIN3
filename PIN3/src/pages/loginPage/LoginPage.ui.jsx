import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { LoginBody, LoginButton, LoginContainer, LoginForm, LoginHeader, LoginInput, LoginTitle, LoginTitleHeader, LogoContainer, LogoImage} from './LoginPage.styles';
import SearchLogo from '../../assets/images/SearchHubLogo.png'; 
import Back from '../../assets/images/backGround.png';
import AuthContext from '../../AuthContext';
export default function LoginPage() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const { authData, setAuthData } = useContext(AuthContext);
  const [senhaConfirmed, setCon] = useState('');

  async function getSenhaC(username) {
    try {
      const response = await axios.get(`http://localhost:8080/user/nome/${username}`);
      setAuthData({
        idU: response.data.user_id,
        nomeUsuario: response.data.nome,
        senha: response.data.senha,
        tipoUsuario: response.data.tipoUsuario
      });
      setCon(response.data.senha);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const handleLogin = async () => {
    try {
      const data = await getSenhaC(usuario);
    
      
      
      if (senha === data.senha) {
             
        
        if (data.tipoUsuario === 1) {
          navigate('/homeAdm');
        } else 
          if (data.tipoUsuario === 2) {
            navigate('/homeCoord');
          } else {
            if (data.tipoUsuario === 3) {
              navigate('/homeAluno');
            } 
          }
      } else {
        alert('Senha ou Usuário Inválida!')
      }
      
    } catch (error) {
      console.error("Erro no login!", error);
      alert('Erro no login: Usuário ou senha incorretos');
    }
  };

  return (
    <LoginBody>
      <LoginHeader>
        <LoginTitleHeader>Search Hub</LoginTitleHeader>
      </LoginHeader>

      <LoginContainer style={{background: `url('${Back}') no-repeat center center`, backgroundSize: 'cover',
    backgroundColor: '#1A1A1A'}}>
        <LogoContainer>
          <LogoImage src={SearchLogo} alt='Logo' />
        </LogoContainer>
        <LoginForm>
          <LoginTitle>Bem VIndo!</LoginTitle>
          <LoginInput type="text" placeholder="Usuário" maxLength={25} value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          <LoginInput type="password" placeholder="Senha" maxLength={20} value={senha} onChange={(e) => setSenha(e.target.value)} />
         

          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </LoginForm>
      </LoginContainer>
    </LoginBody>
  );
}