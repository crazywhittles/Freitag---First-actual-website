import './person2.css';
import ReactModal from 'react-modal';
import { useState } from 'react';

function Person2() {

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
            <div class="card card2">
                <div class="card-border-top">
                </div>
                <div class="img">
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/attachments/810186625585774593/1081586923820290060/image.png"
                        alt="cover">
                    </img>
                </div>
                <span>
                    Ty...
                </span>
                <p class="job">
                    Dropshipper Millionaire
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
                    <h2>Ty Send...</h2>
                    <br />
                    <p>
                        Extremely wealthy CSGO Investor, owns several high end
                        stickers and skins. Cool thing about this guy is he keeps
                        onto his investments no matter what xd.
                    </p>
                    <br />
                    <button onClick={closeModal}>Close</button>
                </ReactModal>
            </div>
        </div>
    )
}

export default Person2;