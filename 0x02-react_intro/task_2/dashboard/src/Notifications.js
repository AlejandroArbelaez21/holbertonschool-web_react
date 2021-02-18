import React from 'react';
import './Notifications.css';
import getLatestNotification from './utils'
import icon from './close-icon.png';

function notifications() {
  return (
  <div className="Notifications">
    <button className="close-icon" aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
      <img src={icon} alt="close-icon" style={{ height: "15px", width: "15px" }}></img>
    </button>
    <p>Here is the list of notifications</p>
    <ul>
      <li data-priority="default">New course available</li>
      <li data-priority="urgent">New resume available</li>
      <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
    </ul>   
  </div>)
}

export default notifications();
