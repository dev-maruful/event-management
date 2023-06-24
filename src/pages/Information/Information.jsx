import React from "react";

const Information = () => {
  return (
    <div>
      <div className="mb-10">
        <h3 className="text-3xl font-semibold mb-3">
          About <span className="text-info">Us</span>
        </h3>
        <p>
          At our Event Management Company, we are dedicated to crafting
          exceptional and personalized events. With our expertise and attention
          to detail, we turn your vision into a reality, creating unforgettable
          experiences that exceed expectations. Trust us to handle every aspect
          of event planning and execution with professionalism and creativity.
        </p>
      </div>
      <h3 className="text-3xl font-semibold mb-3">
        Our <span className="text-info">Services</span>
      </h3>
      <div className="flex gap-5">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/female-wedding-planner-working-ceremony_23-2150167258.jpg?size=626&ext=jpg&ga=GA1.1.839037722.1687592370&semt=ais"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Event Planning & Coordination</h2>
            <p>
              From inception to execution, we handle all aspects of event
              planning and coordination, ensuring a seamless and stress-free
              experience. Our dedicated team meticulously manages logistics,
              vendor coordination, timelines, and budgets, allowing you to enjoy
              every moment of your event while we take care of the details.
            </p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/young-businessman-showing-graph-his-partner_23-2147839895.jpg?size=626&ext=jpg&ga=GA1.1.839037722.1687592370&semt=ais"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Creative Design & Theming</h2>
            <p>
              Our talented designers bring your vision to life with innovative
              and captivating event designs. From captivating themes and
              stunning decor to lighting, floral arrangements, and stage setups,
              we create immersive environments that reflect your unique style
              and create an unforgettable ambiance for your guests.
            </p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/man-filming-with-professional-camera-new-movie_23-2149066384.jpg?size=626&ext=jpg&ga=GA1.1.839037722.1687592370&semt=ais"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Entertainment & Production</h2>
            <p>
              We provide top-notch entertainment and production services to
              elevate your event to new heights. From live bands and DJs to
              mesmerizing performances and state-of-the-art audiovisual
              production, we ensure that every moment is filled with excitement
              and memorable experiences for your guests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
