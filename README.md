Javascript library for Progressive Hover Effects.
「徐々にHover」を制御するjavascriptライブラリです。
> [demo](https://pokkur.github.io/proxemics/)

## Setup

```command
yarn add proxemics
```

```js
import Proxemics from 'proxemics'
```

## Usage

### Simple case

Proxemics() function require QuerySelector and Parameters bracket.

```js
Proxemics('.prox', {})
```

Proxemics objects holding `distance`, `radian`, `angle` parameters.
There can be controlling by data-attributes.
Moreover, add class at right timings.

### Optional ([demo](https://pokkur.github.io/proxemics/)) case

Callback functions for 3rd parameter.

```js
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
        let speed = Math.max((_.distance / 500), .2).toFixed(1) // from 1 to .2
        Proxemics.SpeedTune = () => _.targetElement.style.setProperty('--speed', `${speed}s`)
        if(_.distance <= 500) {
            _.targetElement.style.color = `black`
            _.targetElement.addEventListener('animationiteration', Proxemics.SpeedTune)
            _.targetElement.innerHTML = speed
        }
    }
})
```

```html
<div class="one prox"></div>
<div class="two prox"></div>
<div class="three prox"></div>
<div class="four prox"></div>
```

#### Parameters

|       parameter       |     default      |                                                                              |
| --------------------- | ---------------- | ---------------------------------------------------------------------------- |
| territory             | __10             | radius(px) / 半径                                                            |
| debuggable            | _false_          | show debug / デバッグ表示                                                    |
| defaultProxemityClass | _'is-public'_    | default permanence class / 通常の永続的に付与                                |
| activeProxemityClass  | _'is-proxemity'_ | when if mousemove / mousemove時に付与                                        |
| intimateClass         | _'is-intimate'_  | mousecursor in territory class / マウスカーソルがterritoryに入ったときに付与 |
| leftProxemityClass    | _'is-left'_      | when if mouseleave / マウスカーソルがドキュメントから出た際に付与            |

## Next

- [ ] throttle option

# License

MIT © Pokkur
