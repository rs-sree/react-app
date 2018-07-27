import React,{Component} from 'react';

import Hoc from '../../hoc/Hoc';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese:0.4,
  meat:1.9,
  bacon:1.1
};

class BurgerBuilder extends Component {
  state = {
    ingredients : {
      'cheese': 0,
      'meat': 0,
      'bacon': 0,
      'salad': 0
    },
    totalPrice : 4,
    purchasable: false
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    //if(oldCount > 0){
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
   // }
  }

  updatePurchaseState = (ingredients) => {
   const sum = Object.keys(ingredients).map(key=>{
      return ingredients[key]
    }).reduce((sum,el)=>{
      return sum+el;
    },0)
    this.setState({purchasable:sum>0})
  }

  render(){

    const disabledInfo = {
      ...this.state.ingredients
    };

    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Hoc>
        <Burger  ingredients = {this.state.ingredients}/>
        <BuildControls ingredientAdded= {this.addIngredientHandler} 
                       ingredientRemoved= {this.removeIngredientHandler}
                       disabled = {disabledInfo}
                       price ={this.state.totalPrice}
                       purchasable= {this.state.purchasable}/>
      </Hoc>
    );
  }
}

export default BurgerBuilder;
