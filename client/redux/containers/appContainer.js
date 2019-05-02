import { connect } from 'react-redux';
import App from '../../components/app.jsx';
import changeZip from '../actions/changeZip.js';

const mapStateToProps = (state) => {
    
    return ({
        search: state.search,
        searchResults: state.searchResults,
        zip: state.zip,
        currentProduct: state.currentProduct
    })
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return ({
//
//     })
// }



const AppContainer = connect(mapStateToProps, null)(App);

export default AppContainer