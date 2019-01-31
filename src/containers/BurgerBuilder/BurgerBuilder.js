import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

import Burger from '../../components/Burger/Burger';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
  }

  updatePurchaseState = (ingredients) => {
    const purchaseable = Object.keys(ingredients).map(igKey => ingredients[igKey])
      .reduce((acc, cur) => acc + cur, 0) > 0;
      this.setState({purchaseable});
  }

  addIngrendientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngrendients = {
      ...this.state.ingredients
    }

    updatedIngrendients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngrendients});
    this.updatePurchaseState(updatedIngrendients);
  }

  removeIngrendientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngrendients = {
      ...this.state.ingredients
    }

    updatedIngrendients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngrendients});
    this.updatePurchaseState(updatedIngrendients);
  }

  render = () => {
    const disabledInfo = {...this.state.ingredients};

    for (let key in disabledInfo) {disabledInfo[key] = disabledInfo[key] <= 0}

    return (
    <>
      <Burger ingredients={this.state.ingredients}/>
      <BuildControls
        ingredientAdded={this.addIngrendientHandler}
        ingredientRemoved={this.removeIngrendientHandler}
        disabled={disabledInfo}
        purchaseable={this.state.purchaseable}
        price={this.state.totalPrice}
      />
    </>
  )};
}

export default BurgerBuilder;