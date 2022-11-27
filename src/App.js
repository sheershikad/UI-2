import './App.css';
import BookAppointment from './components/book-appointment/book-appointment';
import CopyRights from './components/copy-rights/copy-rights';
import Details from './components/details/details';
import Diseases from './components/diseases/diseases';
import DoctorTeam from './components/doctor-team/doctor-team';
import HappyPatients from './components/happy-patients/happy-patients';
import MeetOurPartners from './components/meet-our-partners/meet-our-partners';
import Nav from './components/nav/nav';
import OurDoctorTeam from './components/our-doctor-team/our-doctor-team';
import UpcomingEvents from './components/up-coming-events/up-coming-events';
import WhatWeDo from './components/what-we-do/what-we-do';

function App() {
  return (
    <div className="App">
      <Nav/>
      <DoctorTeam></DoctorTeam>
      <Diseases></Diseases>
      <div className='two-components'>
        <div className='whatwedo'><WhatWeDo></WhatWeDo></div>
        <div><BookAppointment></BookAppointment></div>
      </div>
      <UpcomingEvents></UpcomingEvents>
    <OurDoctorTeam></OurDoctorTeam>
    <HappyPatients></HappyPatients>
    <MeetOurPartners></MeetOurPartners>
      <Details></Details>
      <CopyRights></CopyRights>
    </div>
  );
}

export default App;
