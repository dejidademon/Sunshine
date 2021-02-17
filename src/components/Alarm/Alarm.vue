<template>
  <div>
    <q-list class="text-white">

          <q-slide-item 
        class="alarms"
         dark 
         @right="onRight">
         
        <template v-slot:right>
   
           <q-btn style="height: 100vh; width: 16vh;"  icon="edit" color="blue" @click="showEditAlarm = true" />
          <q-btn style="height: 100vh; width: 16vh;"  icon="delete" color="red" @click.stop="promptToDelete(id)" />

        </template>  

        <q-item>
        <q-item-section>
         <q-item-label class="text-h4">{{ alarms.time }} </q-item-label>
          <q-item-label class="text-h6">{{ alarms.title }} </q-item-label>
        </q-item-section>


        <q-item-section 
        @click="updateAlarm({ id: id, updates: { on: !alarms.on } })"
        clickable 
        side
        top>

          <q-toggle
            
            size="60px"
            icon="alarm"
            color = "green"
            v-model="alarms.on"
            v-bind:style="{color: btnToggle}"
            class="no-pointer-events toggleBtn"
          ></q-toggle>
        </q-item-section>


    <q-dialog v-model="showEditAlarm">
       <edit-alarm 
       @close="showEditAlarm = false"
       :alarm="alarms"
       :id="id"
        />
    </q-dialog>

    <q-dialog persistent v-model="showAlarmRing">
       <alarm-ring 
       @close="showAlarmRing = false"
       :alarm="alarms"
       :id="id"
        />
    </q-dialog>

        </q-item>
         </q-slide-item>

    </q-list>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  
  data() {
   return {
     orgClick: false,
     btnToggle: "red",
     showEditAlarm: false,
     showAlarmRing: false
   }
  },

props:["alarms", "id"],

  computed: {
    rightReset() {
      this.onRight()
    }
},
  
components: {
  "edit-alarm": require("components/Alarm/Modals/EditAlarm.vue").default,
  "alarm-ring": require("components/Alarm/Modals/RingAlarm.vue").default,
},

  created() {
      setInterval(this.getTime, 1000)
    },
  methods: {
...mapActions('alarms', ['updateAlarm', 'deleteAlarm']),

    onRight ({ reset }) {
      if (this.orgClick == true) {
        this.finalizenow(reset)
      }
      else {
        this.finalize(reset)
      }
    },

    finalizenow(reset) {
      this.timer = reset()
      this.orgClick = false
    },

     finalize (reset) {
      this.timer = setTimeout(() => {
        reset()
      }, 3000)
    },
    
     promptToDelete(id) {
      this.$q.dialog({
        dark: true,
        title: 'Confirm',
        message: 'Do you really want to delete this item?',
        cancel: true,
        persistent: true
      }).onOk(() => {
       this.deleteAlarm(id)
       this.$q.notify({
         type: 'negative',
         message: 'Alarm Deleted!'})
    })
    },
    alarmRing() {
      var d = new Date();
      var currentTime = d.toLocaleString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});
      if (currentTime[6] == '0' && currentTime[7] == '0') {
        currentTime = d.toLocaleString([], { hour: '2-digit', minute: '2-digit'});
      }
      if (currentTime == this.alarms.time) {
        console.log('alarm Ringing')
        this.showAlarmRing = true
      }
    }

  },
  mounted() {
    setInterval(this.alarmRing, 1000);

  }
}
</script>



<style lang="scss">

.alarms {
border-radius: 30px;
border:grey 4px solid;
}


.q-slide-item__right {
  padding: 0px;
  background-color: $primary;
}
</style>