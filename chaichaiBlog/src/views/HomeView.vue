<!--
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2023-05-22 20:51:58
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2023-05-24 18:03:20
 * @FilePath: \chaiv3\chaichaiBlog\src\views\HomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->

<template>
  <div class="img">
    <div>
      <span>
        <img class="b2" src="@/assets/yezi.gif" alt="" />
      </span>
    </div>
    <div class="title-box">
      <div class="title-fbox" :style="{
        'border-color': color,
        backgroundImage: `linear-gradient(45deg, ${color} 25%, transparent 0, transparent 50%, ${color} 0, ${color} 75%, transparent 0)`,
        backgroundSize: '40px 40px',
      }"></div>
      <div class="title-mbox" :style="{ 'border-color': color, color: color }">
        Sound
        <div class="loader">
          <div class="outer" :style="{ 'border-top-color': color, 'border-right-color': color }"></div>
          <div class="middle" :style="{ 'border-top-color': color, 'border-right-color': color }"></div>
          <div class="inner" :style="{ 'border-top-color': color, 'border-right-color': color }"></div>
        </div>
      </div>
      <div class="title-lbox" :style="{ 'border-color': color, color: color }">
        Profile
      </div>
      <div class="title-ebox" :style="{ 'border-color': color, color: color }">
        Works
        <div class="dots">
          <div :style="{ 'background-color': color }"></div>
          <div :style="{ 'background-color': color }"></div>
          <div :style="{ 'background-color': color }"></div>
          <div :style="{ 'background-color': color }"></div>
          <div :style="{ 'background-color': color }"></div>
          <div :style="{ 'background-color': color }"></div>
          <div :style="{ 'background-color': color }"></div>
          <div :style="{ 'background-color': color }"></div>
          <div :style="{ 'background-color': color }"></div>
        </div>
      </div>
    </div>
    <div class="content-box">
      <div class="content-tbox" :style="{ 'border-color': color, color: color }">
        <div class="tbox-text vibrate-1">
          <p>Chai chai</p>
          <p>优秀的博客模板作者</p>
          <br />
          <p>嗨！你好！</p>
          <p>我是柴柴</p>
          <p></p>
          <p>励志成为优秀</p>
          <p>且花里胡哨的前端程序员</p>
          <p>并在努力奋斗着</p>
          <br />
          <p>这是一个突发奇想的</p>
          <p>全新的</p>
          <p>博客模板</p>
          <p>希望你喜欢</p>
          <br />
        </div>
      </div>
      <div class="content-cbox" :style="{ 'border-color': color, color: color }">
        <div class="cbox-content text-focus-in">This is the new one</div>
        <div class="cbox-content1">
          <span style="font-size: 8rem" class="text-focus-inS">power by</span>
          <span class="text-focus-inT">Chai chai</span>
        </div>
        <div class="jxw-text">这是我们的吉祥物！↓</div>
        <div class="jxw-box" style="z-index: 999999!important;"><img src="@/assets/jxw.png" alt=""
            style="z-index: 999999!important;" /></div>
      </div>
    </div>
    <div class="split-box">
      <div class="split-lbox" :style="{ 'border-color': color, color: color }">
        Works
      </div>
      <div class="split-rbox" :style="{
        'border-color': color,
        backgroundImage: `radial-gradient(${color} 40%, transparent 0)`,
      }"></div>
    </div>
    <div class="quil-box">
      <div class="year-box">
        <div class="quil-ybox" :style="{ 'border-color': color, color: color }">
          <div class="quil-pbox">
            <p>Art Direction</p>
            <p>Brand Planning</p>
            <p>Copywriting</p>
            <p>Graphic Design</p>
            <p>Logo Design</p>
            <p>Motion Direction</p>
            <p>Photo Direction</p>
            <p>Sign Design</p>
            <p>Space Produce</p>
            <p>Web Design</p>
            <p>Web Planning</p>
          </div>
          <div class="quil-fbox">2023</div>
        </div>
        <div class="quil-rbox" :style="{
          'border-color': color,
          '-webkit-text-stroke': `1px ${color}`,
        }">
          無理です！
        </div>
      </div>
      <div class="quil-split">
        <div class="split-Lbox" :style="{
          'border-color': color,
          backgroundImage: `linear-gradient(-45deg, ${color} 25%, transparent 0, transparent 50%, ${color} 0, ${color} 75%, transparent 0)`,
          backgroundSize: '20px 20px',
        }"></div>
        <div class="split-Rbox" :style="{ color: color }">
          <div>view project</div>
          <div class="split-point" :style="{ color: color }">→</div>
        </div>
      </div>
    </div>
    <div class="quil-box1">
      <div class="year-box1">
        <div class="quil-rbox1" :style="{
          'border-color': color,
          '-webkit-text-stroke': `1px ${color}`,
        }">
          ダメです！
        </div>
        <div class="quil-ybox1" :style="{ 'border-color': color, color: color }">
          <div class="quil-fbox1">2022</div>
          <div class="quil-pbox1">
            <p>Art Direction</p>
            <p>Brand Planning</p>
            <p>Copywriting</p>
            <p>Graphic Design</p>
            <p>Logo Design</p>
            <p>Motion Direction</p>
            <p>Photo Direction</p>
            <p>Sign Design</p>
            <p>Space Produce</p>
            <p>Web Design</p>
            <p>Web Planning</p>
          </div>
        </div>
      </div>
      <div class="quil-split1">
        <div class="split-Rbox1" :style="{ color: color }">
          <div>view project</div>
          <div class="split-point1" :style="{ color: color }">→</div>
        </div>
        <div class="split-Lbox1" :style="{
          'border-color': color,
          backgroundImage: `radial-gradient(${color} 40%, transparent 0)`,
        }"></div>
      </div>
    </div>
    <div class="quil-box">
      <div class="year-box">
        <div class="quil-ybox" :style="{ 'border-color': color, color: color }">
          <div class="quil-pbox">
            <p>Art Direction</p>
            <p>Brand Planning</p>
            <p>Copywriting</p>
            <p>Graphic Design</p>
            <p>Logo Design</p>
            <p>Motion Direction</p>
            <p>Photo Direction</p>
            <p>Sign Design</p>
            <p>Space Produce</p>
            <p>Web Design</p>
            <p>Web Planning</p>
          </div>
          <div class="quil-fbox">2021</div>
        </div>
        <div class="quil-rbox" :style="{
          'border-color': color,
          '-webkit-text-stroke': `1px ${color}`,
        }">
          私は！可愛いです！
        </div>
      </div>
      <div class="quil-split">
        <div class="split-Lbox" :style="{
          'border-color': color,
          backgroundImage: `linear-gradient(-45deg, ${color} 25%, transparent 0, transparent 50%, ${color} 0, ${color} 75%, transparent 0)`,
          backgroundSize: '3px 3px',
        }"></div>
        <div class="split-Rbox" :style="{ color: color }">
          <div>view project</div>
          <div class="split-point" :style="{ color: color }">→</div>
        </div>
      </div>
    </div>
    <div class="dachi-box">
      <div class="dachi-lbox" :style="{ 'border-color': color, color: color }">
        <div class="lbox-top" :style="{ '-webkit-text-stroke': `1px ${color}`, 'border-color': color }">馬鹿じゃの？</div>
        <div class="lbox-bottom">
          <div>
            <p>知らず知らず隠してた</p>
          <p>本当の声を響かせてよ ほら</p>
          <p>見ないフリしていても</p>
          <p>確かにそこに今もそこにあるよ</p>
          </div>
          <div class="bottom-year">2020</div>
          <div class="bottom-point" :style="{ color: color }">→</div>
        </div>
      </div>
      <div class="dachi-lbox" :style="{ 'border-color': color, color: color }">
        <div class="lbox-top" :style="{ '-webkit-text-stroke': `1px ${color}`, 'border-color': color }">うるさい！</div>
        <div class="lbox-bottom">
          <div>
            <p>知らず知らず隠してた</p>
          <p>本当の声を響かせてよ さあ</p>
          <p>見ないフリしていても</p>
          <p>確かにそこに君の中に</p>
          </div>
          <div class="bottom-year">2020</div>
          <div class="bottom-point" :style="{ color: color }">→</div>
        </div>
      </div>
      <div class="dachi-rbox">
        <div class="rbox-cos"
          :style="{
            'border-color': color, background: `linear-gradient(to bottom right,transparent 0%,transparent calc(50% - 1px),${color} 50%,transparent calc(50% + 1px),transparent 100%)`
          }">
        </div>
        <div class="rbox-split" :style="{ color: color }">
          <div>view project</div>
          <div class="rbox-point" :style="{ color: color }">→</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/index.ts";
