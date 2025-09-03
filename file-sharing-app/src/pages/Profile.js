import React from 'react';

const Profile = () => {
    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            <div className="profile-info">
                <h2>Profile Information</h2>
                {/* Add form or details to display and edit user information */}
            </div>
            <div className="shared-files">
                <h2>Shared Files</h2>
                {/* Add component to display list of files shared by the user */}
            </div>
        </div>
    );
};

export default Profile;