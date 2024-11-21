import React, { useContext, useEffect, useState } from 'react';
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
import AuthContext from '../../../AuthContext';

const fetchTasks = async (alunoId,projetoId) => {
    try {
        const response = await axios.get(`http://localhost:8080/tarefa/tarefas/${alunoId}/${projetoId}`);
        return response.data.map(item => {
            const [id, nomeArray, ...statusT] = item.split(' ');
            return {
                tarefa_id: id,
                nomeTarefa: nomeArray,
                statusTarefa: Number(statusT.join(' '))
                
            };
        });
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

export default function DetailsProjectAluno() {
    const navigate = useNavigate();
    const {projetoId } = useParams();
    const [tasks, setTasks] = useState([]);
    const [participants, setParticipants] = useState([]);
    const [projeto, setProjeto] = useState([]);
    const {authData, setAuthData } = useContext(AuthContext);
   
    useEffect(() => {
        const loadTasksAndParticipants = async () => {
            const tasksData = await fetchTasks(authData.idU,projetoId);
            setTasks(tasksData);
            
            const participantsData = await fetchParticipants(projetoId);
            setParticipants(participantsData);
            const projetoData = await fetchProjetoData(projetoId);
            setProjeto(projetoData);
        };
        loadTasksAndParticipants();
    }, [authData.idU,projetoId]);

    const totalTasks = tasks.length;
    console.log({tasks});
    
    const completedTasks = tasks.filter(task => task.statusTarefa === 1).length;
    console.log(tasks.statusTarefa);
    
    const completedPercentage = (completedTasks / totalTasks) * 100;
    return (
        <DetailsBodyAluno>
            <NavHeader />
            <TitleBarSectionAluno>
                <TitleProjectAluno>{projeto.nomeProjeto}</TitleProjectAluno>
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
                                    status={task.statusTarefa}
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
