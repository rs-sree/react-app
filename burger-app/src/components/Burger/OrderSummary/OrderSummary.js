import React from 'react';
import Hoc from '../../../hoc/Hoc';


const orderSummary = (props) => {
    const ingSummary = Object.keys(props.ingredients)
                       .map(key => {
                           return (<li>
                                        <span style={{textTransform:'capitalize'}}>{key}</span>: {props.ingredients[key]}
                                    </li>);
                       });
    return (
        <Hoc>
            <h3> Your Order </h3>
            <p> Delicious Burger with Ingredients:</p>
            <ul>
                {ingSummary}
            </ul>
        </Hoc>
    );
}

export default orderSummary;