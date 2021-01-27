import React from 'react';
import ReactDOM from 'react-dom';
import EntityIndex from "./entities/entityIndex";

function Root() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>

                        <EntityIndex></EntityIndex>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Root;

if (document.getElementById('app')) {
    ReactDOM.render(<Root />, document.getElementById('app'));
}
