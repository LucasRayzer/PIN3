import styled from 'styled-components';

export const LoginBody = styled.div.attrs({
    className: "Login-body",
  })`
    margin: 0;
    display: flex;
    height: 100%;
    flex-direction: column;
    border: 1px solid;
    border-color: #000000;
  `;
  
  export const LoginContainer = styled.div.attrs({
    className: "Login-container",
  })`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
  `;
  
  export const LoginHeader = styled.div.attrs({
    className: "Login-header",
  })`
    padding: 10px 0;
    background-color: #132979;
    text-align: start;
    border-bottom: 1px solid;
    border-color: #000000;
  `;
  
  export const LoginTitleHeader = styled.h1.attrs({
    className: "Login-title-header",
  })`
    padding-left: 40px;
    color: white;
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
  `;
  export const LoginTitle = styled.h1.attrs({
    className: "Login-title",
  })`
    color: #000000;
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
  `;
  
  export const LoginForm = styled.div.attrs({
    className: "Login-form",
  })`
    background-color: rgba(250, 250, 250, 0.603);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  export const LoginInput = styled.input.attrs({
    className: "Login-input",
  })`
    margin: 10px 0;
    padding: 10px;
    width: 300px;
    border: 1px solid #0f0c0c96;
    border-radius: 5px;
  `;
 
  
  export const LoginButton = styled.button.attrs({
    className: "Login-button",
  })`
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: #132979;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #000000;
    }
  `;
  
  export const LogoContainer = styled.div.attrs({
    className: "Login-logo-container",
  })`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
  `;
  
  export const LogoImage = styled.img.attrs({
    className: "Login-logo-image",
  })`
    display: flex;
    width:150px;
  `;
  
  export const RegisterLink = styled.a.attrs({
    className: "register-link",
  })`
    margin-top: 10px;
    color: #000000;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `;
  export const RegisterSelect = styled.select.attrs({
    className: "register-select",
  })`
    margin: 10px 0;
    padding: 10px;
    width: 320px;
    border: 1px solid #132979;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
  `;