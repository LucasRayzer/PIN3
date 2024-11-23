import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    ViewRelatorioBodyCoord,ViewRelatorioContainerCoord, ProgressBarCoord, TasksSectionCoord, ParticipantsSectionCoord,
     ParticipantCardCoord,  TitleCoord,
    ScrollContainerCoordPart,
    TitleBarSectionCoord,
    TitleProjectCoord,
    BlockCoord,
    ValueCoord,
    DateFileAluno,
    DateInput,
    Title
   
} from './RelatorioPageView.styles';


export default function ViewRelatorioProjectCoord() {
    const navigate = useNavigate();
    const { id } = useParams(); // Captura o ID do relatório da URL
    const [relatorio, setRelatorio] = useState(null); // Inicializa o estado como null
    const [error, setError] = useState(null); // Estado para tratar erros
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento
    console.log(id);
    
    useEffect(() => {
        const fetchRelatorio = async () => {
            try {
                const response = await fetch(`http://localhost:8080/relatorioCoord/relPorId/${id}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar o relatório.');
                }
                const data = await response.json();
                setRelatorio(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchRelatorio();
    }, [id]);

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    if (!relatorio) {
        return <p>Nenhum dado encontrado.</p>;
    }

    
    return (
        <ViewRelatorioBodyCoord>
            <NavHeader />
            <TitleBarSectionCoord>
                <TitleProjectCoord>Projeto: {relatorio.nomeProjeto || 'Nome não disponível'}</TitleProjectCoord>
            </TitleBarSectionCoord>
            <ViewRelatorioContainerCoord>

                <TasksSectionCoord>
                    <BlockCoord>
                    <TitleCoord>Entregas Feitas</TitleCoord>
                    <ValueCoord>{relatorio.countTarefaConcluida|| 0}</ValueCoord>
                    </BlockCoord>
                    <BlockCoord>
                    <TitleCoord>Número de tarefas Atribuidas</TitleCoord>
                        <ValueCoord>{relatorio.totalTarefas || 0}</ValueCoord>
                    </BlockCoord>
                    <BlockCoord>
                    <TitleCoord>Dias Restantes</TitleCoord>
                        <ValueCoord>{relatorio.diasRestantes || 'N/A'}</ValueCoord>
                    </BlockCoord>
                    <BlockCoord>
                    <TitleCoord>Status do Projeto</TitleCoord>
                        <ValueCoord> 
                            {relatorio.statusProjeto === 1 && 'Concluído'}
                            {relatorio.statusProjeto === 2 && 'Pendente'}
                            {relatorio.statusProjeto === 3 && 'Em andamento'}
                            {relatorio.statusProjeto === 4 && 'Atrasado'}
                            {![1, 2, 3, 4].includes(relatorio.statusProjeto) && 'Indefinido'}
                            </ValueCoord>
                    </BlockCoord>
                    <BlockCoord>
                    <TitleCoord>Data de Início</TitleCoord>
                        <DateFileAluno>
                            <DateInput
                                type="date"
                                value={relatorio.dataInicio || ''}
                                readOnly
                            />
                        </DateFileAluno>
                        <TitleCoord>Data de Fim</TitleCoord>
                        <DateFileAluno>
                            <DateInput
                                type="date"
                                value={relatorio.dataFim || ''}
                                readOnly
                            />
                        </DateFileAluno>
                    </BlockCoord>
                </TasksSectionCoord>

                <ParticipantsSectionCoord>
                    <TitleCoord>Participantes</TitleCoord>
                    <ScrollContainerCoordPart>
                        {relatorio.participantes.map((participant, index) => (
                            <ParticipantCardCoord key={index}>
                                <span>{participant}</span>
                            </ParticipantCardCoord>
                        ))}
                    </ScrollContainerCoordPart>

                    <BlockCoord>
                        <TitleCoord>Desempenho da Equipe </TitleCoord>
                        <Title>Tempo Médio de conclusão de Tarefas: {relatorio.tempoMedioConclusao} dias.</Title>
                        <Title>% de Tarefas entregues no prazo: {relatorio.percentualDentroPrazo}</Title>
                    </BlockCoord>
                    
                </ParticipantsSectionCoord>
            </ViewRelatorioContainerCoord>
        </ViewRelatorioBodyCoord>
    );
}
