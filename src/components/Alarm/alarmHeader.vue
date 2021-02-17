<template>
  <div class="q-pa-sm">
    <q-carousel
      swipeable
      height="25vh"
      animated
      v-model="slide"
      :autoplay="autoplay"
      ref="carousel"
      infinite
      class="rounder-borders"
    >
      <q-carousel-slide
        class="rounded-borders"
        :name="1"
        img-src="https://www.farmersalmanac.com/wp-content/uploads/2015/06/Earliest-Sunrise-June-A191879830.jpg"
      >
        
          <p class="absolute-center" id="time">{{ timestamp }}</p>
        

      </q-carousel-slide>

      <q-carousel-slide
        class="rounded-borders"
        :name="2"
        img-src="https://i.pinimg.com/originals/b4/c2/d7/b4c2d7c9fb28e69bff7ec8a1e37b8b42.jpg"
      >
        <div class="absolute-center custom-caption">
          <div class="text-h2 text-white">Weather</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        class="rounded-borders"
        :name="3"
        img-src="https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,f_auto,fl_progressive,h_533,q_auto,w_800/v1428564257/article/R10171_image1"
      >
        <div class="absolute-center custom-caption">
          <div class="text-h2 text-white">Motivational Quote</div>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push
            round
            dense
            color="yellow"
            text-color="black"
            icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push
            round
            dense
            color="yellow"
            text-color="black"
            icon="arrow_right"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      slide: 1,
      autoplay: false,
      timestamp: "",
    };
  },

  mounted() {
    setInterval(this.getTime, 500);
  },

  methods: {
    getTime() {
      var d = new Date();
      var h = d.getHours();
      var hours = h;
      var m = d.getMinutes();
      var minutes = m;
      var s = d.getSeconds();
      var seconds = s;
      hours = ((hours + 11) % 12) + 1;
      if (seconds < 10) {
        seconds = "0" + s;
      } else {
        seconds = s;
      }
      var amPm = ""
      if(h > 11) {
        amPm= "PM"
      }
      else if (h < 11) {
        amPm="AM"
      }
      if (minutes < 10) {
        minutes = "0" + m;
      } else {
        minutes = m;
      }

      var currentTime = hours + ":" + minutes + ":" + seconds + " " + amPm;

      this.timestamp = currentTime;
    },
  },
};
</script>

<style scoped>
.rounder-borders {
  border-radius: 20px;
}

/* small */
@media screen and (max-width: 812px) {
#time {
  font-size: 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300vw;

  
}
}
/* big */
@media screen and (min-width: 812px) {
#time {
  font-size: 9vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300vw;

  
}
}
</style>