import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {

    return (
        <div className="map" style={{ width: '100%', height: '27vh' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAVM-unqWzauvdO4J0zRUYsA_hy9RlmvHk" }}
                defaultCenter={{
                    lat: 1.3488457,
                    lng: 103.8472003
                }}
                defaultZoom={15}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map