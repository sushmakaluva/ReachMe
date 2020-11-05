import React from 'react';
import NavBar from '../components/NavBar';
import "../profilepage.css";


export default function ProfilePage() {
    return (
        <div>
        <header>
          <div className="container">
            <div className="profile">
              <div className="profile-image">
                <img src="" alt="" />
              </div>
              
              <div className="profile-user-settings">
                <h1 className="profile-user-name">Profile_</h1>
                <button className="btn profile-edit-btn">Edit Profile</button>
                <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true" /></button>
              </div>
              
              <div className="profile-stats">
                <ul>
                  <li><span className="profile-stat-count">200</span> posts</li>
                  <li><span className="profile-stat-count">450</span> Friends</li>
                </ul>
              </div>
              
              <div className="profile-bio">
                <p><span className="profile-real-name">Profile Name</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
              </div>
            </div>
            {/* End of profile section */}
          </div>
        </header>
        <main>
          <div className="container">
            <div className="gallery">
              <div className="gallery-item" tabIndex={0}>
                <img src="" className="gallery-image" alt="" />
                
                <div className="gallery-item-info">
                  <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 56</li>
                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 2</li>
                  </ul>
                </div>
              </div>
              
              <div className="gallery-item" tabIndex={0}>
                <img src="" className="gallery-image" alt="" />
                <div className="gallery-item-info">
                  <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 89</li>
                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 5</li>
                  </ul>
                </div>
              </div>
              
              <div className="gallery-item" tabIndex={0}>
                <img src="" className="gallery-image" alt="" />
                <div className="gallery-item-type">
                  <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true" />
                </div>
                
                <div className="gallery-item-info">
                  <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 42</li>
                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
