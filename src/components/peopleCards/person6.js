import './person6.css';
import ReactModal from 'react-modal';
import { useState } from 'react';

function Person6() {

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
            <div class="card card6">
                <div class="card-border-top">
                </div>
                <div class="img">
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/attachments/810186625585774593/1081592536537256058/image.png"
                        alt="cover">
                    </img>
                </div>
                <span>
                    Koke
                </span>
                <p class="job">
                    Koke.
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
                    <h2>Koke</h2>
                    <br />
                    <p>
                    &nbsp; &nbsp; &nbsp; koke x
                    </p>
                    <br />
                    <button onClick={closeModal}>Close</button>
                </ReactModal>
            </div>
        </div>
    )
}

export default Person6;