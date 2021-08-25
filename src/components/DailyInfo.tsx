import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WateringCard from './WateringCard';

const waterings = [
    {
      id: 1,
      date: new Date(),
      plantID: 1,
      completed: true
    },
    {
        id: 2,
        date: new Date(),
        plantID: 2,
        completed: false
    },
    {
        id: 3,
        date: new Date(),
        plantID: 2,
        completed: false
    }
  ]
const DailyInfo: React.FC = () => {
  return (
    <Container fluid>
        <div>
            date info
        </div>
        <div>
            {renderWaterings()}
        </div>
    </Container>
  );
};

function renderWaterings(): JSX.Element[] {
    var wateringElements: JSX.Element[] = []; 
    waterings.forEach((watering) => {
        wateringElements.push(
            <WateringCard wateringID={watering.id} date={watering.date} plantID={watering.plantID} completed={watering.completed} />
        )
    })
    return wateringElements;
}

export default DailyInfo;