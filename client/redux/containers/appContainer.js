import { connect } from 'react-redux';
import App from '../../components/app.jsx';


const mapStateToProps = (state) => {
    
    return ({
        search: state.search,
        searchResults: state.searchResults,
        location: state.location,
        currentProduct: state.currentProduct
    })
}



const AppContainer = connect(mapStateToProps)(App);

export default AppContainer