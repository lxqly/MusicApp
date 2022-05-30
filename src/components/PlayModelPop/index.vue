<template>
  <div>
    <mt-popup
      closeOnClickModal="true"
      position="bottom"
      v-model="popVisible"
      id="modelPop"
    >
      <p>歌曲循环模式</p>
      <mt-cell title="单曲循环">
        <svg class="icon popFont" aria-hidden="true">
          <use xlink:href="#icon-danquxunhuan"></use>
        </svg>
      </mt-cell>
      <mt-cell title="随机播放">
        <svg class="icon popFont" aria-hidden="true">
          <use xlink:href="#icon-gl-shuffle"></use>
        </svg>
      </mt-cell>
      <mt-cell title="列表循环">
        <svg class="icon popFont" aria-hidden="true">
          <use xlink:href="#icon-liebiaoxunhuan"></use>
        </svg>
      </mt-cell>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: "PlayModelPop",
  data() {
    return {
      popVisible: true,
    };
  },
};
</script>

<style>
#modelPop {
  width: 100%;
  font-size: 70%;
}
.popFont {
  font-size: 180%;
}
p {
  text-align: center;
}
</style>