import React, { useState} from 'react';
import moment from "moment";

import { ArrowRightSquare } from 'react-bootstrap-icons';
import { ArrowLeftSquare } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarCard from './CalendarCard'
// import { render } from '@testing-library/react';
import '../styles/App.css';
import '../styles/Calendar.css';

type CalendarProps = {
    today: Date,
}

function Calendar({today}: CalendarProps) {    
    const [firstOfMonth, setFirstOfMonth] = useState<moment.Moment>(moment(today).startOf('month'));
    return (
        <Container>
            <div className="px-2 mb-5 d-flex justify-content-between align-items-center">
                <div className="p-0 pt-2">
                    <ArrowLeftSquare 
                        color="#595959" 
                        size={30} 
                        onClick={() => { setFirstOfMonth(subtractMonth(firstOfMonth))} }
                    />
                </div>
                <div className="p-0 pt-2">
                    <h1 className="display-3">{firstOfMonth.format("MMMM YYYY")}</h1>
                </div>
                <div className="p-0 pt-2">
                    <ArrowRightSquare 
                    color="#595959" 
                    size={30} 
                    onClick={() => { setFirstOfMonth(addMonth(firstOfMonth)) }}
                    />
                </div>
            </div>
            <div className="calendar-header mb-5"></div>
            <Row className="left-align space-evenly">
                {renderCalendarCards(firstOfMonth)}
            </Row>
        </Container>
    );
};

function subtractMonth(date: moment.Moment): moment.Moment {
    return moment(date.subtract(1, "months").startOf('month'));
}

function addMonth(date: moment.Moment): moment.Moment {
    return moment(date.add(1, "months").startOf('month'));
}

function renderCalendarCards(date: moment.Moment): JSX.Element[] {
    const daysInMonth = date.daysInMonth();
    var startingOffset = date.day();
    var rows = Math.ceil((startingOffset + daysInMonth) / 7);

    var dayCounter = 1;
    var rowElements = [];
    while (rows > 0) {  
        var cols = [] 
        for (let i=0; i<7; i++) {
            if (startingOffset > 0) {
                cols.push(<Col><div/></Col>)
                startingOffset--;
            } else if (dayCounter <= daysInMonth) {
                cols.push(<Col><CalendarCard date={date.date(dayCounter).toDate()}/></Col>)
                dayCounter++;
            } else {
                cols.push(<Col><div/></Col>)
            }
        }
        rowElements.push(<Row className="pb-2">{cols}</Row>)
        rows--;
    }
    return rowElements;

}

export default Calendar;