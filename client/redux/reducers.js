import Redux from 'redux';

const initialState = {
    search: '',
    searchResults: null,
    zip: null,
    currentProduct: null,
    modalOpen: true
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

            case 'CHANGE_ZIP':
                  return Object.assign({}, state, {
                  zip: action.zip
                  });

            case 'CHANGE_MODALOPEN':
                  return Object.assign({}, state, {
                  modalOpen: action.ModalOpen
                  });

            default:
                  return state;
    }
}

export default rootReducer;