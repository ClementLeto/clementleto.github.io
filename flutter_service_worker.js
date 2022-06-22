'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "019bbaeec8a7fb83e0c7f4b0ced35044",
"assets/assets/images/desktop/ab1.png": "9ca2660dcf6110424a399c59a8b0c28d",
"assets/assets/images/desktop/ab2.png": "12d56ce62c941f25db47a2268bdb7261",
"assets/assets/images/desktop/ab3.png": "030d2de7dd426133a0fde903ca1664e1",
"assets/assets/images/desktop/ab4.png": "1077d6780079ad0770bddc603de940c3",
"assets/assets/images/desktop/fe1.png": "4d251122990e70cbd8cda1e5e331037d",
"assets/assets/images/desktop/fe2.png": "7181b918164ca2367f77c7c13a2509a1",
"assets/assets/images/desktop/fe3.png": "701593a699803c6303ad479a90643022",
"assets/assets/images/desktop/fe4.png": "0f12b58dbcca48497619d130a03194d8",
"assets/assets/images/desktop/hand.png": "c78fbc36edef241f4c8b08f6e75c2bcf",
"assets/assets/images/desktop/icon_alpha_booster.png": "8760ec0319bd2cc48088d56fda626574",
"assets/assets/images/desktop/icon_file_explorer.png": "aacbc57f1c63ebdf2a8c50d41a005d8a",
"assets/assets/images/desktop/icon_white_cleaner.png": "6b6b8cb9d16290d78bc2ee80d6834100",
"assets/assets/images/desktop/spots/spot_1.svg": "c9e7672371521e6e2a68084b672741f9",
"assets/assets/images/desktop/spots/spot_2.svg": "db9060d7d30916cca91d2ec573c1df7b",
"assets/assets/images/desktop/spots/spot_3.svg": "727ed8a38498d788e16a9b48e4a65a85",
"assets/assets/images/desktop/spots/spot_4.svg": "4f87ea18813af3688fbb47a18ce72870",
"assets/assets/images/desktop/spots/spot_5.svg": "6828fd0d48584b75964a9c4616161bb2",
"assets/assets/images/desktop/spots/spot_6.svg": "c49f54a16937765c134cfb2723baa1c3",
"assets/assets/images/desktop/spots/spot_7.svg": "e66492168d090e2e1769b1673aadc9a4",
"assets/assets/images/desktop/wc1.png": "6f5158111e0d598a32c77eefc4be9e3b",
"assets/assets/images/desktop/wc2.png": "1ce9ea3a3e80668d92f8288bbbbbe699",
"assets/assets/images/desktop/wc3.png": "3af49ba35e38c5be86a2f1936e8fdf40",
"assets/assets/images/desktop/wc4.png": "9fe241d44baee63e59b549d5eb317a89",
"assets/assets/images/mobile/hand.png": "6087cea702bf791a5428c3931d22f4cd",
"assets/assets/images/mobile/icon_alpha_booster.png": "e3343d8f18f5401f294c39c0f180522c",
"assets/assets/images/mobile/icon_file_explorer.png": "e8b5ed2faddb1169d8cf0e6c06b24c7c",
"assets/assets/images/mobile/icon_white_cleaner.png": "b28b2f146c162ccfc81543d231464af2",
"assets/assets/images/mobile/spots/spot_1.svg": "66a08060541cc07f2b3d330f0d967203",
"assets/assets/images/mobile/spots/spot_2.svg": "d83a99333b767aff9f6d1471942a3ae1",
"assets/assets/images/mobile/spots/spot_3.svg": "008d654bd1482443b2391cfb48277e14",
"assets/assets/images/mobile/spots/spot_4.svg": "f441a1fa510d048d115e77cfef77166d",
"assets/assets/images/mobile/spots/spot_5.svg": "dfc4a1224c5728656a58e34abe81ad38",
"assets/assets/images/mobile/spots/spot_6.svg": "78ae4cd5e7c1aefe7485c56216379c6c",
"assets/assets/images/mobile/spots/spot_7.svg": "d860e3e7826b77ac4bc93f89a39c0219",
"assets/assets/images/tablet/ab1.png": "93314f9af4080f4fb75defc6b6dbf6cd",
"assets/assets/images/tablet/ab2.png": "b3d21cf8deb1f9c6f3f94af2c74ef0e7",
"assets/assets/images/tablet/ab3.png": "c5d16b41388acd5389bf4a77e74a250d",
"assets/assets/images/tablet/fe1.png": "2a3da89d1e437dc51f5fdf2155df291f",
"assets/assets/images/tablet/fe2.png": "2446af931ff487aa378122d29fb645e0",
"assets/assets/images/tablet/fe3.png": "17e196c1e19a1f3cc4799021bba2c771",
"assets/assets/images/tablet/hand.png": "9be80f34750788af97ab9c89c6b33705",
"assets/assets/images/tablet/icon_alpha_booster.png": "e807d6d7486e4e315c07a07e8ffc5c76",
"assets/assets/images/tablet/icon_file_explorer.png": "1c86215c1ffbe85f8e8b0b4306ae87e8",
"assets/assets/images/tablet/icon_white_cleaner.png": "ac26cc65187d5931ef07052376a2b6ae",
"assets/assets/images/tablet/spots/spot_1.svg": "eb50482be24c84f6311dc22a4db1eab9",
"assets/assets/images/tablet/spots/spot_2.svg": "33fdaff248b00127a7e32f55abcda630",
"assets/assets/images/tablet/spots/spot_3.svg": "c2619d8616226bcd5f784b1c46d0e62b",
"assets/assets/images/tablet/spots/spot_4.svg": "26bf5c40fbe71c10da9464251faa9a4a",
"assets/assets/images/tablet/spots/spot_5.svg": "7d7cfd6cd1172d9deb98a15dcd9bdfd6",
"assets/assets/images/tablet/spots/spot_6.svg": "60a9905a9193680e4411eb3a38100dbf",
"assets/assets/images/tablet/spots/spot_7.svg": "27d8bd459f964c9fd62313b3a4927caf",
"assets/assets/images/tablet/wc1.png": "74ea660d53c62415a8885a60d196cf7f",
"assets/assets/images/tablet/wc2.png": "114c11371136997194335cd33e680015",
"assets/assets/images/tablet/wc3.png": "e278edbdf3005aaad16e7c18a01c220b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a3fc08da450919e4af300894aeeec622",
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
"index.html": "ae9d133412c73e927aaa54085f728eb7",
"/": "ae9d133412c73e927aaa54085f728eb7",
"main.dart.js": "852b0b123fcb1a436ebc3d31465d248b",
"manifest.json": "95318482e5107f18bb54373643b43ad8",
"version.json": "9d292ad3cb6aa1173d331e347c6699f5"
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
