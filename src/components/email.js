import * as React from "react";
import email_png from "../images/email.png";

export default function EmailPNG(props) {
    return (
        <img src={email_png} alt="Email PNG Logo" {...props} />
    );
}