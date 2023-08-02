import cardCss from "../styles/card.module.css";
export const Nutrition=(prop)=>{
    const item = prop.prop
    const nutrients = prop.nutrients;
    console.log(nutrients);
    
    
    return(
        <div>
            <h1 className={cardCss.heading}>Calories:{item.calories.toFixed(2)}</h1>
            <h1 className={cardCss.heading}>Ingredients</h1>
            {item.ingredientLines.map((ingredient)=>{
                return <div>{ingredient}</div>
            })}
            <h1 className={cardCss.heading}>Nutritions</h1>
            <div>ing</div>
            <h1 className={cardCss.heading}>Daily Requirements</h1>
        </div>
        

    )
}