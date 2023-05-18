import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.styles.css"

const DoctorCard = ({ doctor, setSelectedDoctor, selectedId }) => {
    const { first_name, last_name, department_name, image_name, rating, id } = doctor;
    const stars = [1, 2, 3, 4, 5];
    const color = id === selectedId ? "success" : "dark";
    const textbutton = id === selectedId ? "Booked" : "Book";
    const getImage = () => {
        try {
            return require(`../../Assets/${image_name}.jpg`)
        }
        catch {
            return require("../../Assets/defaiultjpg.jpg")
        }
    }
    return (
        <Card className='card'>
            <Card.Img variant="top" src={getImage()} />
            <Card.Body >
                <Card.Title >{first_name} {last_name}</Card.Title>
                <Card.Text>
                    Department : {department_name}
                    <br />
                    <br />
                    Rating : {
                        stars.map((rate) => {
                            const golden = rating > rate ? "gold" : "";
                            return <i key={rate} className="fa fa-star" aria-hidden="true" style={{ color: golden }}></i>;
                        })}


                </Card.Text>
                <Button variant={color} style={{ fontSize: "15px" }} onClick={() => setSelectedDoctor(id)}>{textbutton}</Button>
            </Card.Body>
        </Card>
    )
}
export default DoctorCard;