/**
 * Perfil — JavaScript básico (tutorial Módulo 3)
 * Ano dinâmico, mensagem com sessionStorage, botão voltar ao topo.
 */
(function () {
  'use strict';

  let btnTopo = document.getElementById('btn-voltar-topo');
  let alvoTopo = document.getElementById('topo');
  let anoSpan = document.getElementById('rodape-ano');
  let msgVisita = document.getElementById('msg-visita');

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
      let scrollou = window.scrollY > 100;
      if (scrollou) {
        btnTopo.classList.remove('escondendo');
      } else {
        btnTopo.classList.add('escondendo');
      }
    }

    atualizaBotaoTopo();
    window.addEventListener('scroll', atualizaBotaoTopo, { passive: true });

    btnTopo.addEventListener('click', function () {
      alvoTopo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
})();
