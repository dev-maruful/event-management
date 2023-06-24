import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Home = () => {
  return (
    <div>
      <AwesomeSlider>
        <div className="w-full h-full">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg?size=626&ext=jpg&ga=GA1.1.839037722.1687592370&semt=ais"
            alt=""
          />
        </div>
        <div className="w-full h-full">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/business-people-working-together_155003-14915.jpg?size=626&ext=jpg&ga=GA1.1.839037722.1687592370&semt=ais"
            alt=""
          />
        </div>
        <div className="w-full h-full">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/birthday-party-concept-with-joyful-people_23-2147716819.jpg?size=626&ext=jpg&ga=GA1.1.839037722.1687592370&semt=ais"
            alt=""
          />
        </div>
        <div className="w-full h-full">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony_8353-11057.jpg?size=626&ext=jpg&ga=GA1.1.839037722.1687592370&semt=ais"
            alt=""
          />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Home;