import { storeToRefs } from "pinia";
const counter = useCounterStore();
let { color } = storeToRefs(counter);
</script>

<style scoped lang="less">
.img {
  position: relative;
  /* width: 100%; */
  /* height: 100vh; */
  overflow: hidden;
  box-sizing: border-box;
}

.img img {
  position: absolute;
}

.img .b2 {
  z-index: 9999;
  left: 1050px;
  transform-origin: left;
  transform: skew(30deg);
  filter: grayscale(400%) blur(10px) opacity(15%);
}

.title-box {
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  z-index: 999;
  width: calc(100vw - 42px);
  height: 150px;
  background: url("@/assets/bgTexture.webp");
  flex-direction: row;
}

.title-fbox {
  min-width: 300px;
  /* flex: 12.5; */
  border-right: 2px solid;
  border-bottom: 2px solid;
}

.title-mbox {
  width: 150px;
  min-width: 130px;
  /* flex: 7; */
  text-align: center;
  font-weight: 700;
  padding-top: 20px;
  border-bottom: 2px solid;
  border-right: 2px solid;
}

.title-lbox {
  width: 1300px;
  /* flex: 48; */
  border-bottom: 2px solid;
  border-right: 2px solid;
  font-weight: 700;
  padding-top: 20px;
  padding-left: 20px;
  text-align: left;
  transition: background-color .4s linear, width .6s cubic-bezier(1, 0, 0, 1), transform .6s cubic-bezier(1, 0, 0, 1), -webkit-transform .6s cubic-bezier(1, 0, 0, 1);
  pointer-events: none;
}

