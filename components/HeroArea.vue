<template>
  <!-- Welcome Area Start -->
  <section class="hero-area sky-blue d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <!-- Start Hero Caption -->
          <div class="hero-caption">
            <span class="subheading">{{ $t('hero.introduce') }}</span>
            <h1>{{ $t('me.name') }} !</h1>
            <div>
              {{ $t('hero.self') }}
              <div id="typed-strings">
              <!-- Animated Text Writer -->
              <!--<span>{{ $t('hero.specialities.sp1') }}</span>-->
              <span>{{ $t('hero.specialities.sp2') }}</span>
              <span>{{ $t('hero.specialities.sp3') }}</span>
            </div>
            <span class="LR-C" id="typed" style="white-space:pre;"></span>
            </div>
            <p>{{ $t('hero.desc') }}</p>
            <!--<a @click="downloadCV({ url, label })"
               href="javascript:void(0);" class="btn radius-btn">
              {{ $t('hero.download') }}
            </a>-->
            <nuxt-link :to="localePath('/')" href="#contact" class="nav-link transition btn radius-btn">
              {{ $t('hero.download') }}
            </nuxt-link>
          </div>
          <!-- End Hero Caption -->
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Hero Right Image -->
          <div class="hero-img">
            <!--<img src="https://via.placeholder.com/500x716" alt="Hero image" />-->
            <!--<img src="/assets/img/hero/me.avif" alt="Hero image" />-->
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Animated Shape -->
    <div class="hero-shape custom-animation">
      <img :src="localePath('/assets/img/hero/hero-shape.png')" alt="animation shape" />
    </div>
  </section>
  <!-- Welcome Area End -->
</template>

<script>
export default {
  name: "HeroArea",

  data() {
    return {
      url: `/assets/docs/${this.$t('me.name')}.pdf`,
      label: `${this.$t('me.name')}.pdf`,
    }
  } ,

  methods: {
    async downloadCV({ url, label }) {
      const response = await this.$axios.get(url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = label;
      link.click();
      URL.revokeObjectURL(link.href);
    }
  }
};
</script>
