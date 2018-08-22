/* eslint-disable no-console */
import Proxemics from '../lib'

Proxemics('.prox', {
    territory: 100,
    debuggable: true,
}, (_, Styles) => {
    if(_.targetElement.classList.contains('one')) {
        Styles({
            filter: `hue-rotate(${_.angle}deg) saturate(${1 - _.distance * .005})`
        })
    }

    if(_.targetElement.classList.contains('two')) {
        Styles({
            boxShadow: `inset 0 0 0 3px hsla(200, 100%, 40%, ${1 - _.distance * .005}`
        })
    }

    if(_.targetElement.classList.contains('three')) {
        Styles({
            transform: `rotate(${_.angle}deg)`
        })
    }

    if(_.targetElement.classList.contains('four')) {
        let speed = Math.min((_.distance / 500) + .2, .2).toFixed(1) // from 1 to .2
        Proxemics.SpeedTune = () => _.targetElement.style.setProperty('--speed', `${speed}s`)
        _.targetElement.style.color = `black`
        _.targetElement.addEventListener('animationiteration', Proxemics.SpeedTune)
        _.targetElement.innerHTML = speed
    }
})
