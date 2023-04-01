import Header from '../../components/header/header';
import './contact.css';

function contact() {
    return (
        <div className='contact-body'>
            <Header />
            <h1 className='contact-title'>Contact</h1>
            <div className='contact-link'>
                <p>
                    Come thru for any business you have:
                </p>
                <p>
                    email: robbiejoe14@gmail.com
                </p>
                <p>
                    twitter: <a href='https://twitter.com/railme21'>crazyembers</a>
                </p>
                <p>
                    phone: <a href='https://www.youtube.com/@Hamza97'>073476387563874523876428436</a> 
                </p>
            </div>
        </div>
    );
}

export default contact;