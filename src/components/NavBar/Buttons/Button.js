import React from 'react';

function BlackButton(props) {
    return (
        <button className="bg-black border-2 w-20 m-3 text-base border-custom-grey text-white">
            {props.children}
        </button>
    )
}

export default BlackButton;