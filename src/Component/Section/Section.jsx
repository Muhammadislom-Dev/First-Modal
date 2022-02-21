import { useState } from 'react';
import '../Section/Section.css'
import Frontend from '../../assets/img/frontend.jpg'
import Android from '../../assets/img/android.jpg'
import Data from '../../assets/img/data-analistic.jpg'
import FullStack from '../../assets/img/fullstack.jpg'



function Section() {
    const [modal, setModal] = useState(false)

    const openModal = (e) =>{
        e.preventDefault()
        setModal(!modal)
    }


    return(
        <div className="section">
            <div className="container">
                <div className="page">
                    <button className="section-button" onClick={openModal}>My skill</button>
                </div>
            </div>

            <dialog open={modal} className='section-dialog'>
                <h2 className="section-name">My accomplishments in 2022 so far</h2>

                <div  className="section-page">
                    <img src={Frontend} alt="" className='section-img' />
                    <img src={Data} alt="" className='section-img' />
                    <img src={Android} alt="" className='section-img' />
                    <img src={FullStack} alt="" className='section-img' />
                </div>

                <button className="section-btn" onClick ={() => setModal(!modal)}>
                    Close
                </button>
            </dialog>
        </div>
    )
}


export default Section;