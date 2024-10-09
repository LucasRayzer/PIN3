import styled from 'styled-components';

export const DetailsBodyCoord = styled.div.attrs({
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
  
  padding: 20px;
  width:100%;
  
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
  font-size:32px; 
  margin:0;
`;
export const TitleName = styled.h1.attrs({
  className: "section-title-coord",
})`
  color: #132979;
  border-bottom: 2px solid #132979;
  font-size:22px;
  width:max-content;
`;
export const DivTitleCoord = styled.div.attrs({
  className: "section-title-coord",
})`
    display: inline-block;
    flex-direction: column;
    align-items: start;
    padding-top: 60px;
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
  margin:0px;
  flex-direction: column;
  width: 100%;
`;
export const ContainerDescricaoNovoProjeto = styled.div.attrs({
  className: "descricao-projeto",
})`
  display: flex;
  
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
  border:  1px solid #132979;;
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
  border: 1px solid #132979;
  border-radius: 5px;
  margin-top: 5px;
  resize: none;
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

export const SaveImageCoord = styled.img.attrs({
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
 margin-top:10px;
 
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
  
`;
export const FileListContainer = styled.div.attrs({
  className: "file-list-container",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width:100%;

  max-height: 170px; 
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
export const DateFileCoord = styled.div.attrs({
  className: "date-field-coord",
})`
  display: flex;
  flex-direction: column;
  height: 30px;
`;
export const DateInput = styled.input.attrs({
  className: "date-input",
  type: "date",
})`
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
export const ArquivoInput = styled.input.attrs({
  className: "date-input",
})`
  font-size: 14px;
  border-radius: 5px;
`;
export const ParticipantListCoord = styled.div.attrs({
  className: "participant-list-coord",
})`
  display:flex;
  flex-direction:column;
  width: 100%; 
  background-color: #fff; 
  border-radius: 12px;
  max-height: 200px; 
  overflow-y: auto; 
  padding: 5px; 
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