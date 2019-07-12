import React from 'react';

class BurgerPane extends React.Component {
  render() {
    return (
    <>
      <div style={{display: "inline-block", 
                    backgroundColor: "lightgray", 
                    border: "1px solid black", 
                    width: "350px", 
                    height: "420px", 
                    float: "left", 
                    margin: "15px",
                    textAlign: "center"}}
      >
        
          {this.props.usedIngredients.map((usedIngredient, i) => 
            <h4 key={i}
            style={{margin: "10px",
                    textAlign: "center",
                    backgroundColor: usedIngredient.color}}>
              {usedIngredient.name}
            </h4>
            )
          }
        <div style={{width: "300px", 
                      height: "5px", 
                      backgroundColor: "brown", 
                      border: "1px solid black", 
                      margin: "0 auto"}}
        ></div>
        <h2 style={{marginBottom: "5px", 
                    padding: "5px", 
                    textAlign: "center"}}
        >Burger Stacking Area
        </h2>
        <button type="button"
                onClick={this.props.clearStack}
        >CLEAR</button>
      </div>
    </>
    )
  }
}

export default BurgerPane;
