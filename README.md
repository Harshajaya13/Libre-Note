<p align="center">
<img style="align:center;" src="./resources/icon.png" alt="Libre Notes Logo" width="100" />
</p>

<h1 align="center">Libre Notes</h1>
<h3 align="center">A clean, local-first, and completely unrestricted fork of Notesnook.</h3>

## Why was Libre Notes created?

You might be wondering: *"Why does this exist when Notesnook already has their own site and app?"*

**The answer is simple: to provide a completely stripped-down, unrestricted, and telemetry-free experience.**
Libre Notes was created to take the brilliant foundation of Notesnook and modify it to remove all premium limits, sync requirements, workspaces, marketing integrations, and paywalls. We wanted a completely local-first version where you have 100% control over your data without any restrictions, pop-ups, or subscriptions.

## A Massive Thank You to the Original Developers ❤️

**We need to take a moment to praise the absolute legends at [Streetwriters/Notesnook](https://github.com/streetwriters/notesnook).** 

The original developers of Notesnook are the *real workers* here. They spent years building an incredibly robust, secure, and beautiful end-to-end encrypted note-taking application. Their dedication to privacy and their decision to open-source their hard work is what makes Libre Notes possible. 

They did the heavy lifting, the late nights, and the brilliant engineering. We just tweaked the UI and removed the limits. **Please support the original developers** if you can, because their work is truly peak software engineering. You can find their official project at [notesnook.com](https://notesnook.com/).

---

## Developer guide

### Technologies & languages

Notesnook is built using the following technologies:

1. JavaScript/Typescript — this repo is in a hybrid state. A lot of the newer code is being written in Typescript & the old code is slowly being ported over.
2. React — the whole front-end across all platforms is built using React.
3. React Native — For mobile apps we are using React Native
4. Electron — For desktop app
5. NPM — listed here because we **don't** use Yarn or PNPM or XYZ across any of our projects.

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

### Contributing guidelines

If you are interested in contributing, I highly recommend checking out the [contributing guidelines](/CONTRIBUTING.md). You'll find all the relevant information such as [style guideline](/CONTRIBUTING.md#style-guidelines), [how to make a PR](/CONTRIBUTING.md#opening--submitting-a-pull-request), [how to commit](/CONTRIBUTING.md#commit-guidelines) etc., there.
