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
    SelectArquivo
} from './DetailsTaskCoord.styles';
import SaveIcon from '../../../assets/images/SaveIcon.png';
import { useNavigate } from 'react-router-dom';

export default function DetailsTaskCoord() {
    const navigate = useNavigate();
    const [taskDescription, setTaskDescription] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('concluido');

    const task = [
        { name: "Tarefa 1", status: "concluido", dueDate: "2024-10-10" },
        { name: "Tarefa 2", status: "pendente", dueDate: "2024-10-11" },
        { name: "Tarefa 3", status: "atrasado", dueDate: "2024-10-12" },
        { name: "Tarefa 4", status: "em andamento", dueDate: "2024-10-15" },
    ];
    const handleFileUpload = (e) => {
        setUploadedFile(e.target.files[0]);
    };

    const handleFileReplace = () => {
        setUploadedFile(null);
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
                            <TitleName>Nome da Tarefa Selecionada*</TitleName>

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
                                <input type="file" onChange={handleFileUpload} />
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
                </ContainerCoord>
                <ContainerCoord>
                    <TitleCoord>Data de Entrega</TitleCoord>
                    {/* Adicione aqui o código */}
                    {/* Exibe a data de entrega da tarefa */}
                    <p>{task[0].dueDate}</p> {/* Exemplo exibindo a data de entrega da primeira tarefa */}

                    {/* Exibe a seleção de status */}
                    <TitleName>Status da Tarefa</TitleName>
                    <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                        <option value="concluido">Concluído</option>
                        <option value="pendente">Pendente</option>
                        <option value="em andamento">Em Andamento</option>
                        <option value="atrasado">Atrasado</option>
                    </select>
                </ContainerCoord>

            </MiddleBodyCoord>
            <SaveBlockCoord>
                <SaveContainerCoord>
                    <SaveImageCoord onClick={() => navigate('/homeCoord')}
                        src={SaveIcon} alt='save-a' />
                    <SaveTitleCoord>Salvar</SaveTitleCoord>
                </SaveContainerCoord>
            </SaveBlockCoord>
        </DetailsBodyCoord>
    );
}
