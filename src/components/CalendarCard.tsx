import React, { useState }from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Droplet } from 'react-bootstrap-icons';

import '../styles/App.css';

type CalendarCardProps = {
    date: Date,
}

function CalendarCard({date}: CalendarCardProps) {
    const [hover, setHover] = useState(false);
    const isToday = date.toDateString() == (new Date()).toDateString();
  return (
    <Card border={isToday ? "darkerPrimary" : "primary"} className={isToday ? "extra-lifted swing-in-top-fwd" : "lifted swing-in-top-fwd"}>
        <Card.Header className={isToday ? "bg-darkerPrimary" : "bg-primary"}>{date.getDate()}</Card.Header>
        <Card.Body
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Card.Text>
                Some text
                <Button
                    size="sm"
                    className={hover ? "text-textGrey visible" : "text-textGrey invisible"}
                    style={{
                        position: "absolute",
                        bottom: "5px",
                        right: "5px",
                    }}
                    variant={isToday ? "darkerPrimary" : "accentGreenLight"}
                    onClick={() => addWatering(date)}
                >
                    <Droplet size={18}></Droplet>
                </Button>
            </Card.Text>
        </Card.Body>
    </Card>
  );
};

function addWatering(date: Date): void {
    console.log("add future or past watering instance");
}

function calendarDateString(date: Date): string {
    return date.getMonth().toLocaleString() + " " + date.getDate();
} 

export default CalendarCard;