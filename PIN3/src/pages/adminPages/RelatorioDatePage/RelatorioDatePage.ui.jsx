import React from 'react';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
  RelatorioContainer, RelatorioTitle,FormSection, DateInput, GerarRelatorioButton,
  RelatorioBody,
  TitleBlock,
  Title,
  TitleDate
} from './RelatorioDatePage.styles'; 


export default function RelatorioScreen() {
  return (
    <RelatorioBody>
    <NavHeader /> 
    <TitleBlock>
    <Title>Projeto: Atualmente aberto</Title>
    </TitleBlock>
    
    <RelatorioContainer>
      
      <RelatorioTitle>Selecione o período desejado</RelatorioTitle>

      <FormSection>
        <TitleDate>Data de Inicio</TitleDate>
        <DateInput type="date" /> 
        <TitleDate>Data de Fim</TitleDate>
        <DateInput type="date" />
      </FormSection>

      <GerarRelatorioButton>Gerar Relatório</GerarRelatorioButton>
    </RelatorioContainer>
    </RelatorioBody>
  );
}