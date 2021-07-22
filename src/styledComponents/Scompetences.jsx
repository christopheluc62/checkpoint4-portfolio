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
    background-color: black;
    color: white;
    border-radius: 50%;
    width: 150px;
    height: 80px;
    text-align: center;
    padding-top: 70px;
    margin-bottom: 20px;
  }
`;

export default Scompetences;
