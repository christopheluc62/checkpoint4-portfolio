import Shome from '../styledComponents/Shome';
import Menu from '../components/Menu';
import Smenu from '../styledComponents/Smenu';

function Home() {
  return (
    <Shome>
      <Menu />
      <div className='presentation'>
        <img src='christophe.jpeg' alt='christophe' className='photo' />
        <h1>Christophe LUC</h1>
        <h2>Développeur Web Junior</h2>
      </div>
      <div className='reseaux'></div>
    </Shome>
  );
}
export default Home;
