import React from "react";
import "./project.css";

function Project(props) {
  return (
    <section class="card">
      <div class="project-description">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <a href={props.github_link} target="_blank" rel="noreferrer">Github Link</a>
      </div>
      <a href={props.deployed_link} target="_blank" rel="noreferrer">
        <img src={`${process.env.PUBLIC_URL}/${props.image}`}  alt={props.image_alt} />
      </a>
    </section>
  );
}

export default Project;
