/* Concierge — cargador del asistente de admisiones.
   Copyright (c) 2026 Jonathan Leal / Abba Systems SAS. (Aviso interno.)
   Este archivo se sirve desde el dominio de Concierge y carga el asistente.
   El sitio que lo integra solo referencia esta URL; nada más queda expuesto. */
(function () {
  if (window.__conciergeAsistenteCargado) return;   // evita cargarlo dos veces
  window.__conciergeAsistenteCargado = true;

  function cargarAsistente() {
    if (document.querySelector('script[data-widget-id="6a54161bd166a8719fd67346"]')) return;
    var s = document.createElement('script');
    s.src = 'https://widgets.leadconnectorhq.com/loader.js';
    s.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    s.setAttribute('data-widget-id', '6a54161bd166a8719fd67346');
    (document.body || document.documentElement).appendChild(s);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarAsistente);
  } else {
    cargarAsistente();
  }
})();
