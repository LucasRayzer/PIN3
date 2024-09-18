import styled from 'styled-components';

export const NavContainer = styled.div.attrs({
  className: "nav-container",
})`
  background-color: #132979;
  display:flex;
  text-align: start;
  border-bottom: 1px solid;
  border-color: #000000;
  max-height:100px;
  justify-content:space-between;
`;

export const NavUser = styled.div.attrs({
  className: "nav-user",
})`
  display: flex;
    flex-direction: row;
    align-items: start;
    padding-left: 40px;
    align-items: center;
`;

export const NavUserImage = styled.img.attrs({
  className: "nav-user-image",
})`
    display: flex;
    height:140px;
    position: relative;
    top:30px;
    border:1px solid #000000;
    border-radius:70px;
`;

export const NavUserInfo = styled.h1.attrs({
  className: "nav-user-info",
})`
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding-left:20px;
`;
export const ConfigImage = styled.img.attrs({
    className: "home-logo-image",
  })`
    display: flex;
    height:60px;
    margin-right: 40px;
    cursor: pointer;
  `;

  export const ConfigBlock = styled.div.attrs({
    className: "config-block-header",
  })`
   display:flex;
   align-items: center;  
  `;