import styled from 'styled-components';

export const RelatorioBody = styled.div.attrs({
  className: 'relatorio-body',
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: #f0f2f5;
`;

export const RelatorioContainer = styled.div.attrs({
  className: 'relatorio-container',
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 100px;
  width: 100%;
  height: max-content;
  background-color: #f0f2f5;
`;

export const ButtonContainer = styled.div.attrs({
  className: 'relatorio-container',
})`
  display: flex;
  
  flex-direction: row;
 
`;
export const RelatorioTitle = styled.h1.attrs({
  className: 'relatorio-title',
})`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10px;
  border-bottom: solid 2px #132979;
`;

export const Title = styled.h1.attrs({
  className: 'title',
})`
  color: #132979;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: solid 2px #132979;
`;

export const TitleBlock = styled.div.attrs({
  className: 'title-block',
})`
  display: flex;
  margin-left: 100px;
  padding-top: 60px;
`;

export const RelatoriosList = styled.div.attrs({
  className: 'relatorios-list',
})`
  display: flex;
  flex-direction: column;
  width:90%;
  min-width: auto;
  max-width: 90%;
  max-height: 700px;
  overflow-y: auto;
  
`;

export const RelatorioItem = styled.div.attrs({
  className: 'relatorio-item',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: auto;
  padding: 15px;
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const RelatorioNome = styled.p.attrs({
  className: 'relatorio-nome',
})`
  font-size: 18px;
  color: #000000;
`;

export const AbrirButton = styled.button.attrs({
  className: 'abrir-button',
})`
  padding: 8px 20px;
  font-size: 14px;
  background-color: #132979;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0b1e5b;
  }
`;
export const DeleteButton = styled.button.attrs({
  className: 'abrir-button',
})`
  padding: 8px 20px;
  font-size: 14px;
  background-color: #640f0f;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left:10px;
  cursor: pointer;

  &:hover {
    background-color: #a51717;
  }
`;

