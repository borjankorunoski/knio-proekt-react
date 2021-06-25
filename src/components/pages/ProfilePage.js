import React from "react";
import BookingList from "../profile page components/BookingList";
import UserInfo from "../profile page components/UserInfo";

const ProfilePage = () => {
    return(
        <React.Fragment>
            <UserInfo/>
            <h4>Твои резервации: </h4>
            <BookingList/>
        </React.Fragment>
    );
};

export default ProfilePage;