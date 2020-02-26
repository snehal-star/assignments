import React from 'react'

export default function Header() {
    return (
        <div>
            <div class="hero_slider wrapper">
        <div class="hero_slider__wrapper">
            <div class="hero_silder_nav container">
                <nav class="navbar navbar-expand-md">
                    
                    
                    <a class="navbar-brand" id="brand_name"> BLU<span>E</span>ASY </a> 
                    
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <i class="fas fa-bars"></i>
                    </button>

                    
                    <div class="collapse navbar-collapse " id="collapsibleNavbar">
                        <ul class="nav navbar-nav">
                            <li class="nav-item active"> <a class="active" href="#home"> HOME </a> </li>
                            <li class="nav-item"> <a class="nav-link" href="#Services"> SERVICES </a> </li>
                            <li class="nav-item"> <a class="nav-link" href="#features"> FEATURES </a> </li>
                            <li class="nav-item"> <a class="nav-link" href="#portfolio"> PORTFOLIO </a> </li>
                            <li class="nav-item"> <a class="nav-link" href="#Contact"> CONTACT </a> </li>
                        </ul>
                    </div>
                </nav>
            </div>
            
            <div class="center_heading">
                <p class="font-weight-lighter"> <span> "I'M LOOKING FOR THE UNEXPECTED. </span> </p> 
                <p class="font-weight-lighter"> <span> I'M LOOKING FOR THINGS I'VE NEVER SEEN BEFORE." </span> </p>
            </div>
            
        </div>
    </div> 
    
        </div>
    )
}
