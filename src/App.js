import React from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientName: [
        'Kaiser Bun',
        'Sesame Bun',
        'Gluten Free Bun',
        'Lettuce Wrap',
        'Beef Patty',
        'Soy Patty',
        'Black Bean Patty',
        'Chicken Patty',
        'Lettuce',
        'Tomato',
        'Bacon',
        'Onion'
      ],
      ingredientColor: [
        'saddlebrown',
        'sandybrown',
        'peru',
        'olivedrab',
        '#3F250B',
        '#3F250B',
        '#3F250B',
        'burlywood',
        'lawngreen',
        'tomato',
        'maroon',
        'lightyellow'
      ],
      stackName: ["sesame bun", "bacon", "tomato", "avocado"],
      stackColor: []
    }
  }
  render() {
    const listCopy = Array.from(this.state.ingredientName);
    const colorCopy = Array.from(this.state.ingredientColor);
    const stackCopy = Array.from(this.state.stackName);
    return (
      <>
        <IngredientList ingredients={listCopy} colors={colorCopy} />
        <BurgerPane usedIngredients={stackCopy} />
      </>
    );
  }
}




export default App;
