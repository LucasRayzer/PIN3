import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  DeleteButton,
  ButtonContainer,
} from './RelatorioListPage.styles';

const RelatorioScreen = () => {
  const [relatorios, setRelatorios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    const fetchRelatorios = async () => {
      try {
        const response = await fetch('http://localhost:8080/relatorioAdm/todosRel');
        if (!response.ok) {
          throw new Error('Erro ao buscar os relatórios');
        }
        const data = await response.json();
        setRelatorios(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelatorios();
  }, []);

  const deleteRelatorio = async (id) => {
    try {
     
      
      const response = await fetch(`http://localhost:8080/relatorioAdm/deleteRelAdm/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao deletar o relatório');
      }
      
      setRelatorios((prevRelatorios) =>
        prevRelatorios.filter((relatorio) => relatorio.relatorioId !== id)
      );
    } catch (err) {
      alert(`Erro ao deletar: ${err.message}`);
    }
  };

  return (
    <RelatorioBody>
      <NavHeader />
      <TitleBlock>
        <Title>Todos os Relatórios</Title>
      </TitleBlock>
      <RelatorioContainer>
        {isLoading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <RelatoriosList>
            {relatorios.map((relatorio, index) => (
              <RelatorioItem key={relatorio.relatorioId || index}>
                <RelatorioNome>{relatorio.nomeProjeto || 'Relatório sem nome'}</RelatorioNome>
                <ButtonContainer>
                <AbrirButton onClick={() => navigate(`/adminViewRelatorio/${relatorio.relatorioId}`)}>
                  Abrir Relatório
                </AbrirButton>
                <DeleteButton onClick={() => deleteRelatorio(relatorio.relatorioId)}>
                  Deletar
                </DeleteButton>
                </ButtonContainer>
              </RelatorioItem>
            ))}
          </RelatoriosList>
        )}
      </RelatorioContainer>
    </RelatorioBody>
  );
};

export default RelatorioScreen;
