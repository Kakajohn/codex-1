import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import './contact.css'
const Contact = () => {
  return (
   <>
   <NavigationBar/>
    <div className="container">
      <div className="row">
        <div className="card" id='contactForm'>
        <form style={{    width: "30%", top: "8rem", transform:" translate(100%)"}}>
            <label for="fname">'Ονομα</label>
            <input type="text" id="fname" name="fname" placeholder='Όνομα'/>
            <label for="lname">Επίθετο</label>
            <input type="text" id="lname" name="lname" placeholder='Επίθετο'/>
            <label for="lname">Μήνυμα</label>
            <input type="text" id="lname" name="lname" placeholder='...'/>
            <button className="btn btn-dark" id='contactButton' href="mailto:gkakazianes@gmail.com" style={{margin:"2em"}}>Send</button>
         </form>
        </div>
      </div>
    </div>
  {/* <Footer/> */}
   </>
  )
}

export default Contact