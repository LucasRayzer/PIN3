import styled from 'styled-components';


export const RelatorioBody = styled.div.attrs({
  className: "relatorio-body",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: #f0f2f5;
`;

export const RelatorioContainer = styled.div.attrs({
    className: "relatorio-container",
  })`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left:100px;
    width: 100%;
    height: max-content;
    background-size: cover;
    background-color: #f0f2f5;
    
  `;
  
export const RelatorioTitle = styled.h1.attrs({
  className: "relatorio-title",
})`
  font-size: 24px;
  font-weight: bold;
  color: #132979;
  margin-bottom: 10px;
  border-bottom: solid 2px #132979;
`;



export const FormSection = styled.div.attrs({
  className: "form-section",
})`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  padding-top:10px;
`;


export const DateInput = styled.input.attrs({
  className: "date-input",
  type: "date",
})`
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;


export const GerarRelatorioButton = styled.button.attrs({
  className: "gerar-relatorio-button",
})`
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 16px;
  background-color: #132979;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0b1e5b;
  }
`;
export const Title = styled.h1.attrs({
  className: "title",
})`
  color: #000000;
  font-size: 24px;
  font-weight: bold;
  border-bottom: solid 2px #132979;
`;
export const TitleBlock = styled.div.attrs({
  className: "title-block",
})`
  display: flex;
  margin-left:100px;
  padding-top:60px;
`;
export const TitleDate = styled.label.attrs({
  className: "title-date",
})`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
`;