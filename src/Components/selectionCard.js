import React, { Component } from 'react';
import {Card,Button,Container,ListGroup, ListGroupItem} from 'react-bootstrap';
import './selectionCard.css';

class SelectionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          <Container style={{padding: 20}}>
            <Card className='selectionCard' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{this.props.data['title']}</Card.Title>
                <Card.Text>
                {this.props.data['description']} 
                </Card.Text>
                <Button style={{backgroundColor: '#11B411', borderColor: 'green'}}>Go somewhere</Button>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>stability- {this.props.data['stability']}</ListGroupItem>
                <ListGroupItem>returns- {this.props.data['returns']}</ListGroupItem>
                <ListGroupItem>period- {this.props.data['period']}</ListGroupItem>
              </ListGroup>
            </Card>
          </Container>
         );
    }
}
 
export default SelectionCard;