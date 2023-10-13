import React from 'react';
import  './links.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
        <div className='iconn'>
            <a href="https://drive.google.com/file/d/1BbNgMIRU0W8xvYmUK_w3gX1De0AMCKCm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="icon-link">
                <img src={require("./images/docs-logo.png")} alt="github-logo" className='link-logo' />
            </a>
        </div>
        <div className='iconn'>
            <a href="https://www.linkedin.com/in/shreyas-jadhav-9bb4a9157" target="_blank" rel="noopener noreferrer" className="icon-link">
                <img src={require("./images/linkedin-logo.png")} alt="github-logo" className='link-logo' />
            </a>
        </div>
        <div className='iconn'>
            <a href="https://github.com/sreyaz11" target="_blank" rel="noopener noreferrer" className="icon-link">
                <img src={require("./images/github-logo.png")} alt="github-logo" className='link-logo' />
            </a>
        </div>
        <div className='iconn'>
            <a href="https://twitter.com/j147378" target="_blank" rel="noopener noreferrer" className="icon-link">
                <img src={require("./images/twitter-logo.avif")} alt="github-logo" className='link-logo' />
            </a>
        </div>
        <div className='iconn'>
            <a href="mailto:shreyasjadhav1105511@gmail.com" className="icon-link">
                <img src={require("./images/mail-logo.png")} alt="github-logo" className='link-logo' />
            </a>
        </div>
    </div>
  );
};

export default SocialLinks;
