<template>
  <q-page style="background-color: #1D1D1D;">
    <alarm-header />
    
    <div class="q-pa-md">
          <q-item-label style="font-size: 2.3vh;" header>Alarms</q-item-label>
      <alarm-list 
      v-for="(alarm, key) in alarms"
      :key="key"
      :alarms="alarm"
      :id="key"/>
    </div>


    <q-dialog v-model="showAddAlarm">
       <add-alarm @close="showAddAlarm = false" />
    </q-dialog>



<div class="absolute-bottom text-center bottomButton">
 
  <q-btn
      @click="showAddAlarm = true"
      size="4vh"
      round
      color="orange"
      icon="add"
    />
</div>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  data() {
    return {
      showAddAlarm: false
    }
  },

     computed: {
        ...mapGetters('alarms', ['alarms'])
     
    },

  components: {
    "alarm-header": require("src/components/Alarm/alarmHeader.vue").default,
    "alarm-list": require("src/components/Alarm/Alarm.vue").default,
    "add-alarm": require("src/components/Alarm/Modals/AddAlarm.vue").default
  },
 
mounted() {
  console.log("real", this.alarms)
}
  
  
};
</script>

<style lang="scss" >
.bottomButton {
  padding-bottom: 2vh;
}

</style>

