import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { LogoContainer, LogoImage, RegisterBody, RegisterButton, RegisterContainer, RegisterForm, RegisterHeader, RegisterInput, RegisterSelect, RegisterTitle, RegisterTitleHeader } from './RegisterPage.styles';
import SearchLogo from '../../../assets/images/SearchHubLogo.png'; 
export default function RegisterPage() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('Aluno'); // Opção padrão

  const handleRegister = async () => {
    if (senha !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/user/create', {
        nomeUsuario: usuario,
        senha: senha,
        tipoUsuario: tipoUsuario
      });
      if (response.status === 201) {
        alert('Usuário Criado com Sucesso!')

        // Verifica se é Admin e redireciona para a tela inicial
        if (tipoUsuario === 'Admin') {
          navigate('/home'); //Redireciona para a tela inicial
        } else {
          navigate('/login'); //Redireciona para a tela de login (não-admin)
        }
      }
    } catch (error) {
      console.error("Erro na criação de Usuário!", error);
      alert('Erro na Criação de Usuário')
    }
  }

  return (
    <RegisterBody>
      <RegisterHeader>
        <RegisterTitleHeader>Search Hub</RegisterTitleHeader>
      </RegisterHeader>

      <RegisterContainer>
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
            <option value="Aluno">Aluno</option>
            <option value="Coordenador">Coordenador</option>
            <option value="Admin">Administrador</option>
          </RegisterSelect>

          <RegisterButton onClick={handleRegister}>Cadastrar</RegisterButton>
        </RegisterForm>
      </RegisterContainer>
    </RegisterBody>
  );
}