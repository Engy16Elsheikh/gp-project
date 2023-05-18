import { useState } from "react";
import './forget.css';
import { useNavigate } from "react-router-dom";
export const Email = (props) => {
    const [email, setEmail] = useState('');
    const nav=useNavigate()
    const onNavigateHandeler=()=>{
      nav(`/forget`)
      }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <>
        <h2 className="h2-verify">Enter Your Email</h2>
        <div className="code-container">
        <form onSubmit={handleSubmit}>
        <div className="forget-password">
            <input type="email" placeholder="Enter Your E-mail" className="code-ver" onChange={(e) => setEmail(e.target.value)} required></input>
        </div>
        <input type="submit" value="Send" className="btn-verify" onClick={onNavigateHandeler}></input>
        </form>
        </div>
        </>
    );
}