import Redux from 'redux';

const initialState = {
    search: '',
    searchResults: [1,2,3,4],
    location: '78704',
    currentProduct: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH':
            return Object.assign({}, state, {
                search: action.search
              });
        
        case 'CHANGE_SEARCHRESULTS':
              return Object.assign({}, state, {
                searchResults: action.searchResults
              });

        case 'CHANGE_PRODUCT':
              return Object.assign({}, state, {
                currentProduct: action.product
              });

        default:
              return state;
    }
}

export default rootReducer;