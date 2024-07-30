"use client"
import { useState } from 'react';

export const Popup = ({product}) => {
    const [isVisible, setIsVisible] = useState(true);

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;
    return (
<div id="popup" class="popup">
        <div class="popup-content">
            <span id="closePopup" class="close-btn" onClick={closePopup}>&times;</span>
            <div><img src={product.urlImage} class="imagen-popup"/></div>
            <div class="contenido-popup">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            </div>
        </div>
      </div>
    );
}