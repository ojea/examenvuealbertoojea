<template>
  <div>
    <h1>Detalle cubo:</h1>
    <div class="card" style="width: 18rem">
      <img src="{{cubo.imagen}}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ cubo.nombre }}</h5>
        <p class="card-text">Precio: {{ cubo.precio }}</p>
        <p class="card-text">
          Modelo: {{ cubo.modelo }}, Marca: {{ cubo.marca }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/serviceCubos";
const service = new ServiceCubos();

export default {
  name: "DetallesCubo",
  mounted() {
    var id = this.$route.params.idCubo;
    service.getCuboId(id).then((result) => {
      console.log(result);
      this.detalleCubo = result;
    });
  },
  data() {
    return {
      detalleCubo: {},
    };
  },
};
</script>
