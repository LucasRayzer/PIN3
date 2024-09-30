import React, { useState } from 'react';
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

} from './NewProjectCoord.styles';
import SaveIcon from '../../../assets/images/SaveIcon.png'; 
import userFoto from '../../../assets/images/user_Default_Avatar.png';
import { useNavigate } from 'react-router-dom';

export default function NewProjectPage() {
    const navigate = useNavigate();
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [selectedParticipants, setSelectedParticipants] = useState([]);
    const [participantNumber, setParticipantNumber] = useState(0);
    
    const participants = [
        { id: 1, name: "Participante 01", role: "Aluno" },
        { id: 2, name: "Participante 02", role: "Aluno" },
        { id: 3, name: "Participante 03", role: "Aluno" },
        { id: 4, name: "Participante 04", role: "Aluno" }
    ];

    const handleParticipantSelection = (id) => {
        if (selectedParticipants.includes(id)) {
            setSelectedParticipants(selectedParticipants.filter(p => p !== id));
        } else {
            setSelectedParticipants([...selectedParticipants, id]);
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
                </ContainerCoord>
                <ContainerCoord>
                    <ContainerParticipantesNovoProjeto>
                        <TitleName>Número de Participantes*</TitleName>
                        <SelectBoxCoord
                            value={participantNumber}
                            onChange={(e) => setParticipantNumber(e.target.value)}
                        >
                            <option value={0}>Caixa de Seleção de número</option>
                            {[1, 2, 3, 4].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </SelectBoxCoord>
                    </ContainerParticipantesNovoProjeto>
                            <ContainerParticipantesNovoProjeto>
                    <TitleName>Selecione os Participantes*</TitleName>
                    <ParticipantListCoord>

                        {participants.map(participant => (
                            <ParticipantItemCoord key={participant.id}>
                                <img src={userFoto} alt="Participante" />
                                <span>{participant.name} <small>{participant.role}</small></span>
                                <input
                                    type="checkbox"
                                    checked={selectedParticipants.includes(participant.id)}
                                    onChange={() => handleParticipantSelection(participant.id)}
                                />
                            </ParticipantItemCoord>
                        ))}
                    </ParticipantListCoord>
                    </ContainerParticipantesNovoProjeto>
                </ContainerCoord>
            </MiddleBodyCoord>
            <SaveBlockCoord>
                    <SaveContainerCoord>
                                <SaveImageCoord onClick={() => navigate('/homeCoord')}
                                        src={SaveIcon} alt='save-a' />
                                        <SaveTitleCoord>Salvar</SaveTitleCoord>
                        </SaveContainerCoord>
                    </SaveBlockCoord>
        </NewProjectBodyCoord>
    );
}
