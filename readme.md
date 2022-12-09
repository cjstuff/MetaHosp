# MetaHosp ![License](https://img.shields.io/badge/license-MIT-blue) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)

<img alt="Logo" align="right" src="https://github.com/cjstuff/MetaHosp/blob/master/client/src/images/logo.png" width="20%" />


An immersive virtual hospital - Study in Advanced Topics Project

- Come try it out - [Official Website](https://)
- Why we built this - [Concept Video](https://www.youtube.com/)
- 🙌 Get latest updates? Follow our [Twitter](https://twitter.com/).
- 💕 Love this project? Consider [buy me a coffee](https://www.buymeacoffee.com/).

MetaHosp works on all PC browsers (mobile browsers are currently not supported)

## Built with

- [Phaser3](https://github.com/photonstorm/phaser) - Game engine
- [Colyseus](https://github.com/colyseus/colyseus) - WebSocket-based server framework
- [React/Redux](https://github.com/facebook/react) - Front-end framework
- [PeerJS](https://github.com/peers/peerjs) - WebRTC for video/screen sharing
- [TypeScript](https://github.com/microsoft/TypeScript) and [ES6](https://github.com/eslint/eslint) - for both client and server sides

## Features

- [Proximity Chat](#proximity-chat-distance-based-interactive-system)
- [Multifunctional Rooms](#multifunctional-rooms)
- [Text Message Chat](#text-message-chat-with-real-time-dialog-bubbles)
- [Custom/Private Rooms](#customprivate-rooms)
- [Embedded Whiteboards](#embedded-whiteboards) (iframe embed of [WBO](https://github.com/lovasoa/whitebophir))

### Proximity Chat (distance-based interactive system)

![image](https://github.com/cjstuff/MetaHosp/blob/master/snapshots/proximity_chat.png)

### Multifunctional Rooms

![image](https://github.com/cjstuff/MetaHosp/blob/master/snapshots/Doctor's_%20Room.png)

### Text Message Chat (with real time dialog bubbles)

![image](https://github.com/cjstuff/MetaHosp/blob/master/snapshots/Real-time_chat.png)

### Embedded Whiteboards

![image](https://github.com/cjstuff/MetaHosp/blob/master/snapshots/WhiteBoard.png)

### Custom/Private Rooms

![image](https://github.com/cjstuff/MetaHosp/blob/master/snapshots/custom_2.png)

## Controls

- `W, A, S, D, or arrow keys` to move (video chat will start if you are close to someone else)
- `E` to sit down
- `R` to use computer (for screen sharing)
- `Enter` to open chat
- `ESC` to close chat

## Prerequisites

You'll need [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) installed.

## Getting Started

Clone this repository to your local machine:

```bash
git clone https://github.com/cjstuff/MetaHosp.git
```

This will create a folder named `MetaHosp`. You can specify a different folder name like this:

```bash
git clone https://github.com/cjstuff/MetaHosp.git my-folder-name
```

To start a server, go into the project folder and install dependencies/run start command:

```bash
cd MetaHosp or 'my-folder-name'
yarn && yarn start
```

To start a client, go into the client folder and install dependencies/run start command:

```bash
cd MetaHosp/client or 'my-folder-name/client'
yarn && yarn dev
```

## Credits 🎉

Big thanks to this great repo - [ourcade/phaser3-typescript-parcel-template](https://github.com/ourcade/phaser3-typescript-parcel-template)

Big thanks to pixel artist - [LimeZu](https://limezu.itch.io/)

Big thanks to open-source whiteboard project - [WBO](https://github.com/lovasoa/whitebophir)

## License

This project is licensed under MIT.

If you're using MetaHosp to power your virtual hospital or using our code in other projects, please consider [buy me a coffee](https://www.buymeacoffee.com/). Thank you :)
