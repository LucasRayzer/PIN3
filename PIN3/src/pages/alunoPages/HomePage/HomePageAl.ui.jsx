import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
  HomeBodyAluno, HomeContainerAluno, StatusSectionAluno, StatusItemAluno,
  ProjectsSectionAluno, ScrollContainerAluno, ProjectCardAluno,
  StatusSectionConfigAluno, ProjectImageAluno, ProjectNameAluno,
  ProjectContainerAluno, TitleAluno
} from './HomePageAl.styles';
import ProjectIcon from '../../../assets/images/ProjectIcon.png';
import NewReportIcon from '../../../assets/images/NewReport.png';
import axios from 'axios';


const fetchProjetoData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/aluno/projeto/3`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API', error);
    return [];
  }
};

export default function HomePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projetoData, setProjetoData] = useState([]);

  useEffect(() => {
    const loadProjetoData = async () => {
    
      const data = await fetchProjetoData(id);
      setProjetoData(data);
    };
    loadProjetoData();
    console.log(projetoData.projetoId);
  }, [id]);
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
              {projetoData.map((projeto, index) => (
                <ProjectCardAluno
                  key={index}
                  status={projeto.statusProjeto}  
                  onClick={() => navigate(`/detalhesProjetoAluno/${projeto.projetoId}`)
                }
                >
                 
                  <ProjectImageAluno src={ProjectIcon} alt='Project-Icon' />
                  <ProjectNameAluno>{projeto.nomeProjeto}</ProjectNameAluno>
                </ProjectCardAluno>
              ))}
            </ScrollContainerAluno>
    
          </ProjectsSectionAluno>
        </ProjectContainerAluno>
      </HomeContainerAluno>
    </HomeBodyAluno>
  );
}
