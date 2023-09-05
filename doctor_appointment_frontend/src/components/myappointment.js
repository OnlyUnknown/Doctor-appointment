import '../Styling/myappointment.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments } from '../Redux/feature/appointmentSlice';
import { useUser } from './UserContext';
  
function MyAppointment() {
  const { currentUser } = useUser();
  const appointment = useSelector((state) => state.appointment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAppointments(currentUser.id));
  }, [dispatch]);
  return (
    <section id="main">

      <h1 className="text-3xl font-bold">My Appointments</h1>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>City</th>
              <th>Date</th>
            </tr>
          </thead>
          {appointment.loading && <div>Loading...</div>}
          {!appointment.loading && appointment.error ? (
            <div>
              Error
              {appointment.error}
            </div>
          ) : null}
          {!appointment.loading && appointment.appointments.length && currentUser ? (
            <tbody>
              {appointment.appointments.map((app) => (

                <tr key={app.id}>
                  <td>{app.doctor.name}</td>
                  <td>{app.city}</td>
                  <td>{app.appontment_date}</td>
                </tr>

              ))}
            </tbody>

          ) : (
            <div>There is no appointments yet or you haven't logged in yet</div>
          )}

        </table>
      </div>

    </section>
  );
}

export default MyAppointment;
