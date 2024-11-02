import styled from 'styled-components';

export const ViewRelatorioBodyAdmin = styled.div.attrs({
  className: "view-relatorio-body-admin",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: #f0f2f5;
`;

export const ViewRelatorioContainerAdmin = styled.div.attrs({
  className: "view-relatorio-container-admin",
})`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  padding-top: 40px;
    
`;

export const ProgressBarAdmin = styled.div.attrs({
  className: "progress-bar-admin",
})`
 display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  max-width: 680px;
  position: relative;
  overflow: hidden;
  background-color: #132979; 
  border-radius: 10px;
  border: 2px solid #132979;

  
  .completed {
    background-color: white; 
    height: 100%;
    border-radius: 10px;
    transition: width 0.3s ease;
    
  }


  span {
    position: absolute;
    right: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #132979;
  }
`;

export const EndProjectButtonAdmin = styled.button.attrs({
  className: "end-project-button-admin",
})`
  background-color: #132979;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #0e2159;
  }
`;

export const TasksSectionAdmin = styled.div.attrs({
  className: "tasks-section-admin",
})`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  padding-left: 40px;
`;

export const TitleAdmin = styled.h1.attrs({
  className: "title-admin",
})`
  color: #132979;
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  border-bottom: 3px solid #132979;
  width: max-content;
`;
export const ValueAdmin = styled.h1.attrs({
    className: "title-admin",
  })`
    color: #132979;
    font-size: 26px;
    font-weight: bold;
    margin: 0;
    width: max-content;
  `;

export const TitleBarSectionAdmin = styled.div.attrs({
  className: "title-bar-section-admin",
})`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  max-width: 1900px;
  min-width: 500px;
  padding-left: 40px;
  padding-top: 30px;
  margin-left: 160px;
  border-bottom: 3px solid #132979;
`;

export const TitleProjectAdmin = styled.h1.attrs({
  className: "project-title-admin",
})`
  color: #132979;
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  max-width: 800px;
`;

export const BlockContentHeadAdmin = styled.div.attrs({
  className: "head-admin",
})`
  display: flex;
  justify-content: space-between;
`;

export const ScrollContainerAdminPart = styled.div.attrs({
  className: "scroll-container-admin-part",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  height: 450px;


  &::-webkit-scrollbar {
    width: 10px;
    background-color: #132979;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border: 2px solid #132979;
    border-radius: 10px;
  }
`;

export const ScrollContainerAdminTarefa = styled.div.attrs({
  className: "scroll-container-admin-tarefa",
})`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  height: 800px;
  padding-left: 0px;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    height: 10px;
    background-color: #132979;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border: 2px solid #132979;
    border-radius: 10px;
  }
`;

export const TaskCardAdmin = styled.div.attrs({
  className: 'task-card-admin',
})`
  background-color: #132979;
  color: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  position: relative;
  width: 175px;
  height: 170px;
  min-width: 150px;
  min-height: 160px;
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

export const ParticipantsSectionAdmin = styled.div.attrs({
  className: "participants-section-admin",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  padding-right:20px;
`;

export const ParticipantCardAdmin = styled.div.attrs({
  className: 'participant-card-admin',
})`
  background-color: #132979;
  color: white;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

export const NewTaskContainerAdmin = styled.div.attrs({
  className: "new-task-container-admin",
})`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const NewTaskButtonAdmin = styled.button.attrs({
  className: "new-task-button-admin",
})`
  background-color: #132979;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0e2159;
  }
`;

export const ViewRelatorioImageAdmin = styled.img.attrs({
  className: "view-relatorio-image",
})`
  height: 80px;
  padding-top: 60px;
`;

export const ViewRelatorioNameAdmin = styled.h2.attrs({
  className: "view-relatorio-name",
})`
  padding-top: 20px;
  font-size: 18px;
  color: white;
`;
export const BlockAdmin = styled.div.attrs({
    className: "view-relatorio-block",
  })`
    display:flex;
    gap:20px;
    flex-direction: column;
    width:max-content;
    height:max-content;
  `;
  