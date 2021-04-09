import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    /*Segundo Li pra frente */
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #003459;
      text-decoration: none;
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
     margin-top: 20px;
    }
  }
`;