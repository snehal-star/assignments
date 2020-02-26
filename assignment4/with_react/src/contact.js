import React from 'react'

export default function Contact() {
    return (
        <div>
            <section class="contact container-fluid">
                {/* <!--contact--> */}
        <div class="contact_wrapper container">
            <div class="row">
                <div class="col-md-12">
                        <h3>CONTACT</h3>
                </div>
                    
            </div>
            
            <div class="row">
                <div class="col-sm-6">
                    <label><h6></h6>Full name</label><br/>
                    <input type="text" />
                
                </div>
                <div class="col-sm-6 contact_info" ><p><br/><br/>Applicake chocolate cake waferApplicake
                     chocolate cake waferApplicake chocolate cake waferApplicake chocolate
                      cake wafer </p></div>
            </div>
            <div class="row">
                    <div class="col-sm-6">
                        <label>Email</label><br/>
                        <input type="text" />
                    
                    </div>
                    <div class="col-sm-6 contact_info"><p><br/>
                        Linda Newmam<br/>
                        W235 State Road 123<br/>
                        Mondovi, WI(Wisconsin) 9876-878787<br/>
                        (715)456-8787

                    </p>
                    </div>
                    
            </div>
            {/* <!--newwly added for text area--> */}
            <div class="row">
                <div class="col-md-12">
                    <p>Message</p>
                    <textarea></textarea>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-md-12"><button>Message</button></div>
                
            </div>
        </div>
    </section>
        </div>
    )
}
