const offlineEssentials = [
  '/index.html',
  '/css/njpp.css',
  '/js/njpp.js',
  '/offline/',
];

const version = 'v2020.02'

self.addEventListener('install', function cacheWorkerInstaller(event) {
  console.log('installing CacheWorker!');
  console.log('I should be prefilling the cache with:');
  console.log(offlineEssentials);
  event.waitUntil(
    caches.open(version)
      .then(function prefill(cache) {
        console.log('Prefill function. All is good?');
      return cache.addAll(offlineEssentials);
    })
  );
});

self.addEventListener('fetch', function fetcher (event) {
  const request = event.request;
  if(request.method !== 'GET'){
    event.respondWith(fetch(request));
    return;
  }
  event.respondWith(
    caches.match(request)
    .then(queriedCache)
  );

  function queriedCache(cached) {
    const networked = fetch(request)
      .then(fetchedFromNetwork, unableToResolve)
      .catch(unableToResolve);
    return cached || networked;
  }

  function fetchedFromNetwork(response) {
    const clonedResponse = response.clone();
    caches.open(version)
      .then(function add(cache) {
        cache.put(request, clonedResponse);
      });
    return response;
  }

  function unableToResolve() {
    const url = new URL(request.url);
    if (url.origin === location.origin) {
      return caches.match('/offline/');
    }
    return offlineResponse();
  }

  function offlineResponse() {
    return new Response('', { status: 503, statusText: 'Service Unavailable' });
  }
});

self.addEventListener("activate", function activation(event){
  console.log('activation in progress');
  event.waitUntil(
    caches.keys()
      .then( function (keys){
        return Promise.all(
          keys.filter(function (key){
            return !key.startsWith(version);
          })
          .map(function (key){
            return caches.delete(key);
          })
        );
      })
      .then( function(){
        console.log('activation complete');
      })
  );
});

