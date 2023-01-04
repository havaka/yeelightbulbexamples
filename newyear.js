import { Yeelight } from 'yeelight-node'
/**
 * There goes ip of your yeelight bulb. You can find it in yeelight mobile app: Go in your device menu > settings button in top-right corner > device info.
 * Port is always 55443
 */
const yeelight = new Yeelight({ ip: '', port: 55443 })

yeelight.set_power('on')
yeelight.set_bright(100)

setTimeout(() => setInterval(() => yeelight.set_rgb([167, 199, 255],), 6000), 2000)
setTimeout(() => setInterval(() => yeelight.set_rgb([255, 105, 97],), 6000), 4000)
setTimeout(() => setInterval(() => yeelight.set_rgb([119, 221, 119],), 6000), 6000)