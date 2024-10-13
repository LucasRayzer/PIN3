import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { LoginBody, LoginButton, LoginContainer, LoginForm, LoginHeader, LoginInput, LoginTitle, LoginTitleHeader, LogoContainer, LogoImage} from './LoginPage.styles';
import SearchLogo from '../../assets/images/SearchHubLogo.png'; 
export default function RegisterPage() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('Aluno'); // Opção padrão

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        nomeUsuario: usuario,
        senha: senha
      });

      if (response.status === 200) {
        alert('Login realizado com sucesso!');

        const tipoUsuario = response.data.tipoUsuario;

        // Redireciona com base no tipo de usuário
        if (tipoUsuario === 'Admin') {
          navigate('/homeAdmin');
        } else 
          if (tipoUsuario === 'Coord') {
            navigate('/homeCoord');
          } else {
            if (tipoUsuario === 'Aluno') {
              navigate('/homeAluno');
            } 
          }
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

      <LoginContainer>
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