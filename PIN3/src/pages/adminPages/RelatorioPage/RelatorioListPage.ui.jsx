import React, { useState } from 'react';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
  RelatorioBody,
  TitleBlock,
  Title,
  RelatorioContainer,
  RelatoriosList,
  RelatorioItem,
  RelatorioNome,
  AbrirButton,
} from './RelatorioListPage.styles';

const RelatorioScreen = () => {
  const [intervalo, setIntervalo] = useState('16/07-16/08');
  const relatorios = [
    { nome: 'Relatório 1' },
    { nome: 'Relatório 2' },
    { nome: 'Relatório 3' },
    { nome: 'Relatório 4' },
    { nome: 'Relatório 5' },
    { nome: 'Relatório 1' },
    { nome: 'Relatório 2' },
    { nome: 'Relatório 3' },
    { nome: 'Relatório 4' },
    { nome: 'Relatório 5' },
  ];

  return (
    <RelatorioBody>
      <NavHeader />
      <TitleBlock>
        <Title>Relatórios de {intervalo}</Title>
      </TitleBlock>
      <RelatorioContainer>
        <RelatoriosList>
          {relatorios.map((relatorio, index) => (
            <RelatorioItem key={index}>
              <RelatorioNome>{relatorio.nome}</RelatorioNome>
              <AbrirButton>Abrir Relatório</AbrirButton>
            </RelatorioItem>
          ))}
        </RelatoriosList>
      </RelatorioContainer>
    </RelatorioBody>
  );
};

export default RelatorioScreen;
