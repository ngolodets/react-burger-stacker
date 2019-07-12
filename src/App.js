import React from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      stack: []
    }
    this.onAddIngredient = this.onAddIngredient.bind(this);
    this.onClearStack = this.onClearStack.bind(this);
  }

  onClearStack(e) {
    e.preventDefault();
    this.setState({
      stack: []
    })
  }
  
  onAddIngredient(e, i) {
    e.preventDefault();
    const stackCopy = Array.from(this.state.stack);
    stackCopy.unshift(this.state.ingredients[i]);
    this.setState({
      stack: stackCopy
    })
  }

  render() {
    const listCopy = Array.from(this.state.ingredients);
    const stackCopy = Array.from(this.state.stack);
  
    return (
      <>
        <IngredientList ingredients={listCopy} addIngredient={this.onAddIngredient} />
        <BurgerPane usedIngredients={stackCopy} clearStack={this.onClearStack} />
      </>
    );
  }
}




export default App;
