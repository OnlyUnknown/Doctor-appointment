import "../Styling/myappointment.css"
import { fetchAppointments } from "../Redux/feature/appointmentSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function MyAppointment() {
  const appointment = useSelector((state) => state.appointment)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAppointments())
  }, [])
  return (
    <section id="main">
     
      <h1>My Appointments</h1>
      <div class="tableContainer">
  <table>
    <thead>
      <tr>
        <th>Doctor Name</th>
        <th>Speciality</th>
        <th>City</th>
        <th>Date</th>
      </tr>
    </thead>
    {appointment.loading && <div>Loading...</div>}
      {!appointment.loading && appointment.error? <div>Error {appointment.error}</div> : null}
      {!appointment.loading && appointment.appointments.length ? (
        <tbody>
      {appointment.appointments.map((app) => (
        
        <tr>
          {console.log(app)}
            <td>{app.name}</td>
            <td>{app.username}</td>
            <td>{app.address.city}</td>
            <td>{app.address.zipcode}</td>
        </tr>
            
          ))}
          </tbody>
        
      ) : null}
   
  </table>
</div>

    </section>
  );
}

export default MyAppointment;
