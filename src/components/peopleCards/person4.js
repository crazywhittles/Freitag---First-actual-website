import './person4.css';
import ReactModal from 'react-modal';
import { useState } from 'react';

function Person4() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
        document.body.classList.add('no-scroll');
    }

    function closeModal() {
        setModalIsOpen(false);
        document.body.classList.remove('no-scroll');
    }

    return (
        <div className='people-table'>
            <div class="card card4">
                <div class="card-border-top">
                </div>
                <div class="img">
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/avatars/394052178047795210/f85506ceaf0a1feb782b8125baba17d2.webp?size=160"
                        alt="cover">
                    </img>
                </div>
                <span>
                    Gabriel
                </span>
                <p class="job">
                    Expert Entrepreneur
                </p>
                <button onClick={openModal}>
                    Read More
                </button>

                <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    style={{
                        content: {
                            fontSize: '20px',
                            fontWeight: 'bold',
                            padding: '3%',
                            marginLeft: '25%',
                            marginTop: '10%',
                            width: '50%',
                            height: '50%',
                            color: 'black',
                            background: 'none'
                        }
                    }}
                >
                    <h2>Gabriel</h2>
                    <br />
                    <p>Rich AF. Owns his own business (art) and is non-stop
                        working every day. Damn I wish I had this mindset...
                    </p>
                    <br />
                    <button onClick={closeModal}>Close</button>
                </ReactModal>
            </div>
        </div>
    )
}

export default Person4;