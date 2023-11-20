<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"
                >Cubos</router-link
              >            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </a>
              <ul class="dropdown-menu">
                <li v-for="cub in cubo" :key="cub">
                    <router-link class="dropdown-item" :to="'/cubos/' + cub.marca">{{cub.marca}}</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceCubos from "@/services/serviceCubos";
const service = new ServiceCubos();
export default {
  name: "MenuCubos",
  mounted() {
    service.getMarcas().then((result) => {
      console.log(result);
      this.cubo = result;
    });
  },
  data() {
    return {
      cubo: [],
      cuboSelected: ""
    };
  },
};
</script>
