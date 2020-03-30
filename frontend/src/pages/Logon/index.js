import React, { useState } from 'react';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroImg from '../../assets/heroes.png';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(evento) {
        evento.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('profile')
        } catch (error) {
            alert(`Falha no login, tente novamente.`);
            console.info(`Erro de login -> ${error}`)  
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input
                     placeholder="sua ID"
                     value={id}
                     onChange={evento => setId(evento.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link"to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
            <img src={heroImg} alt="Heroes"/>
        </div>
    );
}
