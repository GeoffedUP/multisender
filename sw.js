importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d739a0baaea8761d2e5.js",
    "revision": "57c2405b9ef15aa7ab2c34643efc76c8"
  },
  {
    "url": "/_nuxt/25746b128fb41c2c8279.js",
    "revision": "5e4a3cc4c25c46002624601378150678"
  },
  {
    "url": "/_nuxt/5c50c0bfa42869f84d8f.js",
    "revision": "09e58de6e1688ffd927c71c45a8bae4b"
  },
  {
    "url": "/_nuxt/6acb2c69d71aa67035bc.js",
    "revision": "7ca3a8c7977bc39abd3616ce8b091e1e"
  },
  {
    "url": "/_nuxt/a87f5c3a8acf33826589.js",
    "revision": "baa334e50311295a798c15f35b709a36"
  },
  {
    "url": "/_nuxt/ac93670564d7f5602281.js",
    "revision": "4e8406e139db774cca250e86cb5ade61"
  },
  {
    "url": "/_nuxt/c84c3710371caee081de.js",
    "revision": "387dccc00d2079ad65f92d54e1bb3c6d"
  },
  {
    "url": "/_nuxt/d5308cfc5adbf52395d0.js",
    "revision": "b56661ae02b655d9a41354335713655d"
  },
  {
    "url": "/_nuxt/d62cfa2f20d0931d449b.js",
    "revision": "4b2cc1a433380d086467e1e3b7439860"
  },
  {
    "url": "/_nuxt/d7eda7f4b6ddc0d8bcfe.js",
    "revision": "48c449081fff2c7343d288f3cfc6d2fc"
  },
  {
    "url": "/_nuxt/e5a69c107708e7292a77.js",
    "revision": "ab2188dfe0f6f3f134ff230590011716"
  },
  {
    "url": "/_nuxt/e642dc00f03164db9b86.js",
    "revision": "6a499a23fef6af738cf87e05e89c72ad"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
