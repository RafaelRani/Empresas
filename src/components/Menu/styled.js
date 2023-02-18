import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TextLink = styled(Link)`
  display: block;
  color: #fff;
  font-size: larger;
  text-decoration: none;

  :hover{
    color: rgb(130, 130, 130);
  }
`;
