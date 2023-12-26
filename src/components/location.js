import * as React from "react";
import location_png from "../images/location.png";

export default function LocationPNG(props) {
    return (
        <img src={location_png} alt="Location PNG Logo" {...props} />
    );
}