
import './styles/servicos.css';

export function Servicos() {
    return (
        <div className="servicos-container">
            <div className="servicos-header">
                <div className="intro-text">Áreas de Atuação</div>
                <h1 className="title">
                    <span className="title-first">Especialidades</span>
                    <span className="title-second">Médicas</span>
                </h1>
            </div>

            <div className="servicos-grid">
                <div className="servico-card">
                    <div className="servico-number">01</div>
                    <h3 className="servico-title">Cardiologia Clínica</h3>
                    <p className="servico-desc">
                        Acompanhamento contínuo, prevenção e tratamento de doenças cardiovasculares, focando na sua longevidade e qualidade de vida diária.
                    </p>
                </div>

                <div className="servico-card">
                    <div className="servico-number">02</div>
                    <h3 className="servico-title">Check-up Preventivo</h3>
                    <p className="servico-desc">
                        Avaliação completa e detalhada do seu sistema cardiovascular para identificar e tratar precocemente possíveis riscos e patologias.
                    </p>
                </div>

                <div className="servico-card">
                    <div className="servico-number">03</div>
                    <h3 className="servico-title">Risco Cirúrgico</h3>
                    <p className="servico-desc">
                        Avaliação clínica criteriosa e exames pré-operatórios para garantir a máxima segurança durante seus procedimentos cirúrgicos.
                    </p>
                </div>

            </div>
        </div>
    );
}