import React from 'react';
import SearchBarContainer from '../redux/containers/searchContainer.js';
import SearchResultsContainer from '../redux/containers/SearchResultsContainer.js';
import '../styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        let display;
        if (this.props.currentProduct) {
            display = <div id = 'product'>product</div>
        } else {
            display = <div id = 'searchResults'>
            {this.props.searchResults.map((value, index) => {
                return <SearchResultsContainer key = {index} value = {value}/>
            })}
        </div>
        }
        return (
            <div>
                <SearchBarContainer />
                {display}
            </div>
        )
    }
}

export default App