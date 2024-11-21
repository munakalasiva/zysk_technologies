

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "../Testimonial";
import prof from "../../assets/Fictional company logo.jpg";
import "./index.css";

const Testimonials = () => {
 
    const testimonialsData = [
        {
          image: "https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npOE-K~i6hA8OvsL-lkmHTLZO0szKxBMK2dS-ibFk~M8TF1Zuyn5g2XC76wwKZfkbzxd4KKHU~GkoKsitYpmA38qrAkfDFnCijoMaeoZ3Jclmt26V6lVvOCxuTFARnL1yLhxW2b2HWShcAczS4MwUwZt3V2vr4uwTyYbYf5Dv7G1Z6vGLCpb90XfoTRWIbK1tNoQpbe1epuVYldwlzMG0xf7WDTRrQ2gVdjqQwskRDoAprK452J4-C87Sah0ynFq7gH7wspr7i0l3eeyuZfWlRUHYN3E06FLJgrxutC6zQhaELLdrtFfIRXvkzp25lDi3pGhLTw7zGkFuKgOV7wkwA__",
          name: "Candice Wu",
          designation:"Product Manager, Sisyphus",
          feedback: "We’ve been using Untitled to kick start every new project and can’t imagine working without it.",
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npOE-K~i6hA8OvsL-lkmHTLZO0szKxBMK2dS-ibFk~M8TF1Zuyn5g2XC76wwKZfkbzxd4KKHU~GkoKsitYpmA38qrAkfDFnCijoMaeoZ3Jclmt26V6lVvOCxuTFARnL1yLhxW2b2HWShcAczS4MwUwZt3V2vr4uwTyYbYf5Dv7G1Z6vGLCpb90XfoTRWIbK1tNoQpbe1epuVYldwlzMG0xf7WDTRrQ2gVdjqQwskRDoAprK452J4-C87Sah0ynFq7gH7wspr7i0l3eeyuZfWlRUHYN3E06FLJgrxutC6zQhaELLdrtFfIRXvkzp25lDi3pGhLTw7zGkFuKgOV7wkwA__",
          name: "Jane Smith",
          designation:"Product Manager, Sisyphus",
          feedback: "Highly recommend! Excellent customer support.",
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npOE-K~i6hA8OvsL-lkmHTLZO0szKxBMK2dS-ibFk~M8TF1Zuyn5g2XC76wwKZfkbzxd4KKHU~GkoKsitYpmA38qrAkfDFnCijoMaeoZ3Jclmt26V6lVvOCxuTFARnL1yLhxW2b2HWShcAczS4MwUwZt3V2vr4uwTyYbYf5Dv7G1Z6vGLCpb90XfoTRWIbK1tNoQpbe1epuVYldwlzMG0xf7WDTRrQ2gVdjqQwskRDoAprK452J4-C87Sah0ynFq7gH7wspr7i0l3eeyuZfWlRUHYN3E06FLJgrxutC6zQhaELLdrtFfIRXvkzp25lDi3pGhLTw7zGkFuKgOV7wkwA__",
          name: "Bob Johnson",
          designation:"Product Manager, Sisyphus",
          feedback: "Amazing experience. Will use again for sure.",
        },
      ];  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonials-slider">
      <img src={prof} alt="logo"/>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            feedback={testimonial.feedback}
            desig={testimonial.desig}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
