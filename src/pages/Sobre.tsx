import { Link } from 'react-router-dom';
import './styles/sobre.css';
import fotoMedico from '../../public/foto-medico2.png';

export function Sobre() {
    return (
        <div className="sobre-container">
            <div className="background-element element-1"></div>
            <div className="background-element element-2"></div>

            <div className="sobre-wrapper">
                <div className="sobre-image-section">
                    <div className="image-frame">
                        <img src={fotoMedico} alt="Dr. Gabriel Almeida" className="sobre-doctor-photo" />
                        <div className="image-accent"></div>
                        <div className="experience-badge">
                            <span className="badge-number">18+</span>
                            <span className="badge-text">Anos de Experiência</span>
                        </div>
                    </div>
                </div>

                <div className="sobre-content">
                    <div className="intro-text">Trajetória Profissional</div>

                    <h1 className="title">
                        <span className="title-first">Excelência e</span>
                        <span className="title-second">Humanidade</span>
                    </h1>

                    <p className="description">
                        O Dr. Gabriel Almeida é referência em cardiologia clínica, unindo profundo conhecimento científico a um atendimento genuinamente humano. Sua abordagem foca não apenas no tratamento, mas na prevenção e na qualidade de vida integral do paciente.
                    </p>

                    <div className="education-list">
                        <div className="education-item">
                            <div className="edu-year">2010</div>
                            <div className="edu-details">
                                <h3>Especialização em Cardiologia</h3>
                                <span>Instituto do Coração (InCor)</span>
                            </div>
                        </div>
                        <div className="education-item">
                            <div className="edu-year">2015</div>
                            <div className="edu-details">
                                <h3>MBA em Gestão de Saúde</h3>
                                <span>Fundação Getulio Vargas (FGV)</span>
                            </div>
                        </div>
                        <div className="education-item">
                            <div className="edu-year">2020</div>
                            <div className="edu-details">
                                <h3>Fellowship Internacional</h3>
                                <span>Harvard Medical School</span>
                            </div>
                        </div>
                    </div>

                    <div className="cta-section">
                        <Link to="/" className="btn btn-secondary">
                            Voltar ao Início
                        </Link>
                        <a href="#agendamento" className="btn btn-primary">
                            Agendar Consulta
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}