import React, { useState } from 'react';
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
} from './DetailsTaskCoord.styles';
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
    const [participants, setParticipants] = useState([
        { id: 1, name: "Aluno 1", role: "Estudante" },
        { id: 2, name: "Aluno 2", role: "Estudante" },
        { id: 3, name: "Aluno 3", role: "Estudante" },
        { id: 4, name: "Aluno 2", role: "Estudante" },
        { id: 5, name: "Aluno 3", role: "Estudante" },
    ]);
    const [selectedParticipantId, setSelectedParticipantId] = useState(null);


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
    // Função para alterar o responsável
    const handleResponsibleChange = () => {
        if (selectedParticipantId !== null) {
            const newResponsible = participants.find(participant => participant.id === selectedParticipantId)?.name;
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
                            <TitleName>Nome da Tarefa Selecionada</TitleName>
                        </ContainerNomeNovoProjeto>

                        <ContainerDescricaoNovoProjeto>
                            <TitleName>Descrição da Tarefa</TitleName>
                            <TextAreaFieldCoord
                                type="text"
                                placeholder="Descrições da tarefa..."
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
                    <TitleName>Data de Entrega</TitleName>
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
                </ContainerCoord>

                <ContainerCoord>
                    {/* Aqui deve ser incluído os novos itensque te pedi */}
                    <TitleName>Responsável pela Tarefa</TitleName>
                    <ResponsibleContainer>
                        <ResponsibleName>{responsible}</ResponsibleName>
                    </ResponsibleContainer>

                    <ParticipantListCoord>
                        {participants.map((participant) => (
                            <ParticipantItemCoord key={participant.id}>
                                <span>{participant.name} <small>{participant.role}</small></span>
                                <input
                                    type="radio"
                                    checked={selectedParticipantId === participant.id}
                                    onChange={() => setSelectedParticipantId(participant.id)}
                                />
                            </ParticipantItemCoord>
                        ))}
                    </ParticipantListCoord>

                    <ChangeResponsibleButton onClick={handleResponsibleChange}>
                        Alterar Responsável
                    </ChangeResponsibleButton>
                    <SaveBlockCoord>
                        <SaveContainerCoord>
                            <SaveImageCoord onClick={() => navigate('/homeCoord')} src={SaveIcon} alt='save-a' />
                            <SaveTitleCoord>Salvar</SaveTitleCoord>
                        </SaveContainerCoord>
                    </SaveBlockCoord>
                </ContainerCoord>
            </MiddleBodyCoord>


        </DetailsBodyCoord>
    );
}
