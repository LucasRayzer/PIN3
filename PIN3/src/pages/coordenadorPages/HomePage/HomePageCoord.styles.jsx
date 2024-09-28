import styled from 'styled-components';

export const HomeBodyCoord = styled.div.attrs({
  className: "home-body-coord",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: #f0f2f5;
`;
export const StatusSectionConfigCoord = styled.div.attrs({
  className: "status-section-config",
})`
  display: flex;
  justify-content: end;
`;

export const StatusSectionCoord = styled.div.attrs({
  className: "status-section",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;  
  top: 50px;
  right: 20px;
  background-color: #132979;
  padding: 10px;
  border-radius: 10px;
  width: 200px;
`;

export const StatusItemCoord = styled.div.attrs({
  className: "status-item",
})`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
`;

export const HomeContainerCoord = styled.div.attrs({
  className: "home-container",
})`
  padding:20px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProjectsSectionCoord = styled.div.attrs({
  className: "projects-section",
})`
  display: flex;
  flex-direction: row;
  position:relative;
 padding-top:10px;
 gap: 10px;
`;

export const ReportsSectionCoord = styled.div.attrs({
  className: "reports-section",
})`
 display: flex;
 flex-direction: column;
 
`;

export const ScrollContainerCoord = styled.div.attrs({
  className: "scroll-container",
})`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
  width: 100%;
  white-space: nowrap;
  border-top: 2px solid #132979;
  padding-top:10px;
  &::-webkit-scrollbar {
    height: 10px;
    background-color:#132979;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    height: 10px; 
    border: 2px solid #132979; 
    border-radius: 10px;
  }
`;

export const ProjectCardCoord = styled.div.attrs({
  className: 'project-card',
})`
  background-color: #132979;
  color: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  position: relative;
  width: 180px;
  height: 190px;
  min-width: 180px;
  min-height: 190px;
  flex-shrink: 0;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
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
          status === 'em andamento' ? 'yellow' :
          'orange'};
      width: 12px;
      height: 12px;
      border-radius: 50%;
  }
`;
export const ReportCardCoord = styled.div.attrs({
  className: "report-card",
})`
  background-color: #132979;
  color: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  position: relative;
  width: 180px;
  height: 190px;
  min-width: 180px; 
  min-height: 190px; 
  flex-shrink: 0; 
  display: flex;
  gap:5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction:column;
  font-size: 14px;
  cursor: pointer;
  
`;

export const ProjectImageCoord = styled.img.attrs({
  className: "project-image",
})`
  display: flex;
  height:80px;
  padding-top:60px;
`;
export const ProjectNameCoord = styled.h2.attrs({
  className: "project-name",
})`
  display: flex;
  padding-top:20px;
  
`;
export const ReportImageCoord = styled.img.attrs({
  className: "relatorio-image",
})`
  display: flex;
  height:80px;
  padding-top:60px;
`;
export const ReportNameCoord = styled.h2.attrs({
  className: "relatorio-name",
})`
  display: flex;
  padding-top:20px;
  
`;

export const ProjectContainerCoord = styled.div.attrs({
  className: "project-container",
})`
 display:flex;
 flex-direction:column;
 gap:10px;
`;
export const ReportContainerCoord = styled.div.attrs({
  className: "relatorio-container",
})`
 display:flex;
 flex-direction:column;
 
`;
export const TitleCoord = styled.h1.attrs({
  className: "title",
})`
  color: #132979;
  font-size: 26px;
  font-weight: bold;
  margin:0;
`;
export const NewProjectImageCoord = styled.img.attrs({
  className: "new-report-image",
})`
  display: flex;
  height:80px;
  width:80px;
  cursor: pointer;
`;
export const NewProjectContainerCoord = styled.div.attrs({
  className: "novo-relatorio-container",
})`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 width:100px;
 position:relative;
 
`;
export const NewProjectTitleCoord = styled.h3.attrs({
  className: "novo-relatorio-title",
})`
  display: flex;
  font-size: 18px;
  text-align:center;
`;
