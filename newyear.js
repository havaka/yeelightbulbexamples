import { Yeelight } from 'yeelight-node'

const yeelight = new Yeelight({ ip: '192.168.0.105', port: 55443 })

yeelight.set_power('on')
yeelight.set_bright(100)

setTimeout(() => setInterval(() => yeelight.set_rgb([167, 199, 255],), 6000), 2000)
setTimeout(() => setInterval(() => yeelight.set_rgb([255, 105, 97],), 6000), 4000)
setTimeout(() => setInterval(() => yeelight.set_rgb([119, 221, 119],), 6000), 6000)