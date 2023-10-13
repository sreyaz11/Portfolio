import React from 'react';
import './project.css';

const Portfolio = () => {
  return (
    <section className="projects" id='portfolio'>
      <div className="container">
      <hr /><br />
        <h2 className="text-center ">My Work</h2><br />
        <div className="row">
          <div className="col-md-12">
            <div className="project">
              {/* <img src="project1.jpg" alt="Project 1" className="img-fluid" /> */}
              <h3>E-Commerce Web Application</h3>
              <p>ATP KART is a dynamic web application for purchasing goods and services through the internet and is efficient for online business. This application's main purpose and goal is to empower
and assist a person in accessing e-commerce platforms so that they may do their own online shopping. This web
app allows users, sellers and admin to login/logout, manage their cart, list their products to sell for sellers, delivery and
payment, customers can track and cancel orders. This entire application is developed using React as UI and Java Spring boot as backend and MySQL as database.
</p><br />
            </div>
          </div>
          <div className="col-md-12">
            <div className="project">
              {/* <img src="project2.jpg" alt="Project 2" className="img-fluid" /> */}
              <h3>Leave Management System</h3>
              <p>Our CDAC Leave Management System is a smart tool that helps everyone at CDAC manage their time off easily.
                Managers can see and approve your leave request. It's like a digital calendar that keeps track when you're not at work and lets everyone know if someone is present or not.
                It's simple, user-friendly, and makes sure everyone's on the same page. This entire application is using the MERN technology (MongoDB, Express.js, React, Node.js).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
