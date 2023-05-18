import DoctorCard from "../card/card.component";
import "./cards-container.styles.css"
import Slider from 'react-slick';
const CardsContainer = ({ doctors, setSelectedDoctor, id }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (

        <div>
            <Slider {...settings} className="slider-container">
                {
                    doctors.map((doctor, idx) => <DoctorCard doctor={doctor} key={idx} setSelectedDoctor={setSelectedDoctor} selectedId={id} />)
                }

            </Slider>
        </div>
    )
}
export default CardsContainer;