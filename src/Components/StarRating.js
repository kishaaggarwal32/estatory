import React, { useState } from 'react';
import { FaStar} from 'react-icons/fa';

const StarRating=()=>{

    const [rating,setRating]=useState(null);
    return(
    <div className='divStar'>
        {[...Array(5)].map((star,i)=>{
            const ratingValue=i+1;
            return <label>
                <input type="radio" value={ratingValue} onClick={()=>setRating(ratingValue)}
                
                ></input>
                <FaStar className='fa-star-dif' color={ratingValue<=rating?"#FFDE00":"grey"} size={20}/></label>})}
    </div>)
};
export default StarRating;