import React from 'react'
import Header from './Header/Header';
import Footer from '../SignInPage/Footer/Footer'
import './Home.css';
import Content from './Content/Content';

function Home() {
  return (
    <div className='container-fluid hello mt-3 ms-2'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Home