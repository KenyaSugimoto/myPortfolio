<template>
  <div>
    <v-container>
      <v-row><v-col><h2>杉本健也のポートフォリオサイト</h2></v-col></v-row>
      <v-row><v-col><h3>ようこそ！</h3></v-col></v-row>
      <v-row justify="center" class="slide">
        <v-col cols="8">
          <v-carousel height="700px">
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data () {
    return {
      items: [
        {src: require("./../assets/panpies.jpg")},
        {src: require("./../assets/baseball.jpg")},
        {src: require("./../assets/animal.png")},
        {src: require("./../assets/animal2.jpg")},
      ],
    }
  },
}
</script>

<style scoped>

</style>
