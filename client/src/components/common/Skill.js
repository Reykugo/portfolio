import React from "react";

const Skill = ({img,alt}) => {
    return(
    <div className="col-md-2">
        <img src={img} alt={alt}/>
    </div>
    )
    
}

export default Skill;