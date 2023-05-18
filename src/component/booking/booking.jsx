import CardsContainer from '../cards-container/cards-container.component';
import './booking.css';
import React, { useState } from "react";
import { DoctorContext } from '../../contexts/doctor.context';
import { useContext } from 'react';
import axios from 'axios';


export const Booking = (props) => {
  const {Doctor}=useContext(DoctorContext);
  const [symptomsForm, setSymptomsForm] = useState([
    { id: 1, name: 'Chest Pain', isChecked: false },
    { id: 2, name: 'Vomiting', isChecked: false },
    { id: 3, name: 'Diarrhea', isChecked: false },
    { id: 4, name: 'abdominal pain', isChecked: false },
    { id: 5, name: 'headache', isChecked: false },
    { id: 6, name: 'fatigue', isChecked: false },
    { id: 7, name: 'nausea', isChecked: false },
    { id: 8, name: 'Runny nose', isChecked: false },
    { id: 9, name: 'Fast heart rate', isChecked: false },
    { id: 10, name: 'Spots and blisters', isChecked: false },
    { id: 11, name: 'Poor wound healing', isChecked: false },
    { id: 12, name: 'difficulty breathing', isChecked: false },
    { id: 13, name: 'Muscle or body aches', isChecked: false },
    { id: 14, name: 'Cough', isChecked: false },
    { id: 15, name: 'New loss of taste or smell', isChecked: false },
    { id: 16, name: 'Fever or chills', isChecked: false },
    { id: 17, name: 'Sore throat', isChecked: false }
  ]);

  const departments = [{ id: 1, name: 'Internal Medicine' }, { id: 2, name: 'Cardiology' }, { id: 3, name: 'Endocrinology' }];
  const doctors = [
    {
      "id": 1,
      "email": "nermeen33@gmail.com",
      "first_name": "nermeen",
      "last_name": "mohamed",
      "department": 1,
      "catigores": [
        "bones",
        "eyes"
      ],
      "image_name": "doc1",
      "department_name": "Endocrinology",
      "rating": 2

    },
    {
      "id": 2,
      "email": "youssiffayez2@gmail.com",
      "first_name": "youssif",
      "last_name": "fayez",
      "department": 2,
      "catigores": [
        "heart surgery",
        "legs surgery"
      ],
      "image_name": "doc2",
      "department_name": "Cardiology",
      "rating": 3
    },
    {
      "id": 3,
      "email": "engy@gmail.com",
      "first_name": "engy",
      "last_name": "medhat",
      "department": 2,
      "catigores": [
        "heart surgery",
        "legs surgery"
      ],
      "image_name": "doctor_rwsha",
      "department_name": "Endocrinology",
      "rating": 5
    },
    {
      "id": 4,
      "email": "asmaa@gmail.com",
      "first_name": "asmaa",
      "last_name": "ibrahim",
      "department": 2,
      "catigores": [
        "heart surgery",
        "legs surgery"
      ],
      "image_name": "as",
      "department_name": "Cardiology",
      "rating": 4
    },
    {
      "id": 5,
      "email": "tester@gmail.com",
      "first_name": "abdelmomen",
      "last_name": "ibrahim",
      "department": 2,
      "catigores": [
        "heart surgery",
        "legs surgery"
      ],
      "image_name": "aasdasd",
      "department_name": "Internal Medicine",
      "rating": 5
    }
  ];

  const [temperature, setTemperature] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const filterDoctors = doctors.filter(doctor => doctor.department_name === selectedDepartment);
  const [reservations, setReservations] = useState();

  const handleCheckboxChange = (event, index) => {
    const newSymptoms = [...symptomsForm];
    newSymptoms[index].isChecked = event.target.checked;
    setSymptomsForm(newSymptoms);
  }

  const checkedUserSymptoms = symptomsForm
  .filter((symptomsForm) => symptomsForm.isChecked === true)
  .map((symptomsForm) => symptomsForm.name);

  const bookSympString = JSON.stringify(checkedUserSymptoms);

  const [day, setDay] = useState('')
  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0]
  const [filterdHours, setFilterdHours] = useState(hours);
  const [selectedHour, setSelectedHour] = useState();
  console.log(filterdHours);
  const handleChange = (e) => {
    setDay(e.target.value);
  }
  const HandleClick = () => {
    const currentDate = new Date(day);
    const formatedDates = reservations.map((reservation) => reservation.reservation_time)
    const reservedDates = formatedDates.filter((date) => filterDates(new Date(date), currentDate))
    const reservedHours = reservedDates.map((date) => { const d = new Date(date); return (d.getHours()) });
    const t = hours.filter((hour) => !reservedHours.includes(hour));
    setFilterdHours(t);
  }
  const filterDates = (reservedDate, currentDate) => {
    return currentDate.getMonth() === reservedDate.getMonth() && currentDate.getDate() === reservedDate.getDate()
  }

  const createAppointment = async () => {
    const reserveData={
        "department": selectedDepartment,
        "doctor": selectedDoctor.id,
        "day": day,
        "hour": selectedHour,
        "symptoms": bookSympString,
    }
    
    const response = await axios.post("http://localhost:8000/booking", reserveData);
    return response.data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAppointment();
  }

  return (
    <div className='appointment-container'>
      <header className='header-appoint'>Booking</header>
      <div className='booking-content'>
        <div className='book-form'>
          <div className='book-row'>
            <div className='appointment-form form-wraper'>
              <form onSubmit={handleSubmit}>
                <div className='book-form-group'>
                  <select onChange={(e) => { setSelectedDepartment(e.target.value) }} id='dep' className='book-form-select book-form-control booking' placeholder='Select Department'>
                    {
                      departments.map(state => {
                        return <option key={state.id}>{state.name}</option>
                      })
                    }
                  </select>
                </div>
                <div className='book-form-group'>
                  <CardsContainer id={selectedDoctor} doctors={filterDoctors} setSelectedDoctor={setSelectedDoctor} />
                </div>
      <div>
      <div>
        <input type='date' className='booking' required value={day} onChange={handleChange} ></input>
      </div>
      <select value={selectedHour} onChange={(e)=>setSelectedHour(e.target.value)}>
        {
          filterdHours.map((hour) => <option value={hour}>{hour}</option>)
        }
      </select>
    </div>
                <div >
                  <input className='booking' type='' required placeholder='Temperature' value={temperature} onChange={(newTemperature) => setTemperature(newTemperature.target.value)}></input>
                </div>
                <p className='symptom-p'>Check Your Symptoms :</p>
                <div class="check-box-form">
                  {symptomsForm.map((symptom, index) => (
                    <div className="check-item-form" key={symptom.id}>
                      <input
                        type="checkbox"
                        checked={symptom.isChecked}
                        onChange={(event) => handleCheckboxChange(event, index)}
                      />
                      <label className='symptom-label'>{symptom.name}</label>
                    </div>
                  ))}
                </div>
                <button type='submit' className='book-btn'>Booking</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}