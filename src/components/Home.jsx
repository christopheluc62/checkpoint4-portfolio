import Shome from '../styledComponents/Shome';

function Home() {
  return (
    <Shome>
      <ul>
        <li>
          <a href='Parcours.jsx'>Mon parcours</a>
        </li>
        <li>
          <a href='Competences.jsx'>Mes compétences</a>
        </li>
        <li>
          <a href='Portfolio.jsx'>Portfolio</a>
        </li>
        <li>
          <a href='Contact.jsx'>Me contacter</a>
        </li>
      </ul>
    </Shome>
  );
}
export default Home;
