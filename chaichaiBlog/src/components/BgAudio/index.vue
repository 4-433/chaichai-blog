<template>
  <audio
    src="http://music.163.com/song/media/outer/url?id=1327341487.mp3"
    loop
    ref="au"
  ></audio>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useCounterStore } from "@/stores";
const counter = useCounterStore()
let { isPlay } = storeToRefs(counter)

const au = ref<InstanceType<typeof HTMLAudioElement> | null>(null)
console.log(isPlay)

watch(isPlay, (newV) => {
  if (newV) {
    au.value.play()
  }
})
</script>