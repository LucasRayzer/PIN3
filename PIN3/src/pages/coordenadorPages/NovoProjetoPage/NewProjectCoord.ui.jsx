import React, { useState } from 'react';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    ContainerCoord,
    SectionTitleCoord,
    InputContainerCoord,
    InputFieldCoord,
    TextAreaFieldCoord,
    SelectBoxCoord,
    ParticipantListCoord,
    ParticipantItemCoord,
    SaveButtonCoord,
    NewProjectBodyCoord
} from './NewProjectCoord.styles';

export default function NewProjectPage() {
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
        <ContainerCoord>

            <SectionTitleCoord>Adição de Novo Projeto</SectionTitleCoord>

            <InputContainerCoord>
                <div>
                    <label>Nome do Novo Projeto*</label>
                    <InputFieldCoord 
                        type="text" 
                        placeholder="Insira o nome do projeto..." 
                        maxLength={25}
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)} 
                    />
                    <span>{projectName.length}/25</span>
                </div>

                <div>
                    <label>Descrição do projeto</label>
                    <TextAreaFieldCoord 
                        placeholder="Descrições do novo Projeto..."
                        maxLength={100}
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                    />
                    <span>{projectDescription.length}/100</span>
                </div>

                <div>
                    <label>Número de Participantes *</label>
                    <SelectBoxCoord 
                        value={participantNumber}
                        onChange={(e) => setParticipantNumber(e.target.value)}
                    >
                        <option value={0}>Caixa de Seleção de número</option>
                        {[1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </SelectBoxCoord>
                </div>
            </InputContainerCoord>

            <ParticipantListCoord>
                <label>Selecione os Participantes *</label>
                {participants.map(participant => (
                    <ParticipantItemCoord key={participant.id}>
                        <input
                            type="checkbox"
                            checked={selectedParticipants.includes(participant.id)}
                            onChange={() => handleParticipantSelection(participant.id)}
                        />
                        <span>{participant.name} ({participant.role})</span>
                    </ParticipantItemCoord>
                ))}
            </ParticipantListCoord>

            <SaveButtonCoord onClick={() => alert('Projeto salvo!')}>
                Salvar
            </SaveButtonCoord>
        </ContainerCoord>
        </NewProjectBodyCoord>
    );
}
