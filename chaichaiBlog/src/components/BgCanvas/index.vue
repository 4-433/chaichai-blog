<template>
  <canvas id="canvas"></canvas>
</template>

<script setup lang="ts">
import { CanvasHTMLAttributes, onMounted } from 'vue'
import { useCounterStore } from "@/stores";
import { storeToRefs } from "pinia"
import { drawCircle, clearCanvas } from '@/utils'
const counter = useCounterStore()

let { activeColor } = storeToRefs(counter)

onMounted(()=> {
  const canvas: HTMLCanvasElement = document.querySelector('#canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  document.addEventListener('mousemove', (e) => {
    clearCanvas(canvas)
    drawCircle(canvas, e.clientX, e.clientY, 3, activeColor.value)
    drawCircle(canvas, e.clientX, e.clientY, 20, activeColor.value, false)
  })

})
</script>

<style lang="scss" scoped>
// canvas
canvas {
  position: fixed;
  z-index: 1;
  left: 0;
  height: 0;
  height: 100vh;
  width: 100vw;
  pointer-events: none
}
</style>