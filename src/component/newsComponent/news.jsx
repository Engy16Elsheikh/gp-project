import './news.css';
import 'https://kit.fontawesome.com/64d58efce2.js';
import Firstrep from '../../Assets/report1.jpeg';
import Secrep from '../../Assets/report2.jpeg';
import Thirdrep from '../../Assets/report3.jpeg';
import Drf from '../../Assets/dr-icon.jpeg';
import Drs from '../../Assets/dr2.jpeg';
import Drt from '../../Assets/dr3.jpeg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const News = (props) => {
    const nav2 =useNavigate();
    const onNavigate2=()=>{
        nav2(`/firstArticle`)
    }
    return(
        <>
        <div className="news-title">
            <p className="p-news">Our Latest News</p>
        </div>
        <div className='news-content'>
            <div className='first-new'>
                <div className='img-report'>
                <img src={Firstrep} alt=''></img>
                </div>
                <div className='new-description'>
                    <ul className='post-info'>
                        <li className='author'>
                            <img src={Drf} alt=''></img>
                            <span>Jilan deo</span>
                        </li>
                        <li className='date'>
                            <i className='far fa-calendar-alt'></i>
                            21 July 2021
                        </li>
                    </ul>
                    <h5 className='post-title'>
                        In this hospital there are special surgeon
                    </h5>
                    <button className='read-more' onClick={onNavigate2}>
                        Read More
                        <i className='btn-icon-bx fas fa-chevron-right'></i>
                    </button>
                </div>
            </div>
            <div className='second-new'>
                <div className='img-report'>
                <img src={Secrep} alt=''></img>
                </div>
                <div className='new-description'>
                    <ul className='post-info'>
                        <li className='author'>
                            <img src={Drs} alt=''></img>
                            <span>Peter Packer</span>
                        </li>
                        <li className='date'>
                            <i className='far fa-calendar-alt'></i>
                            20 July 2021
                        </li>
                    </ul>
                    <h5 className='post-title'>
                        Can you get a diflucan prescription online?
                    </h5>
                    <button className='read-more' onClick={onNavigate2}>
                        Read More
                        <i className='btn-icon-bx fas fa-chevron-right'></i>
                    </button>
                </div>
            </div>
            <div className='third-new'>
                <div className='img-report'>
                <img src={Thirdrep} alt=''></img>
                </div>
                <div className='new-description'>
                    <ul className='post-info'>
                        <li className='author'>
                            <img src={Drt} alt=''></img>
                            <span>Sonar Moyna</span>
                        </li>
                        <li className='date'>
                            <i className='far fa-calendar-alt'></i>
                            19 July 2021
                        </li>
                    </ul>
                    <h5 className='post-title'>
                        Why is skin surgeon considered underrated
                    </h5>
                    <button className='read-more' onClick={onNavigate2}>
                        Read More
                        <i className='btn-icon-bx fas fa-chevron-right'></i>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}