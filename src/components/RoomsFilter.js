import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';


//get uniqe type
const getUniqe = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {

    //react hooks
    const context = useContext(RoomContext);
    //console.log(context);
    const { handleChange, type, capacity, price, maxPrice, minPrice, minSize, maxSize, breakfast, pets } = context;

    //get types
    let types = getUniqe(rooms, "type");
    //add "all" option
    types = ['all', ...types];
    types = types.map((type, index) => {
        return (
            <option key={index} value={type}>{type}</option>
        )
    })
    // get people
    let people = getUniqe(rooms, "capacity");
    people = people.map((item, index) => {
        return (
            <option key={index} value={item}>{item}</option>
        )
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" className="form-control" onChange={handleChange} value={type}>{types}</select>
                </div>
                {/* end select */}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" className="form-control" onChange={handleChange} value={capacity}>{people}</select>
                </div>
                {/* end select */}
                {/* price  */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" min={minPrice} max={maxPrice} name="price" id="price" className="form-control" onChange={handleChange} value={price} />
                </div>
                {/* end */}
                {/* size  */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end */}
                {/* extras  */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" id="breakfast" name="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" id="pets" name="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                    
                </div>
                {/* end */}
                

            </form>
        </section>
    )
}