import React from 'react';
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

export default function HomePage() {
    const navigate = useNavigate();

    const projects = [
        { name: "Projeto 1", status: "concluido" },
        { name: "Projeto 2", status: "atrasado" },
        { name: "Projeto 3", status: "em andamento" },
        { name: "Projeto 4", status: "em análise" },
        { name: "Projeto 1", status: "concluido" },
        { name: "Projeto 2", status: "atrasado" },
        { name: "Projeto 3", status: "em andamento" },
        { name: "Projeto 4", status: "em análise" },
    ];

    const reports = [
        { name: "Relatório 1" },
        { name: "Relatório 2" },
        
    ];

    return (
        <HomeBodyCoord>
            <NavHeader />

            <HomeContainerCoord>
                <StatusSectionConfigCoord>
                    <StatusSectionCoord>
                        <StatusItemCoord>
                            <span>🔴 Projeto atrasado</span>
                        </StatusItemCoord>
                        <StatusItemCoord>
                            <span>🟡 Projeto em andamento</span>
                        </StatusItemCoord>
                        <StatusItemCoord>
                            <span>🟢 Projeto concluído</span>
                        </StatusItemCoord>
                        <StatusItemCoord>
                            <span>🟠 Projeto em análise</span>
                        </StatusItemCoord>
                    </StatusSectionCoord>
                </StatusSectionConfigCoord>

                <ProjectContainerCoord>
                    <TitleCoord>Meus Projetos</TitleCoord>

                    <ProjectsSectionCoord>
                        <ScrollContainerCoord>
                            {projects.map((project, index) => (
                                <ProjectCardCoord key={index} status={project.status}>
                                    <ProjectImageCoord src={ProjectIcon} alt='Project-Icon' />
                                    <ProjectNameCoord>{project.name}</ProjectNameCoord>
                                </ProjectCardCoord>
                            ))}
                        </ScrollContainerCoord>
                        <NewProjectContainerCoord>
                            <NewProjectImageCoord
                                onClick={() => navigate('/novoProjeto')}
                                src={NewReportIcon}
                                alt='New-Project'
                            />
                            <NewProjectTitleCoord>Novo Projeto</NewProjectTitleCoord>
                        </NewProjectContainerCoord>
                    </ProjectsSectionCoord>
                </ProjectContainerCoord>

                <ReportContainerCoord>
                    <TitleCoord>Meus Relatórios</TitleCoord>

                    <ReportsSectionCoord>
                        <ScrollContainerCoord>
                            {reports.map((report, index) => (
                                <ReportCardCoord key={index}>
                                    <ReportImageCoord src={ReportIcon} alt='Report-Icon' />
                                    <ReportNameCoord>{report.name}</ReportNameCoord>
                                </ReportCardCoord>
                            ))}
                        </ScrollContainerCoord>
                    </ReportsSectionCoord>
                </ReportContainerCoord>
            </HomeContainerCoord>
        </HomeBodyCoord>
    );
}
