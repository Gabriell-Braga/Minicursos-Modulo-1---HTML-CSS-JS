/**
 * Perfil — JavaScript básico (tutorial Módulo 3)
 * Ano dinâmico, mensagem com sessionStorage, botão voltar ao topo.
 */
(function () {
  'use strict';

  var btnTopo = document.getElementById('btn-voltar-topo');
  var alvoTopo = document.getElementById('topo');
  var anoSpan = document.getElementById('rodape-ano');
  var msgVisita = document.getElementById('msg-visita');

  if (anoSpan) {
    anoSpan.textContent = String(new Date().getFullYear());
  }

  if (msgVisita) {
    try {
      if (!sessionStorage.getItem('perfilVisitou')) {
        sessionStorage.setItem('perfilVisitou', '1');
        msgVisita.textContent = 'Obrigada por visitar este exemplo com JavaScript!';
      } else {
        msgVisita.textContent = 'Nesta aba do navegador você já abriu a página antes — os dados ficam só até fechar a aba.';
      }
    } catch (err) {
      msgVisita.textContent = '';
      msgVisita.style.display = 'none';
    }
  }

  if (btnTopo && alvoTopo) {
    function atualizaBotaoTopo() {
      var scrollou = window.scrollY > 300;
      btnTopo.hidden = !scrollou;
      btnTopo.setAttribute('aria-hidden', scrollou ? 'false' : 'true');
    }

    atualizaBotaoTopo();
    window.addEventListener('scroll', atualizaBotaoTopo, { passive: true });

    btnTopo.addEventListener('click', function () {
      alvoTopo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
})();
