import React from "react";

function AboutMe() {
  return (
    <div>
      <h2> About Me </h2>
      <img src={`${process.env.PUBLIC_URL}/sam_lingampalli_photo.jpeg`}  alt="Sam Lingampalli"/>
      <p>
      I am a full stack developer that is open to free lance, contract, and full time work. I have experience with Angular, Javascript, Python, HTML, CSS, MongoDB, node JS, Express, and Ansible. Please click on the projects in the Work section to view some of my projects.
      </p>
    </div>
  );
}

export default AboutMe;