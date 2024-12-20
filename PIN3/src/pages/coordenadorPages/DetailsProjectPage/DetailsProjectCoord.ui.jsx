import React, { useContext, useEffect, useState } from 'react';
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
    TitleProjectCoord,
    AltProjectButtonCoord
} from './DetailsProjectCoord.styles';
import DetailsIcon from '../../../assets/images/TarefaIcon.png';
import axios from 'axios';
import AuthContext from '../../../AuthContext';

const fetchTasks = async (projetoId) => {
    try {
        const response = await axios.get(`http://localhost:8080/tarefa/allTarefasProjeto/${projetoId}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar tarefas", error);
        return [];
    }
};

const fetchParticipants = async (projetoId) => {
    try {
        const response = await axios.get(`http://localhost:8080/projeto/participantes/${projetoId}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar participantes", error);
        return [];
    }
};

const fetchProjetoData = async (projetoId) => {
    try {
        const response = await axios.get(`http://localhost:8080/projeto/${projetoId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados da API', error);
        return [];
    }
};

export default function DetailsProjectCoord() {
    const navigate = useNavigate();
    const { projetoId } = useParams();
    const [tasks, setTasks] = useState([]);
    const [participants, setParticipants] = useState([]);
    const [projeto, setProjeto] = useState([]);
    const { authData, setAuthData } = useContext(AuthContext);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleEndProject = async (projeto) => {
        if (isProcessing) return; 
        setIsProcessing(true);

        try {
            if (completedPercentage !== 100 ) {
                alert("O projeto ainda não está concluído!");
                setIsProcessing(false); 
                return;
            }
            const response = await axios.get(`http://localhost:8080/relatorioCoord/relatorios/${projeto.projetoId}`);
            alert(response.data);
           
        } catch (error) {
            console.error("Erro ao encerrar o projeto ou gerar relatório", error);
            alert(error.response?.data || "Erro ao gerar o relatório!");
        } finally {
            setIsProcessing(false);
        }
    };

    useEffect(() => {
        const loadTasksAndParticipants = async () => {
            const tasksData = await fetchTasks(projetoId);
            setTasks(tasksData);
            const participantsData = await fetchParticipants(projetoId);
            setParticipants(participantsData);
            const projetoData = await fetchProjetoData(projetoId);
            setProjeto(projetoData);
        };
        loadTasksAndParticipants();
    }, [projetoId]);

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.statusTarefa === 1).length;
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
                        <EndProjectButtonCoord onClick={() => handleEndProject(projeto)}>
                            Encerrar Projeto
                        </EndProjectButtonCoord>
                    </BlockContentHeadCoord>

                    <ScrollContainerCoordTarefa>
                        {tasks.map((task) => (
                            <TaskCardCoord   
                            key={task.tarefa_id}
                            status={task.statusTarefa}
                            onClick={() => navigate(`/detalhesTarefa/${task.tarefa_id}?projectId=${projetoId}`)}
                            >
                                <DetailsImageCoord src={DetailsIcon} alt='Detail-Icon' />
                                <DetailsNameCoord>{task.nomeTarefa}</DetailsNameCoord>
                            </TaskCardCoord>
                        ))}
                    </ScrollContainerCoordTarefa>
                </TasksSectionCoord>

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

                    <NewTaskContainerCoord>
                        <AltProjectButtonCoord onClick={() => navigate(`/alterarParticipantes/${projetoId}`)}>
                            Alterar Participantes
                        </AltProjectButtonCoord>
                        <NewTaskButtonCoord onClick={() => navigate(`/novaTarefa/${projeto.projetoId}?projectId=${projetoId}`)}>
                            + Atribuir Nova Tarefa
                        </NewTaskButtonCoord>
                    </NewTaskContainerCoord>
                </ParticipantsSectionCoord>
            </DetailsContainerCoord>
        </DetailsBodyCoord>
    );
}
