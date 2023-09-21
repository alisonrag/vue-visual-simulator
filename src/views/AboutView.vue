<template>
  <div class="about">
    <div class="container container-about my-5">
      <div class="row p-5">
        <div class="col-md-12">
          <h1 class="text-center header-section">{{ $t("aboutProject") }}</h1>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6"><hr /></div>
            <div class="col-md-3"></div>
          </div>
          <p class="py-5">{{ $t("aboutText") }}</p>
        </div>
      </div>
      <div class="row p-5">
        <div class="col-md-12 text-center">
          <h1 class="header-section">{{ $t("technologies") }}</h1>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6"><hr /></div>
            <div class="col-md-3"></div>
          </div>
          <div class="row py-5">
            <div class="col-md-4">
              <h2>
                <i class="fa-brands fa-html5 html5-icon"></i>
              </h2>
              <h2>HTML5</h2>
              <p>
                Build with lastest version of
                <a target="_blank" href="https://html5.org/">HTML</a>
              </p>
            </div>
            <div class="col-md-4">
              <h2>
                <i class="fa-brands fa-js js-icon"></i>
              </h2>
              <h2>Javascript</h2>
              <p>
                Build with latest version of
                <a target="_blank" href="https://www.javascript.com/"
                  >JavaScript</a
                >
              </p>
            </div>
            <div class="col-md-4">
              <h2>
                <i class="fa-brands fa-css3 css3-icon"></i>
              </h2>
              <h2>CSS3</h2>
              <p>
                Build with latest version of
                <a
                  target="_blank"
                  href="https://www.w3.org/Style/CSS/Overview.en.html"
                  >CSS</a
                >
              </p>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-md-4">
              <h2>
                <i class="fa-brands fa-font-awesome fa-icon"></i>
              </h2>
              <h2>Font Awesome</h2>
              <p>
                Build with latest version of
                <a target="_blank" href="https://fontawesome.com/"
                  >FontAwesome</a
                >
              </p>
            </div>
            <div class="col-md-4">
              <h2>
                <i class="fa-brands fa-vuejs vuejs-icon"></i>
              </h2>
              <h2>VueJS3</h2>
              <p>
                Build with
                <a target="_blank" href="https://vuejs.org/">Vue</a>
              </p>
            </div>
            <div class="col-md-4">
              <h2>
                <i class="fa-brands fa-bootstrap bootstrap-icon"></i>
              </h2>
              <h2>Bootstrap 5</h2>
              <p>
                Build with
                <a target="_blank" href="https://getbootstrap.com/"
                  >Bootstrap</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-5">
        <div class="col-md-12">
          <h1 class="text-center header-section">{{ $t("warning") }}</h1>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6"><hr /></div>
            <div class="col-md-3"></div>
          </div>
          {{ $t("warningText") }}
        </div>
      </div>
      <div class="row p-5">
        <div class="col-md-12">
          <h1 class="text-center header-section">{{ $t("team") }}</h1>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6"><hr /></div>
            <div class="col-md-3"></div>
          </div>
          <div class="card col-md-12">
            <div class="card-body">
              <a
                href="https://github.com/alisonrag/vue-visual-simulator/graphs/contributors"
              >
                <img
                v-lazy="{ src: 'https://contrib.rocks/image?repo=alisonrag/vue-visual-simulator', delay: 250 }"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-5">
        <div class="col-md-12">
          <h1 class="text-center header-section">{{ $t("socialMedia") }}</h1>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6"><hr /></div>
            <div class="col-md-3"></div>
          </div>
          <div class="row p-5 text-center">
            <div class="col-md-12">
              <h2>
                <a
                  href="https://github.com/alisonrag/vue-visual-simulator"
                  target="_blank"
                  ><i class="fa-brands fa-github"></i
                ></a>
              </h2>
            </div>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = "Ragnarok Online Visual Simulator - About";
  },
};
</script>

<style scoped>
.about {
  min-height: 85vh;
}
.container-about {
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.html5-icon {
  color: #e54d26;
}
.js-icon {
  color: #f7e018;
}
.css3-icon {
  color: #2163af;
}

.fa-icon {
  color: #5e94d9;
}

.vuejs-icon {
  color: #3fb27f;
}

.bootstrap-icon {
  color: #6b419a;
}

.header-section {
  padding: 2px 5px;
}
</style>
