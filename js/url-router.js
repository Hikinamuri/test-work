const urlPageTitle = 'Тестовое задание'

document.addEventListener('click', (e) => {
    if(!e.target.matches('div')) {
        return;
    }

    const href = e.target.getAttribute('data-href');
    urlLocationHandler(href)
})

const urlRoutes = {
    404: {
        template: '/templates/404.html',
        title: '404 | ' + urlPageTitle,
        descripytion: 'Это не найденная страница',
    },
    '/' : {
        template: '/templates/general.html',
        title: 'General | ' + urlPageTitle,
        descripytion: 'Это главная страницыа',
    },
    '/locations' : {
        template: '/templates/locations.html',
        title: 'Home | ' + urlPageTitle,
        descripytion: 'Это домашняя страница',
        link: 'Локации'
    },
    '/settings' : {
        template: '/templates/settings.html',
        title: 'About | ' + urlPageTitle,
        descripytion: 'Это познавательная страницыа',
        link: 'Настройки'
    }
}

const urlLocationHandler = async (href) => {
    const route = urlRoutes[href] || urlRoutes[404]
    const html = await fetch(route.template).then(response => response.text())
    const pageName = route.link || route.title;

    document.getElementById('htmlContent').innerHTML = html
    document.getElementById('contentName').innerText = pageName;
    document.title = route.title;
    document
        .querySelector('meta[name="description"]')
        .setAttribute('content', route.description)
}

window.onpopstate = urlLocationHandler
window.onload = urlLocationHandler;
window.route = urlRoute

urlLocationHandler()