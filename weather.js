import { Yeelight } from 'yeelight-node'
import fetch from 'node-fetch'

const yeelight = new Yeelight({ ip: '192.168.0.105', port: 55443 })

yeelight.set_bright(70)
yeelight.set_power('on')

const refreshColor = async () => {
    await fetch('https://api.openweathermap.org/data/2.5/weather?lat=53.862820&lon=27.608699&appid=39d84e2760956bd05320e64894e097e9')
        .then(res => res.json())
        .then(res => {
            let weatherInfo = res.weather[0]
            let date = new Date
            if (weatherInfo.id.toString().startsWith(8) && weatherInfo.id !== 800) {
                yeelight.set_rgb([135, 206, 235])
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            } else if (weatherInfo.id === 800) {
                yeelight.set_rgb([150, 200, 200])
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            } else if (weatherInfo.id.toString().startsWith(6)) {
                yeelight.set_rgb([255, 250, 240])
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            } else if (weatherInfo.id.toString().startsWith(5)) {
                yeelight.set_rgb([60, 83, 105])
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            } else if (weatherInfo.id.toString().startsWith(3)) {
                yeelight.set_rgb([140, 174, 171])
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            } else if (weatherInfo.id.toString().startsWith(2)) {
                yeelight.set_rgb([46, 44, 154])
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            }
        })
}

refreshColor()

setInterval(refreshColor, 30000)