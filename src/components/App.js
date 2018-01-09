import React from 'react';
import { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview'

class App extends Component {
    state = { 
        pageHeader: "Naming Contests"
    };
    componentDidMount() {
        console.log("Did mount");
    }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {this.props.contests.map(contest =>
                        <ContestPreview {...contest} />
                    )}   
                </div>
            </div>
        );
    }
};

export default App;