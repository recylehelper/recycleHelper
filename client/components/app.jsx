import React from 'react';
import SearchBarContainer from '../redux/containers/searchContainer.js';
import SearchResultsContainer from '../redux/containers/SearchResultsContainer.js';
import ProductContainer from '../redux/containers/productContainer.js';
import ZipContainer from '../redux/containers/zipContainer.js';
import '../styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        const { classes } = this.props;
        let display;
        
        if (this.props.currentProduct) {
            display = <div id = 'product'><ProductContainer /></div>
        } else if (this.props.searchResults) {
            display = <div id = 'searchResults'>
            {this.props.searchResults.map((value, index) => {
                return <SearchResultsContainer key = {index} value = {value}/>
            })}
        </div>
        } else {
            display = <div></div>
        }

        return (
            <div>
                <div id = 'zipcode'>
                <ZipContainer />
                </div>
                <SearchBarContainer/>
                {display}
            </div>
        )
    }
}

export default App;