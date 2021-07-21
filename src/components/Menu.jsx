import Smenu from '../styledComponents/Smenu';

function Menu() {
  return (
    <Smenu>
      <ul>
        <li>
          <a href='Home.jsx'>Accueil</a>
        </li>
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
    </Smenu>
  );
}
export default Menu;
