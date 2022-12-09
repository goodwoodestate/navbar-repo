import React from 'react';

function GWGreenButton(props) {
    return (
        <button onClick={props.onClick} className="bg-custom-grey w-20 m-3 text-lg text-black">
            {props.children}
        </button>
    )
}

export default GWGreenButton;