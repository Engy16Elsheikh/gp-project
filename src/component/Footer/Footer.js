import React, { useContext } from "react";
import 'https://kit.fontawesome.com/64d58efce2.js';
import { RefsContext } from "../../contexts/refs.context";
const Footer=()=>{
    const {refs}=useContext(RefsContext);
    const {contactRef}=refs;
   return(
    <footer ref={contactRef}>
         <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                     <h2>Address</h2>
                     <ul>
                        <li className="li-footer">
                            <a href="https://goo.gl/maps/nzaRDYVBN2yCHjm67" target="_blank" className="li-footer">9th-Street-Maadi-Cairo</a>
                        </li>
                        <li className="li-footer">
                            <a href="https://goo.gl/maps/haUrjFaB8XSUWzpq8" target="_blank" className="li-footer"> Eltayran-Nasr City-Cairo</a>
                        </li>
                     </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                <h2>Phones</h2>
                     <ul>
                        <li className="li-footer">9-Street-Maadi-Cairo
                            <ul>
                                <li className="li-footer">01237653981</li>
                                <li className="li-footer">28741974</li>
                            </ul>
                        </li>
                        <li className="li-footer">Eltayran-Nasr City-Cairo
                            <ul>
                                <li className="li-footer">01237653981</li>
                                <li className="li-footer">28741974</li>
                            </ul>
                        </li>
                        
                     </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                        <h2>E-mail</h2>
                        <ul>
                            <li  className="li-footer">
                        <a className="mailto li-footer" href="mailto:asmaaibrahim20199@gmail.com">You can mail us from here</a>
                        </li>
                        </ul>
                </div>
            </div>
        </div>
    </footer>
   )
}
export default Footer