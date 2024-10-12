import styled from 'styled-components';

export const DetailsBodyAluno = styled.div.attrs({
    className: "novo-projeto-body-aluno",
  })`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-color: #f0f2f5;
  `;
 
export const ContainerAluno = styled.div.attrs({
  className: "new-project-container",
})`
  display: flex;
  flex-direction: column;
  
  padding: 20px;
  width:100%;
  
`;
export const MiddleBodyAluno = styled.div.attrs({
  className: "novo-projeto-body-Aluno",
})`
 display: flex;
  flex-direction: row;
  gap:20px;
  justify-content:center;
  background-size: cover;
  background-color: #f0f2f5;
`;
export const TitleAluno = styled.h1.attrs({
  className: "section-title-Aluno",
})`
  color: #132979;
  border-bottom: 2px solid #132979;
  font-size:32px; 
  margin:0;
`;
export const TitleName = styled.h1.attrs({
  className: "section-title-Aluno",
})`
  color: #132979;
  border-bottom: 2px solid #132979;
  font-size:22px;
  width:max-content;
`;
export const DivTitleAluno = styled.div.attrs({
  className: "section-title-Aluno",
})`
    display: inline-block;
    flex-direction: column;
    align-items: start;
    padding-top: 60px;
    width:max-content;
    margin-left:2vh;
`;
export const InputContainerAluno = styled.div.attrs({
  className: "input-container-Aluno",
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

export const InputFieldAluno = styled.input.attrs({
  className: "input-field-Aluno",
})`
  width: 100%;
  height:20px;
  padding: 10px;
  font-size: 1rem;
  border:  1px solid #132979;;
  border-radius: 5px;
  margin-top: 5px;
`;

export const TextAreaFieldAluno = styled.textarea.attrs({
  className: "textarea-field-Aluno",
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

export const UploadFieldAluno = styled.div.attrs({
  className: "upload-field-Aluno",
})`
  display: flex;
  flex-direction: column;
  
`;
export const UploadblockAluno = styled.div.attrs({
  className: "upload-block-Aluno",
})`
  display: flex;
  flex-direction: column;
  
  
`;
export const SelectArquivo = styled.div.attrs({
  className: "select-arquivo-Aluno",
})`
  display: flex;
 
`;

export const ReplaceFileButtonAluno = styled.button.attrs({
  className: "replace-file-button-Aluno",
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

export const SaveImageAluno = styled.img.attrs({
  className: "save-novo-projeto-image",
})`
  display: flex;
  height:80px;
  width:80px;
  cursor: pointer;
`;

export const SaveContainerAluno = styled.div.attrs({
  className: "save-novo-projeto-container",
})`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:end;
 width:100px;
 margin-top:10px;
 
`;

export const SaveTitleAluno= styled.h3.attrs({
  className: "save-novo-projeto-title",
})`
  display: flex;
  font-size: 18px;
  text-align:center;
  color:#132979;
`;

export const SaveBlockAluno = styled.h3.attrs({
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
export const DateFileAluno = styled.div.attrs({
  className: "date-field-Aluno",
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