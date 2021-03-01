import React, { Component } from 'react';
import { Card, ListGroupItem } from 'reactstrap';

class CourseItem extends Component{

   
    

    render() {
        const item = this.props.moduleone.map((c, index) => {
            return (
                <ListGroupItem key={index}>
                    {c.title}
                </ListGroupItem>
            )
        });

        return (
            <div className="col-3">
                {item}
            </div>
        )
    }
}



 class Course extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                  <CourseItem moduleone={this.props.moduleone} />  
                </div>
            </div>
        )
    }
}

export default Course;