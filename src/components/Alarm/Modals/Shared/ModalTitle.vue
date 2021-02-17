<template>

            <q-input
            @input="$emit('update:title', $event)"
            rounded
            standout
            bg-color="blue-grey-8"
            label="Title"
            :rules="[(val) => !!val || 'Field is required']"
            ref="title"
            :value="title"
          />

</template>

<script>
    export default {
        props: ['title']
    }
</script>

