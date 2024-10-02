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
  align-items: center;
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

export const UploadFieldCoord = styled.div.attrs({
  className: "upload-field-coord",
})`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const UploadblockCoord = styled.div.attrs({
  className: "upload-block-coord",
})`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const SelectArquivo = styled.p.attrs({
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
 margin-top:150px;
 
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
