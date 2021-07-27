<template>
  <div class="home">
    <img v-img class="d-block w-100 img-fluid" :src="favorite.image_list[0]">
<!--      <h1>Welcome to Xinnn's home!</h1>-->
<!--      <section class="border p-4 text-center mb-4 container container-fluid">-->
<!--        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">-->
<!--          <div class="carousel-inner">-->
<!--            <div v-for="(moment, index) in moments" :key="moment.mid"-->
<!--                 class="carousel-item"-->
<!--                 :class="{ 'active': index === 0 }">-->
<!--              <img class="d-block w-100 img-fluid" :src="moment.image_list[0]">-->
<!--            </div>-->
<!--          </div>-->
<!--          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">-->
<!--            <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--            <span class="sr-only">Previous</span>-->
<!--          </a>-->
<!--          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">-->
<!--            <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--            <span class="sr-only">Next</span>-->
<!--          </a>-->
<!--        </div>-->
<!--      </section>-->
  </div>
</template>

<script>
import moments_api from "@/js/moments";
export default {
  name: "Home",
  data(){
    return {
      moments: [],
      favorite: {
        image_list: []
      },
      response_errors:[]
    }
  },
  created() {
    this.getMoments()
  },

  methods: {
    getMoments() {
      moments_api.get_moments_by_hashtag('xinnn')
          .then(response => {
            this.moments = response.data.moment_list;
            console.log(this.moments);

            // set favorite
            for (let moment of this.moments) {
              if(moment.hashtag_list.indexOf('favorite') !== -1) {
                this.favorite = moment;
                break;
              }
            }
          })
          .catch(error => {
            this.response_errors = error;
          });
    },
  }
}
</script>

<style scoped>

</style>