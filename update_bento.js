const fs = require('fs');
const path = require('path');

const htmlPath = path.join('c:', 'Users', 'Алекс', 'OneDrive', 'Desktop', 'OrbitaAI', 'index.html');
const cssPath = path.join('c:', 'Users', 'Алекс', 'OneDrive', 'Desktop', 'OrbitaAI', 'css', 'style.css');

let htmlContent = fs.readFileSync(htmlPath, 'utf8');

const newHtml = `    <main class="page-main" id="home">
        <div class="container container-bento">
            <div class="bento-grid">
                
                <!-- Hero Card (Span 2) -->
                <div class="bento-card bento-hero bento-span-2 fade-in">
                    <div class="bento-content">
                        <div class="badge">Digital Control 2.0</div>
                        <h1 class="hero-title">Интеллектуальная система управления <br><span class="highlight">эффективностью</span></h1>
                        <p class="hero-description">
                            Превращаем видео и аудио в точные данные. Заменяем субъективные оценки прозрачной аналитикой на базе ИИ для роста вашей прибыли.
                        </p>
                        <div class="hero-actions">
                            <a href="#about" class="btn btn-primary">Узнать больше</a>
                            <a href="#contact" class="btn btn-outline">Демо-доступ</a>
                        </div>
                    </div>
                </div>

                <!-- Hero Image Card (Span 1) -->
                <div class="bento-card bento-image bento-span-1 bento-row-span-2 fade-in delay-1">
                    <img src="images/hero_dashboard.png" alt="Интерфейс системы Orbita AI Control" class="hero-image" loading="lazy">
                    <div class="glow-effect"></div>
                </div>

                <!-- About (Span 2) -->
                <div class="bento-card bento-about bento-span-2 fade-in" id="about">
                    <div class="bento-content">
                        <h2 class="section-title">Контроль <span class="highlight">24/7</span></h2>
                        <p class="hero-description">Мы помогаем бизнесу видеть реальную картину взаимодействия с клиентами. Система фиксирует нарушения регламентов в реальном времени.</p>
                        <ul class="feature-list">
                            <li><svg viewBox="0 0 24 24" class="icon"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Распознавание речи в реальном времени</li>
                            <li><svg viewBox="0 0 24 24" class="icon"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Моментальное выявление нарушений</li>
                        </ul>
                    </div>
                </div>

                <!-- How it works 1 (Span 1) -->
                <div class="bento-card bento-feature bento-span-1 fade-in" id="how-it-works">
                    <div class="bento-content text-center">
                        <div class="card-icon">🎙️</div>
                        <h3 class="card-title">Сбор данных</h3>
                        <p class="card-text">Видео и аудио потоки с рабочих мест передаются для непрерывной фиксации.</p>
                    </div>
                </div>

                <!-- How it works 2 (Span 1) -->
                <div class="bento-card bento-feature bento-span-1 fade-in delay-1">
                    <div class="bento-content text-center">
                        <div class="card-icon">🧠</div>
                        <h3 class="card-title">ИИ-Анализ</h3>
                        <p class="card-text">Нейросети транскрибируют речь и сопоставляют с вашим регламентом.</p>
                    </div>
                </div>

                <!-- Stat 1 (Span 1) - Accent Color -->
                <div class="bento-card bento-stat bento-stat-accent bento-span-1 fade-in delay-2">
                    <div class="bento-content text-center">
                        <div class="stat-value">+28%</div>
                        <div class="stat-label">Рост прибыли</div>
                    </div>
                </div>

                <!-- CTA (Span 2) -->
                <div class="bento-card bento-cta bento-span-2 bento-glow fade-in" id="contact">
                    <div class="bento-content">
                        <h2>Готовы увеличить эффективность бизнеса?</h2>
                        <form class="cta-form" id="contactForm">
                            <input type="email" placeholder="Ваш Email" required class="form-input">
                            <button type="submit" class="btn btn-primary">Запросить демо</button>
                        </form>
                    </div>
                </div>

                <!-- Stat 2 (Span 1) -->
                <div class="bento-card bento-stat bento-span-1 fade-in delay-1">
                    <div class="bento-content text-center">
                        <div class="stat-value highlight">97%</div>
                        <div class="stat-label">Соблюдение регламентов</div>
                    </div>
                </div>

            </div>
        </div>
    </main>`;

htmlContent = htmlContent.replace(/<main>[\s\S]*?<\/main>/, newHtml);
fs.writeFileSync(htmlPath, htmlContent, 'utf8');

let cssContent = fs.readFileSync(cssPath, 'utf8');
let prefix = cssContent.split('/* Hero Section */')[0];
prefix = prefix.replace('--bg-color: #121418;', '--bg-color: #000000;');
prefix = prefix.replace('--surface-color: #1e2126;', '--surface-color: #111114;');
prefix = prefix.replace('--surface-light: #2b2f36;', '--surface-light: #1c1c22;');

