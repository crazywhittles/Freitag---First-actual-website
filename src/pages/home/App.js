import Header from '../../components/header/header';
import './App.css';
import { useRef, useEffect } from 'react';

function App() {
  
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entires) => {
      entires.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    })
    observer.observe(myRef.current);
  })

  return (
    <div className='body'>
      <Header />
      <img 
      className='background'
      src="https://cdn.mos.cms.futurecdn.net/xDUwiksyoEipsi4jrjWrnA.jpg"
      alt="cover">
      </img>
      <img 
      className='secondbackground'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/What%27s_Up_in_the_Solar_System%2C_active_space_probes_2019-07.png/1200px-What%27s_Up_in_the_Solar_System%2C_active_space_probes_2019-07.png"
      alt="cover">
      </img>
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
      <section ref={myRef} className='hidden home-section'>
        <h1>I need Help...</h1>
        <p>Can someone help me decide which AWP I should get for CSGO</p>
        <div className='pics'>
          <div>
            <img className='pic' src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJV5dCykomZksj5Nr_Yg2Zu5MRjjeyP9tWh0FXnqkFqN2miI9OQdlNraF2E_ADrxLzujJa7vcmczSFgviV3tGGdwULCeAiZTA/360fx360f" alt="awp"></img>
          </div>
          <div>
            <img className='pic' src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7P_BdjVW4tW4k7-KgOfLP7LWnn9u5MRjjeyPptuj2Qzt_0JsYDymJNDAIQ8-MA7U_1i3w-bphpO1v56bmHBk7yMksWGdwUJq4NI0lg/360fx360f" alt="awp"></img>
          </div>
          <div>
            <img className='pic' src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJB496klb-GkvP9JrbummpD78A_3LGXrI-i31fm_Uc5MW_3I4LDelc2YQmF-FPtl7_uh8PtupTMn3pnvD5iuyj-_v0pRA/360fx360f" alt="awp"></img>
          </div>
          <div>
            <img className='pic' src="https://cdn.discordapp.com/attachments/625006439798145024/702489241258557450/image0.jpg" alt="awp"></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
