<template>
  <div id="detail">
    <router-link to="/detail">
        <div id="baseInfo">当前播放：{{songInfo.songName}}<br>
             歌手：{{songInfo.singer}}</div>
        <div id="lysic" v-html="songInfo.lysic"></div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters,mapMutations,mapState } from 'vuex';
import { getDetail } from '@/api/request';
export default {
  name: "MusicDetail",
  data() {
    return {
      songInfo:{},
    };
  },
  mounted() {
    this.getDetailData();
  },
  computed: {
    ...mapState([
       'audio'
    ])
  },
  methods: {
    ...mapMutations([
        'SET_AUDIO_DATA',
        'SET_AUDIO_STATUS'
    ]),
    getDetailData() {
      getDetail(this.$route.query.id).then((res)=>{
         this.songInfo = res.data.data
         this.songInfo.lysic = this.songInfo.lysic.split('   ').join('<br>')
         this.SET_AUDIO_DATA(this.songInfo)
       })
    }
  }
};
</script>

<style>
#detail {
  height: 100%;
  width: 100%;
  background: rgb(255,193,193,0.6) ;
}
#lysic {
  font-size: 50%;
  margin: 5%;
  padding: 5%;
}
#baseInfo {
  text-align: center;
}
</style>