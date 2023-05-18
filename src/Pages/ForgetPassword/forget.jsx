import { useState } from "react";
import './forget.css';
import { useNavigate } from "react-router-dom";
export const Forget = (props) => {
    const [code, setCode] = useState('');
    const nav=useNavigate()
    const onNavigateHandeler=()=>{
      nav(`/password`)
      }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <>
        <h2 className="h2-verify">Enter Your Verification Code</h2>
        <div className="code-container">
        <form onSubmit={handleSubmit}>
        <div className="forget-password">
            <input placeholder="Enter Your Code" className="code-ver" onChange={(e) => setCode(e.target.value)} required></input>
        </div>
        <input type="submit" value="Verify" className="btn-verify" onClick={onNavigateHandeler}></input>
        </form>
        </div>
        </>
    );
}