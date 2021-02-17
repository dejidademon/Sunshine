<template>
<q-card-section>
          <q-input
            @input="$emit('update:time', $event)"
            rounded
            standout
            bg-color="blue-grey-8"
            label="Time"
            :value="time"
            mask="##:## AA"
            fill-mask
            :rules="[ (time) => !!time || 'Field is required']"
            ref="time"
          >
            <q-btn icon="access_time" flat size="15px" rounded color="primary">
              <q-popup-proxy

                transition-show="scale"
                transition-hide="scale"
              >
                <q-time dark  v-model="dummyTime">
                  <div class="row justify-between q-gutter-sm">
                    <q-btn
                      label="Cancel"
                      align="left"
                      color="red"
                      push
                      v-close-popup
                    />
                    <q-btn
                      label="Accept"
                      color="green"
                      push
                      align="right"
                      @click="save"
                      v-close-popup
                    />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-btn>
          </q-input>

        </q-card-section>
</template>

<script>
    export default {
        props: ['time'],
        data() {

        return {
              dummyTime: ""
        }
        },
        methods: {
             save() {
      let h = this.dummyTime.substring(0,2)
      let m = this.dummyTime.substring(3,5)
      let hours = h
       var amPm = ""
      if(h > 11) {
        amPm= "PM"
      }
      else if (h <= 11) {
        amPm="AM"
      }
     if (hours > 12) {
       var newHours = hours - 12
       if (newHours <= 9 ){
       hours = "0" + newHours
       }
       else if (newHours >= 10) {
         hours = newHours
       }
     }
      
      this.time = hours + m + amPm;
    }
        }
    }
</script>

