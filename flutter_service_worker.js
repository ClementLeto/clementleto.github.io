'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "55fdcbd54517d82015dbf763aa12c7c8",
"assets/assets/images/desktop/background_gradient_footer.png": "b69720faea5174fa66d739b9c11c93c7",
"assets/assets/images/desktop/background_gradient_header.png": "a60079c4d6e5b4d36c1ebcc0c82c77c8",
"assets/assets/images/desktop/icon_alpha_booster.png": "e807d6d7486e4e315c07a07e8ffc5c76",
"assets/assets/images/desktop/icon_alpha_file_explorer.png": "1c86215c1ffbe85f8e8b0b4306ae87e8",
"assets/assets/images/desktop/icon_white_cleaner.png": "ac26cc65187d5931ef07052376a2b6ae",
"assets/assets/images/desktop/img_abpc_0.png": "bbc745d8165dcfe0c8d52efa78fe1bb6",
"assets/assets/images/desktop/img_abpc_1.png": "2d7a5943f8d1f7c11bc236c3b8702735",
"assets/assets/images/desktop/img_abpc_2.png": "8c70ec84926bc4c6a8bc648bdd31a8d0",
"assets/assets/images/desktop/img_afe_0.png": "b261ec80865bfe56b9deb86d5bd2f504",
"assets/assets/images/desktop/img_afe_1.png": "18c6656067cf494d51f22e0f1cf99e14",
"assets/assets/images/desktop/img_afe_2.png": "ca7356fb650e4a057c53b9f34304e3a4",
"assets/assets/images/desktop/img_wc_0.png": "910fd43895f506b543aaf2da26b87918",
"assets/assets/images/desktop/img_wc_1.png": "ee1aae1f36f8bd738a814c71e0084a45",
"assets/assets/images/desktop/img_wc_2.png": "09cf858f7d73b4d945672bb5ea5c65fe",
"assets/assets/images/desktop/phones.png": "fc103b66a90f7beab3c190698c2b8d69",
"assets/assets/images/mobile/background_gradient_footer.png": "a58e99e3a2862cc77c7683c2e341aaac",
"assets/assets/images/mobile/background_gradient_header.png": "5f5828aea28d96731950550aef5ae4ce",
"assets/assets/images/mobile/icon_alpha_booster.png": "e3343d8f18f5401f294c39c0f180522c",
"assets/assets/images/mobile/icon_alpha_file_explorer.png": "e8b5ed2faddb1169d8cf0e6c06b24c7c",
"assets/assets/images/mobile/icon_white_cleaner.png": "b28b2f146c162ccfc81543d231464af2",
"assets/assets/images/mobile/phones.png": "b6355725dd9967afc1a2fbf1aaae172e",
"assets/assets/images/tablet/background_gradient_footer.png": "cc88b238ca364f86af4f88f728e965e7",
"assets/assets/images/tablet/background_gradient_header.png": "dca4242e282ac90523b73164dc4e0f0a",
"assets/assets/images/tablet/icon_alpha_booster.png": "e807d6d7486e4e315c07a07e8ffc5c76",
"assets/assets/images/tablet/icon_alpha_file_explorer.png": "1c86215c1ffbe85f8e8b0b4306ae87e8",
"assets/assets/images/tablet/icon_white_cleaner.png": "ac26cc65187d5931ef07052376a2b6ae",
"assets/assets/images/tablet/phones.png": "ee63d190dfeb9bd42b8d9289b924d14d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "6af678e84faa37bfc3456feed4d46e83",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eb87f36e24e001fb1af3969bd28d05a2",
"/": "eb87f36e24e001fb1af3969bd28d05a2",
"main.dart.js": "b625c9fed10ac0f23cb1c215ec1e2e39",
"manifest.json": "bc266c82d07de430a5904fd255e13a61",
"version.json": "8cbd4e1584b00bdd1fb8c7631b5ef4fa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
