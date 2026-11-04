//Red de seguridad: Convertir error en un responsivo json.

const HttpError = require('../utils/HttpError');
function rutaNoEncontrada(req, res, next) {
  next(new HttpError(404, `La ruta ${req.method} ${req.url} no existe`));
}

function manejarErrores(error, req, res, next) {
    if (error instanceof HttpError) {
        res.status(error.status).json({ error: error.message });
    } if(error instanceof SyntaxError) {
        res.status(400).json({ error: 'JSON inválido' });
    }
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
}

module.exports = {
    rutaNoEncontrada,
    manejarErrores
};