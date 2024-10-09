import styled from 'styled-components';

export const NewTaskBody = styled.div.attrs({
    className: "new-task-body",
})`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-color: #f0f2f5;
`;

export const ContainerTask = styled.div.attrs({
    className: "container-task",
})`
    display: flex;
    flex-direction: column;
    
    padding: 20px;
    width: 100%;
`;

export const InputContainerTask = styled.div.attrs({
    className: "input-container-task",
})`
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
        font-size: 12px;
        color: #000000;
    }
`;

export const ContainerNomeNewTask = styled.div.attrs({
    className: "nome-task",
})`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    width: 100%;
`;

export const ContainerDescricaoNewTask = styled.div.attrs({
    className: "descricao-task",
})`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    width: 100%;
`;

export const ContainerParticipantesNewTask = styled.div.attrs({
    className: "numero-participante",
})`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    width: 100%;
`;

export const ContainerDataNewTask = styled.div.attrs({
    className: 'data-task',
})`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    width: 100%;
`;

export const ContainerArquivoNewTask = styled.div.attrs({
    className: 'arquivo-task',
})`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    width: 100%;
`;

export const InputFieldTask = styled.input.attrs({
    className: "input-field-task",
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
export const FileListContainer = styled.div.attrs({
  className: "file-list-container",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width:100%;

  max-height: 100px; 
  overflow-y: auto;   
  padding-right: 5px; 

  

 &::-webkit-scrollbar {
    height: 8px;
    background-color:#132979;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    height: 8px; 
    border: 2px solid #132979; 
    border-radius: 10px;
  }

`;

export const FileLink = styled.a.attrs({
  className: "file-link",
})`
  color: #132979;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #0038d3;
  }
`;
export const FileItem = styled.div.attrs({
  className: "file-item",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RemoveButton = styled.button.attrs({
  className: "remove-button",
})`
  background-color: #c00202;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  margin-left:20px;
  &:hover {
    background-color: #ff1f1f;
  }
`;

export const TextAreaFieldTask = styled.textarea.attrs({
    className: "textarea-field-task",
})`
    width: 100%;
    height: 110px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
    resize: none;
    border: 1px solid #132979;
`;

export const SelectBoxTask = styled.select.attrs({
    className: "select-box-task",
})`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
`;

export const ParticipantListTask = styled.div.attrs({
    className: "participant-list-task",
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

export const ParticipantItemTask = styled.div.attrs({
    className: "participant-item-task",
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

export const MiddleBodyTask = styled.div.attrs({
    className: "middle-body-task",
})`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    background-size: cover;
    background-color: #f0f2f5;
`;

export const SaveImageTaskCoord = styled.img.attrs({
    className: "save-novo-projeto-image",
  })`
    display: flex;
    height:80px;
    width:80px;
    cursor: pointer;
  `;
  
  export const SaveContainerTaskCoord = styled.div.attrs({
    className: "save-novo-projeto-container",
  })`
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:end;
   width:100px;
   margin-top:10px;
   
  `;
  
  export const SaveTitleTaskCoord = styled.h3.attrs({
    className: "save-novo-projeto-title",
  })`
    display: flex;
    font-size: 18px;
    text-align:center;
    color:#132979;
  `;
  
  export const SaveBlockTaskCoord = styled.h3.attrs({
    className: "save-novo-projeto-title",
  })`
    display:flex;
    align-items:end;
    justify-content:end;
    
  `;

export const DivTitleTask = styled.div.attrs({
    className: "div-title-task",
})`
    display: inline-block;
    flex-direction: column;
    align-items: start;
    padding-top: 40px;
    width: max-content;
    margin-left: 2vh;
`;

export const TitleTask = styled.h1.attrs({
    className: "title-task",
})`
    color: #132979;
    border-bottom: 2px solid #132979;
    font-size: 26px;
`;

export const TitleName = styled.h1.attrs({
    className: "title-name-task",
})`
    color: #132979;
    border-bottom: 2px solid #132979;
    font-size: 18px;
    width: max-content;
    
`;
export const ResponsibleContainer = styled.div.attrs({
    className: "responsible-container",
  })`
    display: flex;
    align-items: center;
    justify-content: start;
    height:40px;
    background-color: #ffffff;
    border: 1px solid #132979;
    border-radius: 8px;
    margin-bottom: 20px;
    width: 100%;
    
  `;
  
  export const ResponsibleName = styled.span.attrs({
    className: "responsible-name",
  })`
    font-size: 18px;
    color: #132979;
    font-weight: bold;
  `;
  export const ChangeResponsibleButton = styled.button.attrs({
    className: "change-responsible-button",
  })`
    background-color: #132979;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
  
    &:hover {
      background-color: #0d2168;
    }
  `;
  export const UploadFieldCoord = styled.div.attrs({
    className: "upload-field-coord",
  })`
    display: flex;
    flex-direction: column;
    
  `;
  export const UploadblockCoord = styled.div.attrs({
    className: "upload-block-coord",
  })`
    display: flex;
    flex-direction: column;
    
    
  `;
  export const SelectArquivo = styled.div.attrs({
    className: "upload-block-coord",
  })`
    display: flex;
   
  `;
  
  export const ReplaceFileButtonCoord = styled.button.attrs({
    className: "replace-file-button-coord",
  })`
    background-color: #132979;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  
    &:hover {
      background-color: #0038d3;
    }
  `;
  export const ArquivoInput = styled.input.attrs({
    className: "date-input",
  })`
    font-size: 14px;
    
    border-radius: 5px;
    
  `;