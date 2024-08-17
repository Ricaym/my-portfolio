import React from 'react'
import "../stylesheets/resume.css";

export default function Resume({cv1, cv2}) {
    return (
        <div class='articles_a'>
            <div class='resume'>
                <img src={cv1} class='cv'/>
                <img src={cv2} class='cv'/>
            </div>
        </div>
    )
}
