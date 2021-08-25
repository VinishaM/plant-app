import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';
import Calendar from './Calendar';

import '../styles/App.css';

const App: React.FC = () => {
    let today = new Date();
    return (
        <div className="app">
            <Row >
                <Col className="pt-5 main-window bg-secondary" sm={8}>
                    <Calendar today={today}/>
                </Col>
                <Col className="sidebar bg-primary" sm={4}>
                    <Sidebar />
                </Col>
            </Row>
        </div>
    );
};

export default App;
