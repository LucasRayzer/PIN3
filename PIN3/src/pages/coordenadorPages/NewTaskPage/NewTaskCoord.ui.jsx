import React, { useEffect, useState } from 'react';
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
    UploadFieldCoord,
    UploadblockCoord,
    SelectArquivo,
    ReplaceFileButtonCoord,
    ArquivoInput,
} from './NewTaskCoord.styles';
import SaveIcon from '../../../assets/images/SaveIcon.png';
import userFoto from '../../../assets/images/user_Default_Avatar.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NewTaskPage() {
    const navigate = useNavigate();
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskInicioDate, setTaskInicioDate] = useState('');
    const [taskFimDate, setTaskFimDate] = useState('');
    const [participants, setParticipants] = useState([]);
    const [selectedParticipantId, setSelectedParticipantId] = useState(null);
   
    const [uploadedFile, setUploadedFile] = useState(null);
    const [taskFiles, setTaskFiles] = useState([
        { id: 1, name: "Arquivo1.pdf", url: "/files/Arquivo1.pdf" },
        { id: 2, name: "Arquivo1.pdf", url: "/files/Arquivo1.pdf" },
        { id: 3, name: "Arquivo2.docx", url: "/files/Arquivo2.docx" },
    ]);

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

    const handleSave = async () => {
        const newTask = {
            nomeTarefa: taskName,
            descricao: taskDescription,
            dataInicio:taskInicioDate,
            dataFim: taskFimDate,
            statusTarefa: 3,  // Define o status padrão da tarefa
            projeto: {
                projetoId: 3  // ID do projeto fixo como no exemplo do Postman
            },
            aluno: {
                user_id: selectedParticipantId  // ID do aluno responsável selecionado
            }
        };

        try {
            await axios.post('http://localhost:8080/tarefa/novaTarefa', newTask);
            navigate('/homeCoord');
        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
        }
    };
    const handleFileUpload = (e) => {
        setUploadedFile(e.target.files[0]);
    };
   
    const handleRemoveFile = (fileId) => {
        setTaskFiles(taskFiles.filter(file => file.id !== fileId));
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
                            <TitleName>Data de Inicio</TitleName>
                            <InputFieldTask
                                type="datetime-local"
                                value={taskInicioDate}
                                onChange={(e) => setTaskInicioDate(e.target.value)}
                            />
                        </ContainerDataNewTask>
                        <ContainerDataNewTask>
                            <TitleName>Data de Fim</TitleName>
                            <InputFieldTask
                                type="datetime-local"
                                value={taskFimDate}
                                onChange={(e) => setTaskFimDate(e.target.value)}
                            />
                        </ContainerDataNewTask>
                        <UploadFieldCoord>
                            <TitleName>Arquivo da Tarefa</TitleName>
                            {!uploadedFile ? (
                                <ArquivoInput type="file" onChange={handleFileUpload} />
                            ) : (
                                <UploadblockCoord>
                                    <SelectArquivo>Arquivo: {uploadedFile.name}</SelectArquivo>
                                    <ReplaceFileButtonCoord onClick={handleFileReplace}>
                                        Substituir arquivo
                                    </ReplaceFileButtonCoord>
                                </UploadblockCoord>
                            )}
                        </UploadFieldCoord>
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
                

                        <ParticipantListTask>
                            {participants.map((participant) => (
                                <ParticipantItemTask key={participant.user_id}>
                                    <img src={userFoto} alt="Participante" />
                                    <span>{participant.nome} 
                                    <small>{participant.tipoUsuario}</small></span>
                                    <input
                                        type="radio"
                                        checked={selectedParticipantId === participant.user_id}
                                        onChange={() => setSelectedParticipantId(participant.user_id)}
                                    />
                                </ParticipantItemTask>
                            ))}
                        </ParticipantListTask>

                    
                    </ContainerParticipantesNewTask>
                    <SaveBlockTaskCoord>
                        <SaveContainerTaskCoord>
                            <SaveImageTaskCoord onClick={handleSave} src={SaveIcon} alt='Salvar Tarefa' />
                            <SaveTitleTaskCoord>Salvar</SaveTitleTaskCoord>
                        </SaveContainerTaskCoord>
                    </SaveBlockTaskCoord>
                </ContainerTask>
            </MiddleBodyTask>
        </NewTaskBody>
    );
}