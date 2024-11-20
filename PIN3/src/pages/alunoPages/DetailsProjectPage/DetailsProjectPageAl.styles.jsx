import styled from 'styled-components';

export const DetailsBodyAluno = styled.div.attrs({
  className: "details-body-aluno",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: #f0f2f5;
`;

export const DetailsContainerAluno = styled.div.attrs({
  className: "details-container-aluno",
})`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  padding-top: 40px;
`;

export const ProgressBarAluno = styled.div.attrs({
  className: "progress-bar-aluno",
})`
  display: flex;
  align-items: center;
  height: 20px;
  width: 60%;
  max-width: 1000px;
  background-color: #e0e0e0;
  border-radius: 25px;
  position: relative;
  overflow: hidden;

  .completed {
    background-color: #132979; 
    height: 100%;
    transition: width 0.5s ease-in-out;
  }

  span {
    position: absolute;
    right: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #132979; 
  }
`;



export const TasksSectionAluno = styled.div.attrs({
  className: "tasks-section-aluno",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-left: 40px;
`;

export const TitleAluno = styled.h1.attrs({
  className: "title-aluno",
})`
  color: #132979;
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  border-bottom: 3px solid #132979;
  width: max-content;
`;

export const TitleBarSectionAluno = styled.div.attrs({
  className: "title-bar-section-aluno",
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

export const TitleProjectAluno = styled.h1.attrs({
  className: "project-title-aluno",
})`
  color: #132979;
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  width: max-content;
  margin-left: 0px;
  width: 100%;
  max-width: 800px;
`;

export const BlockContentHeadAluno = styled.div.attrs({
  className: "head-aluno",
})`
  display: flex;
  justify-content: space-between;
`;

export const ScrollContainerAlunoPart = styled.div.attrs({
  className: "scroll-container-aluno",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
 height: 650px;
  padding-right: 10px;

  &::-webkit-scrollbar {
    height: 10px;
    background-color: #132979;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    height: 10px; 
    border: 2px solid #132979; 
    border-radius: 10px;
  }
`;

export const ScrollContainerAlunoTarefa = styled.div.attrs({
  className: "scroll-container-aluno",
})`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  max-height: 800px;
  padding-left: 0px;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    height: 10px;
    background-color: #132979;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    height: 10px; 
    border: 2px solid #132979; 
    border-radius: 10px;
  }
`;

export const TaskCardAluno = styled.div.attrs({
  className: 'task-card-aluno',
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
    background-color: ${( props ) => {
        console.log(props.status);
        
        switch (props.status) {
             case 1:
            return 'green'
             case 2:
            return 'orange'
             case 3:
            return 'yellow' 
             case 4:
            return 'red'
        }
      }
         };
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
`;

export const ParticipantsSectionAluno = styled.div.attrs({
  className: "participants-section-aluno",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
`;

export const ParticipantCardAluno = styled.div.attrs({
  className: 'participant-card-aluno',
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

export const DetailsImageAluno = styled.img.attrs({
  className: "details-image",
})`
  display: flex;
  height: 80px;
  padding-top: 60px;
`;

export const DetailsNameAluno = styled.h2.attrs({
  className: "details-name",
})`
  display: flex;
  padding-top: 20px;
`;
