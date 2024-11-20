import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    HomeBodyAdm, HomeContainerAdm, StatusSectionAdm, StatusItemAdm, ProjectsSectionAdm, ReportsSectionAdm,
    ScrollContainerAdm, ProjectCardAdm, ReportCardAdm,
    StatusSectionConfigAdm,
    ProjectImageAdm,
    ProjectNameAdm,
    ProjectContainerAdm,
    TitleAdm,
    ReportContainerAdm,
    ReportNameAdm,
    ReportImageAdm,
    NewReportImageAdm,
    NewReportContainerAdm,
    NewReportTitleAdm
} from './HomePageAdm.styles';
import ProjectIcon from '../../../assets/images/ProjectIcon.png'; 
import ReportIcon from '../../../assets/images/RelatorioIcon.png'; 
import NewReportIcon from '../../../assets/images/NewReport.png'; 
import AuthContext from '../../../AuthContext';



export default function HomePage() {
    const navigate = useNavigate();
    const {authData, setAuthData } = useContext(AuthContext);

    const projects= [
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

    const reports=[
        { },
       
    ];

    return (
        <HomeBodyAdm>
            <NavHeader/>

            <HomeContainerAdm>
                <StatusSectionConfigAdm>
                <NewReportContainerAdm>
                
                </NewReportContainerAdm>

                    <StatusSectionAdm>
                        <StatusItemAdm color="red">
                            <span>🔴 Projeto atrasado</span>
                        </StatusItemAdm>
                        <StatusItemAdm color="yellow">
                            <span>🟡 Projeto em andamento</span>
                        </StatusItemAdm>
                        <StatusItemAdm color="green">
                            <span>🟢 Projeto concluído</span>
                        </StatusItemAdm>
                        <StatusItemAdm color="orange">
                            <span>🟠 Projeto em análise</span>
                        </StatusItemAdm>
                    </StatusSectionAdm>
                </StatusSectionConfigAdm>
 
 
                <ProjectContainerAdm>
                    <TitleAdm>Meus Projetos</TitleAdm>
                    
                <ProjectsSectionAdm>
                    <ScrollContainerAdm>      
                        {projects.map((project, index) => (
                            <ProjectCardAdm key={index} status={project.status}>
                                   <ProjectImageAdm src={ProjectIcon} alt='Project-Icon'/>
                                   <ProjectNameAdm>{project.name}</ProjectNameAdm>
                            </ProjectCardAdm> 
                        ))}
                    </ScrollContainerAdm>
                </ProjectsSectionAdm>
                </ProjectContainerAdm>

                <ReportContainerAdm>
                    <TitleAdm>Meus Relatórios</TitleAdm>
                    
                <ReportsSectionAdm>
                    
                   
                            <ReportCardAdm 
                            onClick={() => navigate(`/relatoriosAdmin`)}>
                                <ReportImageAdm src={ReportIcon} alt='Project-Icon'/>
                                 <ReportNameAdm></ReportNameAdm>
                        
                            </ReportCardAdm>
                     
                    
                    <NewReportContainerAdm>
                                <NewReportImageAdm onClick={() => navigate('/novoRelatorio')}
                                        src={NewReportIcon} alt='New-Report' />
                                        <NewReportTitleAdm>Novo Relatório</NewReportTitleAdm>
                                        
                        </NewReportContainerAdm>
                        <NewReportContainerAdm>
                        <NewReportImageAdm onClick={() => navigate(`/registroAdm/${authData.idU}`)}
                                        src={NewReportIcon} alt='New-Report' />
                                        <NewReportTitleAdm>Novo Usuário</NewReportTitleAdm>
                                        </NewReportContainerAdm>
                </ReportsSectionAdm>
                </ReportContainerAdm>
                
            </HomeContainerAdm>
            
        </HomeBodyAdm>
    );
}
