<template>
    <div>
  <h1>Cubos</h1>

  <div class="card" style="width: 18rem" v-for="cubo in cubos" :key="cubo">
    <img :src="cubo.imagen" width="100"/>
    <div class="card-body">
      <h5 class="card-title">{{ cubo.nombre }}</h5>
      <h6 class="card-text">{{ cubo.modelo }}</h6>
      <p class="card-text">precio: {{ cubo.precio }} €</p>
      <p class="card-text">Valoracion: {{ cubo.valoracion }}</p>
      <div class="card-footer">
        <small class="text-body-secondary">ID: {{ cubo.idCubo }}</small>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ServiceCubos from '@/services/serviceCubos'
const service = new ServiceCubos();

    export default {
        name: "CubosComponent",
        mounted() {
            service.getCubos().then((result) => {
                console.log(result)
                this.cubos = result
            })
        },
        data() {
            return{
                cubos: []
            };
        }
    };
</script>