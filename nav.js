/* ============================================
   忘却の淵にて — ナビゲーション共通スクリプト
   nav.js
   ============================================ */

(function () {
  'use strict';

  // ── ランダム背景画像 ──
  // 画像は img/bg/ フォルダに bg1.jpg〜bg6.jpg を置いてください
  const BG_IMAGES = [
    'img/bg/bg1.jpg',
    'img/bg/bg2.jpg',
    'img/bg/bg3.jpg',
    'img/bg/bg4.jpg',
    'img/bg/bg5.jpg',
    'img/bg/bg6.jpg',
  ];
  const chosen = BG_IMAGES[Math.floor(Math.random() * BG_IMAGES.length)];
  document.documentElement.style.setProperty('--bg-image', `url('${chosen}')`);

  // 現在ページをactiveに
  const links = document.querySelectorAll('.site-nav__links a');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === current) a.classList.add('active');
  });

  // ドロップダウンをタッチでも開けるように
  const items = document.querySelectorAll('.site-nav__item');
  items.forEach(item => {
    const toggle = item.querySelector('a');
    const dropdown = item.querySelector('.site-nav__dropdown');
    if (!dropdown) return;
    toggle.addEventListener('click', e => {
      const isOpen = dropdown.style.display === 'block';
      // 全部閉じる
      document.querySelectorAll('.site-nav__dropdown').forEach(d => d.style.display = '');
      if (!isOpen) {
        dropdown.style.display = 'block';
        e.preventDefault();
      }
    });
  });

  // 外クリックで閉じる
  document.addEventListener('click', e => {
    if (!e.target.closest('.site-nav__item')) {
      document.querySelectorAll('.site-nav__dropdown').forEach(d => d.style.display = '');
    }
  });
})();
