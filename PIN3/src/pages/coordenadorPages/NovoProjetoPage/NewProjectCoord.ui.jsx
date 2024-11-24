import React, { useEffect, useState } from 'react';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    ContainerCoord,
    InputContainerCoord,
    InputFieldCoord,
    TextAreaFieldCoord,
    SelectBoxCoord,
    ParticipantListCoord,
    ParticipantItemCoord,
    NewProjectBodyCoord,
    ContainerNomeNovoProjeto,
    ContainerDescricaoNovoProjeto,
    ContainerParticipantesNovoProjeto,
    MiddleBodyCoord,
    SaveContainerCoord,
    SaveImageCoord,
    SaveTitleCoord,
    SaveBlockCoord,
    DivTitleCoord,
    TitleCoord,
    TitleName,
    ContainerDataNewProject,
    InputFieldProject,

} from './NewProjectCoord.styles';
import SaveIcon from '../../../assets/images/SaveIcon.png';
import userFoto from '../../../assets/images/user_Default_Avatar.png';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function NewProjectPage() {
    const navigate = useNavigate();
    const [projectName, setProjectName] = useState('');
    const [projetoInicioDate, setInicioDate] = useState('');
    const [projetoFimDate, setFimDate] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [selectedParticipants, setSelectedParticipants] = useState([]);
    const [participantNumber, setParticipantNumber] = useState(0);
    const [participants, setParticipants] = useState([]);
    const { idU } = useParams();
   

    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const response = await axios.get('http://localhost:8080/aluno/todosAlunos');
                
                setParticipants(response.data);
            } catch (error) {
                console.error('Erro ao carregar os alunos:', error);
            }
        };
    
        fetchParticipants();
    }, []);

    const handleParticipantSelection = (id) => {
        if (selectedParticipants.includes(id)) {
            setSelectedParticipants(selectedParticipants.filter(p => p !== id));
        } else {
            setSelectedParticipants([...selectedParticipants, id]);
        }
    };

    const handleSave = async () => {
        const newProject = {
            nomeProjeto: projectName,
            descricaoProjeto: projectDescription,
            coordenador: {
                user_id: parseInt(idU,10)
            },
            dataInicio: projetoInicioDate,
            dataFim: projetoFimDate,
            statusProjeto:3
        };
     
        
        try {
            
            const response = await axios.post('http://localhost:8080/projeto/novoProjeto', newProject);
    
            if (response.status === 201) {
                const idProjeto = response.data.id;
    
               
                await Promise.all(selectedParticipants.map(async (idAluno) => {
                    await axios.get(`http://localhost:8080/projeto/associar/${idProjeto}/${idAluno}`);
                }));
    
                navigate('/homeCoord');
            }
        } catch (error) {
            console.error("Erro ao criar projeto:", error);
        }
    };

    return (
        <NewProjectBodyCoord>
            <NavHeader />
            <DivTitleCoord>
                <TitleCoord>Adição de Novo Projeto</TitleCoord>
            </DivTitleCoord>
            <MiddleBodyCoord>
                <ContainerCoord>

                    <InputContainerCoord>
                        <ContainerNomeNovoProjeto>
                            <TitleName>Nome do Novo Projeto*</TitleName>
                            <InputFieldCoord
                                type="text"
                                placeholder="Insira o nome do projeto..."
                                maxLength={50}
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                            />
                            <span>{projectName.length}/50</span>
                        </ContainerNomeNovoProjeto>

                        <ContainerDescricaoNovoProjeto>
                            <TitleName>Descrição do Projeto</TitleName>
                            <TextAreaFieldCoord
                                type="text"
                                placeholder="Descrições do novo Projeto..."
                                maxLength={250}
                                value={projectDescription}
                                onChange={(e) => setProjectDescription(e.target.value)}

                            />
                            <span>{projectDescription.length}/250</span>
                        </ContainerDescricaoNovoProjeto>


                    </InputContainerCoord>
                    <ContainerDataNewProject>
                            <TitleName>Data de Inicio</TitleName>
                            <InputFieldProject
                                type="datetime-local"
                                value={projetoInicioDate}
                                onChange={(e) => setInicioDate(e.target.value)}
                            />
                        </ContainerDataNewProject>
                        <ContainerDataNewProject>
                            <TitleName>Data de Fim</TitleName>
                            <InputFieldProject
                                type="datetime-local"
                                value={projetoFimDate}
                                onChange={(e) => setFimDate(e.target.value)}
                            />
                        </ContainerDataNewProject>
                </ContainerCoord>
                <ContainerCoord>
                    
                    <ContainerParticipantesNovoProjeto>
                        <TitleName>Selecione os Participantes*</TitleName>
                        <ParticipantListCoord>
                            {participants.map(participant => (
                                <ParticipantItemCoord key={participant.user_id}>
                                    <img src={userFoto} alt="Participante" />
                                    <span>{participant.nome} <small>{participant.tipoUsuario === 3 ? 'Aluno' : 'Outro'}</small></span>
                                    <input
                                        type="checkbox"
                                        checked={selectedParticipants.includes(participant.user_id)}
                                        onChange={() => handleParticipantSelection(participant.user_id)}
                                    />
                                </ParticipantItemCoord>
                            ))}
                        </ParticipantListCoord>
                    </ContainerParticipantesNovoProjeto>
                </ContainerCoord>
            </MiddleBodyCoord>
            <SaveBlockCoord>
            <SaveContainerCoord onClick={handleSave}>
                    <SaveImageCoord src={SaveIcon} alt='save-a' />
                    <SaveTitleCoord>Salvar</SaveTitleCoord>
                </SaveContainerCoord>
            </SaveBlockCoord>
        </NewProjectBodyCoord>
    );
}
