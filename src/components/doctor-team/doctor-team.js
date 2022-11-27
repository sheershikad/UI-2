import "./doctor-team.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function DoctorTeam(){
    return(
        <div className="doctorteam">
            <Carousel>
            <div className="doctor-team">
            <div className="doctor-team-heading"><h2>Meet our Doctor's Team</h2></div>
            <div className="doctor-team-paragraph"><p>What does a doctor treat?
A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.</p></div>
            <div className="doctor-team-images">
            <img src="./images/doc2.png" alt=""/>
            <img src="./images/doc4.png" alt=""/>
            <img src="./images/doc3.png" alt=""/>
            <img src="./images/doc.png" alt=""/>
            </div>
        </div>

        <div className="doctor-team">
            <div className="doctor-team-heading"><h2>Meet our Doctor's Team</h2></div>
            <div className="doctor-team-paragraph"><p>What does a doctor treat?
A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.</p></div>
            <div className="doctor-team-images">
            <img src="./images/doc3.png" alt=""/>
            <img src="./images/doc2.png" alt=""/>
            <img src="./images/doc.png" alt=""/>
            <img src="./images/doc4.png" alt=""/>
            </div>
        </div>

        <div className="doctor-team">
            <div className="doctor-team-heading"><h2>Meet our Doctor's Team</h2></div>
            <div className="doctor-team-paragraph"><p>What does a doctor treat?
A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.</p></div>
            <div className="doctor-team-images">
            <img src="./images/doc.png" alt=""/>
            <img src="./images/doc2.png" alt=""/>
            <img src="./images/doc3.png" alt=""/>
            <img src="./images/doc4.png" alt=""/>
            </div>
        </div>

        <div className="doctor-team">
            <div className="doctor-team-heading"><h2>Meet our Doctor's Team</h2></div>
            <div className="doctor-team-paragraph"><p>What does a doctor treat?
A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health.</p></div>
            <div className="doctor-team-images">
            <img src="./images/doc3.png" alt=""/>
            <img src="./images/doc4.png" alt=""/>
            <img src="./images/doc2.png" alt=""/>
            <img src="./images/doc.png" alt=""/>
            </div>
        </div>
            </Carousel>
           
        </div>
        
    )
}


export default DoctorTeam;