<template>
  <!-- Start Testimonial Area -->
  <section class="testimonial-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-12">
          <!-- start testimonial carousel -->
          <div class="test-slider">
            <!-- start tetimonial item -->
            <div class="test-item" v-for="(item, id) in testimonials" :key="id">
              <p>{{ item.testimonial }}</p>
              <div class="author-info">
                <img :src="item.avatar" alt="client" />
                <h4>{{ item.name }}</h4>
                <div class="position">
                  {{ item.speciality }}
                  <span>{{ item.company }}</span>
                </div>
              </div>
            </div>
            <!-- end tetimonial item -->
          </div>
          <!-- end testimonial carousel -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Testimonial Area -->
</template>

<script>
export default {
  name: "TestimonialArea",

  data() {
    return {
      testimonials: [
        {
          name: 'Bénit IBONGO',
          speciality: 'Frontend Developer',
          testimonial: "Passionné dans ce qu'il fait, il y met toute son énergie. La rigueur et l'organisation sont ses atouts ; ce qui rendent son travail satisfaisant méritant vivement des encouragements. Un plaisir !",
          company: '',
          avatar: '/assets/img/testimonials/benit.jpg',
        },
        {
          name: 'Dervan TATI',
          speciality: 'FullStack Developer',
          testimonial: "J'ai eu l'opportunité de travailler avec Mariel sur plusieurs projets et je peux affirmer qu'il fait preuve d'une grande capacité d'adaptation. C'est quelqu'un de professionnel qui est à fond dans ce qu'il fait.",
          company: '',
          avatar: '/assets/img/testimonials/destin.png',
        },
      ]
    }
  }
};
</script>
