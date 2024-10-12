import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    DetailsBodyAluno, DetailsContainerAluno, ProgressBarAluno, TasksSectionAluno, ParticipantsSectionAluno,
    TaskCardAluno, ParticipantCardAluno, TitleAluno,
    ScrollContainerAlunoPart,
    ScrollContainerAlunoTarefa,
    DetailsNameAluno,
    DetailsImageAluno,
    BlockContentHeadAluno,
    TitleBarSectionAluno,
    TitleProjectAluno
} from './DetailsProjectPageAl.styles';
import DetailsIcon from '../../../assets/images/TarefaIcon.png';

export default function DetailsProjectAluno() {
    const navigate = useNavigate();

    const tasks = [
        { name: "Tarefa 1", status: "concluido" },
        { name: "Tarefa 2", status: "concluido" },
        { name: "Tarefa 3", status: "atrasado" },
        { name: "Tarefa 4", status: "concluido" },
        { name: "Tarefa 5", status: "concluido" },
        { name: "Tarefa 1", status: "concluido" },
        { name: "Tarefa 2", status: "pendente" },
        { name: "Tarefa 3", status: "concluido" },
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
    const completedPercentage = (completedTasks / totalTasks) * 100;

    return (
        <DetailsBodyAluno>
            <NavHeader />
            <TitleBarSectionAluno>
                <TitleProjectAluno>Projeto: Nome do projeto aberto Extenso sadasdsasas</TitleProjectAluno>
                <ProgressBarAluno>
                    <div className="completed" style={{ width: `${completedPercentage}%` }} />
                    <span>{`${Math.round(completedPercentage)}%`}</span>
                </ProgressBarAluno>
            </TitleBarSectionAluno>
            <DetailsContainerAluno>
                <TasksSectionAluno>
                    <BlockContentHeadAluno>
                        <TitleAluno>Cronograma</TitleAluno>
                        
                    </BlockContentHeadAluno>
                    <ScrollContainerAlunoTarefa>
                        {tasks.map((task, index) => (
                            <TaskCardAluno key={index} status={task.status}
                                onClick={() => navigate(`/detalhesTarefaAluno/${task.name}`)}
                            >
                                <DetailsImageAluno src={DetailsIcon} alt='Detail-Icon' />
                                <DetailsNameAluno>{task.name}</DetailsNameAluno>
                            </TaskCardAluno>
                        ))}
                    </ScrollContainerAlunoTarefa>
                </TasksSectionAluno>

                <ParticipantsSectionAluno>
                    <TitleAluno>Participantes</TitleAluno>
                    <ScrollContainerAlunoPart>
                        {participants.map((participant, index) => (
                            <ParticipantCardAluno key={index}>
                                <span>{participant.name}</span>
                                <span>{participant.role}</span>
                            </ParticipantCardAluno>
                        ))}
                    </ScrollContainerAlunoPart>
                    
                </ParticipantsSectionAluno>
            </DetailsContainerAluno>
        </DetailsBodyAluno>
    );
}
