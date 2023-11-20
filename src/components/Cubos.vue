<template>
    <div>
    <h1>Marca de cubos:</h1>
    <div class="card" style="width: 18rem;" v-for="cubo in cubosMarca" :key="cubo" >
        <img src="{{cubo.imagen}}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{cubo.nombre}}</h5>
          <p class="card-text">Precio: {{cubo.precio}} €</p>
          <p class="card-text">Modelo: {{cubo.modelo}}, Marca: {{cubo.marca}}</p>
          <router-link :to="'/detalle/' + cubo.idCubo" class="btn btn-primary">Detalle</router-link>
        </div>
      </div>
</div>

</template>

<script>
import ServiceCubos from '@/services/serviceCubos'
const service = new ServiceCubos();

    export default {
        name: "CubosMarca",
        mounted() {
            var marca = this.$route.params.marca
            service.getCuboMarcas(marca).then((result) => {
                console.log(result)
                this.cubosMarca = result
            })
        },
        data(){
            return{
                cubosMarca: []
            }
        }
    }
</script>