import Sparcours from '../styledComponents/Sparcours';
import Menu from '../components/Menu';
import Smenu from '../styledComponents/Smenu';

function Parcours() {
  return (
    <Sparcours>
      <Menu />
      <h1>Mon parcours</h1>
      <p>
        Après avoir exercé le métier de technicien chimiste pendant 20ans, j'ai
        décidé d'effectuer un tournant dans ma carrière professionnelle et de me
        reconvertir dans le développement web, pour y apporter toutes les
        compétences acquises au cours de ces années.
      </p>
      <iframe src='cvChristophe.pdf' className='cv'></iframe>
    </Sparcours>
  );
}
export default Parcours;
