import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    DetailsBodyCoord, DetailsContainerCoord, ProgressBarCoord, TasksSectionCoord, ParticipantsSectionCoord,
    TaskCardCoord, ParticipantCardCoord, EndProjectButtonCoord, TitleCoord,
    NewTaskContainerCoord, NewTaskButtonCoord,
    ScrollContainerCoordPart,
    ScrollContainerCoordTarefa,
    DetailsNameCoord,
    DetailsImageCoord,
    BlockContentHeadCoord,
    TitleBarSectionCoord,
    TitleProjectCoord
} from './DetailsProjectCoord.styles';
import DetailsIcon from '../../../assets/images/TarefaIcon.png'; 

export default function DetailsProjectCoord() {
    const navigate = useNavigate();

    const tasks = [
        { name: "Tarefa 1", status: "concluido" },
        { name: "Tarefa 2", status: "atrasado" },
        { name: "Tarefa 3", status: "atrasado" },
        { name: "Tarefa 4", status: "concluido" },
        { name: "Tarefa 5", status: "em andamento" },
        { name: "Tarefa 1", status: "concluido" },
        { name: "Tarefa 2", status: "pendente" },
        { name: "Tarefa 3", status: "atrasado" },
        { name: "Tarefa 4", status: "concluido" },
        { name: "Tarefa 5", status: "em andamento" },
        { name: "Tarefa 1", status: "concluido" },
        { name: "Tarefa 2", status: "pendente" },
        { name: "Tarefa 3", status: "atrasado" },
        { name: "Tarefa 4", status: "concluido" },
        { name: "Tarefa 5", status: "em andamento" },
        { name: "Tarefa 1", status: "concluido" },
        { name: "Tarefa 2", status: "pendente" },
        { name: "Tarefa 3", status: "atrasado" },
        { name: "Tarefa 4", status: "concluido" },
        { name: "Tarefa 5", status: "em andamento" },
    ];

    const participants = [
        { name: "Participante 01", role: "Coordenador" },
        { name: "Participante 02", role: "Aluno" },
        { name: "Participante 03", role: "Aluno" },
        { name: "Participante 04", role: "Aluno" },
    ];

    
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === "concluido").length;
    const inProgressTasks = tasks.filter(task => task.status === "em andamento").length;
    const pendingTasks = tasks.filter(task => task.status === "pendente").length;
    const stoppedTasks = tasks.filter(task => task.status === "atrasado").length;

    const completedPercentage = (completedTasks / totalTasks) * 100;
    const inProgressPercentage = (inProgressTasks / totalTasks) * 100;
    const pendingPercentage = (pendingTasks / totalTasks) * 100;
    const stoppedPercentage = (stoppedTasks / totalTasks) * 100;

    return (
        <DetailsBodyCoord>
            <NavHeader />
            <TitleBarSectionCoord>
            <TitleProjectCoord>Projeto:Nome do projeto aberto Extenso sadasdsasas</TitleProjectCoord>
            <ProgressBarCoord>
                    <div className="completed" style={{ width: `${completedPercentage}%` }} />
                    <div className="in-progress" style={{ width: `${inProgressPercentage}%` }} />
                    <div className="pending" style={{ width: `${pendingPercentage}%` }} />
                    <div className="stopped" style={{ width: `${stoppedPercentage}%` }} />
                </ProgressBarCoord>
            </TitleBarSectionCoord>
            <DetailsContainerCoord>
    
                <TasksSectionCoord>
                <BlockContentHeadCoord>
                <TitleCoord>Cronograma</TitleCoord>
                    <EndProjectButtonCoord onClick={() => navigate('/encerrarProjeto')}>
                    Encerrar Projeto
                </EndProjectButtonCoord>
                </BlockContentHeadCoord>
                
                    <ScrollContainerCoordTarefa>
                        {tasks.map((task, index) => (
                            <TaskCardCoord key={index} status={task.status}>
                                <DetailsImageCoord src={DetailsIcon} alt='Detail-Icon' />
                                <DetailsNameCoord>{task.name}</DetailsNameCoord>
                            </TaskCardCoord>
                        ))}
                    </ScrollContainerCoordTarefa>
                </TasksSectionCoord>

                {/* Container dos Participantes */}
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

                    {/* Botão para adicionar nova tarefa */}
                    <NewTaskContainerCoord>
                        <NewTaskButtonCoord onClick={() => navigate('/novaTarefa')}>
                            + Atribuir Nova Tarefa
                        </NewTaskButtonCoord>
                    </NewTaskContainerCoord>
                </ParticipantsSectionCoord>
            </DetailsContainerCoord>
        </DetailsBodyCoord>
    );
}
