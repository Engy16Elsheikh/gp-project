import {React, useState} from "react";
import './History.css'
import { useNavigate } from "react-router-dom";
import { useMutation } from 'react-query';
import axios from 'axios';

const History=(props)=>{
  const nav=useNavigate()
  const [medicalHistory, setMedicalHistory] = useState([
    { id: 1, name: 'Asthma', isChecked: false },
    { id: 2, name: 'Cancer', isChecked: false },
    { id: 3, name: 'Cardiac disease', isChecked: false },
    { id: 4, name: 'Diabetis', isChecked: false },
    { id: 5, name: 'Hypertention', isChecked: false },
    { id: 6, name: 'psychiatric disorder', isChecked: false },
    { id: 7, name: 'Epilepsy', isChecked: false },
    { id: 8, name: 'other', isChecked: false }
  ]);

  const [symptoms, setSymptoms] = useState([
    { id: 1, name: 'Chest Pain', isChecked: false },
    { id: 2, name: 'Respiratory', isChecked: false },
    { id: 3, name: 'Cardiac disease', isChecked: false },
    { id: 4, name: 'Cardio Vascular', isChecked: false },
    { id: 5, name: 'Hematological', isChecked: false },
    { id: 6, name: 'Lymphatic', isChecked: false },
    { id: 7, name: 'Neurological', isChecked: false },
    { id: 8, name: 'psychiatric', isChecked: false },
    { id: 9, name: 'Gastrointestinal', isChecked: false },
    { id: 10, name: 'Genitourinary', isChecked: false },
    { id: 11, name: 'Weight gain', isChecked: false },
    { id: 12, name: 'Weight loss', isChecked: false },
    { id: 13, name: 'Muscoloskeletal', isChecked: false },
    { id: 14, name: 'other', isChecked: false }
  ]);

  const [allergies, setAllergies] = useState('');
  const [currentlyMedication, setCurrentMedication] = useState('');
  const [consumeAlcohol, setConsumeAlcohol] = useState('');
  const [tobacco, setTobacco] =useState('');
  const [illegalDrugs, setIllegalDrugs] =useState('');
  const [bloodType, setBloodType] = useState('');

  const submitForm = useMutation((formData) =>
    axios.post('http://localhost:8000/', formData)
  );

  const handleCheckboxChange = (event, index) => {
    const newMedicalHistory = [...medicalHistory];
    newMedicalHistory[index].isChecked = event.target.checked;
    setMedicalHistory(newMedicalHistory);
  }

  const checkedHistoryNames = medicalHistory
  .filter((history) => history.isChecked === true)
  .map((history) => history.name);

  const historyString = JSON.stringify(checkedHistoryNames);

  const handleCheckboxChange2 = (event, index) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index].isChecked = event.target.checked;
    setSymptoms(newSymptoms);
  }

  const checkedSymptomsNames = symptoms
  .filter((symptoms) => symptoms.isChecked === true)
  .map((symptoms) => symptoms.name);

  const symptomString = JSON.stringify(checkedSymptomsNames);
  
  const handleRadioChange = (event) => {
    setCurrentMedication(event.target.value);
  }
  const handleRadioChange2 = (event) => {
    setAllergies(event.target.value);
  }
  const handleRadioChange3 = (event) => {
    setConsumeAlcohol(event.target.value);
  }
  const handleRadioChange4 = (event) => {
    setTobacco(event.target.value);
  }
  const handleRadioChange5 = (event) => {
    setIllegalDrugs(event.target.value);
  }

  const createHistory = async () => {
    const historyData={
        "blood_type": bloodType,
        "history": historyString,
        "symptoms": symptomString,
        "current-medicine": currentlyMedication,
        "allergy": allergies,
        "tobacco": tobacco,
        "illegal-drugs": illegalDrugs,
        "alcohol": consumeAlcohol
    }
    
    const response = await axios.post("http://localhost:8000/emr", historyData);
    return response.data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        createHistory();
        console.log(symptomString);
        console.log(historyString);
        nav(`/login`);
      }
    return(
      <form className="history-form" onSubmit={handleSubmit}>
        <h2>Medical History Form</h2>
        <div className="details">
        <div className="two-col">
        <div className="col1">
            <label htmlFor="field1">Blood Type :</label>
            <input className="input-history" id="field1" name="field1" type="text" value={bloodType} onChange={(newBlood) => setBloodType(newBlood.target.value)} required/>
        </div>
      </div>
    </div>
    <p>Check the conditions that apply to you or any member of your immediate relatives:</p>
    <div className='check-box'>
    <div className="checkbox-history">
       {medicalHistory.map((history, index) => (
        <div className="check-item" key={history.id}>
          <input
          className="input-history"
            type="checkbox"
            checked={history.isChecked}
            onChange={(event) => handleCheckboxChange(event, index)}
          />
          <label>{history.name}</label>
          </div>
          
             ))}
    </div>
    </div>
    <p>Check the symptoms that you' re currently experiencing:</p>
    <div className="check-box">
    <div className="check-box">
    {symptoms.map((symptom, index) => (
        <div className="check-item" key={symptom.id}>
          <input
          className="input-history"
            type="checkbox"
            checked={symptom.isChecked}
            onChange={(event) => handleCheckboxChange2(event, index)}
          />
          <label>{symptom.name}</label>
          </div>
          ))}
    </div>
    </div>
    <p>Are you currently taking any medication?</p>
    <div className="radio-style">
    <input
    className="input-history"
        type="radio"
        id="yes"
        name="currentMedication"
        value="yes"
        checked={currentlyMedication === "yes"}
        onChange={handleRadioChange}
      />
      <label htmlFor="yes">Yes</label>
      &nbsp; &nbsp; &nbsp;
      <input
      className="input-history"
        type="radio"
        id="no"
        name="currentMedication"
        value="no"
        checked={currentlyMedication === "no"}
        onChange={handleRadioChange}
      />
      <label htmlFor="no">No</label>
    </div>
    <p>Do you have any medication allergies?</p>
    <div className="radio-style">
    <input
    className="input-history"
        type="radio"
        id="yes"
        name="allergies"
        value="yes"
        checked={allergies === "yes"}
        onChange={handleRadioChange2}
      />
      <label htmlFor="yes">Yes</label>
      &nbsp; &nbsp; &nbsp;
      <input
      className="input-history"
        type="radio"
        id="no"
        name="allergies"
        value="no"
        checked={allergies === "no"}
        onChange={handleRadioChange2}
      />
      <label htmlFor="no">No</label>
      &nbsp; &nbsp; &nbsp;
      <input
      className="input-history"
        type="radio"
        id="not sure"
        name="allergies"
        value="not sure"
        checked={allergies === "not sure"}
        onChange={handleRadioChange2}
      />
      <label htmlFor="not sure">Not sure</label>
    </div>
    <p> Do you use any kind of tobacco or have you ever used them?</p>
    <div className="radio-style">
    <input
    className="input-history"
        type="radio"
        id="yes"
        name="tobacco"
        value="yes"
        checked={tobacco === "yes"}
        onChange={handleRadioChange4}
      />
      <label htmlFor="yes">Yes</label>
      &nbsp; &nbsp; &nbsp;
      <input
      className="input-history"
        type="radio"
        id="no"
        name="tobacco"
        value="no"
        checked={tobacco === "no"}
        onChange={handleRadioChange4}
      />
      <label htmlFor="no">No</label>
    </div>
    <p>Do you use any kind of illegal drugs or have you ever used them?</p>
    <div className="radio-style">
    <input
    className="input-history"
        type="radio"
        id="yes"
        name="illegal drugs"
        value="yes"
        checked={illegalDrugs === "yes"}
        onChange={handleRadioChange5}
      />
      <label htmlFor="yes">Yes</label>
      &nbsp; &nbsp; &nbsp;
      <input
      className="input-history"
        type="radio"
        id="no"
        name="illegal drugs"
        value="no"
        checked={illegalDrugs === "no"}
        onChange={handleRadioChange5}
      />
      <label htmlFor="no">No</label>
    </div>
    <p>How often do you consume alcohol?</p>
    <div className="radio-style">
    <input
    className="input-history"
        type="radio"
        id="daily"
        name="consumeAlcohol"
        value="daily"
        checked={consumeAlcohol === "daily"}
        onChange={handleRadioChange3}
      />
      <label htmlFor="daily">Daily</label>
      &nbsp; &nbsp; &nbsp;
      <input
      className="input-history"
        type="radio"
        id="weekly"
        name="consumeAlcohol"
        value="weekly"
        checked={consumeAlcohol === "weekly"}
        onChange={handleRadioChange3}
      />
      <label htmlFor="weekly">Weekly</label>
      &nbsp; &nbsp; &nbsp;
      <input
      className="input-history"
        type="radio"
        id="monthly"
        name="consumeAlcohol"
        value="monthly"
        checked={consumeAlcohol === "monthly"}
        onChange={handleRadioChange3}
      />
      <label htmlFor="monthly">Monthly</label>
      &nbsp; &nbsp; &nbsp;
      <input
      className="input-history"
        type="radio"
        id="ossasionly"
        name="consumeAlcohol"
        value="ossasionly"
        checked={consumeAlcohol === "ossasionly"}
        onChange={handleRadioChange3}
      />
      <label htmlFor="ossasionly">Ossasionly</label>
      &nbsp; &nbsp; &nbsp;
      <input
      className="input-history"
        type="radio"
        id="never"
        name="consumeAlcohol"
        value="never"
        checked={consumeAlcohol === "never"}
        onChange={handleRadioChange3}
      />
      <label htmlFor="never">Never</label>
    </div>
    <input type="submit" value="Submit" className="button solid"  ></input>
  </form>
    )
}
export default History;