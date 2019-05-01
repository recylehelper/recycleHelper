import { connect } from 'react-redux';
import searchResults from '../../components/searchResults.jsx';
import changeProduct from '../actions/changeProduct.js';

const mapStateToProps = (state) => {
    return ({
        currentProduct: state.currentProduct
    })
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
            handleProductClick: (ownProps) => dispatch(changeProduct(ownProps)),
        })
}

const SearchResultsContainer = connect(mapStateToProps,mapDispatchToProps)(searchResults);

export default SearchResultsContainer;