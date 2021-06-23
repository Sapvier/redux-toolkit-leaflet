import React from 'react';
import {useSelector} from "react-redux";
import {cart} from "../../reducers/cart/selectors";
import CartItems from "./CartItems";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import "./styles.scss"

const ourShops = [
    {
        address: "Урловская 16",
        coords: [50.405290, 30.622725]
    },
    {
        address: "Раисы Окипной 10",
        coords: [50.447653, 30.589107]
    }
]

const Cart = () => {
    const cartItems = useSelector(cart)

    return (
        <div className="cartpage-container">
            <CartItems cartItems={cartItems}/>
            <div className="map-wrapper">
                <MapContainer center={[50.416613, 30.579308]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                        url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
                    />
                    {ourShops.map((item, i) =>
                        <Marker key={i} position={item.coords}>
                            <Popup>
                                {item.address}
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
        </div>
    );
};

export default Cart;