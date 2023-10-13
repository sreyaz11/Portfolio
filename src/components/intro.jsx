import React from 'react';
import myPhoto from './images/mypic.jpg'; // Import your photo
import './intro.css';
import Links from './links.jsx';

const Introduction = () => {
  return (
    <div className="container introduction" id='Intro'>
      <hr/><br/>
      <img src={myPhoto} alt="MyPhoto" className="my-photo img-fluid" />
      <h1>Shreyas Jadhav</h1>
      <p id='punch-line'>Practising Full Stack Web Developer. 🦾 Mechanical student turned 👨🏾‍💻 developer</p><br />
      <Links/>
      <hr className="my-5" />
      <div className='skills' id='skills'>
        <h3 className="col--md-12">Competencies</h3>
        <p id='list'>Languages - <img src={require('./images/java-logo.png')} alt="java-logo" className='logos'/> Java   <img src={require('./images/javascript.png')} alt="javascript-logo" className='logos' /> JavaScript    <img src={require('./images/sql-logo.png')} alt="" className='logos'/> SQL   <img src={require('./images/c-sharp-logo.png')} alt="" className='logos'/> C#</p>
        <p id='list'>Frameworks - <img src={require('./images/spring-boot-logo.png')} alt="java-logo" className='logos'/> Spring Boot    <img src={require('./images/hibernate-logo.png')} alt="java-logo" className='logos'/> Hibernate    <img src={require('./images/dotnet-logo.png')} alt="java-logo" className='logos'/> .NET    <img src={require('./images/react-logo.png')} alt="java-logo" className='logos'/> React</p>
        <p id='list'>Databases - <img src={require('./images/mysql-logo.png')} alt="java-logo" className='logos'/> MySQL   <img src={require('./images/oracle-database-logo.png')} alt="java-logo" className='logos'/> Oracle   <img src={require('./images/mongodb-logo.jpg')} alt="java-logo" className='logos'/> MongoDb</p>
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default Introduction;
