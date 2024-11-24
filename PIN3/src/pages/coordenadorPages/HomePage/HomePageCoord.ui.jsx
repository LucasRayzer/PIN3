import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    HomeBodyCoord, HomeContainerCoord, StatusSectionCoord, StatusItemCoord, ProjectsSectionCoord, ReportsSectionCoord,
    ScrollContainerCoord, ProjectCardCoord, ReportCardCoord,
    StatusSectionConfigCoord,
    ProjectImageCoord,
    ProjectNameCoord,
    ProjectContainerCoord,
    TitleCoord,
    ReportContainerCoord,
    ReportNameCoord,
    ReportImageCoord,
    NewProjectImageCoord,
    NewProjectContainerCoord,
    NewProjectTitleCoord
} from './HomePageCoord.styles';
import ProjectIcon from '../../../assets/images/ProjectIcon.png';
import ReportIcon from '../../../assets/images/RelatorioIcon.png';
import NewReportIcon from '../../../assets/images/NewReport.png';
import axios from 'axios';
import AuthContext from '../../../AuthContext';

export default function HomePage() {
    const navigate = useNavigate();
    const [projetoData, setProjetoData] = useState([]);
    const [reportData, setReportData] = useState([]);
    const { authData } = useContext(AuthContext);

    const fetchProjetoData = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/coordenador/projeto/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar dados dos projetos:', error);
            return [];
        }
    };

    const fetchReportData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/relatorioCoord/todosRel');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar dados dos relatórios:', error);
            return [];
        }
    };

    const updateProjetoStatus = async (projetoId) => {
        try {
            await axios.get(`http://localhost:8080/projeto/update/${projetoId}`);
           
        } catch (error) {
            console.error(`Erro ao atualizar o status do projeto ${projetoId}:`, error);
        }
    };

    useEffect(() => {
        const loadProjetoData = async () => {
            
            const data = await fetchProjetoData(authData.idU);
            setProjetoData(data);

           
            data.forEach((projeto) => {
                updateProjetoStatus(projeto.projetoId);
            });
        };

        const loadReportData = async () => {
            
            const data = await fetchReportData();
            setReportData(data);
        };

        loadProjetoData();
        loadReportData();
    }, [authData.idU]);

    return (
        <HomeBodyCoord>
            <NavHeader />

            <HomeContainerCoord>
                <StatusSectionConfigCoord>
                    <StatusSectionCoord>
                        <StatusItemCoord><span>🟢 Projeto concluído</span></StatusItemCoord>
                        <StatusItemCoord><span>🟡 Projeto em andamento</span></StatusItemCoord>                
                        <StatusItemCoord><span>🟠 Projeto em análise</span></StatusItemCoord>
                        <StatusItemCoord><span>🔴 Projeto atrasado</span></StatusItemCoord>
                    </StatusSectionCoord>
                </StatusSectionConfigCoord>

                <ProjectContainerCoord>
                    <TitleCoord>Meus Projetos</TitleCoord>

                    <ProjectsSectionCoord>
                        <ScrollContainerCoord>
                            {projetoData.map((project, index) => (
                                <ProjectCardCoord
                                    key={index}
                                    status={project.statusProjeto}
                                    onClick={() => navigate(`/detalhesProjeto/${project.projetoId}`)}
                                >
                                    <ProjectImageCoord src={ProjectIcon} alt="Project-Icon" />
                                    <ProjectNameCoord>{project.nomeProjeto}</ProjectNameCoord>
                                </ProjectCardCoord>
                            ))}
                        </ScrollContainerCoord>
                        <NewProjectContainerCoord>
                            <NewProjectImageCoord
                                onClick={() => navigate(`/novoProjeto/${authData.idU}`)}
                                src={NewReportIcon}
                                alt="New-Project"
                            />
                            <NewProjectTitleCoord>Novo Projeto</NewProjectTitleCoord>
                        </NewProjectContainerCoord>
                    </ProjectsSectionCoord>
                </ProjectContainerCoord>

                <ReportContainerCoord>
                    <TitleCoord>Meus Relatórios</TitleCoord>

                    <ReportsSectionCoord>
                        <ScrollContainerCoord>
                            {reportData.map((report, index) => (
                                <ReportCardCoord key={index}
                                onClick={() => navigate(`/coordViewRelatorio/${report.relatorioId}`)}>
                                    <ReportImageCoord src={ReportIcon} alt="Report-Icon" />
                                    <ReportNameCoord>{report.nomeProjeto}</ReportNameCoord>
                                </ReportCardCoord>
                            ))}
                        </ScrollContainerCoord>
                    </ReportsSectionCoord>
                </ReportContainerCoord>
            </HomeContainerCoord>
        </HomeBodyCoord>
    );
}
