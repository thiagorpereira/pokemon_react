import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  margin: 80px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 30px;
    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;