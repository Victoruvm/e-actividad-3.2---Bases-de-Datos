const ComponentsModel = require('../models/components.models.js');

class ComponentsController {
async GetComponents() {
 const components = await ComponentsModel.GetComponents();
 return components;
  }
    async addComponents(req, res) {
    const { nombre_de_la_marca, Caracteristicas, Precio } = req.body;
    const Components = {
      nombre_de_la_marca,
      Caracteristicas,
      Precio
    };
    await ComponentsModel.addComponents(Components);
    res.json({ msg: 'Especificaciones de Discos Duros agregados!!!' })
         }
}

module.exports = new ComponentsController;