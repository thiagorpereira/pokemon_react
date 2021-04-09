// style-react -> Load structure
import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /*Altura total da tela */
  ${props =>
    props.loading
      ? css`
          svg {
            animation: ${rotate} 4s linear infinite;
          }
        `
      : undefined}
`;

export const DetailContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #007ea7;
    font-size: 16px;
    text-decoration: none;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const IssueList = styled.ul`
  border-top: 1px solid #eee;
  margin-top: 30px;
  padding-top: 30px;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    /*Segundo Li pra frente */
    & + li {
      margin-top: 10px;
    }
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    div {
      flex: 1; /* ocupar tudo */
      margin-left: 15px;
      strong {
        font-size: 16px;
        a {
          text-decoration: none;
          color: #333;
          /* Ao passar o mouse */
          &:hover {
            color: #007ea7;
          }
        }
        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  button {
    border-radius: 4px;
    padding: 8px;
    border: 0;
    margin: 0 0.25rem;
    &:nth-child(${props => props.active + 1}) {
      background: #007ea7;
      color: white;
    }
  }
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  button {
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;