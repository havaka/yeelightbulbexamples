import { Yeelight } from 'yeelight-node'
import fetch from 'node-fetch'
/**
 * There goes ip of your yeelight bulb. You can find it in yeelight mobile app: Go in your device menu > settings button in top-right corner > device info.
 * Port is always 55443
 */
const yeelight = new Yeelight({ ip: '', port: 55443 })
/**
 * Your city name/state code/country code for weather nowcast
 */
const coordinates = ''
/**
 * Your token from https://openweathermap.org/
 */
const token = ''
/**
 * These are rgb codes for your colors.
 * You can change them like you want, mine are just examples.
 */
const weather_rgbs = {
    clouds: [135, 206, 235],
    clear: [150, 200, 200],
    snow: [255, 250, 240],
    rain: [60, 83, 105],
    drizzle: [140, 174, 171],
    thunderstorm: [46, 44, 154]
}
yeelight.set_power('on')
// Your bulb brightness
yeelight.set_bright(70)

const refreshColor = async () => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${coordinates}&appid=${token}`)
        .then(res => res.json())
        .then(res => {
            let weatherInfo = res.weather[0]
            let date = new Date
            if (weatherInfo.id.toString().startsWith(8) && weatherInfo.id !== 800) {
                yeelight.set_rgb(weather_rgbs.clouds)
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            } else if (weatherInfo.id === 800) {
                yeelight.set_rgb(weather_rgbs.clear)
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            } else if (weatherInfo.id.toString().startsWith(6)) {
                yeelight.set_rgb(weather_rgbs.snow)
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            } else if (weatherInfo.id.toString().startsWith(5)) {
                yeelight.set_rgb(weather_rgbs.rain)
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            } else if (weatherInfo.id.toString().startsWith(3)) {
                yeelight.set_rgb(weather_rgbs.drizzle)
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            } else if (weatherInfo.id.toString().startsWith(2)) {
                yeelight.set_rgb(weather_rgbs.thunderstorm)
                console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weatherInfo.description} updated`)
            }
        })
}

refreshColor()

setInterval(refreshColor, 30000)