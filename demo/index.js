/* eslint-disable no-console */
import Proxemics from '../lib/index.js'

Proxemics('.prox', {
    territory: 100,
    debuggable: true,
}, (_, Styles) => {
    if(_.el.classList.contains('one')) {
        Styles({
            filter: `hue-rotate(${_.angle}deg) saturate(${1 - _.distance * .005})`
        })
    }

    if(_.el.classList.contains('two')) {
        Styles({
            boxShadow: `inset 0 0 0 3px hsla(200, 100%, 40%, ${1 - _.distance * .005}`
        })
    }

    if(_.el.classList.contains('three')) {
        Styles({
            transform: `rotate(${_.angle}deg)`
        })
    }

    if(_.el.classList.contains('four')) {
        let speed = Math.min((_.distance / 500) + .2, 1).toFixed(1) // from 1 to .2
        Proxemics.SpeedTune = () => _.el.style.setProperty('--speed', `${speed}s`)
        _.el.style.color = `black`
        _.el.addEventListener('animationiteration', Proxemics.SpeedTune)
        _.el.innerHTML = speed
    }
})
