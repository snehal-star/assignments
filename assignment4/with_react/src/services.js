import React from 'react'
import coffee from './asset/images/coffee.png'
import instant from './asset/images/instant.png'
import serious from './asset/images/serious.png'
import frame from './asset/images/frame.png'

export default function services() {
    return (
        <div>
             <section className="services container-fluid">
        <div className="services_wrapper container">
            <div className="services_wrapper_title">
                <h3>SERVICES</h3>
            </div>
           
            <div className="services_wrapper_contents">
                
                <div className="row">
                        <div className="col-sm-3">
                                <img src={coffee} alt="seriousImg"/>
                                <br/><br/>
                            <h6>COFFEE</h6><br/>
                            
                            <p>Applicake chocolate cake wafer toffee pie 
                                soufflé wafer Tart marshmallow wafer macaroon. 
                                Applicake chocolate cake wafer toffee 
                                pie soufflé wafer Tart marshmallow wafer macaroon</p>
                        </div>
                    
                    <div className="col-sm-3">
                        <img src={instant} alt="instantImg"/>
                        <br/><br/>
                        <h6>INSTANT</h6><br/>
                        <p>Applicake chocolate cake wafer toffee pie soufflé 
                            wafer Tart marshmallow wafer macaroon. 
                            Applicake chocolate cake wafer toffee pie 
                            soufflé wafer Tart marshmallow wafer macaroon</p>
                    </div>

                    <div className="col-sm-3">
                            <img src={serious} alt="seriousImg"/>
                            <br/><br/>
                        <h6>SERIOUS</h6><br/>
                        
                        <p>Applicake chocolate cake wafer toffee pie 
                            soufflé wafer Tart marshmallow wafer macaroon. 
                            Applicake chocolate cake wafer toffee 
                            pie soufflé wafer Tart marshmallow wafer macaroon</p>
                    </div>
                    <div className="col-sm-3">
                        <img src={frame} alt="frameImg"/>
                        <br/><br/>
                        <h6>FRAME</h6><br/>
                        <p>Applicake chocolate cake wafer toffee 
                            pie soufflé wafer Tart marshmallow wafer macaroon. 
                            Applicake chocolate cake wafer toffee
                             pie soufflé wafer Tart marshmallow wafer macaroon
                        </p>
                    </div>
                </div>
            </div>

        </div>

    </section>
        </div>
    )
}
