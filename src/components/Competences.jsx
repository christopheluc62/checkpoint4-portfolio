import Scompetences from '../styledComponents/Scompetences';
import Menu from '../components/Menu';

function Competences() {
  return (
    <Scompetences>
      <Menu />
      <h1>Mes compétences</h1>
      <p>
        En formation Développeur Web depuis Mars 2021, j’ai eu l’opportunité,
        par le biais de projets clients et de projets personnels,
        d’expérimenter, d’apprendre et de me perfectionner dans de nombreux
        langages et frameworks. Voici les principaux que j'utilise.
      </p>
      <h2>Langages</h2>
      <div className='bulles'>
        <div className='bulle'>HTML/CSS</div>
        <div className='bulle'>PHP/MYSQL</div>
        <div className='bulle'>JS</div>
        <div className='bulle'>C</div>
      </div>
      <h2>Librairies / Frameworks</h2>
      <div className='bulles'>
        <div className='bulle'>REACT</div>
        <div className='bulle'>BOOTSTRAP</div>
        <div className='bulle'>SYMFONY</div>
        <div className='bulle'>JQUERY</div>
      </div>
      <h2>Langages</h2>
      <div className='bulles'>
        <div className='bulle'>GIT</div>
        <div className='bulle'>GRUNT</div>
        <div className='bulle'>SASS/SCSS</div>
        <div className='bulle'>WEBPACK</div>
      </div>
    </Scompetences>
  );
}
export default Competences;
