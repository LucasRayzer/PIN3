import React, { useState } from 'react';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
  RelatorioContainer,
  RelatorioTitle,
  FormSection,
  DateInput,
  GerarRelatorioButton,
  RelatorioBody,
  TitleBlock,
  TitleDate,
} from './RelatorioDatePage.styles';

export default function RelatorioScreen() {
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleGerarRelatorio = async () => {
    if (!dataInicio || !dataFim) {
      setMensagem('Por favor, selecione ambas as datas.');
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/relatorioAdm/relatorios?dataInicio=${dataInicio}&dataFim=${dataFim}`,
        {
          method: 'GET',
        }
      );

      if (response.ok) {
        setMensagem('Relatórios gerados com sucesso!');
      } else {
        const errorData = await response.json();
        setMensagem(`Erro: ${errorData.message || 'Não foi possível gerar o relatório.'}`);
      }
    } catch (error) {
      setMensagem('Erro ao conectar com o servidor.');
      console.error(error);
    }
  };

  return (
    <RelatorioBody>
      <NavHeader />
      <TitleBlock></TitleBlock>

      <RelatorioContainer>
        <RelatorioTitle>Selecione o período desejado</RelatorioTitle>

        <FormSection>
          <TitleDate>Data de Início</TitleDate>
          <DateInput
            type="date"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
          />
          <TitleDate>Data de Fim</TitleDate>
          <DateInput
            type="date"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
          />
        </FormSection>

        <GerarRelatorioButton onClick={handleGerarRelatorio}>
          Gerar Relatório
        </GerarRelatorioButton>

        {mensagem && <p>{mensagem}</p>}
      </RelatorioContainer>
    </RelatorioBody>
  );
}
