import React from "react";
import Project from "../Project";

function Portfolio() {
  return (
    <div>
      <h2> Portfolio </h2>
      <Project name="Pack Your Bags" image="pack_your_bags.jpeg" image_alt="Pack Your Bags" deployed_link="https://glacial-eyrie-53773.herokuapp.com/" github_link="https://github.com/ts795/pack-your-bags" description="This is a website that allows users to create to do lists in preparation for traveling on trips"/>
    </div>
  );
}

export default Portfolio;