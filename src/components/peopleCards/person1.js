import './person1.css';
import ReactModal from 'react-modal';
import { useState } from 'react';

function Person1() {

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
            <div class="card">
                <div class="card-border-top">
                </div>
                <div class="img">
                    <img
                        className='car-pics'
                        src="https://cdn.discordapp.com/attachments/392231482875445258/1081312472671191081/ethic_2.jpg"
                        alt="cover">
                    </img>
                </div>
                <span>
                    Ethics
                </span>
                <p class="job">
                    Full time Failure (jk)
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
                            padding: '3%',
                            marginLeft: '25%',
                            width: '50%',
                            height: '50%',
                            color: 'white',
                            background: 'black'
                        }
                      }}
                >
                    <h2>Ethics</h2>
                    <p>where the nocco am i</p>
                    <button onClick={closeModal}>Close</button>
                </ReactModal>

            </div>
        </div>
    )
}

export default Person1;