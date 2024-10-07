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
    SaveContainerTaskCoord,
    SaveImageTaskCoord,
    SaveTitleTaskCoord,
    SaveBlockTaskCoord,
    DivTitleTask,
    TitleTask,
    TitleName,
    ContainerDataNewTask,
    ContainerArquivoNewTask,
    FileItem,
    FileLink,
    RemoveButton,
    FileListContainer,
    ResponsibleName,
    ResponsibleContainer,
    ChangeResponsibleButton,
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
    const [participants, setParticipants] = useState([
        { id: 1, name: "Aluno 1", role: "Estudante" },
        { id: 2, name: "Aluno 2", role: "Estudante" },
        { id: 3, name: "Aluno 3", role: "Estudante" },
        { id: 4, name: "Aluno 2", role: "Estudante" },
        { id: 5, name: "Aluno 3", role: "Estudante" },
    ]);
    const [selectedParticipantId, setSelectedParticipantId] = useState(null);


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

   // Função para alterar o responsável
   const handleResponsibleChange = () => {
    if (selectedParticipantId !== null) {
        const newResponsible = participants.find(participant => participant.id === selectedParticipantId)?.name;
        setResponsible(newResponsible);
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
                    <TitleName>Responsável pela Tarefa</TitleName>
                    <ResponsibleContainer>
                        <ResponsibleName>{responsible}</ResponsibleName>
                    </ResponsibleContainer>

                    <ParticipantListTask>
                        {participants.map((participant) => (
                            <ParticipantItemTask key={participant.id}>
                                <img src={userFoto} alt="Participante" />
                                <span>{participant.name} <small>{participant.role}</small></span>
                                <input
                                    type="radio"
                                    checked={selectedParticipantId === participant.id}
                                    onChange={() => setSelectedParticipantId(participant.id)}
                                />
                            </ParticipantItemTask>
                        ))}
                    </ParticipantListTask>

                    <ChangeResponsibleButton onClick={handleResponsibleChange}>
                        Alterar Responsável
                    </ChangeResponsibleButton>
                    </ContainerParticipantesNewTask>
                    <SaveBlockTaskCoord>
                        <SaveContainerTaskCoord>
                            <SaveImageTaskCoord onClick={() => navigate('/homeCoord')} src={SaveIcon} alt='save-a' />
                            <SaveTitleTaskCoord>Salvar</SaveTitleTaskCoord>
                        </SaveContainerTaskCoord>
                    </SaveBlockTaskCoord>
                </ContainerTask>
            </MiddleBodyTask>
        
        </NewTaskBody>
    );
}