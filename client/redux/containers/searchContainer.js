import { connect } from 'react-redux';
import SearchBar from '../../components/searchBar.jsx';
import changeSearch from '../actions/changeSearch.js';
import handleSearch from '../actions/handleSearch.js';
import changeProduct from '../actions/changeProduct.js';
const mapStateToProps = (state) => {
    
    return ({
        search: state.search
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
            handleSearchChange: (ownProps) => dispatch(changeSearch(ownProps)),
            handleProductSearch: (ownProps) => dispatch(handleSearch(ownProps)),
            deleteCurrentProduct: () => dispatch(changeProduct(null))
        })
}

const SearchContainer = connect(mapStateToProps,mapDispatchToProps)(SearchBar);

export default SearchContainer;