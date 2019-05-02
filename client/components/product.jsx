import React from 'react';
import Typography from '@material-ui/core/Typography';

const Product = (props) => {
    
    return (
        <div>
            <Typography variant = 'h2'>{props.currentProduct.description}</Typography>
            <img id = 'image' src = {props.currentProduct.image}/>
            <Typography variant = 'body2'>{props.currentProduct.long_description}</Typography>
            <br/>
            <Typography variant = 'h3'>Materials</Typography>
            <ul>
                {props.currentProduct.materials.map((value, index) => {
                    return <li key = {index}><Typography variant = 'body2'>{value.description}</Typography></li>
                })}
            </ul>
            <br/>
            <Typography variant = 'h3'>Material Rules</Typography>
            <ul>
                {props.currentProduct.materials.map((value, index) => {
                    return <li key = {index}><Typography variant = 'body2'>{value.long_description}</Typography></li>
                })}
            </ul>
        </div>
    )
}

export default Product