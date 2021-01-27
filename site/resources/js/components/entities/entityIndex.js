import React, {Component} from 'react';
import EntityIndexItem from './entityIndexItem';

export default class EntityIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        this.read();
    }

    // прочитать с сервера данных
    read(){
        fetch("/api/entity")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("server return json: "); console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    // выбрать вариант рендера
    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
            return this.renderList();
        }
    }

    // вывести список сущностей
    renderList(){
        return (
            <ul>
                { this.state.items.map(item => (
                    <EntityIndexItem entity={item}></EntityIndexItem>
                ))}
            </ul>
        )
    }

}
