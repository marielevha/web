<template>
  <!-- About Area Start -->
  <section class="about-area section-padding sky-blue" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Start About Area Image -->
          <div class="img-about">
            <!--<img
              class="img-fluid"
              src="https://via.placeholder.com/824x1024"
              alt="abou me"
            />-->

            <!--<img
              class="img-fluid"
              src="https://cobra-vue-nuxt-portfolio.netlify.app/assets/img/about-area/about.jpg"
              alt="abou me"
            />-->
          </div>
          <!-- End About Area Image -->
        </div>

        <div class="col-lg-6 col-md-12">
          <!-- Start About Detail -->
          <div class="about-details">
            <div class="section-title mb-50">
              <h2>{{ $t('about.title') }}</h2>
            </div>
            <p>{{ $t('about.desc') }}</p>
            <ul class="about-info mt-4">
              <li><span>{{ $t('about.labels.name') }}:</span> <span>{{ $t('me.name') }}</span></li>
              <li>
                <span>{{ $t('about.labels.birthday') }}:</span> <span>{{ $t('about.values.birthday') }}</span>
              </li>
              <li>
                <span>{{ $t('about.labels.address') }}:</span> <span>{{ $t('about.values.address') }}</span>
              </li>
              <li><span>{{ $t('about.labels.zip_code') }}:</span> <span>{{ $t('me.zip_code') }}</span></li>
              <li><span>{{ $t('about.labels.email') }}:</span> <span>{{ $t('me.email') }}</span></li>
              <li><span>{{ $t('about.labels.phone') }}: </span> <span>{{ $t('me.phone') }}</span></li>
            </ul>
            <div class="download-btn mt-5">
              <a
                @click="downloadCV({ url, label })"
                class="btn radius-btn"
                href="javascript:void(0);">{{ $t('about.download') }}
              </a>
            </div>
          </div>
          <!-- End About Detail -->
        </div>
      </div>
    </div>
  </section>
  <!-- About Area End -->
</template>

<script>

export default {
  name: "AboutArea",

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
