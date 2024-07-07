
import global from './global';

import proyectos from './proyectos';


const getPageContext = ( page ) => {

    let pageVariables = {};
    switch ( page ) {
        case '/index.html':
            pageVariables = proyectos;
            break;
    }
    return {
        ...pageVariables,
        ...global(page),
    };
}

export default getPageContext;