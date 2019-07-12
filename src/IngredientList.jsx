import React from 'react';

class IngredientList extends React.Component {
  render() {
    return (  
      <div style={{display: "inline-block",
                    backgroundColor: "lightgray", 
                    border: "1px solid black", 
                    width: "350px", 
                    height: "420px", 
                    margin: "15px", 
                    marginLeft: "400px", 
                    float: "left"}}
      >
        <h2 style={{margin: "5px", 
                    padding: "5px", 
                    textAlign: "center"}}
        >Available Ingredients:
        </h2>
        {this.props.ingredients.map((ingredient, i) => 
          <h4 key={i}
              style={{margin: "10px",
                      textAlign: "center"}}
          >{ingredient.name}
            <button type="button"
                    onClick={(e) => this.props.addIngredient(e, i)}>ADD >></button>
          </h4>
          )
        }
      </div> 
    )
  }
}

export default IngredientList;
