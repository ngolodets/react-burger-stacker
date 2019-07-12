import React from 'react';

class IngredientList extends React.Component {
  render() {
    return (  
      <div style={{display: "inline-block",
                    backgroundColor: "lightgray", 
                    border: "1px solid black", 
                    width: "350px", 
                    height: "350px", 
                    margin: "15px", 
                    marginLeft: "400px", 
                    float: "left"}}
      >
        <h2 style={{margin: "5px", 
                    padding: "5px", 
                    textAlign: "center"}}
        >Available Ingredients:
        </h2>
        <ul style={{listStyle: "none"}}>
          {this.props.ingredients.map((ingredient, i) => 
            <li key={i}>{ingredient}
                          <button type="submit">ADD >></button>
            </li>
            )
          } 
        </ul>
      </div> 
    )
  }
}

export default IngredientList;
