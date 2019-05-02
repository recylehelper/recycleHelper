import React from 'react';
import Typography from '@material-ui/core/Typography';

const Product = (props) => {
    
    return (
        <div>
            <Typography variant = 'h1'>Product Name</Typography>
            <div id = 'image'>image</div>
            <Typography variant = 'body1'>Product Description/recyclability in area</Typography>
            <Typography variant = 'body2'>Product facts/things to do with it</Typography>
        </div>
    )
}

export default Product