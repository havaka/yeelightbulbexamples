import { Yeelight } from 'yeelight-node'

const yeelight = new Yeelight({ ip: '192.168.0.105', port: 55443 })

yeelight.set_power('on')
yeelight.set_rgb([1,1,1])
yeelight.set_bright(1)
yeelight.set_ct_abx(2000)