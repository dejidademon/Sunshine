<template>
    <q-card-section class="q-pt-none row justify-center">

          <div class="animate__animated animate__lightSpeedInRight" style="font-size: 20px; text-align: center; width: 100%; padding-bottom: 0vh;"></div>

          <div class="row justify-center">
            <div  class="column">
              <q-checkbox  class="justify-center" keep-color dark v-model="days.sday" color="$primary" />
              Sunday
            </div>
            <div style="font-size: 13px" class="q-pl-sm column ">
              <q-checkbox class="justify-center" keep-color dark v-model="days.mday" color="$primary" />
              Monday
            </div>
         
            <div style="font-size: 13px" class="q-pl-sm column">
              <q-checkbox class="justify-center" keep-color dark v-model="days.tday" color="$primary" />
              Tuesday
            </div>

            <div style="font-size: 13px" class="q-pl-sm column ">
              
              <q-checkbox class="justify-center" keep-color dark v-model="days.wday" color="$primary"/>
            Wednesday
            </div>

            <div style="font-size: 13px" class="q-pl-sm column ">
              <q-checkbox class="justify-center" keep-color dark v-model="days.thday" color="$primary" />
              Thursday
            </div>

            <div style="font-size: 13px" class="q-pl-sm column">
              <q-checkbox class="justify-center" keep-color dark v-model="days.fday" color="$primary" />
              Friday
            </div>

            <div style="font-size: 13px" class="q-pl-sm column">
              <q-checkbox class="justify-center" keep-color dark v-model="days.stday" color="$primary" />
              Saturday
            </div>
            
            </div>
      </q-card-section>
</template>

<script>
    export default {

        props: ['days'],

    }
</script>