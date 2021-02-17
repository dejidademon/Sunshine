<template>
  <q-page class="q-pa-md" style="background-color: #1d1d1d; padding-top: 50px">



    <q-card class="settings" dark>
        <q-tabs
        
          v-model="tab"
          dense  
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" class="text-h5" label="Login" />
          <q-tab name="register" label="Register" />

        </q-tabs>

        <q-separator dark />

        <q-tab-panels dark v-model="tab" animated>
          <q-tab-panel dark name="login">
            <login />
          </q-tab-panel>

          <q-tab-panel dark name="register">
            <register />
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
        





  </q-page>
</template>

<script>
export default {
    data() {
        return {
            tab: 'register',

        }
    },
     components: {
    "login": require("src/components/Auth/Login.vue").default,
    "register": require("src/components/Auth/Register.vue").default,
  },
}

</script>

<style lang="scss">
.settings {
  border-radius: 30px;
  border: grey 4px solid;
}
.q-tab__label {
  font-size: 25px;
}
</style>