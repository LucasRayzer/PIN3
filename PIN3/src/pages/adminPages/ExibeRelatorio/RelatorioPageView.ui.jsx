import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    ViewRelatorioBodyAdmin, ViewRelatorioContainerAdmin, ProgressBarAdmin, TasksSectionAdmin, ParticipantsSectionAdmin,
     ParticipantCardAdmin,  TitleAdmin,
    ScrollContainerAdminPart,
    TitleBarSectionAdmin,
    TitleProjectAdmin,
    BlockAdmin,
    ValueAdmin,
    Title,
    DateFileAluno,
    DateInput
} from './RelatorioPageView.styles';

export default function ViewRelatorioProjectAdmin() {
    const { id } = useParams(); // Captura o ID do relatório da URL
    const [relatorio, setRelatorio] = useState(null); // Inicializa o estado como null
    const [error, setError] = useState(null); // Estado para tratar erros
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento
    console.log(id);
    
    useEffect(() => {
        const fetchRelatorio = async () => {
            try {
                const response = await fetch(`http://localhost:8080/relatorioAdm/relPorId/${id}`);
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
        <ViewRelatorioBodyAdmin>
            <NavHeader />
            <TitleBarSectionAdmin>
                <TitleProjectAdmin>Projeto: {relatorio.nomeProjeto || 'Nome não disponível'}</TitleProjectAdmin>
            </TitleBarSectionAdmin>
            <ViewRelatorioContainerAdmin>
                <TasksSectionAdmin>
                    <BlockAdmin>
                        <TitleAdmin>Entregas Feitas</TitleAdmin>
                        <ValueAdmin>{relatorio.countTarefaConcluida || 0}</ValueAdmin>
                    </BlockAdmin>
                    <BlockAdmin>
                        <TitleAdmin>Número de tarefas Atribuídas</TitleAdmin>
                        <ValueAdmin>{relatorio.totalTarefas || 0}</ValueAdmin>
                    </BlockAdmin>
                    <BlockAdmin>
                        <TitleAdmin>Dias Restantes</TitleAdmin>
                        <ValueAdmin>{relatorio.diasRestantes || 'N/A'}</ValueAdmin>
                    </BlockAdmin>
                    <BlockAdmin>
                        <TitleAdmin>Status do Projeto</TitleAdmin>
                        <ValueAdmin>
                            {relatorio.statusProjeto === 1 && 'Concluído'}
                            {relatorio.statusProjeto === 2 && 'Pendente'}
                            {relatorio.statusProjeto === 3 && 'Em andamento'}
                            {relatorio.statusProjeto === 4 && 'Atrasado'}
                            {![1, 2, 3, 4].includes(relatorio.statusProjeto) && 'Indefinido'}
                        </ValueAdmin>
                    </BlockAdmin>
                    <BlockAdmin>
                        <TitleAdmin>Data de Início</TitleAdmin>
                        <DateFileAluno>
                            <DateInput
                                type="date"
                                value={relatorio.dataInicio || ''}
                                readOnly
                            />
                        </DateFileAluno>
                        <TitleAdmin>Data de Fim</TitleAdmin>
                        <DateFileAluno>
                            <DateInput
                                type="date"
                                value={relatorio.dataFim || ''}
                                readOnly
                            />
                        </DateFileAluno>
                    </BlockAdmin>
                </TasksSectionAdmin>

                <ParticipantsSectionAdmin>
                    <TitleAdmin>Participantes</TitleAdmin>
                    <ScrollContainerAdminPart>
                        {(relatorio.participantes || []).map((participant, index) => (
                            <ParticipantCardAdmin key={index}>
                                <span>{participant}</span>
                            </ParticipantCardAdmin>
                        ))}
                    </ScrollContainerAdminPart>
                    <BlockAdmin>
                        <TitleAdmin>Desempenho da Equipe</TitleAdmin>
                        <Title>Tempo Médio de conclusão de Tarefas: {relatorio.tempoMedioConclusao} dias.</Title>
                        <Title>% de Tarefas entregues no prazo: {relatorio.percentualDentroPrazo}</Title>
                    </BlockAdmin>
                    <BlockAdmin>
                        <TitleAdmin>Relatório de</TitleAdmin>
                        <DateFileAluno>
                            <DateInput type="date"  value={relatorio.criaInicio || ''}readOnly />
                        </DateFileAluno>
                        <TitleAdmin>Até</TitleAdmin>
                        <DateFileAluno>
                            <DateInput type="date"  value={relatorio.criaFim || ''} readOnly />
                        </DateFileAluno>
                    </BlockAdmin>
                </ParticipantsSectionAdmin>
            </ViewRelatorioContainerAdmin>
        </ViewRelatorioBodyAdmin>
    );
}
