const Proxemics = (
    target,
    {
        territory = 10,
        defaultProxemityClass = 'is-public',
        activeProxemityClass = 'is-proxemity',
        // socialClass = 'is-social',
        // personalClass = 'is-personal',
        intimateClass = 'is-intimate',
        leftProxemityClass = 'is-left',
        dataDistance = false,
        dataAngle = false,
        dataRadian = false,
        debuggable = false
    },
    Approach = null
) => {
    const TargetElements = document.querySelectorAll(target)
    const Territory = territory
    const Debuggable = debuggable
    const DefaultProxemityClass = defaultProxemityClass
    const ActiveProxemityClass = activeProxemityClass
    const LeftProxemityClass = leftProxemityClass
    const IntimateClass = intimateClass
    const DataDistance = dataDistance
    const DataAngle = dataAngle
    const DataRadian = dataRadian

    if (typeof window.orientation === 'undefined' && TargetElements.length > 0) {
        Array.prototype.forEach.call(TargetElements, (targetElement) => {
            targetElement.classList.add(DefaultProxemityClass)
        })

        if (Debuggable) {
            (Proxemics.InstancesInfo = () => {
                Array.prototype.forEach.call(TargetElements, (targetElement) => {
                    const TargetElement = targetElement
                    const w = `w${targetElement.offsetLeft + targetElement.clientWidth / 2}px`
                    const h = `h${targetElement.offsetTop + targetElement.clientHeight / 2}px`
                    TargetElement.innerHTML = `${w} ${h}`
                })
            })()
            + (Proxemics.DebbugText = () => {
                const random = Math.random().toString(36).slice(-8)
                TargetElements[TargetElements.length - 1].insertAdjacentHTML(
                    'afterend',
                    `<div class="distance-debug${random}"></div>`
                )
                Proxemics.Debug = document.querySelector(`.distance-debug${random}`)
                Proxemics.Debug.innerHTML = 'ready clientX null, clientY null'
            })()
        }

        const Calculator = () => {
            Array.prototype.forEach.call(TargetElements, (targetElement) => {
                const targetElementX = targetElement.offsetLeft + targetElement.clientWidth / 2
                const targetElementY = targetElement.offsetTop + targetElement.clientHeight / 2
                const squareRoot = (Math.sqrt(((Proxemics.X - targetElementX) ** 2) + ((Proxemics.Y - targetElementY) ** 2)) - Territory) // eslint-disable-line max-len
                const distance = ~~(Math.max(squareRoot, 0))
                const radian = Math.atan2(Proxemics.Y - targetElementY, Proxemics.X - targetElementX) // eslint-disable-line max-len
                const angle = ~~((radian * 180) / Math.PI + 180)

                if (Debuggable) {
                    Proxemics.Debug.innerHTML = `enter clientX ${Proxemics.X}px, clientY ${Proxemics.Y}px`
                    const TargetElement = targetElement
                    TargetElement.innerHTML = `${distance}px / ${angle}°`
                }

                targetElement.classList.remove(LeftProxemityClass)
                if (DataDistance) targetElement.setAttribute('data-distance', distance)
                if (DataAngle) targetElement.setAttribute('data-angle', angle)
                if (DataRadian) targetElement.setAttribute('data-radian', radian)

                if (distance > 0) {
                    targetElement.classList.add(ActiveProxemityClass)
                    targetElement.classList.remove(IntimateClass)
                } else if (distance <= 0) {
                    targetElement.classList.add(IntimateClass)
                }

                Proxemics.Styles = (style = {}) => {
                    Object.assign(targetElement.style, style)
                }
                const Data = {
                    distance,
                    angle,
                    radian,
                    targetElement
                }

                if (Approach != null) Approach(Data, Proxemics.Styles)
            })
        }

        const MouseMove = (event) => {
            Proxemics.X = event.clientX
            Proxemics.Y = event.clientY
            Calculator()
        }

        const MouseLeave = () => {
            if (Debuggable) {
                Proxemics.Debug.innerHTML = 'Out of range'
                Proxemics.InstancesInfo()
            }

            Array.prototype.forEach.call(TargetElements, (targetElement) => {
                targetElement.classList.remove(ActiveProxemityClass)
                targetElement.classList.add(leftProxemityClass)
                targetElement.setAttribute('style', '')
                if (DataDistance) targetElement.removeAttribute('data-distance')
                if (DataAngle) targetElement.removeAttribute('data-angle')
                if (DataRadian) targetElement.removeAttribute('data-radian')
            })
        }

        const MouseEnter = () => {
            document.addEventListener('mousemove', MouseMove, { capture: false })
            document.addEventListener('mouseleave', MouseLeave, { capture: false })
        }

        document.body.addEventListener('mouseenter', MouseEnter, { capture: true })
    } else {
        if (TargetElements.length === 0) {
            console.log('Proximics error: There is no selector onject on this document.') // eslint-disable-line no-console
        }
        if (typeof window.orientation !== 'undefined') {
            console.log('Proxemics warn: Only working on mouse device.') // eslint-disable-line no-console
        }
    }
}

export default Proxemics
