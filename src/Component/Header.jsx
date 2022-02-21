import { useState } from "react";
import '../Component/Header.css'
import Visa from './../assets/img/visa.jpg'
import Paypal from './../assets/img/paypal.jpg'
import Yoomoney from './../assets/img/yoomoney.jpg'
import Payme from './../assets/img/payme.jpg'


function Header() {
    const [modal, setModal] = useState(false)

    const openModal = (e) =>{
        e.preventDefault()
        setModal(!modal)
    }

    // const todo = (event) => {
    //     event.preventDefault()

    //     setModal(!modal)

    //     // event.target[0].value=null;
    //     // event.target[1].value=null;
    //     // event.target[2].value=null;
    //     // event.target[3].value=null;
        
    //     console.log(event.target[0].value)
    // }

    return (
        <div className="header">
            <div className="container">
                <div className="page">
                    <button className="header-button" onClick={openModal}>Pay</button>
                </div>

                <dialog open={modal} className="header-dialog">
                    <div> 
                    <h2 className="header-name">Choose the type of payment</h2>
                    <div className="header-page">
                        <p className="header-text">General payment type: $1500</p>
                        <p className="header-text">30% of the amount: $450</p>
                    </div>
                    <p className="header-texts">The final amount <b> $450 </b></p>

                    <div className="header-box">
                        <div className="header-visa">
                            <p className="header-textss">Pay by  <b> Visa </b></p>
                            <img src={Visa} alt="" className="header-img" />
                        </div>
                        <div className="header-visa">
                            <p className="header-textss">Pay by  <b> Paypal </b></p>
                            <img src={Paypal} alt="" className="header-img" />
                        </div>
                        <div className="header-visa">
                            <p className="header-textss">Pay by  <b> Payme </b></p>
                            <img src={Payme} alt="" className="header-img" />
                        </div>
                        <div className="header-visa">
                            <p className="header-textss">Pay by  <b> Yoomoney </b></p>
                            <img src={Yoomoney} alt="" className="header-img" />
                        </div>
                    </div>
                    <button className="header-btn" onClick={() => setModal(!modal)}>
                       Buy Now
                    </button>
                </div> 
                </dialog>
            </div>
        </div>
    )
}

export default Header;