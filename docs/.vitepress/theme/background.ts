function dynamicBackground() {
    const div = document.createElement('div')
    div.className = 'dynamic-background'
    div.style.cssText =
        "position:fixed;top:0;left:0;z-index:0;width:100%;height:100%;pointer-events:none;background: url('/NYblog/bg.svg') center/cover no-repeat;filter: blur(8px)"
    document.body.appendChild(div)
}

export default dynamicBackground
