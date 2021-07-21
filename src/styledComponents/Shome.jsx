import styled from 'styled-components';

const Shome = styled.div`
  background-image: url('background.webp');
  background-size: cover;

  h1 {
    color: white;
    font-size: 50px;
  }

  h2 {
    color: white;
    font-size: 25px;
  }

  .photo {
    border: 5px solid white;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-top: 200px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    :hover {
      transform: scale(1.2);
    }
  }

  .presentation {
    text-align: center;
    padding-bottom: 300px;
  }
`;

export default Shome;
