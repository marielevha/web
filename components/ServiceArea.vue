<template>
  <!-- Services Area Start -->
  <section class="service-area section-padding" id="services">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <div class="process-block pl-4">
            <span class="text-uppercase text-sm letter-spacing"
              >{{ $t('services.title') }}
            </span>
            <h2 class="service-title mb-4 mt-3">
              {{ $t('services.sub_title') }}
            </h2>
            <p>{{ $t('services.desc') }}</p>
          </div>
        </div>

        <div class="col-lg-7 col-md-12">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mb-4 mb-lg-0">
                <i class="fa fa-lightbulb-o"></i>
                <h4>{{ $t('services.items.1.title') }}</h4>
                <p>{{ $t('services.items.1.desc') }}</p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mt-4 mb-4 mb-lg-0">
                <i class="fa fa-dashboard"></i>
                <h4>{{ $t('services.items.2.title') }}</h4>
                <p>{{ $t('services.items.2.desc') }}</p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center">
                <i class="fa fa-diamond"></i>
                <h4>{{ $t('services.items.3.title') }}</h4>
                <p>{{ $t('services.items.3.desc') }}</p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mt-4">
                <i class="fa fa-bar-chart"></i>
                <h4>{{ $t('services.items.4.title') }}</h4>
                <p>{{ $t('services.items.4.desc') }}</p>
              </div>
              <!-- End Single Service Block -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Services Area End -->
</template>

<script>
export default {
  name: "ServiceArea"
};
</script>
