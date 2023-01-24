import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
          {/* {about.quote} */}
          Believe it!
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://www.fcbarcelona.com/fcbarcelona/photo/2021/08/05/83b2408a-71fd-4fca-8a8c-d833bca5fbf2/ad-u-Messi.jpg"
            alt="Abhi"
            className="aboutAvatar"
          />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {/* {about.name} */}
            Vedant Yetekar
          </Typography>

          <Typography>
            {/* {about.title} */}
            Software Developer
          </Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {/* {about.subtitle} */}
            Ex-Intern @Project28
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            sequi, eos voluptatibus quo adipisci amet cum laborum error repellat
            iure odit tempore quibusdam alias similique! Temporibus hic facere,
            aut tempore labore quidem non.
            {/* {about.description} */}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
