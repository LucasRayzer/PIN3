import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { LogoContainer, LogoImage, RegisterBody, RegisterButton, RegisterContainer, RegisterForm, RegisterHeader, RegisterInput, RegisterSelect, RegisterTitle, RegisterTitleHeader } from './RegisterPage.styles';
import SearchLogo from '../../../assets/images/SearchHubLogo.png'; 
import AuthContext from '../../../AuthContext';
import Back from '../../../assets/images/backGround.png';
export default function RegisterPage() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('1'); 
 

 const {authData, setAuthData } = useContext(AuthContext);
  const handleRegister = async () => {
    if (senha !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
   
    try {
      const newAluno = {
      nome: usuario,
      senha: senha,
      tipoUsuario: parseInt(tipoUsuario,10),
    };

      if (parseInt(tipoUsuario) === 3) {

        const response = await axios.post('http://localhost:8080/user/createAluno', newAluno);
        alert("Aluno criado com Sucesso!");
        navigate('/homeAdm'); 
      }
      if (parseInt(tipoUsuario) === 2) {
        const response = await axios.post('http://localhost:8080/user/createCoordenador', {
          nome: usuario,
          senha: senha,
          tipoUsuario: parseInt(tipoUsuario),
          adm: {
            user_id: parseInt(authData.idU,10)
        }
        });
        alert("Coordenador criado com Sucesso!");
        navigate('/homeAdm'); 
      }
      
      if (parseInt(tipoUsuario) === 1) {
        const response = await axios.post('http://localhost:8080/user/createAdmin', {
          nome: usuario,
          senha: senha,
          tipoUsuario: parseInt(tipoUsuario)
        });
        alert("Admin criado com Sucesso!");
        navigate('/homeAdm'); 
      }
      console.log(newAluno);
    

        
      
    } catch (error) {
      console.error("Erro na criação de Usuário!", error);
      console.log(  {
        nomeUsuario: usuario,
        senha: senha,
        tipoUsuario: parseInt(tipoUsuario,10),
        admin: {
          user_id: parseInt(1,10)
      }
      });
      alert('Erro na Criação de Usuário')
    }
  }

  return (
    <RegisterBody>
      <RegisterHeader>
        <RegisterTitleHeader>Search Hub</RegisterTitleHeader>
      </RegisterHeader>

      <RegisterContainer style={{background: `url('${Back}') no-repeat center center`, backgroundSize: 'cover',
    backgroundColor: '#1A1A1A'}}>
        <LogoContainer>
          <LogoImage src={SearchLogo} alt='Logo' />
        </LogoContainer>
        <RegisterForm>
          <RegisterTitle>Cadastro</RegisterTitle>
          <RegisterInput type="text" placeholder="Usuário" maxLength={25} value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          <RegisterInput type="password" placeholder="Senha" maxLength={20} value={senha} onChange={(e) => setSenha(e.target.value)} />
          <RegisterInput type="password" placeholder="Confirme a senha" maxLength={20} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          {/*Dropdown para selecionar tipo de usuário*/}
          <RegisterSelect value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)}>
            <option value="3">Aluno</option>
            <option value="2">Coordenador</option>
            <option value="1">Administrador</option>
          </RegisterSelect>

          <RegisterButton onClick={handleRegister}>Cadastrar</RegisterButton>
        </RegisterForm>
      </RegisterContainer>
    </RegisterBody>
  );
}