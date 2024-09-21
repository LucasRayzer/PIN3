import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    HomeBody, HomeContainer, StatusSection, StatusItem, ProjectsSection, ReportsSection,
    ScrollContainer, ProjectCard, ReportCard,
    StatusSectionConfig,
    ProjectImage,
    ProjectName,
    Line,
    ProjectContainer,
    Title,
    ReportContainer,
    ReportName,
    ReportImage,
    NewReportImage,
    NewReportContainer,
    NewReportTitle
} from './HomePage.styles';
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
    ];

    return (
        <HomeBody>
            <NavHeader/>

            <HomeContainer>
                <StatusSectionConfig>
                    <StatusSection>
                        <StatusItem color="red">
                            <span>🔴 Projeto atrasado</span>
                        </StatusItem>
                        <StatusItem color="yellow">
                            <span>🟡 Projeto em andamento</span>
                        </StatusItem>
                        <StatusItem color="green">
                            <span>🟢 Projeto concluído</span>
                        </StatusItem>
                        <StatusItem color="orange">
                            <span>🟠 Projeto em análise</span>
                        </StatusItem>
                    </StatusSection>
                </StatusSectionConfig>
                
                {/* Projects Section */}
                <ProjectContainer>
                    <Title>Meus Projetos</Title>
                    <Line></Line>
                <ProjectsSection> 
                    <ScrollContainer>      
                        {projects.map((project, index) => (
                            <ProjectCard key={index} status={project.status}>
                                   <ProjectImage src={ProjectIcon} alt='Project-Icon'/>
                                   <ProjectName>{project.name}</ProjectName>
                            </ProjectCard> 
                        ))}
                    </ScrollContainer>
                </ProjectsSection>
                </ProjectContainer>

                <ReportContainer>
                    <Title>Meus Relatórios</Title>
                    <Line></Line>
                <ReportsSection>
                    
                    <ScrollContainer>
                        {reports.map((report, index) => (
                            <ReportCard key={index}>
                                <ReportImage src={ReportIcon} alt='Project-Icon'/>
                                 <ReportName>{report.name}</ReportName>
                                
                            </ReportCard>
                        ))}
                    </ScrollContainer>
                    <NewReportContainer>
                                <NewReportImage onClick={() => navigate('/newReport')}
                                        src={NewReportIcon} alt='New-Report' />
                                        <NewReportTitle>Novo Relatório</NewReportTitle>
                        </NewReportContainer>
                </ReportsSection>
                </ReportContainer>
                
            </HomeContainer>
            
        </HomeBody>
    );
}
