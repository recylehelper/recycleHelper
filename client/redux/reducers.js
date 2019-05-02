import Redux from 'redux';

const initialState = {
    search: '',
    searchResults: null,
    zip: null,
    currentProduct: {description: "Coca-Cola Classic Cans", 
    image: "https://www.coca-colaproductfacts.com/content/dam/Productfacts-Refresh/Products/coca-cola/coca-cola-original-12-oz-can.jpg", 
    learn_more: "http://www.virtualvender.coca-cola.com/ft/index.jsp", 
    materials: [
      {
        description: "Aluminum Beverage Cans", 
        long_description: 'Most recyclers require that cans are clean and intact to be collected for recycling.',
        material_id: 70
      }, 
      {
        description: "Paperboard", 
        long_description: "Most recyclers require that paperboard be devoid of food waste to be collected for recycling",
        material_id: 42
      }
    ], 
    manufacturer: {
      url: "http://www.coca-cola.com/", 
      description: "Coca-Cola"
    }, 
    long_description: "Coca-Cola was patented in 1887, registered as a trademark in 1893 and by 1895 it was being sold in every state and territory in the United States. In 1899, The Coca-Cola Company began franchised bottling operations in the United States. Coca-Cola might owe its origins to the United States, but its popularity has made it truly universal. Today, you can find Coca-Cola in virtually every part of the world.", 
    size: "12-12 Fl. Oz. Cans"
  },
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