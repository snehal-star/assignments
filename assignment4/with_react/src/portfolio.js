import React from 'react'
import portfolio1 from './asset/images/portfolio1.png'
import portfolio2 from './asset/images/portfolio2.png'
import portfolio3 from './asset/images/portfolio3.png'
import portfolio4 from './asset/images/portfolio4.png'
import portfolio5 from './asset/images/portfolio5.png'
import portfolio6 from './asset/images/portfolio6.png'
import portfolio7 from './asset/images/portfolio7.png'
import portfolio8 from './asset/images/portfolio8.png'

export default function Portfolio() {
    return (
        <div>
            <section class="portfolio">
        {/* <!-- start --> */}
        <div class="container">
            <div class="portfolio_wrapper">
                    <div class="portfolio_wrapper_heading">
                        
                    </div>
                
                <div class="portfolio_wrapper_body">
                        <div class="flex-container">
                            
                        <div><img src={portfolio1} alt="portfolio1"/></div>
                        <div><img src={portfolio2} alt="portfolio2"/></div>
                        <div><img src={portfolio3} alt="portfolio3"/></div>
                        <div><img src={portfolio4} alt="portfolio4"/></div>
                        <div><img src={portfolio5} alt="portfolio5"/></div>
                        <div><img src={portfolio6} alt="portfolio6"/></div>
                        <div><img src={portfolio7} alt="portfolio7"/></div>
                        <div><img src={portfolio8} alt="portfolio8"/></div>
                        </div>
                    </div>
                    <div class="overlay">
                        <a href="#" >
                                <span class="glyphicon glyphicon-plus"></span>
                        </a>
                    </div>
            </div>
        </div>
    </section>
        </div>
    )
}
