import React from 'react'
import footer_video from './asset/images/footer_video.png'

export default function Just_default_section() {
    return (
        <div>
            <section >
                {/* <!--just default section-->lass="just_default_section"> */}
        <div class=" container">
            <div class="just_default_section_wrapper" >
            
                <div class="row">
                    <div class="col-sm-7">
                        <h3>JUST DEFAULT SECTION</h3>
                            <p>Applicake chocolate cake wafer toffee pie soufflé
                                 wafer Tart marshmallow wafer macaroon
                                cheesecake jelly. Gingerbread cookie soufflé sweet roll 
                                sweet roll jelly-o.Applicake chocolate cake wafer toffee pie 
                                souffléApplicake chocolate cake wafer toffee pie soufflé<br/><br/>Applicake chocolate cake wafer toffee pie
                                 soufflé wafer Tart marshmallow wafer macaroon
                                cheesecake jelly. Gingerbread cookie soufflé sweet roll sweet roll jApplicake chocolate cake wafer toffee 
                                pie souffléApplicake chocolate cake wafer toffee pie soufflé
                            </p>
                            {/* <!-- <p style="border:1px solid black;padding:2%">VISITE ME</p> --> */}
                            <button>VISIT ME</button>
                    
                    </div>
                    {/* <!-- <div  class="col-sm-"></div> --> */}
                    <div class="col-sm-5">
                        <img src={footer_video} width="90%" alt="footer_video "/>
                    </div>
                </div>
             </div>
        </div>
    </section>
        </div>
    )
}
