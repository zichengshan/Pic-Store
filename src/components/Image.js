import React from "react";

function Image({className, img}) {
    return (
        <div className={`${className} image-container`}>
            <img src={img.url} className="image-grid" />
        </div>
    )
}

export default Image