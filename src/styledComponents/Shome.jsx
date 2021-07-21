import styled from 'styled-components';

const Shome = styled.div`
  background-image: url('background.webp');
  background-size: cover;

  ul {
    background: #2c3f66;
    display: flex;
    justify-content: space-around;
    padding: 25px;
  }

  ul li {
    list-style: none;
    font-size: 20px;
    font-weight: 800;
  }

  ul li a {
    color: white;
    text-decoration: none;
  }

  ul li a:hover {
    color: rgb(8, 2, 27);
  }

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
