import Header from '../../components/header/header';
import './channels.css';

function channels() {
    return (
        <div className='channel-body'>
            <Header />
            <div className='channel-title'>
                <p>My Rubbish</p>
                <p>Channels</p>
            </div>
            <div className='channel-half'>
                <h2 className='channel-title2'>crazyembers</h2>
                <p className='channel-text'>
                    My only channel right now, I had a BeamNG channel too with 330
                    subs but I got bored and deleted it LOL i'm so clueless... But
                    this CSGO channel is by far the most fun channel to upload vids
                    on, only downside is that some unboxings cost quite a bit.
                </p>
                <p className='channel-text'>
                    Also, I had a channel from 2015 but that had some god awful
                    edits, so all the vids are unlisted... dm me for the playlist.
                </p>
            </div>
            <div className='channel-half'>
                <img
                    src="https://cdn.discordapp.com/attachments/810186625585774593/1091822254922420285/1.jpg"
                    alt="cover">
                </img>
                <a href='https://www.youtube.com/@crazyembers'>link x</a>
            </div>
            <div>
                <a className='channel-text2' href='https://www.youtube.com/watch?v=FJhpy-naaXI'>my most popular vid (famous!!)</a>
                <img
                    className='channel-pic'
                    src="https://cdn.discordapp.com/attachments/810186625585774593/1091827911578882118/2.jpg"
                    alt="cover">
                </img>
            </div>

        </div>
    );
}

export default channels;