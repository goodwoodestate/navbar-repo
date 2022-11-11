import React from 'react';
import './ShopTiles.css';


function ShopTiles(props) {
    props.info.map((item) => {
        console.log(item.title)
        return (
            <div key={item.id} className='bg-red-400 rounded-md product-container' >
                <a href="#" className='text-white bg-slate-700'>
                    <p className='text-white text-lg bg-slate-700'>{item.title}</p>
                    <p></p>
                </a>
            </div>
        )
    }

    )
}

export default ShopTiles;