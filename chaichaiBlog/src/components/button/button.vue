
<template>
  <button class="btn orange" v-if="isPlain">
    <slot></slot>
  </button>
  <button class="btn1 orange1" v-if="!isPlain">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useCounterStore } from "../../stores";

const counter = useCounterStore();
let { color } = storeToRefs(counter);
let backColor = color.value + "80";

const props = defineProps(["plain"]);
const isPlain = ref(true);
if (props.plain === undefined) {
  isPlain.value = false;
}
</script>

<style>
.btn {
  margin-top: 20px;
  border: 2px solid transparent;
  border-radius: 0;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 1px;
  background: rgba(0, 0, 0, 0);
}

.btn1 {
  margin-top: 20px;
  border: 2px solid transparent;
  border-radius: 0;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  padding: 8px 16px;
  background-color: v-bind(color);
  color: #fff;
  border-radius: 1px;
}

.btn:before {
  content: "";
  height: 6px;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  position: absolute;
  bottom: -8px;
  left: 4px;
  right: -8px;
  transition: all 0.3s ease 0s;
}

.btn1:before {
  content: "";
  height: 6px;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  position: absolute;
  bottom: -8px;
  left: 4px;
  right: -8px;
  transition: all 0.3s ease 0s;
}

.btn:hover:before {
  bottom: -2px;
  left: -2px;
  right: 2px;
  border-color: v-bind(color);
  border-radius: 0;
}

.btn1:hover:before {
  bottom: -2px;
  left: -2px;
  right: 2px;
  border-color: v-bind(color);
  border-radius: 0;
}

.btn:after {
  content: "";
  width: 6px;
  border-right: 2px solid transparent;
  border-top: 2px solid transparent;
  position: absolute;
  bottom: -8px;
  right: -8px;
  top: 4px;
  transition: all 0.3s ease 0s;
}

.btn1:after {
  content: "";
  width: 6px;
  border-right: 2px solid transparent;
  border-top: 2px solid transparent;
  position: absolute;
  bottom: -8px;
  right: -8px;
  top: 4px;
  transition: all 0.3s ease 0s;
}

.btn:hover:after {
  bottom: 2px;
  right: -2px;
  top: -2px;
  border-color: v-bind(color);
  border-radius: 0;
}

.btn1:hover:after {
  bottom: 2px;
  right: -2px;
  top: -2px;
  border-color: v-bind(color);
  border-radius: 0;
}

.btn.orange {
  border-color: v-bind(color);
  color: v-bind(color);
  border-radius: 5px;
}

.btn.orange:before,
.btn.orange:after {
  border-color: v-bind(backColor);
  border-radius: 3px;
  color: v-bind(color);
}

.btn1.orange1 {
  border-color: v-bind(color);
  color: #fff;
  border-radius: 5px;
}

.btn1.orange1:before,
.btn1.orange1:after {
  border-color: v-bind(backColor);
  border-radius: 3px;
  color: v-bind(color);
}

@media only screen and (max-width: 767px) {
  .btn {
    margin-bottom: 25px;
  }
}
</style>