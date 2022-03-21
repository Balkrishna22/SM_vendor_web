import React, { useState, useEffect, useRef } from 'react'

import Slider from "react-slick";

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { Row, Col } from 'react-bootstrap';

const slides = [
  {
    title: 'Vendor Branding',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus orci velit, at condimentum magna commodo non. Fusce dapibus nec quam et sodales. Mauris massa arcu, accumsan sit amet aliquet vel, lacinia in lorem.'
  },
  {
    title: 'Personalized Webpage',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus orci velit, at condimentum magna commodo non. Fusce dapibus nec quam et sodales. Mauris massa arcu, accumsan sit amet aliquet vel, lacinia in lorem.'
  },
  {
    title: 'Enquiry Management',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus orci velit, at condimentum magna commodo non. Fusce dapibus nec quam et sodales. Mauris massa arcu, accumsan sit amet aliquet vel, lacinia in lorem.'
  },
  {
    title: 'Reviews',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus orci velit, at condimentum magna commodo non. Fusce dapibus nec quam et sodales. Mauris massa arcu, accumsan sit amet aliquet vel, lacinia in lorem.'
  },
  {
    title: 'Event Management',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus orci velit, at condimentum magna commodo non. Fusce dapibus nec quam et sodales. Mauris massa arcu, accumsan sit amet aliquet vel, lacinia in lorem.'
  },
  {
    title: 'Growth Statistics',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus orci velit, at condimentum magna commodo non. Fusce dapibus nec quam et sodales. Mauris massa arcu, accumsan sit amet aliquet vel, lacinia in lorem.'
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


export default function Sliders() {
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

  return (
    <>
      <div className="container-fluid slider-r ">
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
                      <img src={item.img} alt='img' />
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
