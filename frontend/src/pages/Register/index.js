import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './style.css';

import logoImg from "../../assets/logo.svg";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(evento) {
        evento.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf

        };

        try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso ${response.data.id}`);
            history.push('/');
        } catch (error) {
            alert(`Erro no Cadastro, tente novamente. ${error}`);
            console.info(`Erro de cadastro -> ${error}`)
        }
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link"to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                     placeholder=" Nome da ONG"
                     value={name}
                     onChange={evento => setName(evento.target.value)}
                    />
                    <input
                     type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={evento => setEmail(evento.target.value)}
                    />
                    <input
                     placeholder="whatsapp"
                     value={whatsapp}
                     onChange={evento => setWhatsapp(evento.target.value)}                    
                    />

                    <div className="input-group">
                        <input
                         placeholder="cidade"
                         value={city}
                         onChange={evento => setCity(evento.target.value)}
                        />
                        <input
                         placeholder="uf"
                          style={{ width: 80 }}
                          value={uf}
                          onChange={evento => setUf(evento.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}