import './styles/depoimentos.css';

export function Depoimentos() {
    return (
        <div className="depoimentos-container">
            <div className="depoimentos-header">
                <div className="intro-text">Histórias Reais</div>
                <h1 className="title">
                    <span className="title-first">Experiências de</span>
                    <span className="title-second">Nossos Pacientes</span>
                </h1>
            </div>

            <div className="depoimentos-grid">
                <div className="depoimento-card">
                    <div className="quote-mark">"</div>
                    <p className="depoimento-text">
                        Profissional excepcional. O Dr. Gabriel transmite muita calma e segurança durante a consulta. Seu diagnóstico foi preciso e o tratamento mudou completamente a minha qualidade de vida para melhor.
                    </p>
                    <div className="depoimento-footer">
                        <div className="author-info">
                            <span className="author-name">Maria Silva</span>
                            <span className="author-desc">Paciente há 3 anos</span>
                        </div>
                    </div>
                </div>

                <div className="depoimento-card">
                    <div className="quote-mark">"</div>
                    <p className="depoimento-text">
                        Fiz meu risco cirúrgico com a equipe e fiquei impressionado com a agilidade e o detalhismo dos exames. O atendimento humanizado faz toda a diferença quando estamos apreensivos com uma cirurgia.
                    </p>
                    <div className="depoimento-footer">
                        <div className="author-info">
                            <span className="author-name">Carlos Eduardo</span>
                            <span className="author-desc">Check-up pré-operatório</span>
                        </div>
                    </div>
                </div>

                <div className="depoimento-card">
                    <div className="quote-mark">"</div>
                    <p className="depoimento-text">
                        Como atleta amador, sempre tive receio de forçar meu coração. O Dr. Gabriel fez um mapeamento completo e me orientou de forma muito clara. Hoje treino com muito mais segurança e performance.
                    </p>
                    <div className="depoimento-footer">
                        <div className="author-info">
                            <span className="author-name">Roberto Alves</span>
                            <span className="author-desc">Medicina Esportiva</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}