import React from 'react'
import './App2.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import {RiInstagramLine} from "react-icons/ri";


function App2() {
  return (
    
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <div class="container-fluid">
    <span class="navbar-brand " href="#">Coding </span>
    <span class="navbar-brand text-primary" href="#">Addict</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <div class="navbar-nav text-center">
        <div class="nav-item">
          <span class="nav-link text-center" href="#">Home</span>
        </div>
        <div class="nav-item">
          <span class="nav-link text-center" href="#">About</span>
        </div>
        <div class="nav-item">
          <span class="nav-link text-center" href="#">Projects</span>
        </div>
        <div class="nav-item">
          <span class="nav-link text-center" href="#">Contact</span>
        </div>
        <div class="nav-item">
          <span class="nav-link text-center" href="#">Profile</span>
        </div>
        

      </div>
      <FaFacebook className='qw2'/>
  <AiFillTwitterCircle className='qw3'/>
  <IoLogoLinkedin className='qw3'/>
  <RiInstagramLine className='qw1'/>
    </div>
  </div>
  
</nav>

    </div>
  )
}

export default App2