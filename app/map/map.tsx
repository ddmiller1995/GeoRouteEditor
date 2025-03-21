import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
    const mapRef = useRef(null);
    const latitude = 51.505;
    const longitude = -0.09;
    const [isClient, setIsClient] = useState(false);

  
    useEffect(() => {
        setIsClient(true);
    }, []);

    return ( 
        <main className="flex items-center justify-center pt-16 pb-4">
            <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Additional map layers or components can be added here */}
            </MapContainer>
        </main>
    );

    // return (
    //     <main className="flex items-center justify-center pt-16 pb-4">
    //         <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
    //         <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    //             <TileLayer
    //                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //             />
    //             <Marker position={[51.505, -0.09]}>
    //                 <Popup>
    //                 A pretty CSS3 popup. <br /> Easily customizable.
    //                 </Popup>
    //             </Marker>
    //         </MapContainer>                
    //         </div>
    //     </main>
    // )
}