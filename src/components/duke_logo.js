import * as React from 'react';
import duke_logo from "../images/duke_logo.png";

export default function DukeLogo(props) {
    return (
        <img src={duke_logo} {...props} alt="Duke University Logo" />
    );
}