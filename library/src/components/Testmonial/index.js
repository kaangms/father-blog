import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'

// images
import testmonial from '../../images/testimonial/1.png'
import testmonial2 from '../../images/testimonial/2.png'

const sliders = [
    {
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
        images: testmonial2,
        title: 'Jhony Goaver',
        subTitle: 'CEO of American BDS'
    },
    {
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,',
        images: testmonial2,
        title: 'Jhony Goaver',
        subTitle: 'CEO of American BDS'
    }
]
const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};
const Testmonial = ({ className }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="testimonialImages">
                            <img src={testmonial} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1 col-md-6">
                        <div className="testimonialContent">
                            <span>What People Say</span>
                            <h2>Client Testimonial</h2>
                            <Slider className="testmonialSlider" {...settings}>
                                {sliders.map((slider, i) => (
                                    <div key={i} className="slideItem">
                                        <p>{slider.text}</p>
                                        <div className="thumbWrap">
                                            <div className="thumbImg">
                                                <img src={slider.images} alt="" />
                                            </div>
                                            <div className="imgContent">
                                                <h4>{slider.title}</h4>
                                                <span>{slider.subTitle}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testmonial