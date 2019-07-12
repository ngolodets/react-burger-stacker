import React from 'react';

class BurgerPane extends React.Component {
  render() {
    return (
    <>
      <div style={{display: "inline-block", 
                    backgroundColor: "lightgray", 
                    border: "1px solid black", 
                    width: "350px", 
                    height: "350px", 
                    float: "left", 
                    margin: "15px",
                    textAlign: "center"}}
      >
        <ul style={{listStyle: "none"}}>
          {this.props.usedIngredients.map((usedIngredient, i) => 
            <li key={i}>{usedIngredient}
            </li>
            )
          }
        </ul>
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
        <button type="submit"
        >CLEAR</button>
      </div>
    </>
    )
  }
}

export default BurgerPane;
