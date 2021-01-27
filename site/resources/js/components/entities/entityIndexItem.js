import React, {Component} from 'react';


export default class EntityIndexItem extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <li> {this.props.entity.name} </li>
        )
    }
}
