import { useState } from "react";
import './forget.css';
import { useNavigate } from "react-router-dom";
const Password=()=>{
    const [newPassword, setNewPassword] = useState('');
    const nav=useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    const onNavigateHandeler=()=>{
      nav(`/login`)
      }
    return(
        <>
        <h2 className="h2-verify">Set New Password</h2>
        <div className="code-container">
        <form onSubmit={handleSubmit}>
        <div className="forget-password">
            <input type="password" placeholder="Enter Your New Password" className="code-ver" onChange={(e) => setNewPassword(e.target.value)} required></input>
        </div>
        <input type="submit" value="Reset Password" className="btn-verify" onClick={onNavigateHandeler}></input>
        </form>
        </div>
        </>
    );
}
export default Password