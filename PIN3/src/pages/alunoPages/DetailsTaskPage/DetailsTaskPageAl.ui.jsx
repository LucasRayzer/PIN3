import React, { useEffect,useState } from 'react';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import { 
    ContainerNomeNovoProjeto,
    ContainerDescricaoNovoProjeto,
    TitleName,
    SelectArquivo,
    FileListContainer,
    FileLink,
    FileItem,
    RemoveButton,
    DateInput,
    ArquivoInput, 
    ResponsibleContainer,
    ResponsibleName,
    DetailsBodyAluno,
    TitleAluno,
    MiddleBodyAluno,
    ContainerAluno,
    InputContainerAluno,
    TextAreaFieldAluno,
    UploadFieldAluno,
    UploadblockAluno,
    ReplaceFileButtonAluno,
    DateFileAluno,
    SaveContainerAluno,
    SaveImageAluno,
    SaveBlockAluno,
    DivTitleAluno,
    SaveTitleAluno,
    TextTitleFieldAluno,
} from './DetailsTaskPageAl.styles';
import SaveIcon from '../../../assets/images/SaveIcon.png';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export default function DetailsTaskAluno() {
    const navigate = useNavigate();
    const [taskDescription, setTaskDescription] = useState('');
    const [uploadedFile, setUploadedFile] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [dueDate, setDueDate] = useState('');  // Estado para a data de entrega
    const { taskId } = useParams();
    const [taskFiles, setTaskFiles] = useState([]);
    const [responsible, setResponsible] = useState("Nome do Responsável Atual");
    const [taskTitle, setTaskTitle] = useState('');

    const handleSaveTask = async () => {
        try {
            const updatedTask = {
                nomeTarefa: taskTitle ||null,
                descricao: taskDescription||null,
                dataFim: dueDate||null, 
                statusTarefa: selectedStatus||null,
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
            navigate('/homeAluno'); 
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
    }, [taskId]);

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

    return (
        <DetailsBodyAluno>
            <NavHeader />
            <DivTitleAluno>
                <TitleAluno>Detalhes da Tarefa</TitleAluno>
            </DivTitleAluno>
            <MiddleBodyAluno>
                <ContainerAluno>
                    <InputContainerAluno>
                        <ContainerNomeNovoProjeto>
                            <TitleName>Título da Tarefa</TitleName>
                            <TextTitleFieldAluno
                                type="text"
                                placeholder="Novo nome da Tarefa"
                                maxLength={250}
                                value={taskTitle}
                                readOnly
                            />
                            <span>{taskTitle.length}/50</span>
                        </ContainerNomeNovoProjeto>

                        <ContainerDescricaoNovoProjeto>
                            <TitleName>Descrição da Tarefa</TitleName>
                            <TextAreaFieldAluno
                                type="text"
                                placeholder="Descrições da tarefa..."
                                maxLength={250}
                                value={taskDescription}
                                readOnly
                            />
                            <span>{taskDescription.length}/250</span>
                        </ContainerDescricaoNovoProjeto>

                        <UploadFieldAluno>
                            <TitleName>Arquivo da Tarefa</TitleName>
                            {!uploadedFile ? (
                                <ArquivoInput type="file" onChange={handleFileUpload} />
                            ) : (
                                <UploadblockAluno>
                                    <SelectArquivo>Arquivo: {uploadedFile.name}</SelectArquivo>
                                    <ReplaceFileButtonAluno onClick={handleFileReplace}>
                                        Substituir arquivo
                                    </ReplaceFileButtonAluno>
                                </UploadblockAluno>
                            )}
                        </UploadFieldAluno>
                    </InputContainerAluno>
                    {/* Seção de edição da data de entrega */}
                    <TitleName>Data de Fim</TitleName>
                    <DateFileAluno>
                        <DateInput
                            type="date"
                            value={dueDate}
                            readOnly
                        />
                    </DateFileAluno>

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
                </ContainerAluno>

                <ContainerAluno>
                    {/* Aqui deve ser incluído os novos itensque te pedi */}
                    <TitleName>Responsável pela Tarefa</TitleName>
                    <ResponsibleContainer>
                        <ResponsibleName>{responsible}</ResponsibleName>
                    </ResponsibleContainer>

                  

                    
                    <SaveBlockAluno>
                        <SaveContainerAluno>
                            <SaveImageAluno onClick={handleSaveTask} src={SaveIcon} alt='save-a' />
                            <SaveTitleAluno>Salvar</SaveTitleAluno>
                        </SaveContainerAluno>
                    </SaveBlockAluno>
                </ContainerAluno>
            </MiddleBodyAluno>


        </DetailsBodyAluno>
    );
}