.title-ebox {
  flex: 8;
  min-width: 150px;
  border-bottom: 2px solid;
  border-right: 2px solid;
  font-weight: 700;
  padding-top: 20px;
  text-align: center;
}

.content-box {
  /* width: 100%; */
  height: 896px;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
}

.content-tbox {
  min-width: 300px;
  font-weight: 700;
  border-right: 2px solid;
  border-bottom: 2px solid;
}

.tbox-text {
  margin-left: 70px;
  margin-top: 520px;
  text-align: left;
}

.content-cbox {
  flex: 87;
  border-bottom: 2px solid;
}

.jxw-box {
  width: 200px;
  position: absolute;
  right: 25%;
  bottom: 63%;
  /* right: 0; */
}

.jxw-text {
  position: absolute;
  right: 5%;
  bottom: 55%;
  font-size: 40px;
  font-weight: 700;
}

.jxw-box img {
  width: 1000px;
}

.cbox-content {
  font-size: 6rem;
  font-weight: 700;
  margin-left: 15rem;
  margin-top: 300px;
}

.cbox-content1 {
  font-size: 18rem;
  font-weight: 700;
  margin-left: 10rem;
  margin-top: 30px;
}

.loader {
  position: relative;
  margin-top: 50px;
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.dots {
  width: 3em;
  height: 3em;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  margin: 20px auto;
}

.dots>div {
  width: 0.5em;
  height: 0.5em;

  border-radius: 50%;
  animation: fade 1.5s alternate ease-in-out infinite;
}

.dots>div:nth-of-type(2),
.dots>div:nth-of-type(4) {
  animation-delay: 0.25s;
}

.dots>div:nth-of-type(3),
.dots>div:nth-of-type(5),
.dots>div:nth-of-type(7) {
  animation-delay: 0.5s;
}

.dots>div:nth-of-type(6),
.dots>div:nth-of-type(8) {
  animation-delay: 0.75s;
}

.dots>div:nth-of-type(9) {
  animation-delay: 1s;
}

@keyframes fade {
  to {
    opacity: 0.2;
  }
}

.text-focus-in {
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.text-focus-inS {
  animation: text-focus-in 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.text-focus-inT {
  margin-left: 3rem;
  animation: text-focus-in 3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal,
    "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  line-height: normal;
}

@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    filter: blur(0);
    opacity: 1;
  }
}

.vibrate-1 {
  animation: vibrate-1 10s linear infinite both;
}

@keyframes vibrate-1 {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-2px, 2px);
  }

  40% {
    transform: translate(-2px, -2px);
  }

  60% {
    transform: translate(2px, 2px);
  }

  80% {
    transform: translate(2px, -2px);
  }

  100% {
    transform: translate(0);
  }
}

.split-box {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  height: 100px;
}

.split-lbox {
  text-align: center;
  min-width: 300px;
  border-bottom: 2px solid;
  border-right: 2px solid;
  font-family: QuincyCF, serif;
  font-style: italic;
  font-weight: 700;
  font-size: 4rem;
  padding-top: 20px;
}

.split-rbox {
  width: calc(100% - 300px);
  border-bottom: 2px solid;
  background-size: 5px 5px;
}

.year-box {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  height: 427px;
}

