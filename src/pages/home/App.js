import Header from '../../components/header/header';
import './App.css';

function App() {
  return (
    <div className='body'>
      <Header />
      <section className='hidden'>
          <h1>Welcome</h1>
          <p>test</p>
      </section>
      <section className='hidden'>
        <h1>Where am i</h1>
        <p>test</p>
      </section>
      <section className='hidden'>
        <h1>hello</h1>
        <p>should i buy an AWP containment breach</p>
      </section>
    </div>
  );
}

export default App;
