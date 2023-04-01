import './person3.css';
import ReactModal from 'react-modal';
import { useState } from 'react';

function Person3() {

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
            <div class="card card3">
                <div class="card-border-top">
                </div>
                <div class="img">
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/avatars/268064919646240768/e7c0d9e0fd1de3d1a15132bb0669663f.webp?size=160"
                        alt="cover">
                    </img>
                </div>
                <span>
                    Axel
                </span>
                <p class="job">
                    Failed Software Dev XD
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
                    <h2>Axel</h2>
                    <br />
                    <p>This guy is such a failure lol, just sits in his
                        room and gets Mommy bear to bring pizza up to his
                        room... jk I'm lying Ax, don't boil in dms. He is
                        actually a Rust Expert (the language, not the game)
                    </p>
                    <br />
                    <button onClick={closeModal}>Close</button>
                </ReactModal>
            </div>
        </div>
    )
}

export default Person3;