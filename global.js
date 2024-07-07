const global = (path) => {
    return {
        title: 'Portafolio de Carlos Alvarado',
        img: 'FotoPortafolio.jpeg',
        menuOptions: getMenuWithActivePath(path)
    }
}

const getMenuWithActivePath = (path)=>{
    return  [
        {
            label: 'Bibliografia',
            url: '#sobremi',
            page: 'bibliografia'
        },
        {
            label: 'Mis Proyectos',
            url: '#proyectos',
            page: 'Proyectos'
        },
        {
            label: 'Contactame',
            url: '#contactame',
            page: 'contactame'
        }
    ].map( o => {
        return {
            ...o,
            active: path.includes(o.url)
        }
    });
}

export default global;