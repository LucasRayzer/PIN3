import styled from 'styled-components';

export const NewProjectBodyCoord = styled.div.attrs({
    className: "home-body-coord",
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
`;

export const SectionTitleCoord = styled.h2.attrs({
  className: "section-title-coord",
})`
  color: #132979;
  border-bottom: 2px solid #132979;
  width: 80%;
  text-align: left;
`;

export const InputContainerCoord = styled.div.attrs({
  className: "input-container-coord",
})`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 20px;

  div {
    margin-bottom: 20px;
  }

  label {
    font-size: 1rem;
    color: #132979;
  }

  span {
    font-size: 0.8rem;
    color: #999;
  }
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
  font-size: 1rem;
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
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
`;

export const ParticipantListCoord = styled.div.attrs({
  className: "participant-list-coord",
})`
  width: 80%;
  margin-top: 20px;

  label {
    font-size: 1rem;
    color: #132979;
  }
`;

export const ParticipantItemCoord = styled.div.attrs({
  className: "participant-item-coord",
})`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    margin-right: 10px;
  }

  span {
    font-size: 1rem;
    color: #132979;
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

  &:hover {
    background-color: #0038d3;
  }
`;
