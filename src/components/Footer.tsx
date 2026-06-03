import { Link } from 'react-router-dom';
import './styles/footer.css';

export function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <span className="footer-logo-first">DR. GABRIEL</span>
                        <span className="footer-logo-second">ALMEIDA</span>
                    </div>
                    <p className="footer-desc">
                        Excelência em cardiologia clínica, diagnóstico preciso e atendimento humanizado para cuidar do seu bem mais valioso.
                    </p>
                </div>

                <div className="footer-links">
                    <h4 className="footer-title">Navegação</h4>
                    <nav className="footer-nav">
                        <Link to="/">Início</Link>
                        <Link to="/sobre">Sobre o Doutor</Link>
                        <Link to="/servicos">Especialidades</Link>
                        <Link to="/depoimentos">Depoimentos</Link>
                    </nav>
                </div>

                <div className="footer-contact">
                    <h4 className="footer-title">Contato e Local</h4>
                    <div className="contact-info">
                        <p>Centro Médico Empresarial</p>
                        <p>Sala 402 - Brasília, DF</p>
                        <p>CRM-DF 12345 | RQE 6789</p>
                        <p className="contact-highlight">(61) 99999-0000</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-wrapper">
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Dr. Gabriel Almeida. Todos os direitos reservados.</p>
                    <p className="footer-dev">Desenvolvido por Kauã Henrique</p>
                </div>
            </div>
        </footer>
    );
}