<template>
  <q-card dark class="wholeCard">
    
      
       <modal-header>Add Alarm </modal-header>

    <form @submit.prevent="submitForm">
        
          <q-card-section align="center" class="q-pt-lg">

        <modal-title 
        :title.sync="submitToAlarm.title"
        ref="modalTitle" />

        <modal-time 
        :time.sync="submitToAlarm.time" 
        ref="modalTime"/>
  
        <modal-days :days.sync="submitToAlarm.days" />
        <modal-sounds :sound.sync="submitToAlarm.sound" />
        </q-card-section>




        <q-card-actions
          align="center"
          class="bg-dark text-white q-pb-md"
        >
          <modal-button />
        </q-card-actions>
 </form>
      </q-card>
  
</template>

<script>
import { mapActions } from "vuex";
import { date } from "quasar";

export default {
  data() {
    return {
      submitToAlarm: {
        title: "",
        time: "",
        on: true,
        sound: "",
        days: {
          sday: false,
          mday: false,
          tday: false,
          wday: false,
          thday: false,
          fday: false,
          stday: false
        }
      },
    };
  },
  components: {
    'modal-header': require('components/Alarm/Modals/Shared/ModalHeader.vue').default,
    'modal-title': require('components/Alarm/Modals/Shared/ModalTitle.vue').default,
    'modal-time': require('components/Alarm/Modals/Shared/ModalTime.vue').default,
    'modal-days': require('components/Alarm/Modals/Shared/ModalDays.vue').default,
    'modal-sounds': require('components/Alarm/Modals/Shared/ModalSounds.vue').default,
    'modal-button': require('components/Alarm/Modals/Shared/ModalButton.vue').default
  },
  methods: {
    ...mapActions("alarms", ["addAlarm"]),
    updateProxy() {
      this.dummyTime = this.submitToAlarm.time;
    },


    submitForm() {
      this.$refs.modalTitle.$refs.title.validate()
      this.$refs.modalTime.$refs.time.validate()
      if (this.$refs.modalTitle.$refs.title.hasError == false && this.$refs.modalTime.$refs.time.hasError == false) {
        this.submitAlarm()
      }
      else {
        this.$q.notify({
         type: 'negative',
         message: 'Error! Try again please.'})
      }
    },
    submitAlarm() {
      this.addAlarm(this.submitToAlarm);
    },
  }
}
</script>

<style>
/* big */
::-webkit-scrollbar {
  width: 0 !important;
}
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

div {
  font-family: sunflower_font;
}

</style>