module.exports = {
    initMonitor: function () {
        const script = document.createElement("script")
        script.async = 1
        script.onload = typeof onload === "function" ? onload : () => {}
        script.src = "//www.webfunny.cn/resource/monitor.fetch.min.js"
        const dom = document.getElementsByTagName("script")[0]
        dom.parentNode.insertBefore(script, dom)
    }
}