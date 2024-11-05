import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    ViewRelatorioBodyCoord,ViewRelatorioContainerCoord, ProgressBarCoord, TasksSectionCoord, ParticipantsSectionCoord,
     ParticipantCardCoord,  TitleCoord,
    ScrollContainerCoordPart,
    TitleBarSectionCoord,
    TitleProjectCoord,
    BlockCoord,
    ValueCoord
   
} from './RelatorioPageView.styles';


export default function ViewRelatorioProjectCoord() {
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
        <ViewRelatorioBodyCoord>
            <NavHeader />
            <TitleBarSectionCoord>
                <TitleProjectCoord>Projeto:Nome do projeto aberto Extenso </TitleProjectCoord>
            </TitleBarSectionCoord>
            <ViewRelatorioContainerCoord>

                <TasksSectionCoord>
                    <BlockCoord>
                    <TitleCoord>Tarefas Concluídas</TitleCoord>
                    <ProgressBarCoord>
                    <div className="completed" style={{ width: `${completedPercentage}%` }} />
                    <span>{`${Math.round(completedPercentage)}%`}</span>
                    </ProgressBarCoord>
                    </BlockCoord>
                    <BlockCoord>
                    <TitleCoord>Número de tarefas Atribuidas</TitleCoord>
                        <ValueCoord>valor aqui</ValueCoord>
                    </BlockCoord>
                    <BlockCoord>
                    <TitleCoord>Número de atividades retornadas</TitleCoord>
                        <ValueCoord>valor aqui</ValueCoord>
                    </BlockCoord>
                    <BlockCoord>
                    <TitleCoord>Situação do Projeto</TitleCoord>
                        <ValueCoord>valor aqui</ValueCoord>
                    </BlockCoord>
                </TasksSectionCoord>

                <ParticipantsSectionCoord>
                    <TitleCoord>Participantes</TitleCoord>
                    <ScrollContainerCoordPart>
                        {participants.map((participant, index) => (
                            <ParticipantCardCoord key={index}>
                                <span>{participant.name}</span>
                                <span>{participant.role}</span>
                            </ParticipantCardCoord>
                        ))}
                    </ScrollContainerCoordPart>

                
                    <TitleCoord>Desempenho da Equipe </TitleCoord>
                    <ProgressBarCoord>
                    <div className="completed" style={{ width: `${completedPercentage}%` }} />
                    <span>{`${Math.round(completedPercentage)}%`}</span>
                    </ProgressBarCoord>
                    
                </ParticipantsSectionCoord>
            </ViewRelatorioContainerCoord>
        </ViewRelatorioBodyCoord>
    );
}
