import Global from "@/Global";
import axios from "axios";

export default class SeriveCubos {
  getCubos() {
    return new Promise(function (resolve) {
      var request = "api/Cubos";
      var cubos = [];
      var url = Global.urlApiTienda + request;
      axios.get(url).then((response) => {
        cubos = response.data;
        resolve(cubos);
      });
    });
  }

  getMarcas() {
    return new Promise(function (resolve) {
      var request = "api/cubos/marcas";
      var marcas = [];
      var url = Global.urlApiTienda + request;
      axios.get(url).then((response) => {
        marcas = response.data;
        resolve(marcas);
      });
    });
  }

  getCuboMarcas(marca) {
    return new Promise(function (resolve) {
      var request = "api/cubos/cubosmarca/" + marca;
      var url = Global.urlApiTienda + request;
      var cuboMarca = [];
      axios.get(url, marca).then((response) => {
        cuboMarca = response.data;
        resolve(cuboMarca);
      });
    });
  }

  getCuboId(id) {
    return new Promise(function (resolve) {
        var request = 'api/Cubos/' + id;
        var url = Global.urlApiTienda + request;
        var cuboId = [];
        axios.get(url, id).then((response) => {
            cuboId = response.data;
          resolve(cuboId);
        });
      });
  }
}
