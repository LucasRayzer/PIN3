import styled from 'styled-components';

export const DetailsBodyCoord = styled.div.attrs({
  className: "details-body-coord",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: #f0f2f5;
`;

export const DetailsContainerCoord = styled.div.attrs({
  className: "details-container-coord",
})`
  
  display: flex;
  flex-direction: row;
  gap: 20px;
  width:100%;
  padding-top:40px;
`;

export const ProgressBarCoord = styled.div.attrs({
  className: "progress-bar-coord",
})`
  display: flex;
  align-items: center;
  height: 20px;
  width: 60%;
  max-width: 1000px;
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

export const EndProjectButtonCoord = styled.button.attrs({
  className: "end-project-button-coord",
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

export const TasksSectionCoord = styled.div.attrs({
  className: "tasks-section-coord",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width:100%;
  padding-left:40px;
`;

export const TitleCoord = styled.h1.attrs({
  className: "title-coord",
})`
  color: #132979;
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  border-bottom: 3px solid #132979;
  width:max-content;
`;
export const TitleBarSectionCoord = styled.div.attrs({
  className: "title-bar-section-coord",
})`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    max-width:1900px;
    min-width:500px;
    padding-left: 40px;
    padding-top:30px;
    margin-left:160px;  
    border-bottom: 3px solid #132979;
`;
export const TitleProjectCoord = styled.h1.attrs({
  className: "project-title-coord",
})`
  color: #132979;
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  width:max-content;
  margin-left:0px;
  width:100%;
  max-width:800px;
`;
export const BlockContentHeadCoord = styled.div.attrs({
  className: "head-coord",
})`
  display:flex;
  justify-content:space-between;

`;
export const ScrollContainerCoordPart = styled.div.attrs({
  className: "scroll-container-coord",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  height: 650px;
  padding-right: 10px;

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
export const ScrollContainerCoordTarefa = styled.div.attrs({
  className: "scroll-container-coord",
})`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  height: 800px;
  padding-left: 0px;
  flex-wrap:wrap;
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

export const TaskCardCoord = styled.div.attrs({
  className: 'task-card-coord',
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

export const ParticipantsSectionCoord = styled.div.attrs({
  className: "participants-section-coord",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width:50%;
`;

export const ParticipantCardCoord = styled.div.attrs({
  className: 'participant-card-coord',
})`
  background-color: #132979;
  color: white;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;

export const NewTaskContainerCoord = styled.div.attrs({
  className: "new-task-container-coord",
})`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const NewTaskButtonCoord = styled.button.attrs({
  className: "new-task-button-coord",
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
export const DetailsImageCoord = styled.img.attrs({
  className: "details-image",
})`
  display: flex;
  height:80px;
  padding-top:60px;
`;
export const DetailsNameCoord = styled.h2.attrs({
  className: "details-name",
})`
  display: flex;
  padding-top:20px;
`;
export const Span = styled.span.attrs({
  className: "details-name",
})`
  font-size: 14px;
    font-weight: bold;
    color: #132979;
`;
