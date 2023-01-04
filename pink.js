import { Yeelight } from 'yeelight-node'

const yeelight = new Yeelight({ ip: '192.168.0.105', port: 55443 })

yeelight.set_power('on')
yeelight.set_bright(100)
yeelight.set_rgb([242, 189, 205])