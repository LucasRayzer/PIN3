import styled from 'styled-components';

export const HomeBodyAdm = styled.div.attrs({
  className: "home-body-adm",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: #f0f2f5;
`;
export const StatusSectionConfigAdm = styled.div.attrs({
  className: "status-section-config",
})`
  display: flex;
  justify-content: end;
`;

export const StatusSectionAdm = styled.div.attrs({
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

export const StatusItemAdm = styled.div.attrs({
  className: "status-item",
})`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
`;

export const HomeContainerAdm = styled.div.attrs({
  className: "home-container",
})`
  padding:20px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProjectsSectionAdm = styled.div.attrs({
  className: "projects-section",
})`
  display: flex;
  flex-direction: column;
`;

export const ReportsSectionAdm = styled.div.attrs({
  className: "reports-section",
})`
 display: flex;
 flex-direction: row;
 position:relative;
 padding-top:10px;
 gap: 10px;
`;

export const ScrollContainerAdm = styled.div.attrs({
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

export const ProjectCardAdm = styled.div.attrs({
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

export const ReportCardAdm = styled.div.attrs({
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

export const ProjectImageAdm = styled.img.attrs({
  className: "project-image",
})`
  display: flex;
  height:80px;
  padding-top:60px;
`;
export const ProjectNameAdm = styled.h2.attrs({
  className: "project-name",
})`
  display: flex;
  padding-top:20px;
  
`;
export const ReportImageAdm = styled.img.attrs({
  className: "relatorio-image",
})`
  display: flex;
  height:80px;
  padding-top:60px;
`;
export const ReportNameAdm = styled.h2.attrs({
  className: "relatorio-name",
})`
  display: flex;
  padding-top:20px;
  
`;
// export const Line = styled.div.attrs({
//   className: "line",
// })`
//  background-color:#132979;
//  width: 100%;
//  height: 2px;
//  border-radius:1px;
// `;
export const ProjectContainerAdm = styled.div.attrs({
  className: "project-container",
})`
 display:flex;
 flex-direction:column;
 gap:10px;
`;
export const ReportContainerAdm = styled.div.attrs({
  className: "relatorio-container",
})`
 display:flex;
 flex-direction:column;
 padding-top :50px;
`;
export const TitleAdm = styled.h1.attrs({
  className: "title",
})`
  color: #132979;
  font-size: 26px;
  font-weight: bold;
  margin:0;
`;
export const NewReportImageAdm= styled.img.attrs({
  className: "new-report-image",
})`
  display: flex;
  height:80px;
  width:80px;
  cursor: pointer;
`;
export const NewReportContainerAdm = styled.div.attrs({
  className: "novo-relatorio-container",
})`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 width:100px;
 position:relative;
 
`;
export const NewReportTitleAdm = styled.h3.attrs({
  className: "novo-relatorio-title",
})`
  display: flex;
  font-size: 18px;
  text-align:center;
`;
