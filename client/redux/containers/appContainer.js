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

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        handleZipChange: (ownProps) => dispatch(changeZip(ownProps))
    })
}



const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer