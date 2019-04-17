import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Button, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import AddNewEventComponent from '../addEventComponent/addNewEvent'

import './mainMenu.css';

class MainMenuComponent extends Component {
  state = {
    eventExpStatus: 'active',
    calenderStatus: '',
    historyStatus: '',
    showAddNewEvent: false
  };
  modalTitle = 'Add New Event';

  addNewEventClicked = () => {
    // alert('add new event');
    this.setState({
      showAddNewEvent: true
    })
  }

  closeAddNewEvent = () => {
    this.setState({
      showAddNewEvent: false
    })
  }

  eventExpClicked() {
    // alert('event exp clicked');
    console.log('event exp clicked ');
  }

  calenderCicked() {
    console.log('calender clicked');
    this.setState({
      eventExpStatus: '',
      calenderStatus: 'active',
      historyStatus: ''

    })
  }

  searchButtonClicked() {
    // alert('search btn clicked');
    console.log('search btn clicked');
  }
  render() {
    return (
      <React.Fragment>

        <Modal
          show={this.state.showAddNewEvent}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
              {this.modalTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNewEventComponent />
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Button id="btnAdd" className="btnaddEvent btn btn-success btn-md">ADD </Button>
              <Button id="btnCancel" className="btn-danger" onClick={this.closeAddNewEvent}>Cancel</Button>
            </Row>

          </Modal.Footer>
        </Modal>

        <Col className="col-1">

        </Col>

        <Col className="col-2">
          <Button variant="success" id="add_button" onClick={this.addNewEventClicked} >

            <FontAwesomeIcon icon={faPlusCircle} size="2x" />

            &nbsp; &nbsp;  New Event



          </Button>
        </Col >
        <Col className="col-2" id="calender">
          <div className={this.state.calenderStatus}>
            <Link to={"/calender"} onClick={this.calenderCicked} >
              <h3>
                <span className="badge badge-light" id={this.state.calenderStatus}>Event Calender</span>
              </h3>
            </Link>
          </div>

        </Col>
        <Col className="col-2" id="explorer">
          <div id={this.state.eventExpStatus}>
            <Link to={"/eventExp"} onClick={this.eventExpClicked}>
              <h3>
                <span className="badge badge-light" id={this.state.eventExpStatus}>Event Explorer</span>
              </h3>
            </Link>

          </div>
        </Col>
        <Col className="col-2" id="history">
          <div className={this.state.historyStatus}>
            <Link to={"/history"} >
              <h3>
                <span className="badge badge-light" id="active">History</span>
              </h3>
            </Link>
          </div>
        </Col>
        <Col className="col-2" id="search_box">
          <div className="input-group mb-3" id="search_group">
            <input type="text" className="form-control" placeholder="search events" aria-label="Recipient's username" aria-describedby="button-addon2" onKeyPress={this.searchButtonClicked} />

            <div className="input-group-append" >
              <button className="btn btn-outline-secondary" type="button" id="button-search" onClick={this.searchButtonClicked} >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>

        </Col>




      </React.Fragment >
    );
  }
}

export default MainMenuComponent;
