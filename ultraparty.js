import { Yeelight } from 'yeelight-node'

const yeelight = new Yeelight({ ip: '192.168.0.105', port: 55443 })


yeelight.set_bright(100)

setTimeout(() => setInterval(() => yeelight.set_rgb([255,0,0], 'sudden'), 150), 50)
setTimeout(() => setInterval(() => yeelight.set_rgb([0,255,0], 'sudden'), 150), 100)
setTimeout(() => setInterval(() => yeelight.set_rgb([0,0,255], 'sudden'), 150), 150)