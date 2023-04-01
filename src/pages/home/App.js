import Header from '../../components/header/header';
import './App.css';

function App() {
  
  return (
    <div className='body'>
      <Header />
      <section className='home-section'>
          <h1>Welcome</h1>
          <p className='text'>
            Hello this is my disgusting website, including lots of fun stuff. Here you 
            can find my discord, my youtube channels, my cars and other stuff.
            This is mainly for practice which is why it isn't serious, but let me
            know if I should add anything here!
          </p>
          <p className='box'>
            i do not have a clue what i am doing
          </p>
      </section>
    </div>
  );
}

export default App;
