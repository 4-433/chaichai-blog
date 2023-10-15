<template>
  <div>
    <div style="margin-top: 200px; margin-left: 100px">
      <span class="btn btn-lg orange">确 定</span>
    </div>
    <div style="margin-top: 200px; margin-left: 100px">
      <span class="btn1 btn-lg orange1">取 消</span>
    </div>
  </div>
</template>

<script lang="ts">
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
  background-color: rgb(205, 164, 79);
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
  border-color: #e16b47;
  border-radius: 0;
}

.btn1:hover:before {
  bottom: -2px;
  left: -2px;
  right: 2px;
  border-color: #e16b47;
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
  border-color: #e16b47;
  border-radius: 0;
}

.btn1:hover:after {
  bottom: 2px;
  right: -2px;
  top: -2px;
  border-color: #e16b47;
  border-radius: 0;
}

.btn.orange {
  border-color: rgb(205, 164, 79);
  color: rgb(205, 164, 79);
  border-radius: 5px;
}

.btn.orange:before,
.btn.orange:after {
  border-color: rgb(205, 164, 79, 0.6);
  border-radius: 3px;
  color: rgb(205, 164, 79);
}

.btn1.orange1 {
  border-color: rgb(205, 164, 79);
  color: #fff;
  border-radius: 5px;
}

.btn1.orange1:before,
.btn1.orange1:after {
  border-color: rgb(205, 164, 79, 0.6);
  border-radius: 3px;
  color: rgb(205, 164, 79);
}

@media only screen and (max-width: 767px) {
  .btn {
    margin-bottom: 25px;
  }
}
</style>