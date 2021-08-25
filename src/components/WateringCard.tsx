import React, { useState }from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CheckSquare, CheckSquareFill } from 'react-bootstrap-icons';

import '../styles/App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type WateringCardProps = {
    wateringID: number,
    date: Date,
    plantID: number,
    completed: boolean,
}

function WateringCard({wateringID, date, plantID, completed}: WateringCardProps) {
  return (
    <Card border="accentGreen" className="mt-4" id={wateringID.toString()}>
        <Button
            size="sm"
            style={{
                position: "absolute",
                top: "-13px",
                left: "-15px",
                padding: 0,
                border: "3px solid transparent",
            }}
            onClick={() => toggleStatus(wateringID, !completed)}
        >
            {completed ? 
                <CheckSquareFill size={35} color="#00815E"></CheckSquareFill> :
                <CheckSquare size={35} color="#00815E"></CheckSquare>
            }
        </Button>
        <Card.Header className="bg-accentGreen">{date.getMonth() + date.getDate()}</Card.Header>
        <Card.Body>
            <Card.Text >
                  {"Water " + getPlantName(plantID) + ", he's thirsty!"}  
            </Card.Text>
        </Card.Body>
    </Card>
  );
};

function toggleStatus(id: number, newStatus: boolean): void {
    //send request to API to update 
}

function getPlantName(plantID: number) : string {
    return "heartstring";
}

export default WateringCard;