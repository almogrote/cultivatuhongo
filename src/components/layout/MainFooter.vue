<template>
  <footer class="section has-background-grey-darker has-text-grey-light has-text-centered-mobile">
    <div class="container">
      <div class="columns pr-6 pl-6">
        <!--Information-->
        <div class="column is-3">
          <h5 class="is-size-5 has-text-weight-bold">Tienda</h5>
          <p>Accede a la tienda</p>
          <p>Seguridad y rapidez en tus compras</p>
          <p>Envíos y plazos de entrega</p>
          <p>Aviso legal</p>
        </div>
        <div class="footer-text column is-3 mr-4">
          <h5 class="is-size-5 has-text-weight-bold">Contacto</h5>
          <p>C/ San Pablo 35 bajo izda, 38602 Tenerife</p>
          <p>922 34 689 - 657 374 36</p>
          <p>cultivatuhongo@info.com</p>
          <p>Servicio 24h</p>
        </div>
        <!--logo footer-->
        <div class="footer-logo footer-logo-responsive column is-offset-1 is-2 mr-5">
          <figure>
            <img :src="require('@/assets/logo-cultiva-tu-hongo.svg')" alt="logo cultiva tu hongo"
                class="logo-footer">
          </figure>
        </div>
        <!--Social media icons-->
        <div class="social-icons-tablet column is-offset-1 is-one-fifth mt-3">
          <span class="icon is-large fas fa-2x">
            <i class="fab fa-instagram"></i>
          </span>
          <span class="icon is-large fas fa-2x">
            <i class="fab fa-facebook-f"></i>
          </span>
          <span class="icon is-large fas fa-2x">
            <i class="fab fa-twitter"></i>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>
