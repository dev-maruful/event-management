import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Home = () => {
  return (
    <div>
      <AwesomeSlider>
        <div className="w-full h-full relative">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg?size=626&ext=jpg&ga=GA1.1.839037722.1687592370&semt=ais"
            alt=""
          />
          <div className="text-white text-5xl absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center pl-28">
            <h3 className="text-6xl mb-5 font-semibold w-1/2">
              Unforgettable Experiences!
            </h3>
            <p className="text-base font-normal w-1/2 mb-5">
              Creating exceptional events that leave a lasting impression. Let
              us turn your vision into reality and deliver unforgettable
              experiences for you and your guests.
            </p>
            <button className="btn btn-outline btn-info w-36">hire us!</button>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/business-people-working-together_155003-14915.jpg?size=626&ext=jpg&ga=GA1.1.839037722.1687592370&semt=ais"
            alt=""
          />
          <div className="text-white text-5xl absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center pl-28">
            <h3 className="text-6xl mb-5 font-semibold w-1/2">
              Seamless Planning!
            </h3>
            <p className="text-base font-normal w-1/2 mb-5">
              From conceptualization to execution, we handle every aspect of
              event planning with meticulous attention to detail. Sit back,
              relax, and let us take care of the logistics.
            </p>
            <button className="btn btn-outline btn-info w-36">hire us!</button>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/birthday-party-concept-with-joyful-people_23-2147716819.jpg?size=626&ext=jpg&ga=GA1.1.839037722.1687592370&semt=ais"
            alt=""
          />
          <div className="text-white text-5xl absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center pl-28">
            <h3 className="text-6xl mb-5 font-semibold w-1/2">
              Expert Team of Professionals!
            </h3>
            <p className="text-base font-normal w-1/2 mb-5">
              Our experienced and dedicated team of event planners, designers,
              and coordinators is passionate about bringing your event to life.
              We ensure a seamless and stress-free experience.
            </p>
            <button className="btn btn-outline btn-info w-36">hire us!</button>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony_8353-11057.jpg?size=626&ext=jpg&ga=GA1.1.839037722.1687592370&semt=ais"
            alt=""
          />
          <div className="text-white text-5xl absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center pl-28">
            <h3 className="text-6xl mb-5 font-semibold w-1/2">
              Tailored Events for Every Occasion!
            </h3>
            <p className="text-base font-normal w-1/2 mb-5">
              Whether it's a corporate gathering, wedding, or special
              celebration, we curate personalized events that reflect your
              unique style and exceed your expectations.
            </p>
            <button className="btn btn-outline btn-info w-36">hire us!</button>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Home;
