import { useState } from "react";
import '.././Sublime/Sublime.css';
import No from '../../assets/img/no.png'

function Sublime(){
    const [modal, setModal] = useState(false)

    const openModal = (e) => {
        e.preventDefault()
        setModal(!modal)
    }

    return(
        <div className="sublime">
        <div className="container">
            <div className="page">
                <button className="sublime-button" onClick={openModal}>Submit</button>
            </div>

            <dialog open={modal} className="sublime-dialog" >
                <div className="sublime-page">
                    <div className="sublime-pic">
                        <img src={No} alt="" className="sublime-img" />
                    </div>
                    <p className="sublime-text">Do you really want to cancel your order?    </p>
                </div>

                <div className="sublime-page">
                <button className="sublime-btn" onClick ={() => setModal(!modal)}>
                  Back
                </button>
                </div>
            </dialog>
        </div>
    </div>
    )
}

export default Sublime;