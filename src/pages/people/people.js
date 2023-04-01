
import Person1 from '../../components/peopleCards/person1';
import Person2 from '../../components/peopleCards/person2';
import Person3 from '../../components/peopleCards/person3';
import Person4 from '../../components/peopleCards/person4';
import Person5 from '../../components/peopleCards/person5';
import Person6 from '../../components/peopleCards/person6';
import Header from '../../components/header/header';
import './people.css';

function people() {
    return (
        <div className='people-body'>
            <Header />
            <div>
                <div className='people-title'>
                    <p className='people-title-text people-title-top'>
                        My best
                    </p>
                    <p className='people-title-text2'>
                        Friends
                    </p>
                    <p className='people-title-text'>
                        forever and
                    </p>
                    <p className='people-title-text2'>
                        ever (jk)
                    </p>
                </div>
                <div className='people-container'>
                    <Person1 />
                    <Person2 />
                    <Person3 />
                    <Person4 />
                    <Person5 />
                    <Person6 />
                </div>
            </div>
        </div>
    );
}

export default people;