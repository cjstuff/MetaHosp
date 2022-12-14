import http from 'http'
import express from 'express'
//import cors from 'cors'
import { Server, LobbyRoom } from 'colyseus'
import { monitor } from '@colyseus/monitor'
import { RoomType } from '../types/Rooms'

// import socialRoutes from "@colyseus/social/express"

import { SkyOffice } from './rooms/SkyOffice'

const port = Number(process.env.PORT || 2567)
const app = express()

//app.use(cors())

const cors = require('cors');
const corsOptions ={
    origin:'https://metahosp.herokuapp.com', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json())
//app.use(express.static('client/dist'))

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/dist'));

  // Express serve up index.html file if it doesn't recognize route
  // const path = require('path');
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  // });
}

const server = http.createServer(app)
const gameServer = new Server({
  server,
})

// register room handlers
gameServer.define(RoomType.LOBBY, LobbyRoom)
gameServer.define(RoomType.PUBLIC, SkyOffice, {
  name: 'Public Lobby',
  description: 'For making friends and familiarizing yourself with the controls',
  password: null,
  autoDispose: false,
})
gameServer.define(RoomType.CUSTOM, SkyOffice).enableRealtimeListing()

/**
 * Register @colyseus/social routes
 *
 * - uncomment if you want to use default authentication (https://docs.colyseus.io/server/authentication/)
 * - also uncomment the import statement
 */
// app.use("/", socialRoutes);

// register colyseus monitor AFTER registering your room handlers
app.use('/colyseus', monitor())

gameServer.listen(port)
console.log(`Listening on ws://localhost:${port}`)
