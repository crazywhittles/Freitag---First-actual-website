import './person5.css';
import ReactModal from 'react-modal';
import { useState } from 'react';

function Person5() {

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
            <div class="card card5">
                <div class="card-border-top">
                </div>
                <div class="img">
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/avatars/1006351329498767440/e0dc15b1f6f28a3e9a31e662a48b3dc4.webp?size=160"
                        alt="cover">
                    </img>
                </div>
                <span>
                    Zedd
                </span>
                <p class="job">
                    Content Creator
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
                    <h2>Zedd</h2>
                    <br />
                    <p>
                        Famous Youtuber, also super nice guy! Will answer any
                        question you ask him but NOT BBC questions...
                    </p>
                    <br />
                    <button onClick={closeModal}>Close</button>
                </ReactModal>
            </div>
        </div>
    )
}

export default Person5;