// =====================================================
// NamaTunePDF Service Worker
// ネットワークファースト戦略:
//   オンライン時 → 常にサーバーから最新を取得してキャッシュ更新
//   オフライン時 → キャッシュから提供
// CDNライブラリのみキャッシュファースト（URLにバージョン入りで不変なため）
// =====================================================
const CACHE_NAME = 'namatunepdf-cache';

const PRECACHE_URLS = [
  './index.html',
  './manifest.json',
  './NamaTunePDF192.png',
  './NamaTunePDF512.png',
];

// 1. インストール: 最低限のファイルをキャッシュしてオフライン即対応
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// 2. アクティベート: 古いキャッシュ名のものを削除
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// 3. フェッチ
self.addEventListener('fetch', e => {
  // chrome-extension など http 以外は無視
  if (!e.request.url.startsWith('http')) return;

  const url = new URL(e.request.url);

  // CDN (pdf-lib, pdf.js): キャッシュファースト（バージョン入りURLで内容不変）
  if (url.hostname === 'cdnjs.cloudflare.com') {
    e.respondWith(
      caches.match(e.request).then(hit =>
        hit || fetch(e.request).then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
          }
          return res;
        })
      )
    );
    return;
  }

  // アプリ本体・その他: ネットワークファースト → オフライン時はキャッシュへフォールバック
  // これにより sw.js を変更しなくても index.html の更新が自動反映される
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
