<template>
  <div>
    <HeroArea />
    <ServiceArea />
    <AboutArea />
    <ResumeArea />
    <!--<WorksArea />-->
    <!--<PriceArea />-->
    <!--<HireArea />-->
    <TestimonialArea />
    <!--<BlogArea />-->
    <ContactArea />
  </div>
</template>

<script>
import HeroArea from "~/components/HeroArea";
import ServiceArea from "~/components/ServiceArea";
import AboutArea from "~/components/AboutArea";
import ResumeArea from "~/components/ResumeArea";
import WorksArea from "~/components/WorksArea";
import PriceArea from "~/components/PriceArea";
import HireArea from "~/components/HireArea";
import TestimonialArea from "~/components/TestimonialArea";
import BlogArea from "~/components/BlogArea";
import ContactArea from "~/components/ContactArea";

export default {
  components: {
    HeroArea,
    ServiceArea,
    AboutArea,
    ResumeArea,
    WorksArea,
    PriceArea,
    HireArea,
    TestimonialArea,
    BlogArea,
    ContactArea
  },

  head: {
    title: "Mariel Evha ABIR",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: process.env.npm_package_description,
        name: "Mariel Evha ABIR",
        content: process.env.npm_package_description || "Je suis un ingénieur logiciel spécialisé dans l'étude & la création d'expériences numériques exceptionnelles pour booster votre activité."
      },
      { property: 'twitter:card', content: 'summary_large_image'},
      { property: 'twitter:site', content: '@abir'},
      { property: 'twitter:title', content: process.env.npm_package_author},
      { property: 'twitter:description', content: process.env.npm_package_description},
      { property: 'twitter:image', content: ''},
      { property: 'twitter:creator', content: '@abir'},
      { property: 'google-site-verification', content: 'Yn7QIZYWhqGLwH_w5XZzJMr1im8qnKfJ2toBDsRCrJA'},
    ],
  }
};
</script>
