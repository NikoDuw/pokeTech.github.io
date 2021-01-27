import React from 'react';
import "./styles/Footer.css";

class Footer extends React.Component{
    render(){
        return(
            <div className="container-footer">
            <p className="by">Development by <a href="https://github.com/NikoDuw" target="blank"> @NikoDuw</a> &#x1F43A;</p>
            </div>
        )
    }
}
export default Footer;