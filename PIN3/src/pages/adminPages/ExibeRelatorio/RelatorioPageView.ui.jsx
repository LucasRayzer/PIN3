import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    ViewRelatorioBodyAdmin, ViewRelatorioContainerAdmin, ProgressBarAdmin, TasksSectionAdmin, ParticipantsSectionAdmin,
     ParticipantCardAdmin,  TitleAdmin,
    ScrollContainerAdminPart,
    TitleBarSectionAdmin,
    TitleProjectAdmin,
    BlockAdmin,
    ValueAdmin
   
} from './RelatorioPageView.styles';


export default function ViewRelatorioProjectAdmin() {
    const navigate = useNavigate();

    const tasks = [
        { name: "Tarefa 1", status: "concluido" },
        { name: "Tarefa 1", status: "parada" },
        { name: "Tarefa 1", status: "concluido" },
       
    ];

    const participants = [
        { name: "Participante 01", role: "Coordenador" },
        { name: "Participante 01", role: "Coordenador" },
        { name: "Participante 01", role: "Coordenador" },
        { name: "Participante 01", role: "Coordenador" },
        { name: "Participante 01", role: "Coordenador" },
        { name: "Participante 01", role: "Coordenador" },
        { name: "Participante 01", role: "Coordenador" },
        { name: "Participante 01", role: "Coordenador" },
        
    ];

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === "concluido").length;
    const completedPercentage = (completedTasks / totalTasks) * 100;
    return (
        <ViewRelatorioBodyAdmin>
            <NavHeader />
            <TitleBarSectionAdmin>
                <TitleProjectAdmin>Projeto:Nome do projeto aberto Extenso </TitleProjectAdmin>
            </TitleBarSectionAdmin>
            <ViewRelatorioContainerAdmin>

                <TasksSectionAdmin>
                    <BlockAdmin>
                    <TitleAdmin>Tarefas Concluídas</TitleAdmin>
                    <ProgressBarAdmin>
                    <div className="completed" style={{ width: `${completedPercentage}%` }} />
                    <span>{`${Math.round(completedPercentage)}%`}</span>
                    </ProgressBarAdmin>
                    </BlockAdmin>
                    <BlockAdmin>
                    <TitleAdmin>Número de tarefas Atribuidas</TitleAdmin>
                        <ValueAdmin>valor aqui</ValueAdmin>
                    </BlockAdmin>
                    <BlockAdmin>
                    <TitleAdmin>Número de atividades retornadas</TitleAdmin>
                        <ValueAdmin>valor aqui</ValueAdmin>
                    </BlockAdmin>
                    <BlockAdmin>
                    <TitleAdmin>Situação do Projeto</TitleAdmin>
                        <ValueAdmin>valor aqui</ValueAdmin>
                    </BlockAdmin>
                </TasksSectionAdmin>

                <ParticipantsSectionAdmin>
                    <TitleAdmin>Participantes</TitleAdmin>
                    <ScrollContainerAdminPart>
                        {participants.map((participant, index) => (
                            <ParticipantCardAdmin key={index}>
                                <span>{participant.name}</span>
                                <span>{participant.role}</span>
                            </ParticipantCardAdmin>
                        ))}
                    </ScrollContainerAdminPart>

                
                    <TitleAdmin>Desempenho da Equipe </TitleAdmin>
                    <ProgressBarAdmin>
                    <div className="completed" style={{ width: `${completedPercentage}%` }} />
                    <span>{`${Math.round(completedPercentage)}%`}</span>
                    </ProgressBarAdmin>
                    
                </ParticipantsSectionAdmin>
            </ViewRelatorioContainerAdmin>
        </ViewRelatorioBodyAdmin>
    );
}
