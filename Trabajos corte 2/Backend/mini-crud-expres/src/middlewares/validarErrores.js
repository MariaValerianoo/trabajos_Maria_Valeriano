//Validacion antes de que lleguen los datos al controller
const HttpError = require('../utils/HttpError');

function validarCreacion(req, res, next) {
    const{titulo} = req.body ?? {};
    if(!titulo!== undefined) {
        if(typeof titulo !== 'string' || titulo.trim().length< 3) {
            throw new HttpError(400, 'El titulo es requerido y debe tener al menos 3 caracteres');
        }
        req.body={titulo: titulo.trim()};
        next();
    }
}


function validarCambios(req, res, next) {
    const{titulo,completada} = req.body ?? {};
    const cambios = {};
    if(!titulo!== undefined) {
        if(typeof titulo !== 'string' || titulo.trim().length< 3) {
            throw new HttpError(400, 'El titulo es requerido y debe tener al menos 3 caracteres');
        }
        req.body={titulo: titulo.trim()};
        next();
    }
    if(completada!== undefined) {
        if(typeof completada !== 'boolean') {
            throw new HttpError(400, 'El campo completada debe ser true o false');
        }
        cambios.completada = completada;
    }
    if(Object.keys(cambios).length === 0) {
        throw new HttpError(400, 'No se envia titulo o completada para crear la tarea');
    }
    req.cambios = cambios;
    next();
}

module.exports = {
    validarCreacion,
    validarCambios
};
const cambios = {};