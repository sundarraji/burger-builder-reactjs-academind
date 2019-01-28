import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
      .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])]
            .map((_,i) => (<BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        ));
      })
      .reduce((arr, el)=> arr.concat(el), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;