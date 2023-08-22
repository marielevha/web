<template>
  <!-- Resume Area Start -->
  <section class="resume-area section-padding" id="resume">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{ $t('resume.title') }}</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->
      <div class="row">
        <div class="col-lg-3 d-none d-lg-block">
          <!-- Start Resume Nav -->
          <nav id="navi">
            <ul>
              <li><a href="#page-2">{{ $t('resume.experience.title') }}</a></li>
              <li><a href="#page-1">{{ $t('resume.education.title') }}</a></li>
              <li><a href="#page-3">{{ $t('resume.skills.title') }}</a></li>
              <!--<li><a href="#page-4">{{ $t('resume.awards.title') }}</a></li>-->
            </ul>
          </nav>
          <!-- End Resume Nav -->
        </div>
        <div class="col-lg-9 col-md-12">

          <!-- Start Experience -->
          <div id="page-2" class="page two">
            <h3 class="heading">{{ $t('resume.experience.title') }}</h3>
            <div class="resume-wrap transition d-flex"
                 v-for="(item, id) in $t('resume.experience.items')" :key="id">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="icon-briefcase"></span>
              </div>
              <div class="text pl-3">
                <!--<span class="date">{{ $t('resume.experience.items.0.project_title') }}</span>-->
                <a href="javascript:void(0);"><h4>{{ item.project_title }}</h4></a>
                <span class="position">{{ item.project_customer }}</span>
                <p>{{ item.project_desc }}</p>
                <a v-for="tag in item.project_tags" href="javascript:void(0);">
                  <span class="tag tag-md">#{{ tag }}</span>
                </a>
              </div>
            </div>
            <!--<div class="resume-wrap transition d-flex">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="icon-briefcase"></span>
              </div>
              <div class="text pl-3">
                &lt;!&ndash;<span class="date">{{ $t('resume.experience.items.1.project_title') }}</span>&ndash;&gt;
                <h4>{{ $t('resume.experience.items.1.project_title') }}</h4>
                <span class="position">{{ $t('resume.experience.items.1.project_customer') }}</span>
                <p>{{ $t('resume.experience.items.1.project_desc') }}</p>
                <a v-for="tag in $t('resume.experience.items.1.project_tags')" href="#">
                  <span class="tag tag-md">#{{ tag }}</span>
                </a>
              </div>
            </div>
            <div class="resume-wrap transition d-flex">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="icon-briefcase"></span>
              </div>
              <div class="text pl-3">
                &lt;!&ndash;<span class="date">{{ $t('resume.experience.items.2.period') }}</span>&ndash;&gt;
                <h4>{{ $t('resume.experience.items.2.project_title') }}</h4>
                <span class="position">{{ $t('resume.experience.items.2.project_customer') }}</span>
                <p>{{ $t('resume.experience.items.2.project_desc') }}</p>
                <a v-for="tag in $t('resume.experience.items.2.project_tags')" href="#">
                  <span class="tag tag-md">#{{ tag }}</span>
                </a>
              </div>
            </div>
            <div class="resume-wrap transition d-flex">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="icon-briefcase"></span>
              </div>
              <div class="text pl-3">
                &lt;!&ndash;<span class="date">{{ $t('resume.experience.items.3.period') }}</span>&ndash;&gt;
                <h4>{{ $t('resume.experience.items.3.project_title') }}</h4>
                <span class="position">{{ $t('resume.experience.items.3.project_customer') }}</span>
                <p>{{ $t('resume.experience.items.3.project_desc') }}</p>
                <a v-for="tag in $t('resume.experience.items.3.project_tags')" href="#">
                  <span class="tag tag-md">#{{ tag }}</span>
                </a>
              </div>
            </div>
            <div class="resume-wrap transition d-flex">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="icon-briefcase"></span>
              </div>
              <div class="text pl-3">
                &lt;!&ndash;<span class="date">{{ $t('resume.experience.items.4.period') }}</span>&ndash;&gt;
                <h4>{{ $t('resume.experience.items.4.project_title') }}</h4>
                <span class="position">{{ $t('resume.experience.items.4.project_customer') }}</span>
                <p>{{ $t('resume.experience.items.4.project_desc') }}</p>
                <a v-for="tag in $t('resume.experience.items.4.project_tags')" href="#">
                  <span class="tag tag-md">#{{ tag }}</span>
                </a>
              </div>
            </div>-->
          </div>
          <!-- End Experience -->

          <!-- Start Education -->
          <div id="page-1" class="page one">
            <h3 class="heading">{{ $t('resume.education.title') }}</h3>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-graduation"></span>
              </div>
              <div class="text pl-3">
                <span class="date">{{ $t('resume.education.items.1.period') }}</span>
                <h4>{{ $t('resume.education.items.1.degree') }}</h4>
                <span class="position">{{ $t('resume.education.items.1.school') }}</span>
<!--                <p>{{ $t('resume.education.items.1.desc') }}</p>-->
              </div>
            </div>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-graduation"></span>
              </div>
              <div class="text pl-3">
                <span class="date">{{ $t('resume.education.items.2.period') }}</span>
                <h4>{{ $t('resume.education.items.2.degree') }}</h4>
                <span class="position">{{ $t('resume.education.items.2.school') }}</span>
<!--                <p>{{ $t('resume.education.items.2.desc') }}</p>-->
              </div>
            </div>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-graduation"></span>
              </div>
              <div class="text pl-3">
                <span class="date">{{ $t('resume.education.items.3.period') }}</span>
                <h4>{{ $t('resume.education.items.3.degree') }}</h4>
                <span class="position">{{ $t('resume.education.items.3.school') }}</span>
<!--                <p>{{ $t('resume.education.items.3.desc') }}</p>-->
              </div>
            </div>
          </div>
          <!-- End Education -->

          <!-- Start Skills -->
          <div id="page-3" class="page three">
            <h3 class="heading">{{ $t('resume.skills.title') }}</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>{{ $t('resume.skills.items.1.title') }}</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:80%">
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>{{ $t('resume.skills.items.2.title') }}</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:85%">
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>{{ $t('resume.skills.items.3.title') }}</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:80%">
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>{{ $t('resume.skills.items.4.title') }}</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:85%">
                      <span>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>{{ $t('resume.skills.items.5.title') }}</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:75%">
                      <span>75%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="progress-wrap">
                  <h5>{{ $t('resume.skills.items.6.title') }}</h5>
                  <div class="progress">
                    <div class="progress-bar" style="width:80%">
                      <span>80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Skills -->

          <!-- Start Awards -->
          <!--<div id="page-4" class="page four">
            <h3 class="heading">{{ $t('resume.awards.title') }}</h3>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-badge"></span>
              </div>
              <div class="text pl-3">
                <span class="date">2014-2015</span>
                <h4>Top 10 Web Developer</h4>
                <span class="position">Mansoura University</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-badge"></span>
              </div>
              <div class="text pl-3">
                <span class="date">2014-2015</span>
                <h4>Top 5 LeaderShip Exellence Winner</h4>
                <span class="position">Mansoura University</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
            <div class="resume-wrap transition d-flex">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="icon-badge"></span>
              </div>
              <div class="text pl-3">
                <span class="date">2014-2015</span>
                <h4>Top 4 Web Tester</h4>
                <span class="position">Mansoura University</span>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have.
                </p>
              </div>
            </div>
          </div>-->
          <!-- End Awards -->
        </div>
      </div>
    </div>
  </section>
  <!-- Resume Area End -->
</template>
<script>
export default {
  name: "ResumeArea"
};
</script>
