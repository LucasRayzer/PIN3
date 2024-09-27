import styled from 'styled-components';

export const ConfiguracaoBody = styled.div.attrs({
  className: 'configuracao-body',
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: #f0f2f5;
`;




export const ButtonsContainer = styled.div.attrs({
  className: 'buttons-container',
})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top:150px;
  align-items:center;
`;

export const AlterarButton = styled.button.attrs({
  className: 'alterar-button',
})`
  padding: 15px 30px;
  font-size: 16px;
  background-color: #132979;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width:30%;
  &:hover {
    background-color: #0b1e5b;
  }
`;
