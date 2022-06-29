import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Content from './Content';
import SideMenu from './SideMenu';
import ImageSection from './ImageSection';
const HomePage = () => {
  return (
  <>
   <NavigationBar/>
   <div className="row">
   <SideMenu/>
  <div className="container" style={{justifyContent:"center", width:"70%", maxWidth:"unset"}}>
  <ImageSection/>
  </div>
   </div>
   <div className="container">
     <Content/>
   </div>
   <Footer/>
  </>
  )
}

export default HomePage