<template>
  <!-- Start Contact Area -->
  <section class="contact-area section-padding vld-parent" id="contact">
    <loading :active.sync="isLoading"
             :loader="'spinner'"
             :can-cancel="false"
             :is-full-page="fullPage">
    </loading>
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{ $t('contact.title') }}</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->

      <div class="row">
        <div class="col-lg-3 col-md-4 mb-5 mb-lg-0">
          <div class="contact-left">
            <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-envelope-letter"></i>
              </div>
              <div class="media-body">
                <h4>{{ $t('contact.labels.email') }}</h4>
                <span>
                  <a :href="'mailto:' + $t('me.email')">{{ $t('me.email') }}</a>
                </span>
              </div>
            </div>

            <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-screen-smartphone"></i>
              </div>
              <div class="media-body">
                <h4>{{ $t('contact.labels.phone') }}</h4>
                <span>
                  <a :href="'tel:' + $t('me.phone')">{{ $t('me.phone') }}</a>
                </span>
              </div>
            </div>

            <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-social-linkedin"></i>
              </div>
              <div class="media-body">
                <h4>{{ $t('contact.labels.linkedin') }}</h4>
                <span>
                  <a :href="$t('me.linkedin')">{{ $t('me.name') }}</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-2 col-md-8">
          <form
            id="contact-form"
            class="row contact-form"
            action="#"
            method="POST"
          >
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input
                  v-model.trim="fromName"
                  @input="setName($event.target.value)"
                  type="text"
                  class="form-control"
                  :placeholder="$t('contact.placeholders.name')"
                />
                <!--<span>{{this.$v.fromName}}</span>-->
                <div v-if="this.$v.fromName.$dirty">
                  <div class="error-alert"
                       v-if="!this.$v.fromName.required">{{ $t('contact.validations.name.1') }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input
                  v-model.trim="fromEmail"
                  @input="setEmail($event.target.value)"
                  type="email"
                  class="form-control"
                  name="email"
                  :placeholder="$t('contact.placeholders.email')"
                />
                <div v-if="this.$v.fromEmail.$dirty">
                  <div class="error-alert"
                       v-if="!$v.fromEmail.required">{{ $t('contact.validations.email.1') }}
                  </div>
                  <div class="error-alert"
                       v-if="!$v.fromEmail.email">{{ $t('contact.validations.email.2') }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <input
                  v-model.trim="subject"
                  @input="setSubject($event.target.value)"
                  type="text"
                  class="form-control"
                  name="subject"
                  :placeholder="$t('contact.placeholders.subject')"
                />
                <div v-if="this.$v.subject.$dirty">
                  <div class="error-alert"
                       v-if="!$v.subject.required">{{ $t('contact.validations.subject.1') }}
                  </div>
                  <div class="error-alert"
                       v-if="!$v.subject.minLength">
                    {{ $t('contact.validations.subject.2') }} {{$v.subject.$params.minLength.min}} {{ $t('contact.labels.letter') }}.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <textarea
                  v-model.trim="message"
                  @input="setMessage($event.target.value)"
                  name="message"
                  id="message"
                  class="form-control"
                  :placeholder="$t('contact.placeholders.message')"
                ></textarea>
                <div v-if="this.$v.message.$dirty">
                  <div class="error-alert"
                       v-if="!$v.message.required">{{ $t('contact.validations.message.1') }}
                  </div>
                  <div class="error-alert"
                       v-if="!$v.message.minLength">
                    {{ $t('contact.validations.message.2') }} {{$v.message.$params.minLength.min}} {{ $t('contact.labels.letter') }}.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="button-field">
                <button @click.prevent="handleSendMail" type="submit"
                        :disabled="$v.$invalid"
                        :class="[$v.$invalid ? 'cursor-disabled' : '', 'btn radius-btn']">
                  {{ $t('contact.labels.button') }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Area -->
</template>

<script>
  import emailJs from 'emailjs-com';
  import Loading from 'vue-loading-overlay';
  import swal from 'sweetalert';
  //import Vuelidate from 'vuelidate';
  import { validationMixin } from 'vuelidate';
  import { required, email, minLength } from 'vuelidate/lib/validators';
  import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: "ContactArea",

  mixins: [ validationMixin ],

  components: {
    Loading
  },

  data() {
    return {
      isLoading: false,
      fullPage: false,
      fromName: '',//'Crols DENVER',
      fromEmail: '',//'noreply@eswap.com',
      subject: '',//'Cupcake ipsum dolor',
      message: '',//'Cupcake ipsum dolor sit amet liquorice gummies cookie. Brownie candy sugar plum lemon drops sweet croissant. Jelly jelly topping tart pudding ice cream bonbon sugar plum.',
    }
  },

  validations: {
    fromName: {required},
    fromEmail: {required, email},
    subject: {required, minLength: minLength(3)},
    message: {required, minLength: minLength(15)}
  },

  methods: {
    handleSendMail: async function () {
      this.$v.$touch();
      if (this.$v.$invalid) {
        await swal("Check values");
      }
      else {
        this.isLoading = true;
        emailJs.init('user_hSd6F2wczi6Ii099EMP9s');
        let params = {
          to_name: 'Mariel Evha',
          from_name: this.fromName,
          from_email: this.fromEmail,
          subject: this.subject,
          message: this.message,
        };
        try {
          await emailJs.send(
            'service_r0j96wf',
            'template_xlkesrm',
            params
          );
          this.isLoading = false;
          await swal(
            "Good job!",
            "Your message has been sent!",
            "success"
          );
        }
        catch (err) {
          this.isLoading = false;
          await swal("Something went wrong. Contact me by e-mail.");
        }
        finally {
          this.isLoading = false;
        }
      }
    },
    setName: function (value) {
      this.fromName = value;
      this.$v.fromName.$touch();
    },
    setEmail: function (value) {
      this.fromEmail = value;
      this.$v.fromEmail.$touch();
    },
    setSubject: function (value) {
      this.subject = value;
      this.$v.subject.$touch();
    },
    setMessage: function (value) {
      this.message = value;
      this.$v.message.$touch();
    },
  }
};
</script>
<style scoped>
  /** {
    font-family: 'Do Hyeon', sans-serif;
  }
  label {
    display: block;
    margin-bottom: 20px;
  }
  .form {
    border: 4px solid #333;
    padding: 20px;
    margin-bottom: 30px;
  }*/
  .error-alert {
    color: #a00;
  }
  .cursor-disabled {
    cursor: not-allowed !important;
  }
</style>
