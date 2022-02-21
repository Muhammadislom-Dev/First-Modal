import { useState } from 'react';
import '../Component/Calculator.css'

//images
import Project from './../assets/img/Muhammadislom.jpg'

function Calculator() {
    const [modal, setModal] = useState(false)
    
    const openModal = (e) =>{
      e.preventDefault()
      setModal(!modal)
    }
  
    const abdulla = (event) => {
      event.preventDefault()
      // const {name} = event.target;
      
      setModal(!modal)
  
      event.target[0].value =null;
      event.target[1].value =null;
  
        console.log(event.target[0].value)
    }
    
    return (
      <div className="App">
         <div className="page">
         <button className='button' onClick={openModal}>Modal Open</button>
         </div>
  
         <dialog className='dialog' open={modal}>
           <form className='form' onSubmit={abdulla}>
         <div className="form-floating">
              <input type="email" name='email'  className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
              <input type="password"name='password' className="form-controll"  id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
          </div>
          <button className="btn">
            Submit
          </button>
          </form>
         </dialog>
         {/* <div className="box">
           <img className='pictures' src={Project} alt="" />
         </div> */}
      </div>
    );
  }
export default Calculator;