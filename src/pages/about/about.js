import Header from '../../components/header/header';
import './about.css';

function about() {
  return (
    <div className='body2'>
      <Header />
      <img
        className='background2'
        src="https://cdn.discordapp.com/attachments/534485932628508672/1074377821272674404/20230212181326_1.jpg"
        alt="cover">
      </img>
      <section className='main2'>
        <p className='title'>About</p>
        <p className='title title-cr'>Crapping</p>
        <p className='title'>Me</p>
      </section>
      <section className='main2'>
        <h4 className='quote'>
          <i>"one must get bored of their inventments quick for the best chance
            of success"</i> - me in 4 years
        </h4>
        <img
          src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRWXk3bSPP_h56EHE59IjteuLSqKAJux8zPfjFG09C3hoeO2a-lY-2Fw21TsMZwi-uTrNStiQfh-hdtamjxLYTBelc9MFCB-gC7wOjxxcjr7cXO1Fg/260fx260f"
          className='about-pic'
          alt='innocent'>
        </img>
      </section>
      <div className='about-text-animate'>
        <p><i>my stocks and shares ISA is plummetting as we speak</i></p>
      </div>
      <div className='about-text'>
        <p>
          Hey guys! Here I will tell you all about myself! First of all, I'm
          7k in debt. Secondly, I made this website to practice my junk
          HTML/CSS skills. 
        </p>
        <p>
          I am a 21 year old slave to society, and I loooove playing League!
          Anyway... please let me know what else I could do with this website,
          for now, look at this screenshot:
        </p>
        <img
        src="https://cdn.discordapp.com/attachments/1026808763837054986/1026911452138836069/Screenshot_20210210-125959.jpg"
        className='screenshot'
        alt="screenshot">
        </img>
      </div>
    </div>
  );
}

export default about;