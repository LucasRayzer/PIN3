import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import axios from 'axios';



const fetchTasks = async (coordId) => {
    try {
        const response = await axios.get(`http://localhost:8080/tarefa/allTarefasProjeto/3`);
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
const fetchProjetoData = async (projetoId) => {
    try {
      const response = await axios.get(`http://localhost:8080/projeto/1`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados da API', error);
      return [];
    }
  };
export default function DetailsProjectCoord() {
    const navigate = useNavigate();
    const { coordId, projetoId } = useParams();
    const [tasks, setTasks] = useState([]);
    const [participants, setParticipants] = useState([]);
    const [projeto, setProjeto] = useState([]);

    useEffect(() => {
        const loadTasksAndParticipants = async () => {
            const tasksData = await fetchTasks(coordId);
            setTasks(tasksData);
            
            const participantsData = await fetchParticipants(projetoId);
            setParticipants(participantsData);

            const projetoData = await fetchProjetoData(projetoId);
            setProjeto(projetoData);
        };
        loadTasksAndParticipants();
    }, [coordId, projetoId]);
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === "concluido").length;
    const completedPercentage = (completedTasks / totalTasks) * 100;
    return (
        <DetailsBodyCoord>
            <NavHeader />
            <TitleBarSectionCoord>
                <TitleProjectCoord>{projeto.nomeProjeto}</TitleProjectCoord>
                <ProgressBarCoord>
                    <div className="completed" style={{ width: `${completedPercentage}%` }} />
                    <span>{`${Math.round(completedPercentage)}%`}</span>
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
                        {tasks.map((task) => (
                            <TaskCardCoord   
                            key={task.tarefa_id}
                            status={task.statusTarefa === 1 ? "concluido" : "pendente"}
                            onClick={() => navigate(`/detalhesTarefa/${task.tarefa_id}`)}
                            >
                                <DetailsImageCoord src={DetailsIcon} alt='Detail-Icon' />
                                <DetailsNameCoord>{task.nomeTarefa}</DetailsNameCoord>
                            </TaskCardCoord>
                        ))}
                    </ScrollContainerCoordTarefa>
                </TasksSectionCoord>

                {/* Container dos Participantes */}
                <ParticipantsSectionCoord>
                    <TitleCoord>Participantes</TitleCoord>
                    <ScrollContainerCoordPart>
                        {participants.map((participant) => (
                            <ParticipantCardCoord key={participant.user_id}>
                            <span>{participant.nome}</span>
                            <span>{participant.tipoUsuario === 3 ? "Aluno" : "Coordenador"}</span>
                            </ParticipantCardCoord>
                        ))}
                    </ScrollContainerCoordPart>

                    {/* Botão para adicionar nova tarefa */}
                    <NewTaskContainerCoord>
                        <NewTaskButtonCoord onClick={() => navigate(`/novaTarefa/${projeto.projetoId}`)}>
                            + Atribuir Nova Tarefa
                        </NewTaskButtonCoord>
                    </NewTaskContainerCoord>
                </ParticipantsSectionCoord>
            </DetailsContainerCoord>
        </DetailsBodyCoord>
    );
}
