import styled from 'styled-components';

const Scompetences = styled.div`
  background-color: #38c2c7;

  h1 {
    text-align: center;
    font-size: 50px;
    color: white;
  }

  p {
    text-align: center;
    font-size: 30px;
    color: white;
  }

  .bulles {
    display: flex;
    justify-content: space-around;
  }

  .bulle {
    border: 5px solid black;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    text-align: center;
  }
`;

export default Scompetences;
