import React from "react";
import sunaina from '../assets/sunaina.jpg'
import shaan from '../assets/shaan.jpeg'
import supriya from '../assets/supriya.jpg'
import bg from '../assets/bg.jpg'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Contact = () => {
    return (
        <><div style={{backgroundImage: `url(${bg})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat', }} >
 
 <div class="container">

     <div class="row">
        <h2 class="section-title" style={{color:'#0000!important'}}>Team</h2>
                       
         <div class="col-sm-6 col-md-4">

               <div class="team-item">
               
                   <img src={sunaina} class="team-img" alt="pic" />                   
                   <h3>Sunaina Rustagi</h3>            
                   <p>I'm a B.Tech in IT student at Maharaja Surajmal Institute of Technology who is simultaneously enrolled in the IIT, Madras' BS in Data Sciences. I am a graphic designer. I have been selected as the Google generation scholarship'22 and MLSA'22.</p>
                   <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='https://www.linkedin.com/in/sunaina-rustagi-48848b205/'>
                    <MDBIcon fab icon='linkedin' />
                    </MDBBtn>
                   
                    <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='https://github.com/sunaina-r0612'>
                    <MDBIcon fab icon='github' />
                    </MDBBtn>
             </div>
         </div> 
           
         <div class="col-sm-6 col-md-4">

               <div class="team-item">
               
                   <img src={shaan} class="team-img" alt="pic" />
                  
                   <h3>Shaan Goswami</h3>

                   <p>I am currently pursuing B.Tech. in IT at MSIT. I represented India at the Super Science High School Fair in Japan. I remained the head boy at my high school as well. I also recieved the BSF Rolling Trophy for Excellence in Extra Curricular Activities.</p>
               
                   <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='https://www.linkedin.com/in/shaan-goswami-01a757203/'>
                    <MDBIcon fab icon='linkedin' />
                    </MDBBtn>
                   
                    <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='https://github.com/notshaangoswami'>
                    <MDBIcon fab icon='github' />
                    </MDBBtn>
               </div>

         </div> 
         <div class="col-sm-6 col-md-4">

               <div class="team-item">
               
                   <img src={supriya} class="team-img" alt="pic" />
                  
                   <h3>Supriya Rai</h3>

                   <p>I'm a tech enthusiast having keen interest in software development. I'm a motivated student, always up for challenges, seeking opportunities to learn and grow in life.  I'm currently exploring Web Development and problem solving with DSA.</p>
                   <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='https://www.linkedin.com/in/supriya-rai-7532381bb'>
                    <MDBIcon fab icon='linkedin' />
                    </MDBBtn>
                   
                    <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='https://github.com/SupriyaRai75'>
                    <MDBIcon fab icon='github' />
                    </MDBBtn>
                   
               </div>

         </div> 
     
     </div> 
 
 </div> 
 </div>
        </>
    );
};

export default Contact;
