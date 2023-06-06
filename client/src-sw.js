import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) =>
    request.destination === 'script' || request.destination === 'style',
  new StaleWhileRevalidate()
);

registerRoute(
  ({ request }) => request.destination === 'document',
  new CacheFirst()
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate()
);

registerRoute(
  ({ url }) => url.origin === 'https://cdnjs.cloudflare.com',
  new StaleWhileRevalidate()
);

registerRoute(
  ({ url }) =>
    url.origin === 'https://cdnjs.cloudflare.com' && url.pathname.startsWith('/ajax/libs/codemirror'),
  new StaleWhileRevalidate()
);
