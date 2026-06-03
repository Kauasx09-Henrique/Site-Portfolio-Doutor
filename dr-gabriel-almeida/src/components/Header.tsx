import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/header.css';
import logo from '../../public/logo.png';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? 'active' : '';
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header-container">
            <div className="header-content">
                <Link to="/" className="header-logo" onClick={closeMenu}>
                    <img src={logo} alt="Logo" className="logo-image" />
                    <div className="logo-text">
                        <span className="logo-name">DR. GABRIEL</span>
                        <span className="logo-specialty">CARDIOLOGISTA</span>
                    </div>
                </Link>

                <button className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Início</Link>
                    <Link to="/sobre" className={`nav-link ${isActive('/sobre')}`} onClick={closeMenu}>Sobre</Link>
                    <Link to="/servicos" className={`nav-link ${isActive('/servicos')}`} onClick={closeMenu}>Especialidades</Link>
                    <Link to="/depoimentos" className={`nav-link ${isActive('/depoimentos')}`} onClick={closeMenu}>Depoimentos</Link>

                    <div className="header-actions-mobile">
                        <a href="#agendamento" className="btn-agendar" onClick={closeMenu}>
                            Agendar Consulta
                        </a>
                    </div>
                </nav>

                <div className="header-actions">
                    <a href="#agendamento" className="btn-agendar">
                        Agendar Consulta
                    </a>
                </div>
            </div>
        </header>
    );
}