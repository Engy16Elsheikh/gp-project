import './booking.css';
import React, {useState} from "react";

export const Booking = (props) => {
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
    
    const departments = [{id:1, name:'Internal Medicine'}, {id:2, name:'Cardiology'}, {id:3, name:'Endocrinology'}];
    const doctors = [{first_name:'Asmaa', department_name:'Internal Medicine'},
    {first_name:'Engy', department_name:'Internal Medicine'},{first_name:'Youssef', department_name:'Cardiology'},
    {first_name:'Nada', department_name:'Cardiology'},{first_name:'Nada', department_name:'Endocrinology'}];

     const [temperature, setTemperature] = useState();
     const [selectedDepartment, setSelectedDepartment] = useState('');
     const [selectedDoctor, setSelectedDoctor] = useState('');
     const filterDoctors = doctors.filter(doctor => doctor.department_name===selectedDepartment);

     const handleCheckboxChange = (event, index) => {
        const newSymptoms = [...symptomsForm];
        newSymptoms[index].isChecked = event.target.checked;
        setSymptomsForm(newSymptoms);
      }
     const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
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
            {selectedDepartment && <select onChange={(e) => { setSelectedDoctor(e.target.value) }} className='book-form-select book-form-control booking'>
                {
                    filterDoctors.map((doctor, idx) => {
                        return <option key={idx}>{doctor.first_name}</option>
                    })
                }
            </select>}
            </div>
            <div>
            <input type='date' className='booking' required></input>
            </div>
            <div className='book-form-group'>
                <input type='time' className='book-form-time booking' required></input>
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