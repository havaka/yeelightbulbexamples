import { Yeelight } from 'yeelight-node'

const yeelight = new Yeelight({ ip: '192.168.0.105', port: 55443 })

yeelight.set_bright(100)
yeelight.set_rgb([255,255,0])

setTimeout(() => setInterval(() => yeelight.set_rgb([255,0,0]), 2000), 500)
setTimeout(() => setInterval(() => yeelight.set_rgb([0,255,0]), 2000), 1000)
setTimeout(() => setInterval(() => yeelight.set_rgb([255,0,255]), 2000), 1500)
setTimeout(() => setInterval(() => yeelight.set_rgb([255,255,0]), 2000), 2000)