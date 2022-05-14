import React, {useState} from "react";

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    
    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" alt="pic" />
        </div>
    )
}

export default Image