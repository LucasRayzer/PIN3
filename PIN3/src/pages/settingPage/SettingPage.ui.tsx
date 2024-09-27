import React from 'react';
import {
  ConfiguracaoBody,
  ButtonsContainer,
  AlterarButton
} from './SettingPage.styles';
import NavHeader from '../../components/HeaderMenu/NavHeader.ui';

export default function ConfiguracaoScreen() {
  return (
    <ConfiguracaoBody>
            <NavHeader/>
       
      <ButtonsContainer>
        <AlterarButton>Alterar Senha</AlterarButton>
        <AlterarButton>Alterar Foto</AlterarButton>
      </ButtonsContainer>
    </ConfiguracaoBody>
  );
}