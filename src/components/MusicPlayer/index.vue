<template>
<div v-if="audio_data">
   <div id="progress">
     <!-- <div>{{audio_current_time}}/{{audio_duration}}</div> -->
     <mt-progress :value="audio_progress" :bar-height="10" ></mt-progress>
   </div>

  <div id="player">
    <router-link :to="{path: 'detail',query:{ 'id':audio_data.id}}">
      <img
        id="playerImg"
        :src="audio_data.pic_small"
      />
    </router-link>
    <div class="songName">{{audio_data.songName}}</div>
    <div class="songName">--{{audio_data.singer}}</div>

    <audio controls autoplay :src="audio_data.source"></audio>

    <div id="svgList">
      <svg
        class="icon"
        aria-hidden="true"
        v-if="playVisible"
        @click="changePlayVisible(true)"
      >
        <use xlink:href="#icon-bofang"></use>
      </svg>

      <svg
        class="icon"
        aria-hidden="true"
        v-if="!playVisible"
        @click="changePlayVisible(false)"
      >
        <use xlink:href="#icon-zanting"></use>
      </svg>

      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiao"></use>
      </svg>

      <svg class="icon" aria-hidden="true" @click="showPop">
        <use xlink:href="#icon-liebiaoxunhuan"></use>
      </svg>
    </div>

    <PlayModelPop v-if="popupVisible"></PlayModelPop>
  </div>
  </div>
</template>

<script>
import PlayModelPop from "@/components/PlayModelPop";
import { mapGetters,mapState,mapMutations } from "vuex";
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
  computed: {
    ...mapState({
      audio_ele: state => state.audio.ele,
      audio_data: state => state.audio.data,
      audio_current_time: state => state.audio.currentTime,
      audio_duration: state => state.audio.duration,
      audio_status: state => state.audio.audio.status
    }),
    ...mapGetters([
      'audio_progress'
    ])
  },
  watch: {
    audio_data(val) {
      if(val) {
        this.$nextTick(()=>{
           this.audioInit();
        })
      }
    }
  },
  methods: {
    showPop() {
      this.popupVisible = true;
    },
    changePlayVisible(val) {
      this.playVisible = ! this.playVisible
      if(val) {
        var playPromise = this.audio_ele.pause()
        if(playPromise!==undefined) {
           playPromise.then(_=>{
             this.audio_ele.play()
           })
           .catch(error => {
            console.log("can't play:" +error)
           });
        }
      }else{
        var playPromise = this.audio_ele.play()
        if(playPromise!==undefined){
          playPromise.then(_=>{
            this.audio_ele.pause()
          })
          .catch(error => {
            console.log("can't pause:"+ error)
          });
        }
      }
    },
    ...mapMutations([
      'SET_AUDIO_ELE',
      'SET_AUDIO_DURATION',
      'SET_AUDIO_CURRENT_TIME',
      'SET_AUDIO_PLAY'
    ]),
    audioInit() {
      console.log("audio初始化...")
      let _audio = this.$el.querySelector('audio')
      this.SET_AUDIO_ELE(_audio)
      console.log("是否准备就绪："+_audio.readyState)
      // 可以播放
      _audio.oncanplay = () => {
          console.log('开始播放音乐。。。')
          // Tip: 如果直接打开音乐详情页在一些浏览器中是不允许自动播放的，如：chrome、safari等
          _audio.play()
          // 设置时长
          this.SET_AUDIO_DURATION(_audio.duration)         
      }
      //播放位置改变
      _audio.ontimeupdate = () => {
          // 设置当前时间
          console.log("设置当前时间。。")
          this.SET_AUDIO_CURRENT_TIME(Math.floor(_audio.currentTime))
          console.log(_audio.currentTime,_audio.duration)
      }
      _audio.onplay = () => {
          this.SET_AUDIO_PLAY(true)
          console.log("正在播放、、、")
       }
    }
  }
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
.songName {
  font-size: 70%;
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