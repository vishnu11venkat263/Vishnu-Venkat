// src/Profile.js
import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profile-header">
                <h1>Web and mobile application developer</h1>
                <p>
                    Interested in new technologies and working methods. I like to come up with ideas that improve business processes.
                    Passionate about development <strong>Back-End</strong> and <strong>Front-End</strong>.
                </p>
            </div>
            <div className="profile-content">
                <img src="profile-pic.jpg" alt="Profile" className="profile-pic" /> {/* Replace 'profile-pic.jpg' with actual image path */}
                <div className="profile-details">
                    <ul>
                        <li>📍 Mobile throughout France</li>
                        <li>📍 Lens, France</li>
                        <li>📧 <a href="mailto:zinedine.benkhider@gmail.com">zinedine.benkhider@gmail.com</a></li>
                        <li>👤 26 Years</li>
                        <li>🎓 Master's degree 2 IT</li>
                        <li>🔍 CDI contract search</li>
                    </ul>
                    <div className="social-icons">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="linkedin-icon.png" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <img src="github-icon.png" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
            <p className="profile-footer">
                I am looking for an innovative and user-centric company to best meet the needs of customers, from the idea to the final delivery of projects, or participate in the improvement of existing projects.
            </p>
        </div>
    );
}

export default Profile;
