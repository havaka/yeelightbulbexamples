import { Yeelight } from 'yeelight-node'
/**
 * There goes ip of your yeelight bulb. You can find it in yeelight mobile app: Go in your device menu > settings button in top-right corner > device info.
 * Port is always 55443
 */
const yeelight = new Yeelight({ ip: '', port: 55443 })

yeelight.set_bright(100)
yeelight.set_rgb([255,255,0])

setTimeout(() => setInterval(() => yeelight.set_rgb([255,0,0]), 2000), 500)
setTimeout(() => setInterval(() => yeelight.set_rgb([0,255,0]), 2000), 1000)
setTimeout(() => setInterval(() => yeelight.set_rgb([255,0,255]), 2000), 1500)
setTimeout(() => setInterval(() => yeelight.set_rgb([255,255,0]), 2000), 2000)