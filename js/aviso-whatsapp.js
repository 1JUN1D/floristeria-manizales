/* =====================================================================
   AVISO FLOTANTE - SUSPENSIÓN TEMPORAL DE WHATSAPP
   Floristería Pétalos y Chocolates - Manizales
   Publicado: lunes 3 de agosto de 2026
   ---------------------------------------------------------------------
   Flyer flotante que se cierra solo a los 15 segundos.
   Para QUITARLO del sitio: borra la línea
   <script src="js/aviso-whatsapp.js"></script> de las páginas,
   o simplemente vacía este archivo.
   ===================================================================== */
(function () {
  'use strict';

  var NUMERO_NUEVO      = '311 752 2908';
  var NUMERO_NUEVO_WA   = '573117522908';
  var NUMERO_ANTERIOR   = '320 669 6209';
  var SEGUNDOS_AUTOCIERRE = 15;

  var MENSAJE_WA = encodeURIComponent(
    'Hola, hice un pedido hoy por el WhatsApp ' + NUMERO_ANTERIOR +
    ' y quiero confirmarlo por este nuevo número.'
  );

  function iniciar() {
    if (document.getElementById('aviso-wa-flyer')) return;

    /* ---------- Estilos ---------- */
    var css = document.createElement('style');
    css.id = 'aviso-wa-estilos';
    css.textContent = [
      '#aviso-wa-flyer{position:fixed;left:24px;bottom:28px;z-index:99999;width:340px;max-width:calc(100vw - 32px);',
      'background:#fff;border-radius:18px;overflow:hidden;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;',
      'box-shadow:0 18px 45px rgba(0,0,0,.28);transform:translateY(30px) scale(.96);opacity:0;',
      'transition:transform .45s cubic-bezier(.16,1,.3,1),opacity .45s ease;}',
      '#aviso-wa-flyer.aviso-wa-visible{transform:translateY(0) scale(1);opacity:1;}',
      '#aviso-wa-flyer.aviso-wa-saliendo{transform:translateY(24px) scale(.94);opacity:0;}',
      '.aviso-wa-cabecera{background:linear-gradient(135deg,#E91E63 0%,#C2185B 100%);color:#fff;padding:.85rem 2.6rem .85rem 1.15rem;',
      'font-weight:700;font-size:.95rem;letter-spacing:.2px;display:flex;align-items:center;gap:.5rem;}',
      '.aviso-wa-cabecera span.aviso-wa-icono{font-size:1.15rem;line-height:1;animation:avisoWaLatido 1.6s ease-in-out infinite;}',
      '.aviso-wa-cerrar{position:absolute;top:8px;right:10px;width:30px;height:30px;border:0;border-radius:50%;cursor:pointer;',
      'background:rgba(255,255,255,.22);color:#fff;font-size:1.15rem;line-height:1;display:flex;align-items:center;justify-content:center;',
      'transition:background .2s ease,transform .2s ease;padding:0;}',
      '.aviso-wa-cerrar:hover{background:rgba(255,255,255,.4);transform:rotate(90deg);}',
      '.aviso-wa-cuerpo{padding:1.05rem 1.15rem 1.15rem;color:#333;font-size:.9rem;line-height:1.5;}',
      '.aviso-wa-cuerpo p{margin:0 0 .7rem;}',
      '.aviso-wa-cuerpo strong{color:#1a1a1a;}',
      '.aviso-wa-viejo{text-decoration:line-through;color:#9a9a9a;white-space:nowrap;}',
      '.aviso-wa-numero{display:block;text-align:center;font-size:1.5rem;font-weight:700;color:#128C7E;letter-spacing:.6px;margin:.15rem 0 .75rem;}',
      '.aviso-wa-btn{display:flex;align-items:center;justify-content:center;gap:.5rem;background:linear-gradient(135deg,#25D366 0%,#128C7E 100%);',
      'color:#fff;text-decoration:none;font-weight:600;font-size:.92rem;padding:.75rem 1rem;border-radius:12px;',
      'box-shadow:0 6px 18px rgba(37,211,102,.35);transition:transform .2s ease,box-shadow .2s ease;}',
      '.aviso-wa-btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(37,211,102,.5);color:#fff;}',
      '.aviso-wa-btn svg{width:19px;height:19px;flex:0 0 19px;fill:#fff;}',
      '.aviso-wa-barra{height:4px;background:rgba(233,30,99,.14);}',
      '.aviso-wa-barra i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#E91E63,#F06292);',
      'transform-origin:left center;animation:avisoWaTiempo ' + SEGUNDOS_AUTOCIERRE + 's linear forwards;}',
      '#aviso-wa-flyer:hover .aviso-wa-barra i{animation-play-state:paused;}',
      '@keyframes avisoWaTiempo{from{transform:scaleX(1);}to{transform:scaleX(0);}}',
      '@keyframes avisoWaLatido{0%,100%{transform:scale(1);}50%{transform:scale(1.18);}}',
      '@media (max-width:768px){',
      '#aviso-wa-flyer{left:12px;right:12px;bottom:96px;width:auto;max-width:none;}',
      '.aviso-wa-numero{font-size:1.35rem;}',
      '}',
      '@media (prefers-reduced-motion:reduce){',
      '#aviso-wa-flyer,.aviso-wa-btn,.aviso-wa-cerrar{transition:none;}',
      '.aviso-wa-cabecera span.aviso-wa-icono{animation:none;}',
      '}'
    ].join('');
    document.head.appendChild(css);

    /* ---------- Flyer ---------- */
    var flyer = document.createElement('div');
    flyer.id = 'aviso-wa-flyer';
    flyer.setAttribute('role', 'alertdialog');
    flyer.setAttribute('aria-live', 'polite');
    flyer.setAttribute('aria-label', 'Aviso importante sobre nuestro WhatsApp');

    flyer.innerHTML =
      '<div class="aviso-wa-cabecera"><span class="aviso-wa-icono">&#9888;&#65039;</span>Aviso importante</div>' +
      '<button class="aviso-wa-cerrar" type="button" aria-label="Cerrar aviso">&times;</button>' +
      '<div class="aviso-wa-cuerpo">' +
        '<p>WhatsApp <strong>suspendió temporalmente</strong> nuestro número ' +
        '<span class="aviso-wa-viejo">' + NUMERO_ANTERIOR + '</span>.</p>' +
        '<p>Si <strong>hoy lunes 3 de agosto</strong> hiciste un pedido por ese número, ' +
        'escríbenos a nuestro nuevo WhatsApp para confirmarlo:</p>' +
        '<span class="aviso-wa-numero">' + NUMERO_NUEVO + '</span>' +
        '<a class="aviso-wa-btn" href="https://wa.me/' + NUMERO_NUEVO_WA + '?text=' + MENSAJE_WA + '" ' +
        'target="_blank" rel="noopener noreferrer">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>' +
          'Escribir al ' + NUMERO_NUEVO +
        '</a>' +
      '</div>' +
      '<div class="aviso-wa-barra"><i></i></div>';

    document.body.appendChild(flyer);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { flyer.classList.add('aviso-wa-visible'); });
    });

    /* ---------- Cierre ---------- */
    var temporizador = null;
    var cerrado = false;

    function cerrar() {
      if (cerrado) return;
      cerrado = true;
      clearTimeout(temporizador);
      flyer.classList.remove('aviso-wa-visible');
      flyer.classList.add('aviso-wa-saliendo');
      setTimeout(function () {
        if (flyer.parentNode) flyer.parentNode.removeChild(flyer);
      }, 500);
      document.removeEventListener('keydown', alPresionarEsc);
    }

    function alPresionarEsc(e) {
      if (e.key === 'Escape' || e.keyCode === 27) cerrar();
    }

    function programarCierre() {
      clearTimeout(temporizador);
      temporizador = setTimeout(cerrar, SEGUNDOS_AUTOCIERRE * 1000);
    }

    flyer.querySelector('.aviso-wa-cerrar').addEventListener('click', cerrar);
    document.addEventListener('keydown', alPresionarEsc);

    // Si el visitante pasa el mouse por encima, se pausa el cierre automático
    flyer.addEventListener('mouseenter', function () { clearTimeout(temporizador); });
    flyer.addEventListener('mouseleave', programarCierre);

    // No cerrar mientras la pestaña está en segundo plano
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { clearTimeout(temporizador); }
      else if (!cerrado) { programarCierre(); }
    });

    programarCierre();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
