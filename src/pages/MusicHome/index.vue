<template>
  <div>
    <MusicBanners :bannerJson="bannerJson"></MusicBanners>
    <MusicList :listJson="listJson"></MusicList>
  </div>
</template>

<script>
import { getBanner, getList } from "@/api/request";
import MusicBanners from "@/components/MusicBanners/index.vue";
import MusicList from "@/components/MusicList/index.vue";
export default {
  name: "MusicHome",
  components: {
    MusicBanners,
    MusicList,
  },
  data() {
    return {
      bannerJson: [],
      listJson: [],
    };
  },
  mounted() {
    this.getBannerData();
    this.getListData();
  },
  methods: {
    getBannerData() {
      getBanner().then((res) => {
        this.bannerJson = res.data.data;
      });
    },
    getListData() {
      getList().then((res) => {
        this.listJson = res.data.data;
      });
    },
  },
};
</script>

<style>
</style>