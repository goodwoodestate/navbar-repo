import React from 'react';
import './ShopTiles.css';


function ShopTiles(props) {
    return (
        <div className='h-full w-full flex flex-wrap flex-row justify-evenly content-start gap-5'>
            {props.info.map((item) => {
                console.log(item.title)
                const bg = item.image;
                return (
                    <div key={item.id} className='bg-red-400 rounded-md product-container' style={{
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundImage: `url('${bg}')`,
                        aspectRatio: "2/3",
                      }}>
                        <a href="#" className='text-white bg-slate-700'>
                            <p className='text-white text-lg bg-slate-700'>{item.title}</p>
                            <p></p>
                        </a>
                    </div>
                )
            }
            )
            }
        </div>
    )
}

export default ShopTiles;