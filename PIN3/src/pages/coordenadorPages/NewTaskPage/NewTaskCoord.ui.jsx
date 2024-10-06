import React, { useState } from 'react';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    ContainerTask,
    InputContainerTask,
    InputFieldTask,
    TextAreaFieldTask,
    SelectBoxTask,
    ParticipantListTask,
    ParticipantItemTask,
    NewTaskBody,
    ContainerNomeNewTask,
    ContainerDescricaoNewTask,
    ContainerParticipantesNewTask,
    MiddleBodyTask,
    SaveContainerTask,
    SaveImageTask,
    SaveTitleTask,
    SaveBlockTask,
    DivTitleTask,
    TitleTask,
    TitleName,
    ContainerDataNewTask,
    ContainerArquivoNewTask,
    FileItem,
    FileLink,
    RemoveButton,
    FileListContainer,
} from './NewTaskCoord.styles';
import SaveIcon from '../../../assets/images/SaveIcon.png';
import userFoto from '../../../assets/images/user_Default_Avatar.png';
import { useNavigate } from 'react-router-dom';

export default function NewTaskPage() {
    const navigate = useNavigate();
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [selectedParticipants, setSelectedParticipants] = useState([]);
    const [participantNumber, setParticipantNumber] = useState(0);
    const [responsible, setResponsible] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const participants = [
        { id: 1, name: "Participante 01", role: "Aluno" },
        { id: 2, name: "Participante 02", role: "Aluno" },
        { id: 3, name: "Participante 03", role: "Aluno" },
        { id: 4, name: "Participante 04", role: "Aluno" }
    ];

    const [taskFiles, setTaskFiles] = useState([
        { id: 1, name: "Arquivo1.pdf", url: "/files/Arquivo1.pdf" },
        { id: 2, name: "Arquivo1.pdf", url: "/files/Arquivo1.pdf" },
        { id: 3, name: "Arquivo2.docx", url: "/files/Arquivo2.docx" },
        { id: 4, name: "Arquivo1.pdf", url: "/files/Arquivo1.pdf" },
        { id: 5, name: "Arquivo2.docx", url: "/files/Arquivo2.docx" },
        { id: 6, name: "Arquivo1.pdf", url: "/files/Arquivo1.pdf" },
        { id: 7, name: "Arquivo2.docx", url: "/files/Arquivo2.docx" }
    ]);

    // Função para remover arquivos da lista
    const handleRemoveFile = (fileId) => {
        setTaskFiles(taskFiles.filter(file => file.id !== fileId));
    };

    const handleParticipantSelection = (id) => {
        if (selectedParticipants.includes(id)) {
            setSelectedParticipants(selectedParticipants.filter(p => p !== id));
        } else {
            setSelectedParticipants([...selectedParticipants, id]);
        }
    };

    return (
        <NewTaskBody>
            <NavHeader />
            <DivTitleTask>
                <TitleTask>Adição de Nova Tarefa</TitleTask>
            </DivTitleTask>
            <MiddleBodyTask>
                <ContainerTask>
                    <InputContainerTask>
                        <ContainerNomeNewTask>
                            <TitleName>Nome da Tarefa*</TitleName>
                            <InputFieldTask
                                type="text"
                                placeholder="Insira o nome da tarefa..."
                                maxLength={50}
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                            />
                            <span>{taskName.length}/50</span>
                        </ContainerNomeNewTask>

                        <ContainerDescricaoNewTask>
                            <TitleName>Descrição da Tarefa</TitleName>
                            <TextAreaFieldTask
                                type="text"
                                placeholder="Descrições da nova tarefa..."
                                maxLength={250}
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                            />
                            <span>{taskDescription.length}/250</span>
                        </ContainerDescricaoNewTask>
                        <ContainerDataNewTask>
                            <TitleName>Data de Entrega</TitleName>
                            <InputFieldTask
                                type="date"
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                            />
                        </ContainerDataNewTask>
                        <ContainerArquivoNewTask>
                        <TitleName>Arquivos Existentes</TitleName>
                    <FileListContainer>
                        {taskFiles.map((file) => (
                            <FileItem key={file.id}>
                                <FileLink href={file.url} download>
                                    {file.name}
                                </FileLink>
                                <RemoveButton onClick={() => handleRemoveFile(file.id)}>
                                    Remover
                                </RemoveButton>
                            </FileItem>
                        ))}
                    </FileListContainer>
                        </ContainerArquivoNewTask>

                    
                    </InputContainerTask>
                </ContainerTask>

                <ContainerTask>
                  

                    <ContainerParticipantesNewTask>
                        <TitleName>Selecione os Participantes*</TitleName>
                        <ParticipantListTask>
                            {participants.map(participant => (
                                <ParticipantItemTask key={participant.id}>
                                    <img src={userFoto} alt="Participante" />
                                    <span>{participant.name} <small>{participant.role}</small></span>
                                    <input
                                        type="checkbox"
                                        checked={selectedParticipants.includes(participant.id)}
                                        onChange={() => handleParticipantSelection(participant.id)}
                                    />
                                </ParticipantItemTask>
                            ))}
                        </ParticipantListTask>
                    </ContainerParticipantesNewTask>

                    <ContainerParticipantesNewTask>
                        <TitleName>Atribuir Responsável*</TitleName>
                        <SelectBoxTask
                            value={responsible}
                            onChange={(e) => setResponsible(e.target.value)}
                        >
                            <option value="">Selecione o responsável</option>
                            {participants.map(participant => (
                                <option key={participant.id} value={participant.id}>
                                    {participant.name}
                                </option>
                            ))}
                        </SelectBoxTask>
                    </ContainerParticipantesNewTask>
                </ContainerTask>
            </MiddleBodyTask>
            <SaveBlockTask>
                <SaveContainerTask>
                    <SaveImageTask onClick={() => navigate('/homeCoord')} src={SaveIcon} alt='save-a' />
                    <SaveTitleTask>Salvar</SaveTitleTask>
                </SaveContainerTask>
            </SaveBlockTask>
        </NewTaskBody>
    );
}
