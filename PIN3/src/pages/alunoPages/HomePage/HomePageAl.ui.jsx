import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
  HomeBodyAluno, HomeContainerAluno, StatusSectionAluno, StatusItemAluno,
  ProjectsSectionAluno, ScrollContainerAluno, ProjectCardAluno,
  StatusSectionConfigAluno, ProjectImageAluno, ProjectNameAluno,
  ProjectContainerAluno, TitleAluno
} from './HomePageAl.styles';
import ProjectIcon from '../../../assets/images/ProjectIcon.png';
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

  return (
    <HomeBodyAluno>
      <NavHeader />

      <HomeContainerAluno>
        <StatusSectionConfigAluno>
          <StatusSectionAluno>
            <StatusItemAluno>
              <span>🔴 Projeto atrasado</span>
            </StatusItemAluno>
            <StatusItemAluno>
              <span>🟡 Projeto em andamento</span>
            </StatusItemAluno>
            <StatusItemAluno>
              <span>🟢 Projeto concluído</span>
            </StatusItemAluno>
            <StatusItemAluno>
              <span>🟠 Projeto em análise</span>
            </StatusItemAluno>
          </StatusSectionAluno>
        </StatusSectionConfigAluno>

        <ProjectContainerAluno>
          <TitleAluno>Meus Projetos</TitleAluno>

          <ProjectsSectionAluno>
            <ScrollContainerAluno>
              {projects.map((project, index) => (
                <ProjectCardAluno
                  key={index}
                  status={project.status}
                  onClick={() => navigate(`/detalhesProjeto/${project.name}`)}
                >
                  <ProjectImageAluno src={ProjectIcon} alt='Project-Icon' />
                  <ProjectNameAluno>{project.name}</ProjectNameAluno>
                </ProjectCardAluno>
              ))}
            </ScrollContainerAluno>
    
          </ProjectsSectionAluno>
        </ProjectContainerAluno>
      </HomeContainerAluno>
    </HomeBodyAluno>
  );
}
