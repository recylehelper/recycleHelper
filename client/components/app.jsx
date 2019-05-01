import React from 'react';
import SearchBarContainer from '../redux/containers/searchContainer.js';
import SearchResults from './searchResults.jsx';
import '../styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render() {
        console.log(this.props.searchResults);
        return (
            <div>
                <SearchBarContainer />
                <div id = 'searchResults'>
                    {this.props.searchResults.map((value, index) => {
                        return <SearchResults key = {index} value = {value}/>
                    })}
                </div>
            </div>
        )
    }
}

export default App