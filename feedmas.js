(function (o, m, g) {
    window[o] = window[o] || function () {
        (window[o].q = window[o].q || []).push(arguments)
    }
    var hd = document.getElementsByTagName('HEAD')[0]

    var js = document.createElement('script')
    js.id = o
    js.src = m
    js.async = true
    hd.appendChild(js)

    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = g
    hd.appendChild(link)
}('Feedmas', 'https://f.feedmas.com/fw.js', 'https://f.feedmas.com/fw.css'))
Feedmas('init', { 'project': '4c0a92e8-30fc-4e3c-8b54-f24b9e4ccd7f' })