const newCss = `/* Layout Overrides */
.page-main {
    padding-top: 120px;
    padding-bottom: 80px;
    min-height: 100vh;
}

.container-bento {
    max-width: 1400px;
}

/* Bento Grid System */
.bento-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(min-content, auto);
    gap: 24px;
}

.bento-card {
    background-color: var(--surface-color);
    border-radius: 32px;
    padding: 40px;
    position: relative;
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.08); /* Faint top glow */
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02), 0 20px 40px rgba(0, 0, 0, 0.4);
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex;
    flex-direction: column;
}

.bento-card:hover {
    transform: translateY(-4px);
}

.bento-span-1 { grid-column: span 1; }
.bento-span-2 { grid-column: span 2; }
.bento-span-3 { grid-column: span 3; }
.bento-row-span-2 { grid-row: span 2; }

/* Bento Content Alignment */
.bento-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.text-center {
    align-items: center;
    text-align: center;
}

/* Bento Specific Card Styles */
.bento-hero {
    justify-content: center;
}

.badge {
    display: inline-block;
    padding: 0.5rem 1.2rem;
    background: rgba(93, 126, 158, 0.15);
    color: var(--accent-color);
    border: 1px solid rgba(93, 126, 158, 0.3);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    align-self: flex-start;
}

.hero-title, .section-title {
    font-size: clamp(2rem, 4vw, 3.5rem);
    margin-bottom: 1.5rem;
    letter-spacing: -1px;
    line-height: 1.1;
}

.hero-description {
    font-size: 1.15rem;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    max-width: 600px;
    line-height: 1.6;
}

.hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

/* Bento Image Card */
.bento-image {
    padding: 0;
    justify-content: center;
    align-items: center;
    background: linear-gradient(145deg, var(--surface-light), var(--surface-color));
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    transition: var(--transition);
}

.bento-image:hover .hero-image {
    transform: scale(1.03);
}

.glow-effect {
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 50px rgba(93, 126, 158, 0.15);
    pointer-events: none;
    z-index: 1;
}

/* Bento Features & Stats */
.card-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.card-text {
    color: var(--text-secondary);
    font-size: 1.05rem;
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.feature-list {
    list-style: none;
    margin-top: 1.5rem;
}

.feature-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.1rem;
}

.feature-list .icon {
    width: 24px;
    height: 24px;
    fill: var(--accent-color);
}

.stat-value {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 800;
    margin-bottom: 0.5rem;
    line-height: 1;
}

.stat-label {
    color: var(--text-secondary);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
}

.bento-stat-accent {
    background-color: var(--accent-color);
    color: #000;
    box-shadow: 0 0 30px var(--accent-glow);
    border-top: none;
}

.bento-stat-accent .stat-value,
.bento-stat-accent .stat-label {
    color: #000;
    text-shadow: none;
}

/* CTA Card */
.bento-glow {
    position: relative;
}

.bento-glow::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(93, 126, 158, 0.15) 0%, transparent 70%);
    pointer-events: none;
}

.bento-cta {
    align-items: center;
    text-align: center;
}

.bento-cta h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    letter-spacing: -0.5px;
}

.cta-form {
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

.form-input {
    padding: 1rem 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.7);
    color: var(--text-primary);
    font-family: inherit;
    font-size: 1rem;
    flex: 1;
    transition: var(--transition);
}

.form-input:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 15px rgba(93, 126, 158, 0.2);
}

.bento-cta .btn {
    border-radius: 12px;
}

/* Animations (Scroll) */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

.delay-1 { transition-delay: 0.15s; }
.delay-2 { transition-delay: 0.3s; }

/* Responsive */
@media (max-width: 1024px) {
    .bento-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .bento-hero, .bento-about, .bento-cta {
        grid-column: span 2;
    }
    
    .bento-image {
        grid-column: span 2;
        grid-row: span 1;
        aspect-ratio: 16/9;
    }
}

@media (max-width: 768px) {
    .page-main {
        padding-top: 90px;
    }
    
    .bento-grid {
        grid-template-columns: 1fr;
    }
    
    .bento-span-1, .bento-span-2, .bento-span-3, 
    .bento-hero, .bento-about, .bento-cta, .bento-image {
        grid-column: span 1;
        grid-row: span 1;
    }
    
    .bento-card {
        padding: 30px 24px;
        border-radius: 24px;
    }
    
    .hero-title, .section-title {
        font-size: 2.2rem;
    }

    /* Mobile Menu */
    .nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background: var(--surface-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.4s ease;
        z-index: 999;
    }

    .nav.active {
        right: 0;
    }

    .nav-list {
        flex-direction: column;
        margin-bottom: 2rem;
    }

    .mobile-menu-btn {
        display: flex;
        z-index: 1000;
    }

    .mobile-menu-btn.active span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }

    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }

    .mobile-menu-btn.active span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }

    .cta-form {
        flex-direction: column;
    }

    .form-input {
        max-width: 100%;
    }
}
`;
fs.writeFileSync(cssPath, prefix + newCss, 'utf8');
