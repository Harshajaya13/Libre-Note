<p align="center">
<img style="align:center;" src="./resources/icon.png" alt="Libre Notes Logo" width="100" />
</p>

<h1 align="center">Libre Notes</h1>
<h3 align="center">A clean, local-first, and completely unrestricted fork of Notesnook.</h3>

## Why was Libre Notes created?

You might be wondering: *"Why does this exist when Notesnook already has their own site and app?"*

I wanted a completely **local-first** experience. Because I am storing everything locally on my own devices and don't need to rely on their cloud servers, it didn't make sense to be held back by paywalls and artificial restrictions. 

No one should be forced to adjust and limit themselves to only 10 notes just to write down their thoughts. I believe that if you are using your own device's storage, you should have infinite freedom to write as much as you want. That is exactly why I created Libre Notes: to give you a sanctuary for your thoughts with zero boundaries, zero subscriptions, and 100% control over your own data.

## A Massive Thank You to the Original Developers ❤️

**I need to take a moment to praise the absolute legends at [Streetwriters/Notesnook](https://github.com/streetwriters/notesnook).** 

The original developers of Notesnook are the *real workers* here. They spent years building an incredibly robust, secure, and beautiful end-to-end encrypted note-taking application. Their dedication to privacy and their decision to open-source their hard work is what makes Libre Notes possible. 

They did the heavy lifting, the late nights, and the brilliant engineering. I simply took their masterpiece, stripped out the cloud limits, and unlocked it for local use. **Please support the original developers** if you can, because their work is truly peak software engineering. You can find their official project at [notesnook.com](https://notesnook.com/).

---

## Developer guide

### Technologies & languages

Notesnook is built using the following technologies:

1. JavaScript/Typescript — this repo is in a hybrid state. A lot of the newer code is being written in Typescript & the old code is slowly being ported over.
2. React — the whole front-end across all platforms is built using React.
3. React Native — For mobile apps we are using React Native
4. Electron — For desktop app
5. NPM — listed here because I **don't** use Yarn or PNPM or XYZ across any of my projects.

> **Note: Each project in the monorepo contains its own architecture details which you can refer to.**

### Monorepo structure

| Name                       | Path                                               | Description                                                          |
| -------------------------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| `@notesnook/web`           | [/apps/web](/apps/web)                             | Web client                                                           |
| `@notesnook/desktop`       | [/apps/desktop](/apps/desktop)                     | Desktop client                                                       |
| `@notesnook/mobile`        | [/apps/mobile](/apps/mobile)                       | Android/iOS clients                                                  |
| `@notesnook/web-clipper`   | [/extensions/web-clipper](/extensions/web-clipper) | Web clipper                                                          |
| `@notesnook/core`          | [/packages/core](/packages/core)                   | Shared core between all platforms                                    |
| `@notesnook/crypto`        | [/packages/crypto](/packages/crypto)               | Cryptography library wrapper around libsodium                        |
| `@notesnook/clipper`       | [/packages/clipper](/packages/clipper)             | Web clipper core handling everything related to actual page clipping |
| `@notesnook/editor`        | [/packages/editor](/packages/editor)               | Notesnook editor + all extensions                                    |
| `@notesnook/editor-mobile` | [/packages/editor-mobile](/packages/editor-mobile) | A very thin wrapper around `@notesnook/editor` for mobile clients    |
| `@notesnook/logger`        | [/packages/logger](/packages/logger)               | Simple & pluggable logger                                            |
| `@notesnook/sodium`        | [/packages/sodium](/packages/sodium)               | Wrapper around libsodium to support Node.js & Browser                |
| `@notesnook/streamable-fs` | [/packages/streamable-fs](/packages/streamable-fs) | Streaming interface around an IndexedDB based file system            |
| `@notesnook/theme`         | [/packages/theme](/packages/theme)                 | The core theme used in web & desktop clients                         |
