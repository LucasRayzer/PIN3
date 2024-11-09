import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import axios from 'axios';

const fetchTasks = async (alunoId) => {
    try {
        const response = await axios.get(`http://localhost:8080/tarefa/tarefas/3`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar tarefas", error);
        return [];
    }
};

const fetchParticipants = async (projetoId) => {
    try {
        const response = await axios.get(`http://localhost:8080/projeto/participantes/1`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar participantes", error);
        return [];
    }
};

export default function DetailsProjectAluno() {
    const navigate = useNavigate();
    const { alunoId, projetoId } = useParams();
    const [tasks, setTasks] = useState([]);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const loadTasksAndParticipants = async () => {
            const tasksData = await fetchTasks(alunoId);
            setTasks(tasksData);

            const participantsData = await fetchParticipants(projetoId);
            setParticipants(participantsData);
        };
        loadTasksAndParticipants();
    }, [alunoId, projetoId]);

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.statusTarefa === 1).length;
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
                        {tasks.map((task) => (
                           <TaskCardAluno
                           key={task.tarefa_id}
                           status={task.statusTarefa === 1 ? "concluido" : "pendente"}
                           onClick={() => navigate(`/detalhesTarefaAluno/${task.tarefa_id}`)}
                       >
                           <DetailsImageAluno src={DetailsIcon} alt="Detail Icon" />
                           <DetailsNameAluno>{task.nomeTarefa}</DetailsNameAluno>
                       </TaskCardAluno>
                        ))}
                    </ScrollContainerAlunoTarefa>
                </TasksSectionAluno>

                <ParticipantsSectionAluno>
                    <TitleAluno>Participantes</TitleAluno>
                    <ScrollContainerAlunoPart>
                        {participants.map((participant) => (
                            <ParticipantCardAluno key={participant.user_id}>
                            <span>{participant.nome}</span>
                            <span>{participant.tipoUsuario === 3 ? "Aluno" : "Coordenador"}</span>
                        </ParticipantCardAluno>
                        ))}
                    </ScrollContainerAlunoPart>
                    
                </ParticipantsSectionAluno>
            </DetailsContainerAluno>
        </DetailsBodyAluno>
    );
}
