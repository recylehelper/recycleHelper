import { connect } from 'react-redux';
import SearchBar from '../../components/searchBar.jsx';
import changeSearch from '../actions/changeSearch.js';
import handleSearch from '../actions/handleSearch.js';
import changeProduct from '../actions/changeProduct.js';
import changeModalOpen from '../actions/changeModalOpen.js';

const mapStateToProps = (state) => {
    
    return ({
        search: state.search,
        url: state.url
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
            handleSearchChange: (ownProps) => dispatch(changeSearch(ownProps)),
            handleProductSearch: (ownProps) => dispatch(handleSearch(ownProps)),
            deleteCurrentProduct: () => dispatch(changeProduct(null)),
            handleModalChange: (ownProps) => dispatch(changeModalOpen(ownProps))
        })
}

const SearchContainer = connect(mapStateToProps,mapDispatchToProps)(SearchBar);

export default SearchContainer;