import styled from 'styled-components';

const Smenu = styled.div`
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
`;

export default Smenu;
