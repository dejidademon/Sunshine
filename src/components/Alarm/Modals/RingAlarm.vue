<template>
  <q-card dark class="wholeCard">
    <q-card-section class="title text-center text-primary">
      <div align="right" class="q-pa-sm top-exit bg-dark text-red">
        <q-btn clickable round icon="clear" v-close-popup />
      </div>
      <div class="text-h4">Your Alarm Is Ringing!</div>
    </q-card-section>

    <q-card-section>
      <div class="text-h5">Title: {{ alarm.title }}</div>
      <div class="text-h5">Time: {{ alarm.time }}</div>
    </q-card-section>

    <audio id="mySound" autoplay loop>
      <source :src="sundFile" type="audio/mp3" />
    </audio>

    <q-card-section class="row justify-center">
      <q-btn
        push
        icon="notifications_paused"
        label="Snooze"
        size="25px"
        type="submit"
        class="bg-grey-14"
        v-close-popup
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      sundFile: "",
    };
  },
  props: ["alarm", "id", "cusSound"],
  components: {
    "modal-header": require("components/Alarm/Modals/Shared/ModalHeader.vue").default,
  },
  methods: {},
  mounted() {
    if (this.alarm.on == true) {
      if (this.alarm.sound == "op1") {
        this.sundFile = require("assets/Alarm_Clock_Sound.mp3");
      }
      if (this.alarm.sound == "op2") {
        this.sundFile = require("assets/Gentle_Alarm_Sound.mp3");
      }
      if (this.alarm.sound == "op3") {
        this.sundFile = require("assets/Star_Wars_Sound.mp3");
      }
      if (this.alarm.sound == "op4") {
      }
    }
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 812px) {
  .wholeCard {
    width: 60vh;
  }
}
/* small */
@media screen and (max-width: 812px) {
  .wholeCard {
    width: 80vw;
  }
}
</style>
