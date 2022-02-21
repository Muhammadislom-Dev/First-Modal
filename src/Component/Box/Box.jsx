import { useState } from "react";
import '../Box/Box.css'
import Ok from '../../assets/img/ok.jpg'

function Box(){
    const [modal, setModal] = useState(false)

    const openModal = (e) =>{
        e.preventDefault()
        setModal(!modal)
    }

    return(
        <div className="Box">
            <div className="container">
                <div className="page">
                    <button className="box-button" onClick={openModal}>Submit</button>
                </div>

                <dialog open={modal} className="box-dialog" >
                    <div className="box-page">
                        <div className="box-pic">
                            <img src={Ok} alt="" className="box-img" />
                        </div>
                        <p className="box-text">Your order has been accepted. We will contact you soon</p>
                    </div>

                    <div className="Box-page">
                    <button className="box-btn" onClick ={() => setModal(!modal)}>
                      Back
                    </button>
                    </div>
                </dialog>
            </div>
        </div>
    )
}



export default Box;