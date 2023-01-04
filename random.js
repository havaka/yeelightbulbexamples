import { Yeelight } from 'yeelight-node'
/**
 * There goes ip of your yeelight bulb. You can find it in yeelight mobile app: Go in your device menu > settings button in top-right corner > device info.
 * Port is always 55443
 */
const yeelight = new Yeelight({ ip: '', port: 55443 })

let setRandomColor = () => yeelight.set_rgb([Math.round(Math.random() * 255),Math.round(Math.random() * 255),Math.round(Math.random() * 255)])

setRandomColor()