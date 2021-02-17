<template>
  <q-layout view="lHh LpR lFf">
    <q-header  class="bg-transparent text-primary">
        <q-btn id="menuButton" class="absolute" color=$primary flat round icon="menu" @click="left = !left" />
    </q-header>

    <q-drawer
      show-if-above
      v-model="left"
      :breakpoint="812"
      :width="250"
      elevated
      content-class="bg-dark"
    >
      <q-list>
         <div>
    <q-img
    transition="fade"
      src="../assets/Sunshine_image1.jpg"
      spinner-color="white"
      style="height: 170px; max-width: 300px"
   
    
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        Navigation
      </div>
    </q-img>
  </div>

        <q-item v-for="nav in navs" :key="nav.label" :to="nav.to" exact clickable active-class="menu-link" class="text-white">
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>{{ nav.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer  class=" text-white evenly-spaced" exact>
      <q-tabs>
        <q-route-tab v-for="nav in navs" :key="nav.label" :to="nav.to" :icon="nav.icon" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
<script>
import { openURL } from "quasar";

export default {
  data() {
    return {
      left: false,
      

      navs: [
        {
          icon: "alarm",
          label: "Alarm",
          separator: false,
          to: "/",
        },
        {
          icon: "timer",
          label: "Timer",
          separator: false,
          to: "/timer",
        },
        {
          icon: "fact_check",
          label: "Assignments",
          separator: false,
          to: "/assignments",
        },
        {
          icon: "ac_unit",
          label: "Weather",
          separator: false,
          to: "/weather",
        },
        {
          icon: "settings",
          label: "Settings",
          separator: false,
          to: "/settings",
        }
      ],

    };
  },
};
</script>


<style scoped lang="scss">
.q-layout {
  font-family: sunflower_font;
}

@media screen and (min-width: 812px) {
  .q-footer {
    display: none;
  }
}
@media screen and (max-width: 812px) {
  #menuButton {
    display: none;
  }
}
@font-face {
  font-family: sunflower_font;
  src: url(../assets/Sunflower_font.otf);
}

.menu-link {
  color: white;
  background: #d29819;
}

#menuButton {
  padding: 10px;
}
#menuButton:hover {
  color: red;
}


</style>