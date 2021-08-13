import React, { Component } from 'react';
import {Card,Button,Container,ListGroup, ListGroupItem} from 'react-bootstrap';
import './selectionCard.css';
import { withRouter } from 'react-router-dom';

class SelectionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:'',
        }
    }


    handleClick = ()=>{

      const {history} = this.props;
            history.push({pathname:"/final-page",state:{
                id:this.props.id,
            }});
    }
    componentDidMount(){
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
                <Button className="go-somewhere" disabled={!this.props.isEnable}  onClick={this.handleClick} style={{backgroundColor: this.props.isEnable?'#11B411':'rgba(174, 204, 174, 0.8)',border:'none'}}>Next</Button>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>stability- {this.props.data['stability']}</ListGroupItem>
                <ListGroupItem>period- {this.props.data['period']}</ListGroupItem>
              </ListGroup>
            </Card>
          </Container>
         );
    }
}
 
export default withRouter(SelectionCard);