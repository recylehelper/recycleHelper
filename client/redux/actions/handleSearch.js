import axios from 'axios';
import changeSearchResults from './changeSearchResults.js';


const Search = (q) => {
    var options = {
        key: process.env.KEY,
        query: q,
        url: 'http://localhost:3005/api/products'
    };

    return ((dispatch) => { 
        axios.get('http://localhost:3005/api/products')
        .then(data => {
            return dispatch(changeSearchResults(['Coca Cola',2,3,4]))
        })
        .catch(err => {
            console.log('error', err)
        })
    });
}

export default Search