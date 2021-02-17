<template>
  <div>
    <div class="text-h4 text-center text-primary noti">Notification Sounds</div>

    <q-option-group
      @input="$emit('update:sound', $event)"
      keep-color
      size="55px"
      name="selected_sound"
      :value="sound"
      :options="options"
      color="blue-grey-8"
      inline
    />

    <div class="row justify-center" v-if="sound === 'op4'">
      <input type="file" ref="inputFile" accept=".mp3" @change="onFilePicked" />

      <audio id="sound" controls />
      <alarim-ring hidden :cusSound="cusSound"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sound"],

  data() {
    return {
      submitResult: [],
      file: null,
      cusSound: '',

      options: [
        {
          label: "Classic Clock",
          value: "op1",
        },
        {
          label: "Gentle Jingle",
          value: "op2",
        },
        {
          label: "Wookie Wail",
          value: "op3",
        },
        {
          label: "Custom Sound",
          value: "op4",
        },
      ],
    };
  },
components: {
            'alarm-ring': require('components/Alarm/Modals/RingAlarm.vue').default,
        },
  methods: {
    onFilePicked(event) {
    var sound = document.getElementById('sound');
      const files = event.target.files
      let filename = files[0].name
       if (filename.lastIndexOf('.') <= 0) {
       return alert('Add a valid file Please')
     }
     const fileReader = new FileReader()
     fileReader.addEventListener('load', () => {
       this.cusSound = fileReader.result
       sound.src = fileReader.result;
  
     })
     fileReader.readAsDataURL(files[0])
    },
  },
};
</script>

<style lang="scss" >
</style>