import Firstimg from '../../Assets/pic 1.jpeg';
import Secondimg from '../../Assets/pic-2.jpeg';
import Thirdimg from '../../Assets/pic-3.jpeg';
import { useContext } from 'react';
import './aboutUs.css';
import 'https://kit.fontawesome.com/64d58efce2.js';
import { RefsContext } from '../../contexts/refs.context';

export const Aboutus = () => {
    const {refs}=useContext(RefsContext);
    const {aboutRef}=refs;
    return(
        <div className='aboutus-container' ref={aboutRef}>
        <div className='flo'>
        <div className='flo-col'>
        <div className="image-area">
            <ul className='ul-about'>
                <li className='li-about'>
                    <img className="image-1" src={Firstimg} alt=''></img>
                </li>
                <li className='li-about'>
                    <img className="image-2" src={Secondimg} alt=''></img>
                </li>
                <li className='li-about'>
                    <img className="image-3" src={Thirdimg} alt=''></img>
                </li>
                <li className='li-about'>
                    <div className='year-exp'>
                        20
                        <span>Year Experience</span> 
                    </div>
                </li>
            </ul>
        </div>
        </div>
        <div className='flo-col'>
            <div className='about-heading'>
                <h2 className='about-title'>About Us</h2>
                <h6 className='about-title2'>The Great Place Of Medical Hospital Center</h6>
                <p className='p-about'>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
            </div>
            <div className='flo'>
                <div className='flo-col'>
                    <div className='feature1'>
                        <div className='icon1'>
                            <span className='fa fa-ambulance'></span>
                            <span className='icon-content'>Emergency Help</span>
                        </div>
                    </div>
                    <div className='feature2'>
                        <div className='icon2'>
                            <span className='fas fa-user-md'></span>
                            <span className='icon-content'>Qualified Doctors</span>
                        </div>
                    </div>
                    <div className='feature3'>
                        <div className='icon3'>
                            <span className='fa fa-hospital'></span>
                            <span className='icon-content'>Best Professionals</span>
                        </div>
                    </div>
                    <div className='feature4'>
                        <div className='icon4'>
                            <span className='fa fa-pills'></span>
                            <span className='icon-contents'>Medical Treatment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}