.quil-ybox {
  width: 300px;
  min-width: 300px;
  border-right: 2px solid;
  border-bottom: 2px solid;
  font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal,
    "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
  font-style: italic;
  letter-spacing: 0.015em;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.quil-rbox {
  width: calc(100% - 300px);
  border-bottom: 2px solid;
  font-size: 80px;
  font-weight: normal;
  color: transparent;
  padding: 130px 40px;
  transition-property: color, -webkit-text-stroke;
  transition-duration: 0.25s, 1s;
  transition-timing-function: ease-in-out;
}

.quil-rbox:hover {
  color: #fff;
  -webkit-text-stroke: #fff;
}

.quil-pbox {
  position: absolute;
  left: 5%;
  top: 35%;
}

.quil-fbox {
  position: absolute;
  font-size: 160px;
  right: 0;
  top: 60%;
  bottom: auto;
  left: auto;
  -webkit-transform: translate(50%, -50%) rotate(-90deg) translateY(-16%);
  transform: translate(50%, -50%) rotate(-90deg) translateY(-16%);
}

.quil-split {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  height: 67px;
}

.split-Lbox {
  width: calc(100% - 200px);
  border-bottom: 2px solid;
  border-right: 2px solid;
}

.split-Rbox {
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  min-width: 200px;
  border-bottom: 2px solid;
  padding-top: 12px;
  padding-left: 16px;
}

.split-point {
  position: absolute;
  font-size: 80px;
  top: -50%;
  right: -10px;
  transform: rotate(45deg);
}

.year-box1 {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  height: 427px;
}

.quil-ybox1 {
  width: 300px;
  min-width: 300px;
  border-left: 2px solid;
  border-bottom: 2px solid;
  font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal,
    "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
  font-style: italic;
  letter-spacing: 0.015em;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.quil-rbox1 {
  width: calc(100% - 300px);
  border-bottom: 2px solid;
  font-size: 80px;
  font-weight: normal;
  color: transparent;
  padding: 130px 40px;
  transition-property: color, -webkit-text-stroke;
  transition-duration: 0.25s, 1s;
  transition-timing-function: ease-in-out;
}

.quil-rbox1:hover {
  color: #fff;
  -webkit-text-stroke: #fff;
}

.quil-pbox1 {
  position: absolute;
  right: 5%;
  top: 35%;
}

.quil-fbox1 {
  position: absolute;
  font-size: 160px;
  right: 75%;
  top: 60%;
  bottom: auto;
  left: auto;
  -webkit-transform: translate(50%, -50%) rotate(-90deg) translateY(-16%);
  transform: translate(50%, -50%) rotate(-90deg) translateY(-16%);
}

.quil-split1 {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  height: 67px;
}

.split-Lbox1 {
  width: calc(100% - 200px);
  border-bottom: 2px solid;
  border-left: 2px solid;
  background-size: 3px 3px;
}

.split-Rbox1 {
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  min-width: 200px;
  border-bottom: 2px solid;
  /* height: 69px; */
  padding-top: 12px;
  padding-left: 16px;
}

.split-point1 {
  position: absolute;
  font-size: 80px;
  top: -50%;
  right: -10px;
  transform: rotate(45deg);
}

.dachi-box {
  width: 100%;
  height: 430px;
  display: flex;
  flex-wrap: nowrap;
}

.dachi-lbox {
  min-width: 810px;
  border-bottom: 2px solid;
  border-right: 2px solid;
}

.lbox-top {
  height: 275px;
  border-bottom: 2px solid;
  font-size: 80px;
  font-weight: normal;
  color: transparent;
  padding: 50px 20px;
  transition-property: color, -webkit-text-stroke;
  transition-duration: 0.25s, 1s;
  transition-timing-function: ease-in-out;
}

.lbox-top:hover {
  color: #fff;
  -webkit-text-stroke: #fff;
}

.lbox-bottom {
  min-width: 810px;
  position: relative;
  padding: 50px 0 20px 20px;
  font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal,
    "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
  font-style: italic;
  letter-spacing: 0.015em;
  white-space: nowrap;
  overflow: hidden;
}

.bottom-year{
  position: absolute;
  top: -50%;
  right: 0;
  font-size: 120px;
}
.bottom-point {
  position: absolute;
  font-size: 80px;
  // top: -50%;
  bottom: 0%;
  right: 0%;
  transform: rotate(45deg);
}

.dachi-rbox {
  width: calc(100% - 1620px);
  display: flex;
  flex-direction: column;
}

.rbox-split {
  position: relative;
  width: 100%;
  height: 67px;
  padding: 10px 0 0 20px;
  border-bottom: 2px solid;
}

.rbox-point {
  position: absolute;
  font-size: 80px;
  top: -50%;
  right: -10px;
  transform: rotate(45deg);
}

.rbox-cos {
  width: 100%;
  height: calc(100% - 67px);
  border-bottom: 2px solid;
}
</style>