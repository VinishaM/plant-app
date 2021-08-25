import React, { useState } from 'react';
import { Flower1, CalendarCheck} from 'react-bootstrap-icons';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import PlantInfo from './PlantInfo';
import DailyInfo from './DailyInfo';

const Sidebar: React.FC = () => {
  const [pageContext, setPageContext] = useState<number>(1); 

  var content;
  switch (pageContext) {
    case 1: content = <DailyInfo />; break;
    case 2: content = <PlantInfo />; break;
  }
  
  return (
    <Container fluid>
        <div className="pt-3 sidebar-header">
          <Button
              className="ml-2"
              size="sm"
              variant= "primary"
              onClick={() => setPageContext(1)}
          >
              <CalendarCheck size={25} color="#00815E"></CalendarCheck> 
          </Button>
          <Button
              className="ml-2"
              size="sm"
              variant= "primary"
              onClick={() => setPageContext(2)}
          >
              <Flower1 size={25} color="#00815E"></Flower1> 
          </Button>
          {content}
        </div>
    </Container>
  );
};

export default Sidebar;