import React, { useState } from 'react';
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
} from './DetailsTaskPageAl.styles';
import SaveIcon from '../../../assets/images/SaveIcon.png';
import { useNavigate } from 'react-router-dom';

export default function DetailsTaskCoord() {
    const navigate = useNavigate();
    const [taskDescription, setTaskDescription] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('concluido');
    const [dueDate, setDueDate] = useState('2024-10-10');  // Estado para a data de entrega

    const [taskFiles, setTaskFiles] = useState([
        { id: 1, name: "Arquivo1.pdf", url: "/files/Arquivo1.pdf" },
        { id: 2, name: "Arquivo1.pdf", url: "/files/Arquivo1.pdf" },
        { id: 3, name: "Arquivo2.docx", url: "/files/Arquivo2.docx" },
        { id: 4, name: "Arquivo1.pdf", url: "/files/Arquivo1.pdf" },
        { id: 5, name: "Arquivo2.docx", url: "/files/Arquivo2.docx" },
        { id: 6, name: "Arquivo1.pdf", url: "/files/Arquivo1.pdf" },
        { id: 7, name: "Arquivo2.docx", url: "/files/Arquivo2.docx" }
    ]);
    const [responsible, setResponsible] = useState("Nome do Responsável Atual");
    


    const handleFileUpload = (e) => {
        setUploadedFile(e.target.files[0]);
    };

    const handleFileReplace = () => {
        setUploadedFile(null);
    };

    // Função para remover arquivos da lista
    const handleRemoveFile = (fileId) => {
        setTaskFiles(taskFiles.filter(file => file.id !== fileId));
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
                            <TitleName>Nome da Tarefa Selecionada</TitleName>
                        </ContainerNomeNovoProjeto>

                        <ContainerDescricaoNovoProjeto>
                            <TitleName>Descrição da Tarefa</TitleName>
                            <TextAreaFieldAluno
                                type="text"
                                placeholder="Descrições da tarefa..."
                                maxLength={250}
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
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
                    <TitleName>Data de Entrega</TitleName>
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
                        <option value="concluido">Concluído</option>
                        <option value="pendente">Pendente</option>
                        <option value="em andamento">Em Andamento</option>
                        <option value="atrasado">Atrasado</option>
                    </select>

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
                </ContainerAluno>

                <ContainerAluno>
                    {/* Aqui deve ser incluído os novos itensque te pedi */}
                    <TitleName>Responsável pela Tarefa</TitleName>
                    <ResponsibleContainer>
                        <ResponsibleName>{responsible}</ResponsibleName>
                    </ResponsibleContainer>

                  

                    
                    <SaveBlockAluno>
                        <SaveContainerAluno>
                            <SaveImageAluno onClick={() => navigate('/homeAluno')} src={SaveIcon} alt='save-a' />
                            <SaveTitleAluno>Salvar</SaveTitleAluno>
                        </SaveContainerAluno>
                    </SaveBlockAluno>
                </ContainerAluno>
            </MiddleBodyAluno>


        </DetailsBodyAluno>
    );
}
