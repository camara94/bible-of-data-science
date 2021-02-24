import React, { Component } from 'react';
import { Card, CardBody, CardSubtitle, CardImg, CardText, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
 
function  WhatIsDataScience(props) { 
    return(
        <div className="row mt-5">
            <div className="col-12">
                <h2>What is Data Science ?</h2>
                <hr />
            </div>
            <p className="col-12">
                {props.datascience.whatisdatascience}
                <hr />
            </p>
        </div>
    );
};

const HowDoesDataScienceWork = props => {
    return (
        <div className="row">
            <div className="col-12">
                <h2>How Does Data Science Work</h2>
                <hr />
            </div>
            <div className="col-12">
                {props.datascience.howdoesdatasciencework}
            </div>
        </div>
    )
}

const FiveStageLifeCycle = props => {

    const item = props.datascience.fivestagelifecycle.map((stage, index) => {
        return (
        <li key={index}>
            <span>{stage}</span>
        </li>);
    });

    return (
        <div className="row">
            <div className="col-12">
                <h2 className="col-12">Five Stage Live Cycles</h2>
                <hr />
            </div>
            <div className="col-12">
                    <Card>
                        <CardImg width={100} src={props.datascience.image} alt={props.datascience.image} />
                        <CardBody>
                            <ol>
                                {item}
                            </ol>
                        </CardBody>
                    </Card>
                    <hr />
            </div>       
        </div>
    );

}

const DataScienceUses = props => {
    const item = props.datascience.datascienceuses.map((use, index)=>{
        return (
            <ListGroupItem key={index}>
                {use}
            </ListGroupItem>
        )
    });

    return (
        <div className="row">
            <div className="col-12">
                <h2>Data Science Uses</h2>
                <hr />
            </div>
            <div className="col-12">
                <ListGroup>
                 {item}
                </ListGroup>
                <hr />
            </div>

        </div>
    )
}

const Sources = props => {
    const item = props.datascience.source.map((source, index)=>{
        return (
            <ListGroupItem key={index}>
               <a href={source} target="_blank">{source}</a>
            </ListGroupItem>
        )
    });

    return (
        <div className="row">
            <div className="col-12">
                <h2>Sources</h2>
                <hr />
            </div>
            <div className="col-12">
                <ListGroup>
                 {item}
                </ListGroup>
            </div>

        </div>
    )

}

class Home extends Component {
    
    render() {
        return(
            <div className="container">
                <WhatIsDataScience datascience={this.props.datascience} />
                <FiveStageLifeCycle {...this.props} />
                <HowDoesDataScienceWork {...this.props} />
                <DataScienceUses {...this.props} />
                <Sources {...this.props} />
            </div>
        )
    }
}

export default Home;