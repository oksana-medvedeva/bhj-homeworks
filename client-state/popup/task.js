function setCookie(name, value, props) {
    props = props || {}
    var exp = props.expires
    if (typeof exp == "number" && exp) {
        var d = new Date()
        d.setTime(d.getTime() + exp*1000)
        exp = props.expires = d
    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }
    value = encodeURIComponent(value)
    var updatedCookie = name + "=" + value
    for(var propName in props) {
        updatedCookie += "; " + propName
        var propValue = props[propName]
        if(propValue !== true){ updatedCookie += "=" + propValue}
    }

    document.cookie = updatedCookie
}

function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function deleteCookie(name) {
    setCookie(name, null, { expires: -1 })
}


let subscribeModal = document.getElementById('subscribe-modal');
if(getCookie('modalClosed') !== 'closed') {
    subscribeModal.classList.add('modal_active');
}
subscribeModal.querySelector('.modal__close').addEventListener('click', event => {
    subscribeModal.classList.remove('modal_active');
    setCookie('modalClosed', 'closed');
})
