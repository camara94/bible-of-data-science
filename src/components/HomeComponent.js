import React, { Component } from 'react';
import { Card, CardBody, CardSubtitle, CardImg, CardText, CardTitle } from "reactstrap";
 
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
                <div className="col-12">
                    <Card>
                        <CardImg width={100} src={props.datascience.image} alt={props.datascience.image} />
                        <CardBody>
                            <ol>
                                {item}
                            </ol>
                        </CardBody>
                    </Card>
                </div>
            </div>
                
        </div>
    );

}

class Home extends Component {
    
    render() {
        return(
            <div className="container">
                <WhatIsDataScience datascience={this.props.datascience} />
                <FiveStageLifeCycle {...this.props} />
            </div>
        )
    }
}

export default Home;