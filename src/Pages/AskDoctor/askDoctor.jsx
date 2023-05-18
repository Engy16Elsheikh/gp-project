import React from "react";
import './Ask.css';
import axios from "axios";
import { useState } from "react";
export const Ask=()=>{
  const [selectedOption, setSelectedOption] = useState("");
  const [question, setQuestion] = useState("");
  const [titleQuestion, setTitleQuestion] = useState("");
  const [userEmail, setUserEmail] = useState("")
  const [selectedFile, setSelectedFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleTextChange = (event) => {
    setQuestion(event.target.value);
  }

  const handleTitleChange = (event) => {
    setTitleQuestion(event.target.value);
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const sendQuestion = async () => {
    const userQuestion={
        "title_question": titleQuestion,
        "department": selectedOption,
        "user_email": userEmail,
        "question": question,
        "selected_ile": selectedFile,
    }
    
    const response = await axios.post("http://localhost:8000/question", userQuestion);
    return response.data;
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    sendQuestion();
    setSuccess(true);
  }

    return(
      <>
      <div className="chat-page">
      <div className="chat-container">
      <div className="chat-header">
        <h2 className="h-ask">Ask Your Question</h2>
        <p className="p1-ask">Free Consultation</p>
        <p className="p2-ask">our Doctors here for your help and answering your question</p>
      </div>
      <div className="chat-body">
        <form onSubmit={handleSubmit}>
        <div className="title-department">
          <input className="question-title" type="text" placeholder="Question Title" value={titleQuestion} onChange={handleTitleChange} required></input>
          &nbsp; &nbsp;
      <select value={selectedOption} onChange={handleOptionChange} className="question-department">
        <option value="">Select a Department</option>
        <option value="Pediatrics">Pediatrics</option>
        <option value="Obstetrics and Gynecology">Obstetrics and Gynecology</option>
        <option value="Dermatology">Dermatology</option>
        <option value="Ophthalmology">Ophthalmology</option>
        <option value="Internal medicine">Internal medicine</option>
        <option value="Dentist">Dentist</option>
      </select>
        </div>
        <br />
        <div className="question-title">
                            <input value={userEmail} onChange={(newEmail) => setUserEmail(newEmail.target.value)} type="email" placeholder="Your Current E-mail" name="email" required></input>
        </div>
        <br />
        <div className="question-area">
      <textarea className="text-question-area" value={question} onChange={handleTextChange} placeholder="Enter Your Question" rows="6" cols="50" required/>
      </div>
      <br />
      <div className="upload-attachment">
      <input type="file" onChange={handleFileChange} />
      </div>
      <input type="submit" className="btn-ask" value="Send"></input>
        </form>
        
      </div>
      <div>
      {success && <p className="send-message">Question Send successfully Please make sure to check your email regularly as we will be sending the response !</p>}
      </div>
        </div>
        </div>
      </>
    )
}