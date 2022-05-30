<template>
  <div id="musiclist">
    <div id="listItem" v-for="(item, index) in listJson" :key="index">
      <router-link :to="{ path: 'detail', query: { id: item.id } }">
        <img id="listImg" :src="item.pic" />
        <p id="listspan">{{ item.songName }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicList",
  props: {
    listJson: [],
  },
};
</script>

<style>
#musiclist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
#listItem {
  display: inline-block;
  background-color: blanchedalmond;
}
#listImg {
  width: 150px;
  height: 100px;
}
#listspan {
  font-size: 12px;
}
a {
  text-decoration: none;
}
a:link {
  color:cornflowerblue
}
a:visited {
  color: coral;
}

</style>