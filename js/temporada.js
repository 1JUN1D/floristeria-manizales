// ===================================
// TEMPORADA - Petalos y Chocolates Manizales
// Secciones especiales con contador (Amor y Amistad · Flores Amarillas)
// + flyer flotante de Flores Amarillas (se cierra solo a los 5 segundos)
// Requiere que la página ya tenga cargados: products, orderWA, formatCOP, filterProducts
// ===================================
(function () {
    'use strict';

    // Fechas en hora de Colombia (UTC-5). "end" = momento en que la sección deja de mostrarse.
    var SEASONS = [
        {
            key: 'amor-amistad',
            title: 'Amor y Amistad',
            dateLabel: '19 de septiembre',
            subtitle: 'Sorprende a esa persona especial con rosas, chocolates y un mensaje escrito a mano. Entrega a domicilio en Manizales.',
            todayText: '¡Hoy es Amor y Amistad! Pide ahora y entregamos hoy mismo',
            target: '2026-09-19T00:00:00-05:00',
            end: '2026-09-20T00:00:00-05:00',
            deco: ['❤', '♥', '💕', '❣', '♥', '❤'],
            filterLabel: '❤ Amor y Amistad'
        },
        {
            key: 'flores-amarillas',
            title: 'Flores Amarillas',
            dateLabel: '21 de septiembre',
            subtitle: 'El 21 de septiembre se regalan flores amarillas. Aparta tu ramo de girasoles con tiempo y lo entregamos a domicilio en Manizales.',
            todayText: '¡Hoy es el día de las Flores Amarillas! Pide ahora y entregamos hoy mismo',
            target: '2026-09-21T00:00:00-05:00',
            end: '2026-09-22T00:00:00-05:00',
            deco: ['🌻', '🌼', '🌻', '✨', '🌼', '🌻'],
            filterLabel: '🌻 Flores Amarillas',
            flyer: true
        }
    ];

    var CSS = ''
    + '.tmp-section{position:relative;overflow:hidden;padding:56px 0 60px;font-family:"Poppins",sans-serif;scroll-margin-top:90px}'
    + '.tmp-section + .tmp-section{border-top:4px solid #fff}'
    + '.tmp-inner{position:relative;z-index:2;max-width:1200px;margin:0 auto;padding:0 20px}'
    + '.tmp-amor-amistad{background:radial-gradient(circle at 15% 10%,#ffd9e4 0,transparent 45%),radial-gradient(circle at 90% 85%,#ffc2d1 0,transparent 40%),linear-gradient(135deg,#fff0f4 0%,#ffe0e8 55%,#ffd0dc 100%)}'
    + '.tmp-flores-amarillas{background:radial-gradient(circle at 12% 12%,#ffe27a 0,transparent 42%),radial-gradient(circle at 92% 88%,#ffd24d 0,transparent 40%),linear-gradient(135deg,#fffbe6 0%,#fff1b8 55%,#ffe58a 100%)}'
    + '.tmp-section::before,.tmp-section::after{content:"";position:absolute;left:0;right:0;height:14px;z-index:1;background-size:28px 14px;background-repeat:repeat-x}'
    + '.tmp-section::before{top:0}.tmp-section::after{bottom:0;transform:rotate(180deg)}'
    + '.tmp-amor-amistad::before,.tmp-amor-amistad::after{background-image:radial-gradient(circle at 14px 0,#d81b60 0 9px,transparent 10px)}'
    + '.tmp-flores-amarillas::before,.tmp-flores-amarillas::after{background-image:radial-gradient(circle at 14px 0,#f5a800 0 9px,transparent 10px)}'
    + '.tmp-deco{position:absolute;inset:0;z-index:1;pointer-events:none}'
    + '.tmp-deco span{position:absolute;opacity:.55;animation:tmp-float 7s ease-in-out infinite;line-height:1}'
    + '.tmp-amor-amistad .tmp-deco span{color:#e91e63}'
    + '@keyframes tmp-float{0%,100%{transform:translateY(0) rotate(-8deg)}50%{transform:translateY(-16px) rotate(8deg)}}'
    + '.tmp-head{text-align:center;margin-bottom:28px}'
    + '.tmp-ribbon{display:inline-block;padding:6px 18px;border-radius:999px;font-size:.78rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#fff;margin-bottom:14px}'
    + '.tmp-amor-amistad .tmp-ribbon{background:linear-gradient(135deg,#c2185b,#e91e63);box-shadow:0 4px 14px rgba(233,30,99,.35)}'
    + '.tmp-flores-amarillas .tmp-ribbon{background:linear-gradient(135deg,#e08e00,#f5b400);box-shadow:0 4px 14px rgba(224,142,0,.35)}'
    + '.tmp-title{font-family:"Playfair Display",serif;font-weight:700;font-size:clamp(1.9rem,4.5vw,3rem);line-height:1.15;margin:0 0 10px}'
    + '.tmp-amor-amistad .tmp-title{color:#a01347}.tmp-flores-amarillas .tmp-title{color:#7a4b00}'
    + '.tmp-title-line{display:flex;align-items:center;justify-content:center;gap:14px;margin:0 auto 12px;max-width:340px}'
    + '.tmp-title-line i{flex:1;height:2px;border-radius:2px}.tmp-title-line b{font-size:1.2rem;font-weight:400}'
    + '.tmp-amor-amistad .tmp-title-line i{background:linear-gradient(90deg,transparent,#e91e63)}.tmp-amor-amistad .tmp-title-line i:last-child{background:linear-gradient(270deg,transparent,#e91e63)}'
    + '.tmp-flores-amarillas .tmp-title-line i{background:linear-gradient(90deg,transparent,#e08e00)}.tmp-flores-amarillas .tmp-title-line i:last-child{background:linear-gradient(270deg,transparent,#e08e00)}'
    + '.tmp-sub{max-width:640px;margin:0 auto;color:#4a3b3b;font-size:1rem;line-height:1.6}'
    + '.tmp-count{display:flex;justify-content:center;gap:12px;margin:24px auto 6px;flex-wrap:wrap}'
    + '.tmp-count-box{min-width:78px;padding:12px 10px 10px;border-radius:16px;background:#fff;text-align:center;box-shadow:0 6px 20px rgba(0,0,0,.10)}'
    + '.tmp-count-box strong{display:block;font-family:"Playfair Display",serif;font-size:2rem;line-height:1;font-variant-numeric:tabular-nums}'
    + '.tmp-count-box small{display:block;margin-top:6px;font-size:.68rem;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:#777}'
    + '.tmp-amor-amistad .tmp-count-box strong{color:#c2185b}.tmp-flores-amarillas .tmp-count-box strong{color:#c77700}'
    + '.tmp-count-label{text-align:center;font-size:.85rem;font-weight:600;letter-spacing:.5px;color:#5a4a4a;margin-top:20px}'
    + '.tmp-today{display:inline-block;margin-top:22px;padding:14px 26px;border-radius:16px;background:#fff;font-weight:700;font-size:1.05rem;box-shadow:0 6px 20px rgba(0,0,0,.10)}'
    + '.tmp-amor-amistad .tmp-today{color:#c2185b}.tmp-flores-amarillas .tmp-today{color:#b36b00}'
    + '.tmp-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:22px;margin-top:34px}'
    + '.tmp-card{flex:1 1 250px;max-width:300px;position:relative;display:flex;flex-direction:column;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 6px 22px rgba(0,0,0,.10);transition:transform .25s,box-shadow .25s}'
    + '.tmp-card:hover{transform:translateY(-5px);box-shadow:0 12px 30px rgba(0,0,0,.16)}'
    + '.tmp-amor-amistad .tmp-card{border:2px solid #f8bbd0}.tmp-flores-amarillas .tmp-card{border:2px solid #ffd96a}'
    + '.tmp-card-img{position:relative;aspect-ratio:1/1;overflow:hidden;background:#f6f6f6}'
    + '.tmp-card-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s}'
    + '.tmp-card:hover .tmp-card-img img{transform:scale(1.05)}'
    + '.tmp-code{position:absolute;top:.7rem;left:.7rem;z-index:2;background:rgba(0,0,0,.65);color:#fff;padding:.3rem .7rem;border-radius:6px;font-size:.75rem;font-weight:700;letter-spacing:.5px}'
    + '.tmp-tag{position:absolute;top:.7rem;right:.7rem;z-index:2;color:#fff;padding:.3rem .7rem;border-radius:999px;font-size:.7rem;font-weight:700}'
    + '.tmp-amor-amistad .tmp-tag{background:#e91e63}.tmp-flores-amarillas .tmp-tag{background:#e08e00}'
    + '.tmp-card-body{display:flex;flex-direction:column;flex:1;padding:16px 18px 18px}'
    + '.tmp-card-body h3{font-family:"Playfair Display",serif;font-size:1.2rem;margin:0 0 6px;color:#222}'
    + '.tmp-card-body p{font-size:.84rem;line-height:1.5;color:#666;margin:0 0 14px;flex:1}'
    + '.tmp-card-foot{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}'
    + '.tmp-price{font-size:1.3rem;font-weight:700}'
    + '.tmp-amor-amistad .tmp-price{color:#c2185b}.tmp-flores-amarillas .tmp-price{color:#b36b00}'
    + '.tmp-btn{border:0;cursor:pointer;border-radius:999px;padding:.65rem 1.1rem;font-family:inherit;font-size:.85rem;font-weight:700;color:#fff;background:#25D366;box-shadow:0 4px 12px rgba(37,211,102,.35);transition:transform .2s,background .2s}'
    + '.tmp-btn:hover{background:#1ebe5a;transform:scale(1.04)}'
    + '.filter-btn.tmp-filter-flores-amarillas{background:linear-gradient(135deg,#f5b400,#ffd23f)!important;color:#4a2f00!important;border:2px solid #f5b400!important;font-weight:700!important}'
    + '.filter-btn.tmp-filter-amor-amistad{background:linear-gradient(135deg,#d81b60,#f06292)!important;color:#fff!important;border:2px solid #d81b60!important;font-weight:700!important}'
    + '.filter-btn.tmp-filter-flores-amarillas.active,.filter-btn.tmp-filter-amor-amistad.active{box-shadow:0 0 0 3px rgba(0,0,0,.18)!important}'
    /* Flyer flotante */
    + '.tmp-flyer-wrap{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(40,25,0,.45);opacity:0;transition:opacity .35s;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}'
    + '.tmp-flyer-wrap.tmp-show{opacity:1}'
    + '.tmp-flyer{position:relative;width:100%;max-width:380px;border-radius:24px;overflow:hidden;background:linear-gradient(160deg,#fffbe6,#ffe58a);box-shadow:0 24px 60px rgba(0,0,0,.35);font-family:"Poppins",sans-serif;text-align:center;transform:translateY(24px) scale(.94);transition:transform .4s cubic-bezier(.2,.9,.3,1.2)}'
    + '.tmp-show .tmp-flyer{transform:none}'
    + '.tmp-flyer-img{position:relative;aspect-ratio:4/3;overflow:hidden}'
    + '.tmp-flyer-img img{width:100%;height:100%;object-fit:cover;display:block}'
    + '.tmp-flyer-img::after{content:"";position:absolute;left:0;right:0;bottom:0;height:45%;background:linear-gradient(transparent,#fff6cc)}'
    + '.tmp-flyer-date{position:absolute;top:14px;left:14px;z-index:2;background:#e08e00;color:#fff;font-weight:700;font-size:.78rem;letter-spacing:1px;text-transform:uppercase;padding:6px 14px;border-radius:999px;box-shadow:0 4px 12px rgba(0,0,0,.25)}'
    + '.tmp-flyer-close{position:absolute;top:10px;right:10px;z-index:3;width:36px;height:36px;border:0;border-radius:50%;background:rgba(0,0,0,.6);color:#fff;font-size:1.3rem;line-height:1;cursor:pointer}'
    + '.tmp-flyer-body{padding:4px 24px 22px}'
    + '.tmp-flyer-body h3{font-family:"Playfair Display",serif;font-size:1.9rem;line-height:1.15;color:#7a4b00;margin:0 0 8px}'
    + '.tmp-flyer-body p{color:#5a4200;font-size:.95rem;line-height:1.5;margin:0 0 16px}'
    + '.tmp-flyer-body p b{color:#b36b00}'
    + '.tmp-flyer-cta{display:inline-block;border:0;cursor:pointer;border-radius:999px;padding:.8rem 1.6rem;font-family:inherit;font-size:.95rem;font-weight:700;color:#fff;background:linear-gradient(135deg,#e08e00,#f5b400);box-shadow:0 6px 18px rgba(224,142,0,.45)}'
    + '.tmp-flyer-bar{height:5px;background:rgba(122,75,0,.15)}'
    + '.tmp-flyer-bar i{display:block;height:100%;width:100%;background:#e08e00;transform-origin:left;animation:tmp-bar 5s linear forwards}'
    + '@keyframes tmp-bar{to{transform:scaleX(0)}}'
    + '@media(max-width:600px){.tmp-section{padding:44px 0 48px}.tmp-count{gap:8px}.tmp-count-box{min-width:66px;padding:10px 6px 8px}.tmp-count-box strong{font-size:1.6rem}.tmp-grid{gap:12px}.tmp-card{flex:0 0 calc(50% - 6px);max-width:none}.tmp-card-body{padding:12px}.tmp-card-body h3{font-size:1rem}.tmp-card-body p{display:none}.tmp-price{font-size:1.05rem}.tmp-btn{width:100%;padding:.6rem .5rem;font-size:.78rem}.tmp-tag{display:none}.tmp-deco span{opacity:.35}}'
    + '@media(prefers-reduced-motion:reduce){.tmp-deco span{animation:none}.tmp-flyer,.tmp-flyer-wrap{transition:none}}';

    var DECO_POS = [
        { top: '8%', left: '4%', size: '2.4rem', delay: '0s' },
        { top: '62%', left: '2%', size: '1.7rem', delay: '1.2s' },
        { top: '14%', left: '90%', size: '2rem', delay: '.6s' },
        { top: '70%', left: '93%', size: '2.6rem', delay: '2s' },
        { top: '40%', left: '96%', size: '1.4rem', delay: '3s' },
        { top: '88%', left: '48%', size: '1.5rem', delay: '1.8s' }
    ];

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }
    function code(id) { return 'COD-' + String(id).padStart(3, '0'); }
    function money(v) {
        if (typeof formatCOP === 'function') return formatCOP(v);
        return '$' + Number(v).toLocaleString('es-CO');
    }
    function pad(n) { return String(n).padStart(2, '0'); }

    function seasonProducts(key) {
        if (typeof products === 'undefined') return [];
        return products.filter(function (p) {
            return !p.hidden && p.categories && p.categories.indexOf(key) !== -1;
        }).sort(function (a, b) { return a.price - b.price; });
    }

    function buildSection(season, items) {
        var sec = document.createElement('section');
        sec.className = 'tmp-section tmp-' + season.key;
        sec.id = 'temporada-' + season.key;

        var deco = season.deco.map(function (ch, i) {
            var p = DECO_POS[i % DECO_POS.length];
            return '<span style="top:' + p.top + ';left:' + p.left + ';font-size:' + p.size + ';animation-delay:' + p.delay + '">' + ch + '</span>';
        }).join('');

        var cards = items.map(function (p, i) {
            return '<article class="tmp-card">'
                + '<div class="tmp-card-img" data-i="' + i + '">'
                + '<span class="tmp-code">' + code(p.id) + '</span>'
                + '<span class="tmp-tag">' + esc(season.title) + '</span>'
                + '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + ' - ' + esc(season.title) + ' a domicilio en Manizales" loading="lazy">'
                + '</div>'
                + '<div class="tmp-card-body">'
                + '<h3>' + esc(p.name) + '</h3>'
                + '<p>' + esc(p.description) + '</p>'
                + '<div class="tmp-card-foot">'
                + '<span class="tmp-price">' + money(p.price) + '</span>'
                + '<button type="button" class="tmp-btn" data-i="' + i + '">Pedir por WhatsApp</button>'
                + '</div></div></article>';
        }).join('');

        sec.innerHTML = '<div class="tmp-deco" aria-hidden="true">' + deco + '</div>'
            + '<div class="tmp-inner">'
            + '<div class="tmp-head">'
            + '<span class="tmp-ribbon">Especial · ' + esc(season.dateLabel) + '</span>'
            + '<h2 class="tmp-title">' + esc(season.title) + '</h2>'
            + '<div class="tmp-title-line" aria-hidden="true"><i></i><b>' + season.deco[0] + '</b><i></i></div>'
            + '<p class="tmp-sub">' + esc(season.subtitle) + '</p>'
            + '<div class="tmp-count-wrap"></div>'
            + '</div>'
            + '<div class="tmp-grid' + (items.length < 4 ? ' tmp-few' : '') + '">' + cards + '</div>'
            + '</div>';

        sec.addEventListener('click', function (e) {
            var btn = e.target.closest('.tmp-btn');
            if (btn) {
                var p = items[+btn.getAttribute('data-i')];
                if (typeof orderWA === 'function') {
                    orderWA(code(p.id) + ' - ' + p.name + ' (' + season.title + ')', String(p.price), p.image);
                }
            }
        });
        return sec;
    }

    function startCountdown(sec, season) {
        var wrap = sec.querySelector('.tmp-count-wrap');
        var target = Date.parse(season.target);
        var end = Date.parse(season.end);
        var mode = '';
        function tick() {
            var now = Date.now();
            if (now >= end) { sec.remove(); clearInterval(timer); return; }
            var diff = target - now;
            if (diff <= 0) {
                if (mode !== 'today') {
                    mode = 'today';
                    wrap.innerHTML = '<div class="tmp-today">' + season.deco[0] + ' ' + esc(season.todayText) + '</div>';
                }
                return;
            }
            if (mode !== 'count') {
                mode = 'count';
                wrap.innerHTML = '<div class="tmp-count-label">Faltan</div>'
                    + '<div class="tmp-count" role="timer" aria-label="Cuenta regresiva para ' + esc(season.dateLabel) + '">'
                    + '<div class="tmp-count-box"><strong data-u="d">0</strong><small>Días</small></div>'
                    + '<div class="tmp-count-box"><strong data-u="h">00</strong><small>Horas</small></div>'
                    + '<div class="tmp-count-box"><strong data-u="m">00</strong><small>Min</small></div>'
                    + '<div class="tmp-count-box"><strong data-u="s">00</strong><small>Seg</small></div>'
                    + '</div>';
            }
            var s = Math.floor(diff / 1000);
            wrap.querySelector('[data-u="d"]').textContent = Math.floor(s / 86400);
            wrap.querySelector('[data-u="h"]').textContent = pad(Math.floor(s % 86400 / 3600));
            wrap.querySelector('[data-u="m"]').textContent = pad(Math.floor(s % 3600 / 60));
            wrap.querySelector('[data-u="s"]').textContent = pad(s % 60);
        }
        var timer = setInterval(tick, 1000);
        tick();
    }

    function addFilterButton(season) {
        var todos = document.querySelector('.filters-container .filter-btn[data-filter="todos"]');
        if (!todos || document.querySelector('.filter-btn[data-filter="' + season.key + '"]')) return;
        var btn = document.createElement('button');
        btn.className = 'filter-btn tmp-filter-' + season.key;
        btn.setAttribute('data-filter', season.key);
        btn.textContent = season.filterLabel;
        btn.addEventListener('click', function () {
            if (typeof filterProducts === 'function') filterProducts(season.key);
        });
        todos.insertAdjacentElement('afterend', btn);
    }

    function showFlyer(season, items) {
        var cover = items.filter(function (p) { return p.id === 113; })[0] || items[0];
        var wrap = document.createElement('div');
        wrap.className = 'tmp-flyer-wrap';
        wrap.setAttribute('role', 'dialog');
        wrap.setAttribute('aria-label', 'Flores Amarillas, 21 de septiembre');
        wrap.innerHTML = '<div class="tmp-flyer">'
            + '<button type="button" class="tmp-flyer-close" aria-label="Cerrar">&times;</button>'
            + '<div class="tmp-flyer-img"><span class="tmp-flyer-date">21 de septiembre</span>'
            + '<img src="' + esc(cover.image) + '" alt="Ramo de girasoles - Flores Amarillas Manizales"></div>'
            + '<div class="tmp-flyer-body">'
            + '<h3>🌻 Flores Amarillas</h3>'
            + '<p>Este 21 de septiembre regala flores amarillas.<br>Ramos de girasoles desde <b>' + money(items[0].price) + '</b> con entrega a domicilio en Manizales.</p>'
            + '<button type="button" class="tmp-flyer-cta">Ver ramos amarillos</button>'
            + '</div>'
            + '<div class="tmp-flyer-bar"><i></i></div>'
            + '</div>';
        document.body.appendChild(wrap);

        var closed = false;
        function close() {
            if (closed) return;
            closed = true;
            clearTimeout(auto);
            wrap.classList.remove('tmp-show');
            setTimeout(function () { wrap.remove(); }, 400);
        }
        var auto = setTimeout(close, 5000); // se cierra solo a los 5 segundos
        requestAnimationFrame(function () { requestAnimationFrame(function () { wrap.classList.add('tmp-show'); }); });

        wrap.addEventListener('click', function (e) {
            if (e.target === wrap || e.target.closest('.tmp-flyer-close')) { close(); return; }
            if (e.target.closest('.tmp-flyer-cta')) {
                close();
                var sec = document.getElementById('temporada-' + season.key);
                if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    }

    function init() {
        if (typeof products === 'undefined') return;
        var anchor = document.querySelector('section.catalog-filters');
        if (!anchor) return;

        var style = document.createElement('style');
        style.textContent = CSS;
        document.head.appendChild(style);

        var now = Date.now();
        SEASONS.forEach(function (season) {
            var items = seasonProducts(season.key);
            if (!items.length) return;
            addFilterButton(season);
            if (now >= Date.parse(season.end)) return; // temporada terminada: solo queda el filtro
            var sec = buildSection(season, items);
            anchor.parentNode.insertBefore(sec, anchor);
            startCountdown(sec, season);
            if (season.flyer) setTimeout(function () { showFlyer(season, items); }, 700);
        });
        // Ocultar los botones de filtro que no tienen ningún producto visible
        document.querySelectorAll('.filters-container .filter-btn').forEach(function (btn) {
            var f = btn.getAttribute('data-filter');
            if (!f || f === 'todos') return;
            var has = products.some(function (p) { return !p.hidden && p.categories && p.categories.indexOf(f) !== -1; });
            if (!has) btn.style.display = 'none';
        });
        // El filtro de Amor y Amistad debe quedar primero (fecha más cercana)
        var aa = document.querySelector('.filter-btn[data-filter="amor-amistad"]');
        var todos = document.querySelector('.filters-container .filter-btn[data-filter="todos"]');
        if (aa && todos) todos.insertAdjacentElement('afterend', aa);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
