import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'
function Banner() {
    return (
        <Carousel className='mt-3'>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Health Care</h3>
                    <p>Health Care facilities for Everyone</p>
                </Carousel.Caption>
                <img
                    className="d-block w-100 carImg"
                    src="https://s3.amazonaws.com/utep-uploads/wp-content/uploads/online-regis-college/2019/11/26092224/Types-of-Health-Care-Facilities.jpg"
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Intensive Care</h3>
                    <p>We offer intensive Care ICU for your closest one</p>
                </Carousel.Caption>

                <img
                    className="d-block w-100 carImg"
                    src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/04/icu.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Facilities</h3>
                    <p>We offer all modern facilities for our patient </p>
                </Carousel.Caption>

                <img
                    className="d-block w-100 carImg"
                    src="https://www.rasmussen.edu/-/media/images/blogs/school-of-health-sciences/types-of-healthcare-facilities.jpg?la=en&hash=F7CF957518B3FF2FE131CEC40394423726172D3F"
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;