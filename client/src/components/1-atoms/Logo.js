import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImgLogo from './../../assets/images/logo-mercado-livre.png';

class Logo extends Component {
    render() {
        return (
            <h1 className="site-title">
                <Link to="/" title="Mercado Livre">
                    <img src={ImgLogo} alt="Mercado Livre" />
                </Link>
            </h1>
        );
    }
}

export default Logo;
