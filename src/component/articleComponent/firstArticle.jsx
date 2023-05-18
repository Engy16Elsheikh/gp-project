import './article.css';
import Articleimg from '../../Assets/article.jpg';
import Drf from '../../Assets/dr-icon.jpg';

export const Firstarticle = (props) => {
    return(
        <>
        <div className='article-image'>
            <img src={Articleimg} alt=''></img>
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
                    <h2 className='post-title2'>
                        In this hospital there are special surgeon.
                    </h2>
        </div>
        <div className='article-paragraph'>
            <p>You just need to enter the keyword and select the keyword type to 
                generate a list of 6 title ideas and suggestions. If you’re not 
                satisfied with the results, you can always hit the refresh button 
                to generate a new list of unique titles.
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                . Lorem Ipsum has been the industry's standard dummy text ever since 
                the 1500s, when an unknown printer took a galley of type and scrambled 
                it to make a type specimen book.
            </p>
            <p>You just need to enter the keyword and select the keyword type to 
                generate a list of 6 title ideas and suggestions. If you’re not 
                satisfied with the results, you can always hit the refresh button to 
                generate a new list of unique titles.
            </p>
            <p>It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was 
                popularised in the 1960s with the release of Letraset sheets containing
                 Lorem Ipsum passages, and more recently with desktop publishing 
                 software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        </>
    );
}