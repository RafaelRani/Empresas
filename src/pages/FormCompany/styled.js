import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  input {
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
  }

  button {
    cursor: pointer;
    background: #405d27;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms; //para alternar a mudança mais suavemente
  }

  button:hover {
    filter: brightness(75%); //tira mais o brilho, escurece mais
  }
`;

export const Title = styled.div`
  margin: 10px 0px;
  font-size: 17px;
  font-weight: bold;
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
`;

export const Error = styled.small`
  color: #d64161;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-top: 0px;
  padding: 0px;
`;
