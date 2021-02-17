<template>
    <q-card-section class="title text-center text-primary">
          <div align="right" class="q-pa-sm top-exit bg-dark text-red">
            <q-btn  clickable round icon="clear" v-close-popup />
          </div>
        <div class="text-h4"><slot></slot></div>
      </q-card-section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
.title {
  margin-top: 0px;
  padding-bottom: 10px;
  border-bottom: gray solid 2px;
}
.top-exit {
  padding-bottom: 0px;
}
</style>