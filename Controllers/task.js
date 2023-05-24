const crearTarea = async (req, res = express.request) => {
    const tarea = new Tarea(req.body);
    try {
        tarea.usuario = req.uid;
        const saved = await tarea.save();
        res.json({
            ok: true,
            tarea: saved
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            error: 'Error al crear la tarea'
        })
    }
}

const listarTareas = async (req, res = express.request) => {
    const tareas = await Tarea.find().populate('usuario', 'name');
    try{
        res.status(200).json({
            ok: true,
            tareas
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            error: 'Error al listar las tareas'
        })
    }
}

const listarUsuarios = async (req, res = express.request) => {
    const usuarios = await Usuario.find();
    try{
        res.status(200).json({
            ok: true,
            usuarios
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            error: 'Error al listar los usuarios'
        })
    }
}

const actualizarTarea = async (req, res = express.request) => {
}
