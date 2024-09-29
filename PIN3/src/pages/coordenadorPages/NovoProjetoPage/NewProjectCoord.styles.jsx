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
export const SectionTitleCoord = styled.h1.attrs({
  className: "section-title-coord",
})`
  
  align-items:start;
  color: #132979;
  border-bottom: 2px solid #132979;
  width: max-content;
  justify-content:start;
  padding-top:50px;
  margin-left:120px;
`;

export const InputContainerCoord = styled.div.attrs({
  className: "input-container-coord",
})`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 20px;


  label {
    font-size: 16px;
    color: #132979;
  }

  span {
    font-size: 0.8rem;
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
  background-color: #fff; /* Cor de fundo */
  border-radius: 12px; /* Fundo arredondado */
  max-height: 200px; /* Altura máxima da lista */
  overflow-y: auto; /* Barra de rolagem vertical */
  padding: 10px; /* Espaçamento interno */
  border: 1px solid #132979; /* Bordas em azul */
  
  label {
    font-size: 1rem;
    color: #132979;
  }

  /* Estilo da barra de rolagem */
  scrollbar-width: thin; /* Para Firefox */
  scrollbar-color: #132979 #e0e0e0; /* Para Firefox */

  &::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #132979; /* Cor da barra de rolagem */
    border-radius: 12px; /* Bordas arredondadas da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background-color: #e0e0e0; /* Cor de fundo da barra de rolagem */
  }
`;

export const ParticipantItemCoord = styled.div.attrs({
  className: "participant-item-coord",
})`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #132979; /* Separação entre itens */
  
  span {
    font-size: 16px;
    color: #132979;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }

  input {
    margin-left: auto; /* Alinha o checkbox à direita */
  }

  img {
    width: 40px; /* Tamanho do ícone */
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
