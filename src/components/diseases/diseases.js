import "./diseases.css";

function Diseases(){
    return(
        <div className="diseases">
        <div className="disease">
            <div className="disease-head">
                <div className="disease-title">
                    <h6>Diabetes and Obesity Counseling</h6>
                </div>
                <div className="disease-logo">
                <i className="fa fa-heartbeat"></i>
                </div>
            </div>
            <div className="disease-discription">
                <p>A diabetes and obesity counseling session may involve discussing the individual’s weight, diet, and physical activity level throughout the time.</p>
            </div>
            <div className="disease-button">
            <button className="button">Read More</button>
            </div>
            <hr></hr>
        </div>
        <div className="disease">
        <div className="disease-head">
                <div className="disease-title"><h6>Obstetrics and Gynaecology</h6></div>
                <div className="disease-logo">
                <i className="fas fa-first-aid"></i>
                </div>
            </div>
            <div className="disease-discription">
                <p>Obstetrics and gynaecology are two medical specialties that focus on the female reproductive system. Together, they are often referred to as OB/GYN.</p>
            </div>
            <div className="disease-button">
            <button className="button">Read More</button>
            </div>
            <hr></hr>
        </div>
        <div className="disease">
        <div className="disease-head">
                <div className="disease-title"><h6>Surgical and Medical oncology</h6></div>
                <div className="disease-logo">
                <i className="fa fa-wheelchair"></i>
                </div>
            </div>
            <div className="disease-discription">
                <p>Medical oncology is the branch of medicine that deals with the use of chemotherapy, radiation, and other treatments to destroy cancer cells.</p>
            </div>
            <div className="disease-button">
            <button className="button">Read More</button>
            </div>
            <hr></hr>
        </div>
        </div>
    )
}

export default Diseases;