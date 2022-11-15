import React from 'react';


function CategoryButton (props) {

    return (
        <button onClick={(e) => props.onClick(e)} className="font-light hover:font-bold active:font-bold">{props.category}</button>
    )
};

export default CategoryButton;