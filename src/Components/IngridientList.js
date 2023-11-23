import React from "react";

const IngredientList = ({ ingredients }) => {
    return (
        <div className="row">
            {ingredients.map((ingredient, idx) => (
                <div className="col-4" key={idx + ingredient}>
                    <div className="box">
                        <h5>{ingredient}</h5>
                        <img
                            src={`https://www.themeldb.com/image/ingredients/${ingredient}.png`}
                            alt=""
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IngredientList;
