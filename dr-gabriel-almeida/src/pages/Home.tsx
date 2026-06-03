import { Link } from 'react-router-dom';
import './styles/home.css';
import fotoMedico from '../../public/foto-medico.png';

export function Home() {
    return (
        <div className="container">
            <div className="background-element element-1"></div>
            <div className="background-element element-2"></div>
            <div className="background-element element-3"></div>

            <div className="wrapper">
                <div className="content-section">
                    <div className="intro-text">Cardiologia de Excelência</div>

                    <h1 className="title">
                        <span className="title-first">DR. GABRIEL</span>
                        <span className="title-second">ALMEIDA</span>
                    </h1>

                    <div className="credentials">
                        <span className="credential-item">
                            <span className="dot"></span>
                            Cardiologista Clínico
                        </span>
                        <span className="credential-item">
                            <span className="dot"></span>
                            MBA em Gestão da Saúde
                        </span>
                        <span className="credential-item">
                            <span className="dot"></span>
                            Especialista Internacional
                        </span>
                    </div>

                    <p className="description">
                        Atendimento humanizado combinado com diagnóstico de alta precisão. Mais de 18 anos dedicados ao cuidado cardiovascular com excelência clínica e tecnologia de ponta.
                    </p>

                    <div className="stats-grid">
                        <div className="stat">
                            <div className="stat-value">18+</div>
                            <div className="stat-label">Anos de Prática</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">10k+</div>
                            <div className="stat-label">Pacientes Atendidos</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">98%</div>
                            <div className="stat-label">Satisfação</div>
                        </div>
                    </div>

                    <div className="cta-section">
                        <Link to="/sobre" className="btn btn-primary">
                            Histórico Profissional
                        </Link>
                        <a href="#agendamento" className="btn btn-secondary">
                            Agendar Consulta
                        </a>
                    </div>
                </div>

                <div className="visual-section">
                    <div className="visual-box">
                        <img src={fotoMedico} alt="Dr. Gabriel Almeida" className="doctor-photo" />
                        <div className="visual-accent"></div>
                    </div>

                    <div className="info-card card-1">
                        <div className="card-number">01</div>
                        <div className="card-title">Diagnóstico Preciso</div>
                        <div className="card-line"></div>
                    </div>

                    <div className="info-card card-2">
                        <div className="card-number">02</div>
                        <div className="card-title">Tecnologia Avançada</div>
                        <div className="card-line"></div>
                    </div>

                    <div className="info-card card-3">
                        <div className="card-number">03</div>
                        <div className="card-title">Atendimento Humanizado</div>
                        <div className="card-line"></div>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            <div className="testimonial-hint">
                ↓ Conheça a trajetória e especialização abaixo
            </div>
        </div>
    );
}