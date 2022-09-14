const { response , request} = require('express');

const getUsuarios = (req = request, res = response) => {

    const queryParams = req.query; 

    res.json({
        ok: true,
        msg: 'get api - Controlador',
        queryParams
    })
}

const putUsuarios = (req = request , res = response) => {

    const id = req.params.id;

    res.json({
        ok : true,
        msg : 'put api - Controlador',
        id
    })
}

const patchUsuarios = (req = request , res = response) => {
    res.json({
        ok : true,
        msg : 'patch api - Controlador'
    })
}

const postUsuarios = (req = request , res = response) => {

    const body = req.body;


    res.json({
        ok : true,
        msg : 'post api - Controlador',
        body
    })
}

const deleteUsuarios = (req = request , res = response) => {
    res.json({
        ok : true,
        msg : 'delete api - Controlador'
    })
}

module.exports = {
    getUsuarios,
    putUsuarios,
    patchUsuarios,
    postUsuarios,
    deleteUsuarios
}