<template>
  <!-- Start Works Area -->
  <section class="works-area section-padding sky-blue" id="works">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{ $t('project.title') }}</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->

      <div class="row mb-4">
        <div class="col-xs-12">
          <div class="filters">
            <ul>
              <li class="active" :data-filter="'.' + $t('project.filters.0.key')">{{ $t('project.filters.0.title') }}</li>
              <li :data-filter="'.' + $t('project.filters.1.key')">{{ $t('project.filters.1.title') }}</li>
              <li :data-filter="'.' + $t('project.filters.2.key')">{{ $t('project.filters.2.title') }}</li>
              <li :data-filter="'.' + $t('project.filters.3.key')">{{ $t('project.filters.3.title') }}</li>
              <li :data-filter="'.' + $t('project.filters.5.key')">{{ $t('project.filters.5.title') }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="filters-content">
        <div class="row grid">
          <div v-for="(item, id) in $t('project.work')" :key="id"
            :class="$t('project.filters.0.key') +' '+ item.filter"
            class="single-work col-lg-4 col-md-6 col-sm-12">
            <div class="position-relative">
              <div class="thumb">
                <img
                  class="image img-fluid"
                  :src="item.image"
                  :alt="item.title"
                />
              </div>
              <a class="overlay transition" :href="item.link"></a>
              <div class="short-info transition">
                <h4>{{ item.title }}</h4>
                <div class="cat">{{ item.customer }}</div>
              </div>
            </div>
          </div>

          <!--<div :class="$t('project.filters.0.key') +' '+ $t('project.filters.2.key')"
            class="single-work col-lg-4 col-md-6 col-sm-12"
          >
            <div class="position-relative">
              <div class="thumb">
                <img
                  class="image img-fluid"
                  :src="$t('project.works.wApp.0.image')"
                  :alt="$t('project.works.wApp.0.title')"
                />
              </div>
              <a class="overlay transition" :href="$t('project.works.wApp.0.link')"></a>
              <div class="short-info transition">
                <h4>{{ $t('project.works.wApp.0.title') }}</h4>
                <div class="cat">{{ $t('project.works.wApp.0.customer') }}</div>
              </div>
            </div>
          </div>

          <div :class="$t('project.filters.0.key') +' '+ $t('project.filters.3.key')"
               class="single-work col-lg-4 col-md-6 col-sm-12">
            <div class="position-relative">
              <div class="thumb">
                <img
                  class="image img-fluid"
                  :src="$t('project.works.api.0.image')"
                  :alt="$t('project.works.api.0.title')"
                />
              </div>
              <a class="overlay transition" target="_blank" :href="$t('project.works.api.0.link')"></a>
              <div class="short-info transition">
                <h4>{{ $t('project.works.api.0.title') }}</h4>
                <div class="cat">{{ $t('project.works.api.0.customer') }}</div>
              </div>
            </div>
          </div>

          <div :class="$t('project.filters.0.key') +' '+ $t('project.filters.5.key')"
               class="single-work col-lg-4 col-md-6 col-sm-12">
            <div class="position-relative">
              <div class="thumb">
                <img
                  class="image img-fluid"
                  :src="$t('project.works.content.0.image')"
                  :alt="$t('project.works.content.0.title')"
                />
              </div>
              <a class="overlay transition" target="_blank" :href="$t('project.works.content.0.link')"></a>
              <div class="short-info transition">
                <h4>{{ $t('project.works.content.0.title') }}</h4>
                <div class="cat">{{ $t('project.works.content.0.customer') }}</div>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </section>
  <!-- End Works Area -->
</template>

<script>
export default {
  name: "WorksArea"
};
</script>
