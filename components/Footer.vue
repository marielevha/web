<template>
  <!-- Start Footer -->
  <footer class="footer-area sky-blue">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="footer-top flex-column">
            <div class="footer-logo text-center">
              <a href="#">
                <img :src="localePath('/assets/img/logo.png')" alt="logo" />
              </a>
              <h4>{{ $t('me.follow') }}</h4>
            </div>
            <div class="footer-social text-center">
              <a :href="$t('me.github')"><i class="fa fa-github transition"></i></a>
              <a :href="$t('me.linkedin')"><i class="fa fa-linkedin transition"></i></a>
              <a href="javascript:void(0);"><i class="fa fa-facebook transition"></i></a>
              <a href="javascript:void(0);"><i class="fa fa-twitter transition"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer-bottom text-center justify-content-center">
        <p class="col-lg-8 col-sm-12 footer-text">
          {{ $t('footer.text') }}
          <i class="fa fa-heart-o" aria-hidden="true"></i> {{ $t('footer.by') }}
          <a href="javascript:void(0);" target="_blank"
            >{{ $t('me.name') }}</a
          >
        </p>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>
<script>
export default {
  name: "Footer"
};
</script>
