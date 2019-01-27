import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render = () => (
    <>
      <Burger />
      <div>Build Controls</div>
    </>
  );
}

export default BurgerBuilder;