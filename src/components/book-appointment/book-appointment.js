import "./book-appointment.css";
function BookAppointment() {
  return (
    <div className="book-appointment">
      <div className="appointment-title"><h5>Book an Appointment</h5></div>
      <div className="appointment">
        <div className="appointment-form">
        <input type="text" placeholder="Select department"/>
        <br></br>
        <input type="text" placeholder="Full Name (required)"/>
        <br></br>
        <input type="text" placeholder="Phone (required)"/>
        <br></br>
        <input type="text" placeholder="Email (required)"/>
        <br></br>
        <input type="text" placeholder="DD-MM-YYYY"/>
        <br></br>
        <br></br>
        <button className="button">Read More</button>
        </div>
        <div className="appointment-image">
            <img src="./images/appointment.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
