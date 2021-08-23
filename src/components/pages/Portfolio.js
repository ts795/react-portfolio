import React from "react";
import Project from "../Project";
import "./portfolio.css";

function Portfolio() {
  return (
    <div>
      <h2> Portfolio </h2>
      <div className="project-container">
      <Project name="Pack Your Bags" image="pack_your_bags.jpeg" image_alt="Pack Your Bags" deployed_link="https://glacial-eyrie-53773.herokuapp.com/" github_link="https://github.com/ts795/pack-your-bags" description="This is a website that allows users to create to do lists in preparation for traveling on trips"/>
      <Project name="Tech Blog" image="tech_blog.jpeg" image_alt="Tech Blog image" deployed_link="https://damp-tundra-10402.herokuapp.com/" github_link="https://github.com/ts795/tech-blog" description="This project implements a tech blog. Users can create accounts, create blog posts, update blog posts, delete blog posts and comment on blog posts. It was implemented by using mySQL, Express, node JS, and sequelize."/>
      <Project name="Magnificient Music Search" image="MMSCapture.jpeg" image_alt="Magnificient Music Search image" deployed_link="https://apal96.github.io/magnificent-music-search/" github_link="https://github.com/apal96/magnificent-music-search" description="This is a website that offers users information relating to a music artist they input in the search field"/>
      <Project name="Work Day Scheduler" image="work_day_scheduler.jpeg" image_alt="Workday scheduler image" deployed_link="https://ts795.github.io/work-day-scheduler/" github_link="https://github.com/ts795/work-day-scheduler" description="This project is a schedule for a work day."/>
      <Project name="Weather Dashboard" image="weather_dashboard.jpeg" image_alt="Weather dashboard image" deployed_link="https://ts795.github.io/weather-dashboard/" github_link="https://github.com/ts795/weather-dashboard" description="This project shows the weather for a city by using data from the Open Weather API"/>
      <Project name="Workout Tracker" image="workout_tracker.jpg" image_alt="Workout Tracker" deployed_link="https://blooming-citadel-87487.herokuapp.com/stats" github_link="https://github.com/ts795/workout-tracker" description="This project implements a workout tracker that allows for a user to enter in workouts and the exercises performed for those workouts. The user can also view stats for the last 7 workouts. It was built using Express, MongoDB, and Mongoose."/>
      </div>
    </div>
  );
}

export default Portfolio;