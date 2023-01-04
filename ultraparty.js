import { Yeelight } from 'yeelight-node'
/**
 * There goes ip of your yeelight bulb. You can find it in yeelight mobile app: Go in your device menu > settings button in top-right corner > device info.
 * Port is always 55443
 */
const yeelight = new Yeelight({ ip: '', port: 55443 })


yeelight.set_bright(100)

setTimeout(() => setInterval(() => yeelight.set_rgb([255,0,0], 'sudden'), 150), 50)
setTimeout(() => setInterval(() => yeelight.set_rgb([0,255,0], 'sudden'), 150), 100)
setTimeout(() => setInterval(() => yeelight.set_rgb([0,0,255], 'sudden'), 150), 150)