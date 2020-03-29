import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroImg from '../../assets/heroes.png';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Logon() {
    return (
        <div className="logon-container">
            <session className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form action="">
                    <h1>Faça seu logon</h1>

                    <input placeholder="sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link"to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </session>
            
            <img src={heroImg} alt="Heroes"/>
        </div>
    );
}
