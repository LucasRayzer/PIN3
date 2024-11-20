import styled from 'styled-components';

export const AlteraBodyCoord = styled.div.attrs({
    className: "altera-participante-body-coord",
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
   export const DivTitleCoord2 = styled.div.attrs({
    className: "section-title-coord",
  })`
      display: inline-block;
      flex-direction: column;
      align-items: start;
      padding-bottom: 20px;
      width:max-content;
      margin-left:2vh;
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
   export const ButtonCoord = styled.h3.attrs({
    className: "save-novo-projeto-title",
  })`
    display: flex;
    align-items:center;
    justify-content:center;
    
  `;
  export const DeleteButton = styled.button.attrs({
    className: "button",
  })`
    background-color: #7c0e0e;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
    max-width:300px;
  
    &:hover {
      background-color: #c21515;
    }
  `;
  export const UpdateButton = styled.button.attrs({
    className: "button",
  })`
    background-color: #132979;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 10px;
    max-width:300px;
  
    &:hover {
      background-color: #0e2159;
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
    padding-left: 20px;
    
  `;
  