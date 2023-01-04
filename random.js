import { Yeelight } from 'yeelight-node'

const yeelight = new Yeelight({ ip: '192.168.0.105', port: 55443 })

let setRandomColor = () => yeelight.set_rgb([Math.round(Math.random() * 255),Math.round(Math.random() * 255),Math.round(Math.random() * 255)])

setRandomColor()