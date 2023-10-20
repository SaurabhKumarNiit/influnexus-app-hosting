// service-worker.js

self.addEventListener('fetch', (event) => {
  const responseHeaders = new Headers({
    'Permissions-Policy': 'interest-cohort=()',
  });

  event.respondWith(
    fetch(event.request, { headers: responseHeaders })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error('Error fetching:', error);
      })
  );
});
