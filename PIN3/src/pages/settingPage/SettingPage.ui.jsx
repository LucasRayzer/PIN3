import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ConfiguracaoBody,
  ButtonsContainer,
  AlterarButton
} from './SettingPage.styles';
import NavHeader from '../../components/HeaderMenu/NavHeader.ui';
import PasswordChangeModal from '../../components/Modals/PasswordChangeModal/PasswordChangeModal.ui'
import AuthContext from '../../AuthContext';
export default function ConfiguracaoScreen() {
  const { authData, setAuthData } = useContext(AuthContext);

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const handlePasswordChange = () => {
    setIsPasswordModalOpen(true);
  };

  const handleClosePasswordModal = () => {
    setIsPasswordModalOpen(false);
  };
  return (
    <ConfiguracaoBody>
            <NavHeader/>
       
      <ButtonsContainer>
        <AlterarButton onClick={handlePasswordChange}>Alterar Senha</AlterarButton>
    
      </ButtonsContainer>
      <PasswordChangeModal isOpen={isPasswordModalOpen} onClose={handleClosePasswordModal} />
    </ConfiguracaoBody>
  );
}