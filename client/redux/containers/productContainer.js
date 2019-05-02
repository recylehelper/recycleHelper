import { connect } from 'react-redux';
import Product from '../../components/product.jsx';

const mapStateToProps = (state) => {
    
    return ({
        currentProduct: state.currentProduct
    })
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return ({
//         handleZipChange: (ownProps) => dispatch(changeZip(ownProps))
//     })
// }



const ProductContainer = connect(mapStateToProps, null)(Product);

export default ProductContainer