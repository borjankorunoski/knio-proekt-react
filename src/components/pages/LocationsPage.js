import React from "react";
import LocationsCard from "../locations page components/LocationCard";
import {locations} from "../../Data/LocationsData";
import {CardGroup} from "react-bootstrap";

const LocationsPage = (props) => {
    let locationsList = [];
    let locationsList2 = [];
    for (let i=0;i<locations.length/2;i++){
        locationsList.push(
          <LocationsCard
            title={locations[i].title}
            workingHours={locations[i]['working-hours']}
            address={locations[i].address}
            imageURL={locations[i].imageURL}
          />
        )
    }
    for (let i = 3;i<locations.length;i++){
        locationsList2.push(
          <LocationsCard
            title={locations[i].title}
            workingHours={locations[i]['working-hours']}
            address={locations[i].address}
            imageURL={locations[i].imageURL}
          />
        )
    }

    return (
      <div>
          <CardGroup>
              {locationsList}
          </CardGroup>
          <CardGroup>
              {locationsList2}
          </CardGroup>
      </div>
    );
};

export default LocationsPage;