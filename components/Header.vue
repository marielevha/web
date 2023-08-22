<template>
  <!-- Header Start -->
  <header>
    <div class="header-area header-transparrent">
      <div class="main-header header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <!-- Logo -->
            <div class="col-xl-2 col-lg-2 col-md-2">
              <div class="logo">
                <a href="/"
                  ><img :src="localePath('/assets/img/logo.png')" alt="logo"
                /></a>
              </div>
            </div>
            <div class="col-xl-10 col-lg-10 col-md-10">
              <!-- Main-menu -->
              <div class="main-menu float-right d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li class="nav-item">
                      <nuxt-link :to="localePath('/')" class="nav-link transition active" href="#body">
                        {{ $t('menu.home') }}
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link :to="localePath('/')" class="nav-link transition" href="#services">
                        {{ $t('menu.services') }}
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link :to="localePath('/')" class="nav-link transition" href="#about">
                        {{ $t('menu.about') }}
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link :to="localePath('/')" class="nav-link transition" href="#resume">
                        {{ $t('menu.resume') }}
                      </nuxt-link>
                    </li>
                    <!--<li class="nav-item">
                      <nuxt-link :to="localePath('/')" class="nav-link transition" href="#works">
                        {{ $t('menu.works') }}
                      </nuxt-link>
                    </li>-->
                    <!--<li class="nav-item">
                      <nuxt-link :to="localePath('/')" class="nav-link transition" href="#blog">
                        {{ $t('menu.blog') }}
                      </nuxt-link>
                      <ul class="submenu transition">
                        <li><nuxt-link :to="localePath('/')" href="#">Blog</nuxt-link></li>
                        <li><nuxt-link :to="localePath('/')" href="#">Blog Details</nuxt-link></li>
                      </ul>
                    </li>-->
                    <li class="nav-item">
                      <nuxt-link :to="localePath('/')" class="nav-link transition" href="#contact">
                        {{ $t('menu.contact') }}
                      </nuxt-link>
                    </li>
                    <li class="nav-item ">
                      <div class="nav-link transition">
                        <select v-model="selectedValue" @change="onChange(selectedValue)">
                          <option
                            v-for="(locale, index) in $i18n.locales"
                            :key="index"
                            :value="locale.code"
                            >{{locale.name}}</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- Mobile Menu -->
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      selectedValue: "",
    }
  },

  created() {
    this.selectedValue = this.$i18n.locale;
  },

  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },

  methods: {
    onChange: function(event) {
      this.switchLocalePath(event);
      window.location.href = `/${event}`;
      //this.$router.replace(this.switchLocalePath(event));
    },
  }
};
</script>

<style>
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;
    /*height: 34px;*/
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 3px;
    /*height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;*/
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
