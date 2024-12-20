import styled from 'styled-components';

export const NewProjectBodyCoord = styled.div.attrs({
    className: "novo-projeto-body-coord",
  })`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-color: #f0f2f5;
  `;
 
export const ContainerCoord = styled.div.attrs({
  className: "new-project-container",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width:100%;
  
`;
export const ContainerDataNewProject = styled.div.attrs({
  className: 'data-project',
})`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  width: 100%;
`;
export const InputFieldProject = styled.input.attrs({
  className: "input-field-project",
})`
  width: 100%;
  height: 20px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  border: 1px solid #132979;
  margin-top: 5px;
`;
export const MiddleBodyCoord = styled.div.attrs({
  className: "novo-projeto-body-coord",
})`
  display: flex;
  flex-direction: row;
  gap:20px;
  justify-content:center;
  background-size: cover;
  background-color: #f0f2f5;
`;
export const TitleCoord = styled.h1.attrs({
  className: "section-title-coord",
})`
  color: #132979;
  border-bottom: 2px solid #132979;
  font-size:26px; 
`;
export const TitleName = styled.h1.attrs({
  className: "section-title-coord",
})`
  color: #132979;
  border-bottom: 2px solid #132979;
  font-size:18px;
  width:max-content;
`;
export const DivTitleCoord = styled.div.attrs({
  className: "section-title-coord",
})`
    display: inline-block;
    flex-direction: column;
    align-items: start;
    padding-top: 40px;
    width:max-content;
    margin-left:2vh;
`;
export const InputContainerCoord = styled.div.attrs({
  className: "input-container-coord",
})`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    font-size: 12px;
    color: #000000;
  }
`;
export const ContainerNomeNovoProjeto = styled.div.attrs({
  className: "nome-projeto",
})`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  width: 100%;
`;
export const ContainerDescricaoNovoProjeto = styled.div.attrs({
  className: "descricao-projeto",
})`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  width: 100%;
`;
export const ContainerParticipantesNovoProjeto = styled.div.attrs({
  className: "numero-partipante",
})`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  width: 100%;
`;

export const InputFieldCoord = styled.input.attrs({
  className: "input-field-coord",
})`
  width: 100%;
  height:20px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
`;

export const TextAreaFieldCoord = styled.textarea.attrs({
  className: "textarea-field-coord",
})`
  width: 100%;
  height:110px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  resize: none;
`;

export const SelectBoxCoord = styled.select.attrs({
  className: "select-box-coord",
})`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
`;



export const ParticipantListCoord = styled.div.attrs({
  className: "participant-list-coord",
})`
  display:flex;
  flex-direction:column;
  width: 97%; 
  background-color: #fff; 
  border-radius: 12px;
  max-height: 200px; 
  overflow-y: auto; 
  padding: 10px; 
  border: 1px solid #132979;
  
  label {
    font-size: 1rem;
    color: #132979;
  }

  
  scrollbar-width: thin; 
  scrollbar-color: #132979 #e0e0e0;

  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #132979; 
    border-radius: 12px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #e0e0e0; 
  }
`;

export const ParticipantItemCoord = styled.div.attrs({
  className: "participant-item-coord",
})`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #132979; 

  span {
    font-size: 16px;
    color: #132979;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }

  input {
    margin-left: auto; 
  }

  img {
    width: 40px; 
    height: 40px;
  }
`;
export const SaveButtonCoord = styled.button.attrs({
  className: "save-button-coord",
})`
  padding: 15px 30px;
  background-color: #132979;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top:300px;
  &:hover {
    background-color: #0038d3;
  }
`;
export const SaveImageCoord= styled.img.attrs({
  className: "save-novo-projeto-image",
})`
  display: flex;
  height:80px;
  width:80px;
  cursor: pointer;
`;
export const SaveContainerCoord = styled.div.attrs({
  className: "save-novo-projeto-container",
})`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:end;
 width:100px;
 margin-top:15px;
 
`;
export const SaveTitleCoord = styled.h3.attrs({
  className: "save-novo-projeto-title",
})`
  display: flex;
  font-size: 18px;
  text-align:center;
  color:#132979;
`;
export const SaveBlockCoord = styled.h3.attrs({
  className: "save-novo-projeto-title",
})`
  display: flex;
  align-items:end;
  justify-content:end;
  margin-right:20px;
`;

