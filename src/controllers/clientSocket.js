import { io } from "socket.io-client";

let cSocket;

const ENDPOINT = "ws://localhost:8080";
cSocket = io(ENDPOINT, {
  path: "/socket.io",
  reconnection: false,
});

export default cSocket;
