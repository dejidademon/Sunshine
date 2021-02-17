<template>
  <form>
    <q-banner dark rounded class="bg-grey-8">
      <template v-slot:avatar>
        <q-icon name="account_circle" color="primary" />
      </template>
      Register for a free SunShine account to keep your saved alarms and
      assignments!
    </q-banner>

    <q-input
      class="q-pt-md"
      dark
      rounded
      standout
      v-model="formData.email"
      label="Email"
    />
    <q-input
      class="q-pt-md"
      dark
      rounded
      standout
      type="password"
      v-model="formData.password"
      label="Password"
    />
    <q-input
      class="q-pt-md"
      dark
      rounded
      standout
      type="password"
      v-model="formData.passwordCheck"
      label="Check Password"
    />

    <div class="q-pa-md float-right">
      <q-btn
      
      color="primary"
       label="Register" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
        passwordCheck: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>