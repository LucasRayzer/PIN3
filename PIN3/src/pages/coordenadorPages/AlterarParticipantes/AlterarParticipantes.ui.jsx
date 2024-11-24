import React, { useEffect, useState } from 'react';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';

import SaveIcon from '../../../assets/images/SaveIcon.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AlteraBodyCoord, ButtonCoord, ContainerCoord, DeleteButton, DivTitleCoord, DivTitleCoord2, MiddleBodyCoord, ParticipantItemCoord, ParticipantListCoord, SaveBlockCoord, SaveContainerCoord, SaveImageCoord, SaveTitleCoord, TitleCoord, UpdateButton } from './AlterarParticipantes.styles';
const fetchParticipants = async (projetoId) => {
    try {
        const response = await axios.get(`http://localhost:8080/projeto/participantes/${projetoId}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar participantes", error);
        return [];
    }
};
export default function DetailsTaskCoord() {
    const navigate = useNavigate();
    const {projetoId } = useParams();
    const [participants, setParticipants] = useState([]);
    const [selectedParticipantId, setSelectedParticipantId] = useState();
    const [selectedTodosParticipantId, setSelectedTodosParticipantId] = useState();
    const [todosParticipants, setTodosParticipants] = useState([]);
    const associateParticipant = async () => {
        if (!selectedTodosParticipantId) {
            alert('Selecione um participante para associar!');
            return;
        }
        try {
            await axios.get(`http://localhost:8080/projeto/associar/${projetoId}/${selectedTodosParticipantId}`);
            alert('Participante associado com sucesso!');
            setSelectedTodosParticipantId(null); // Limpar a seleção
            const updatedParticipants = await fetchParticipants(projetoId); // Atualizar lista de participantes
            setParticipants(updatedParticipants);
        } catch (error) {
            console.error('Erro ao associar participante:', error);
            alert('Não foi possível associar o participante.');
        }
    };
    const deleteParticipant = async () => {
        if (!selectedParticipantId) {
            alert('Selecione um participante para deletar!');
            return;
        }
        try {
            await axios.delete(`http://localhost:8080/projeto/deleteProjetoAluno/${projetoId}/${selectedParticipantId}`);
            alert('Participante removido com sucesso!');
            setSelectedParticipantId(null); // Limpar a seleção
            const updatedParticipants = await fetchParticipants(projetoId); // Atualizar lista de participantes
            setParticipants(updatedParticipants);
        } catch (error) {
            console.error('Erro ao remover participante:', error);
            alert('Não foi possível remover o participante.');
        }
    };
    
    useEffect(() => {
        const loadParticipants = async () => {
        

            const participantsData = await fetchParticipants(projetoId);
            setParticipants(participantsData);
  
        };
        const fetchTodosParticipants = async () => {
            try {
                const response = await axios.get('http://localhost:8080/aluno/todosAlunos');
                
                setTodosParticipants(response.data);
            } catch (error) {
                console.error('Erro ao carregar os alunos:', error);
            }
        };
    
        fetchTodosParticipants();
        loadParticipants();
    }, [projetoId]);
    return (
        <AlteraBodyCoord>
            <NavHeader />
            <DivTitleCoord>
                <TitleCoord>Edição de Participantes</TitleCoord>
            </DivTitleCoord>
            <MiddleBodyCoord>
                <ContainerCoord>
                <DivTitleCoord2>
                <TitleCoord>Associar novo participante</TitleCoord>
                </DivTitleCoord2>
                <ParticipantListCoord>
                        {todosParticipants.map((participant) => (
                            <ParticipantItemCoord key={participant.user_id}>
                                <span>{participant.nome} <small>{participant.role}</small></span>
                                <input
                                    type="radio"
                                    checked={selectedTodosParticipantId === participant.user_id}
                                    onChange={() => setSelectedTodosParticipantId(participant.user_id)}
                                />
                            </ParticipantItemCoord>
                        ))}
                    </ParticipantListCoord>
                            <ButtonCoord>
                                <UpdateButton onClick={associateParticipant} >
                                Associar
                                </UpdateButton>
                            </ButtonCoord>
                </ContainerCoord>
                <ContainerCoord>    
                <DivTitleCoord2>
                <TitleCoord>Excluir participante</TitleCoord>
                </DivTitleCoord2>
                    <ParticipantListCoord>
                        {participants.map((participant) => (
                            <ParticipantItemCoord key={participant.user_id}>
                                <span>{participant.nome} <small>{participant.role}</small></span>
                                <input
                                    type="radio"
                                    checked={selectedParticipantId === participant.user_id}
                                    onChange={() => setSelectedParticipantId(participant.user_id)}
                                />
                            </ParticipantItemCoord>
                        ))}
                    </ParticipantListCoord>
                            <ButtonCoord>
                                <DeleteButton onClick={deleteParticipant}>
                                Deletar
                                </DeleteButton>
                            </ButtonCoord>
                </ContainerCoord>
            </MiddleBodyCoord>


        </AlteraBodyCoord>
    );
}
