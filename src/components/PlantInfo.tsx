import React from 'react';
import { DistributeVertical } from 'react-bootstrap-icons';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const plants = [
  {
    id: 1,
    name: "Heartstring",
    waterings: [
      {
        date: new Date().setMonth(4),
        completed: true,
      },
      {
        date: new Date().setMonth(11),
        completed: false,
      }
    ],
  },
  {
    id: 2,
    name: "Citron",
    waterings: [
      {
        date: new Date().setMonth(2),
        completed: true,
      },
      {
        date: new Date().setMonth(10),
        completed: false,
      }
    ],
  }
]

const PlantInfo: React.FC = () => {
  return (
    <div>
        <div>
            plant view and form
        </div>
        <div >
          <Container fluid>{renderPlants()}</Container> 
        </div>
    </div>
  );
};

function renderPlants(): JSX.Element[] {
  var returnList: JSX.Element[] = new Array<JSX.Element>();
  plants.forEach((plant) => {
    returnList.push(
      <Row id={"plant-" + plant.id} className="pt-2 my-2 ">
        <Col sm={5}>
          <Image src={'/images/plant-' + plant.id + '.png'} fluid />
        </Col>
        <Col sm={7}>
          <div>{plant.name}</div>
        </Col>
      </Row>
    )
  })
  return returnList;
}
export default PlantInfo;
