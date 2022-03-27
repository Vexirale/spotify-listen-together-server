import { Socket } from "socket.io"

export default class ClientInfo {
  public latency = 0
  public name = "vexirale"
  public isHost = true
  public loggedIn = false
  public trackUri = ""

  constructor(public socket: Socket) {}
}
