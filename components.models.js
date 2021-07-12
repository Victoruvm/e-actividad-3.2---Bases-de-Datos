const connection = require('../BSmysql')

class ComponentsModel {
GetComponents() {
return new Promise((resolve, reject) => {
connection.query('SELECT * FROM discos_duros', (error,result) => {
if (error) reject(error);
resolve(result);
    });
  });
  }
  addComponents(components) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO discos_duros SET ?', components, (error, result) => {
        if (error) reject(error);
          resolve(result);
      });
    });
  }
}


module.exports = new ComponentsModel;