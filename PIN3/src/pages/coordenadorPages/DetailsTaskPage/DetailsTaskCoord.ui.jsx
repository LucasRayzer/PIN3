import React, { useEffect, useState } from 'react';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    ContainerCoord,
    InputContainerCoord,
    TextAreaFieldCoord,
    ContainerNomeNovoProjeto,
    ContainerDescricaoNovoProjeto,
    MiddleBodyCoord,
    SaveContainerCoord,
    SaveImageCoord,
    SaveTitleCoord,
    SaveBlockCoord,
    DivTitleCoord,
    TitleCoord,
    TitleName,
    UploadFieldCoord,
    ReplaceFileButtonCoord,
    DetailsBodyCoord,
    UploadblockCoord,
    SelectArquivo,
    FileListContainer,
    FileLink,
    FileItem,
    RemoveButton,
    DateFileCoord,
    DateInput,
    ArquivoInput,
    ParticipantListCoord,
    ParticipantItemCoord,
    ChangeResponsibleButton,
    ResponsibleContainer,
    ResponsibleName,
    TextTitleFieldCoord,
} from './DetailsTaskCoord.styles';
import SaveIcon from '../../../assets/images/SaveIcon.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailsTaskCoord() {
    const navigate = useNavigate();
    const [taskDescription, setTaskDescription] = useState('');
    const [taskTitle, setTaskTitle] = useState('');
    const [uploadedFile, setUploadedFile] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [dueDate, setDueDate] = useState(''); 
    const [participants, setParticipants] = useState([]);
    const { taskId } = useParams();
    const [taskFiles, setTaskFiles] = useState([]);
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
      };
      const query = useQuery();
    const projectId = query.get("projectId");

    console.log({projectId});
    
    const fetchParticipants = async (projectId) => {
        try {
            const response = await axios.get(`http://localhost:8080/projeto/participantesTask?projectId=${projectId}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar participantes", error);
            return [];
        }
    };
    const [responsible, setResponsible] = useState("Nome do Responsável Atual");
    const handleSaveTask = async () => {
        try {
            const updatedTask = {
                nomeTarefa: taskTitle ||null,
                descricao: taskDescription||null,
                dataFim: dueDate||null, 
                statusTarefa: selectedStatus||null,
                aluno: {
                    user_id: selectedParticipantId,
                }||null,
                documentos: taskFiles.map(file => ({ id: file.id, nomeArquivo: file.name }))||null,
          };
          if (uploadedFile) {
            const formData = new FormData();
            formData.append("arquivo", uploadedFile);
            await axios.post(`http://localhost:8080/documento/upload/${taskId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        }
            await axios.put(`http://localhost:8080/tarefa/${taskId}/update`, updatedTask);
          
            alert('Tarefa atualizada com sucesso!');
            navigate('/homeCoord'); 
        } catch (error) {
            console.error('Erro ao atualizar a tarefa:', error);
        }
    };
    useEffect(() => {
        const fetchTaskDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/tarefa/detalhesTarefa/${taskId}`);
                const taskData = response.data;
                setTaskTitle(taskData.nomeTarefa);
                setTaskDescription(taskData.descricao);
                setDueDate(taskData.dataFim);
                setSelectedStatus(taskData.statusTarefa);
                setResponsible(taskData.aluno ? taskData.aluno.nome : "Sem responsável");
                setSelectedParticipantId(taskData.aluno ? taskData.aluno.user_id : null);
            } catch (error) {
                console.error('Erro ao carregar os detalhes da tarefa:', error);
            }
        };
        const fetchTaskFiles = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/documento/tarefa/${taskId}`);
                const files = response.data.map(file => ({
                    id: file.documento_id,
                    name: file.nomeArquivo
                }));
                setTaskFiles(files);
            } catch (error) {
                console.error('Erro ao carregar os arquivos da tarefa:', error);
            }
        };
       
        fetchTaskDetails();
        fetchTaskFiles();
        const loadTasksAndParticipants = async () => {
          
            const participantsData = await fetchParticipants(projectId);
            setParticipants(participantsData);
           
        };
        loadTasksAndParticipants();
    }, [taskId,projectId]);
   
    const [selectedParticipantId, setSelectedParticipantId] = useState();

    const handleDownloadFile = async (fileId, fileName) => {
        try {
            const response = await axios.get(`http://localhost:8080/documento/download/${fileId}`, {
                responseType: 'blob', 
            });

            
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName); 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); 

        } catch (error) {
            console.error('Erro ao baixar o arquivo:', error);
        }
    };
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setUploadedFile(file);
        } else {
            alert('Somente arquivos .pdf são permitidos.');
            e.target.value = null; 
        }
    };

    const handleFileReplace = () => {
        setUploadedFile(null);
    };

    const handleDeleteFile = async (fileId) => {
        try {
            await axios.delete(`http://localhost:8080/documento/deletarDoc/${fileId}`);
            setTaskFiles(taskFiles.filter(file => file.id !== fileId));
            alert('Arquivo removido com sucesso!');
        } catch (error) {
            console.error('Erro ao remover o arquivo:', error);
            alert('Ocorreu um erro ao remover o arquivo.');
        }
    };
    
    const handleResponsibleChange = () => {
        if (selectedParticipantId !== null) {
            const newResponsible = participants.find(participant => participant.user_id === selectedParticipantId)?.nome;
            setResponsible(newResponsible);
        }
    };

    return (
        <DetailsBodyCoord>
            <NavHeader />
            <DivTitleCoord>
                <TitleCoord>Detalhes da Tarefa</TitleCoord>
            </DivTitleCoord>
            <MiddleBodyCoord>
                <ContainerCoord>
                    <InputContainerCoord>
                        <ContainerNomeNovoProjeto>
                            <TitleName>Nome da Tarefa</TitleName>
                            <TextTitleFieldCoord
                                type="text"
                                placeholder="Novo nome da Tarefa"
                                maxLength={250}
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                            />
                            <span>{taskTitle.length}/50</span>
                        </ContainerNomeNovoProjeto>

                        <ContainerDescricaoNovoProjeto>
                            <TitleName>Descrição da Tarefa</TitleName>
                            <TextAreaFieldCoord
                                type="text"
                                placeholder="Editar descrição da tarefa..."
                                maxLength={250}
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                            />
                            <span>{taskDescription.length}/250</span>
                        </ContainerDescricaoNovoProjeto>

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
                    </InputContainerCoord>
                    {/* Seção de edição da data de entrega */}
                    <TitleName>Data de Fim</TitleName>
                    <DateFileCoord>
                        <DateInput
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </DateFileCoord>

                    {/* Seleção de status */}
                    <TitleName>Status da Tarefa</TitleName>
                    <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                        <option value="1">Concluído</option>
                        <option value="2">Pendente</option>
                        <option value="3">Em Andamento</option>
                        <option value="4">Atrasado</option>
                    </select>

                    <TitleName>Arquivos Existentes</TitleName>
                    <FileListContainer>
                        {taskFiles.map((file) => (
                            <FileItem key={file.id}>
                            <span
                                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                onClick={() => handleDownloadFile(file.id, file.name)}
                            >
                                {file.name}
                            </span>
                            <RemoveButton onClick={() => handleDeleteFile(file.id)}>
                                Remover
                            </RemoveButton>
                        </FileItem>
                        ))}
                    </FileListContainer>
                </ContainerCoord>

                <ContainerCoord>
                    {/* Aqui deve ser incluído os novos itensque te pedi */}
                    <TitleName>Responsável pela Tarefa</TitleName>
                    <ResponsibleContainer>
                        <ResponsibleName>{responsible}</ResponsibleName>
                    </ResponsibleContainer>

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

                    <ChangeResponsibleButton onClick={handleResponsibleChange}>
                        Alterar Responsável
                    </ChangeResponsibleButton>
                    <SaveBlockCoord>
                    <SaveContainerCoord onClick={handleSaveTask}>
                        <SaveImageCoord src={SaveIcon} alt="save" />
                        <SaveTitleCoord>Salvar</SaveTitleCoord>
                    </SaveContainerCoord>
                    </SaveBlockCoord>
                </ContainerCoord>
            </MiddleBodyCoord>


        </DetailsBodyCoord>
    );
}
