<template>
<div>
   <div id="progress">
     <mt-progress :value="20" :bar-height="5" ></mt-progress>
   </div>

  <div id="player">
    <img
      id="playerImg"
      src="https://cdn.pixabay.com/photo/2016/10/30/18/01/apple-1783882__480.png"
    />
    <span id="songName">歌曲名字：爱你</span>

    <audio controls height="100" width="100">
      <source src="https://www.ytmp3.cn/down/77275.mp3" type="audio/mpeg" />
      <embed height="50" width="100" src="https://www.ytmp3.cn/down/77275.mp3" />
    </audio>

    <div id="svgList">
      <svg
        class="icon"
        aria-hidden="true"
        v-if="playVisible"
        @click="changePlayVisible()"
      >
        <use xlink:href="#icon-bofang"></use>
      </svg>

      <svg
        class="icon"
        aria-hidden="true"
        v-if="!playVisible"
        @click="changePlayVisible()"
      >
        <use xlink:href="#icon-zanting"></use>
      </svg>

      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiao"></use>
      </svg>

      <svg class="icon" aria-hidden="true" @click="showPop()">
        <use xlink:href="#icon-liebiaoxunhuan"></use>
      </svg>
    </div>

    <PlayModelPop v-if="popupVisible"></PlayModelPop>
  </div>
  </div>
</template>

<script>
import PlayModelPop from "@/components/PlayModelPop";
export default {
  name: "MusicPlayer",
  components: {
    PlayModelPop,
  },
  data() {
    return {
      popupVisible: false,
      playVisible: true,
    };
  },
  methods: {
    showPop() {
      this.popupVisible = true;
    },
    changePlayVisible() {
      this.playVisible = !this.playVisible;
    },
  },
};
</script>

<style>
#player {
  background-color: lavender;
  display: flex;
  justify-content: space-between;
}
#playerImg {
  width: 50px;
  height: 50px;
}
#songName {
  font-size: 50%;
}
#svgList {
  display: flex;
  font-size: 150%;
  justify-content: space-between;
}
#progress {
  width: 100%;
  height: 30px;
  background-color:lavender;
}
</style>