import React, { useRef, useEffect } from 'react';
import './Map.css';
import icon from './icon.png';

const Map = props => {
    const mapRef = useRef();
    const { center, zoom } = props;
    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom,
        });
        new window.google.maps.Marker({ position: center, map: map});
        new window.google.maps.Marker({ position: new window.google.maps.LatLng(31.353,75.4542), map: map });
        new window.google.maps.Marker({ position: new window.google.maps.LatLng(31.35065,75.46285), map: map });
    }, [center, zoom]);
    

    

    return <div ref={mapRef} className={`map ${props.className}`} style={props.style}>

    </div>
};

export default Map;