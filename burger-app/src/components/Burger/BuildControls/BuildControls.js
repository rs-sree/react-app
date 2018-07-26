import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label:'Salad' , type:'salad'},
  { label:'Cheese' , type:'cheese'},
  { label:'Meat' , type:'meat'},
  { label:'Bacon' , type:'bacon'}
];
const buildControls = ( props ) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(cts => (
      <BuildControl
         key={cts.label} 
        label={cts.label}
        added={() => props.ingredientAdded(cts.type)}
        removed={() => props.ingredientRemoved(cts.type)}
        disabled= {props.disabled[cts.type]} /> 
      )
    )}
  <button className={classes.OrderButton} disabled = {!props.purchasable}>Order Now </button>
  </div>
);

export default buildControls;
