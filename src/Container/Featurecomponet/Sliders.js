import React, { useState, useEffect, useRef } from 'react'

import Slider from "react-slick";

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { Row, Col } from 'react-bootstrap';
import Frame2 from "../../Assests/Images/Frame2.png"
import detail from "../../Assests/Images/detail.png"
import Frame3 from "../../Assests/Images/Frame3.png"
import growth3 from "../../Assests/Images/growth3.png"
import get from '../../Assests/Images/get.png'
import pdashboard from '../../Assests/Images/pdashboard.png'

import Aos from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    title: 'Vendor Branding',
    img: Frame2,
    info: 'Showing up your Business online is quite easy but listing them and convert into successful Brand takes lots of efforts.To make your Business up in marketing, Shadimasters bring its exclusive Branding services helps you to glitter your Business Profile among Customer-Region.'
  },
  {
    title: 'Personalized Webpage',
    img:  detail,
    info: 'Shadimasters give specific passage for Vendors to show up their Business and services in a more sophisticated way to Users. By this feature for the Vendor, the vendor freely circulate the Best of Best to the audience.'
  },
  {
    title: 'Get Business',
    img: get,
    info: 'ShadiMasters is dedicated to promote and share business opportunity with only handful wedding vendors. If you provide quality services get connected with us in order to get potential business leads. '
  },
  {
    title: 'Reviews',
    img: Frame3,
    info: 'Reviews are like the Guide to Choose only Good. By showing up the Reviews on the Work, Vendors can enjoy more chances of organic leads from ShadiMasters Users.'
  },
  {
    title: 'Personalised Dashboard',
    img: pdashboard,
    info: 'ShadiMasters offer personalised dashboard to manage your day to day activity and statistics. You can also bring your direct enquires and manage them with the enquiry management system.'
  },
  {
    title: 'Growth Statistics',
    img: growth3,
    info: 'A well designed data representation of Data to visualise the Business growth.'
  }
]


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight className={className} onClick={onClick} style={{ fill: '#fff' }} />

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronLeft className={className} onClick={onClick} style={{ fill: '#fff' }} />
  );
}


export default function Sliders(props) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const slider1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    touchMove: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const slider2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    vertical: true,
    focusOnSelect: true
  };

  const [getWidth, setGetWidth] = useState(0)
  const widthRef = useRef();

  useEffect(() => {
    setGetWidth(widthRef.current.clientWidth);
  }, []);

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container-fluid slider-r " data-aos={props.animation}>
        <Row>
          <Col lg={3}>
            <Slider {...slider2}
              className='slider1'
              asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
            >
              {
                slides && slides.map((item, i) => {
                  return (
                    <div key={i} className='sidebarNav'>
                      <button type="button" className="w-100   header-btn" >
                        {item.title}
                      </button>
                    </div>
                  )
                })
              }
            </Slider>
          </Col>
          {/* <h2> Single Item</h2> */}
          <Col lg={9} className='sliderWrapper' ref={widthRef}>
            <Slider {...slider1}
              className='slider2'
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}>
              {
                slides && slides.map((item, i) => {
                  return (
                    <div className="customSlide" key={i}>
                      <div></div>
                      <img src={item.img} alt='img' className="img-fluid" />
                      <div className='slideInfo'><b>{item.title}</b> {item.info}</div>
                    </div>
                  )
                })
              }
            </Slider>
            {/* <Slider {...slider2} className='slider2'>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
            </Slider>
            <Slider {...slider3} className='slider3'>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
              <div className="customSlide">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" />
              </div>
            </Slider> */}
          </Col>
        </Row>
      </div>
    </>
  );
}


// export default Featureslider;
