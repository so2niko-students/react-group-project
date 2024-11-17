import React from 'react';
import './styles.css'

class PostItem extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let item = { 
        header:"Poki x GDC 2024 by the pictures!",
        shortDescription: "GDC 2024 was a blast-lets's run it back",
        avatarImage:"./image-item.png",
        imageSrc: "./chrome_Czc5BCTsYy.png",
        userName:"Poki for Developer",
        date: "Apr 12"
      }
      
      return (
        <div className="component">
          <div className="left-section">
            <div className="text-content">
              <h5 className="header">{item.header}</h5>
              <h6 className="short-description">{item.shortDescription}</h6>
            </div>
            <div className="user-info">
              <img className="avatar" src={item.avatarImage} alt="User avatar" />
              <div className="user-details">
                <div className="user-name">{item.userName}</div>
                <div className="user-date">{item.date}</div>
              </div>
            </div>
          </div>
          <img className="right-image" src={item.imageSrc} alt="Main visual" />
        </div>
      );
    }
  }
  
  
  export default PostItem;