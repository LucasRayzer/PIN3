import styled from 'styled-components';

export const HomeBody = styled.div.attrs({
  className: "home-body",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: url('src/assets/images/backgroundHome.png') no-repeat center center;
  background-size: cover;
  background-color: #f0f2f5;
`;

export const UserName = styled.h1.attrs({
  className: "user-name",
})`
  font-size: 24px;
  color: white;
`;

export const StatusSection = styled.div.attrs({
  className: "status-section",
})`
  display: flex;
  gap: 20px;
`;

export const StatusItem = styled.div.attrs({
  className: "status-item",
})`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${(props) => props.color || 'white'};
`;

export const HomeContainer = styled.div.attrs({
  className: "home-container",
})`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ProjectsSection = styled.div.attrs({
  className: "projects-section",
})`
  flex: 2;
  h2 {
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

export const ReportsSection = styled.div.attrs({
  className: "reports-section",
})`
  flex: 1;
  h2 {
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

export const ProjectContainer = styled.div.attrs({
  className: "project-container",
})`
  display: flex;
  gap: 10px;
`;

export const ProjectCard = styled.div.attrs({
  className: "project-card",
})`
  background-color: #003366;
  color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: ${({ status }) => 
      status === 'concluido' ? 'green' : 
      status === 'atrasado' ? 'red' : 
      status === 'em andamento' ? 'yellow' : 'orange'};
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
`;

export const ReportCard = styled.div.attrs({
  className: "report-card",
})`
  background-color: #003366;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const NewReportButton = styled.button.attrs({
  className: "new-report-button",
})`
  background-color: #003366;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #001f4d;
  }
`;
