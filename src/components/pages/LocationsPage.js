import React from "react";
import LocationsCard from "../locations page components/LocationCard";
import {locations} from "../../Data/LocationsData";
import {CardGroup} from "react-bootstrap";

const LocationsPage = (props) => {
    const locationsList = locations.map(location =>
        <LocationsCard
            title={location.title}
            workingHours={location['working-hours']}
            address={location.address}
            imageURL={location.imageURL}
        />);

    return (
        <CardGroup>
            {locationsList}
        </CardGroup>
    );
};

export default LocationsPage;