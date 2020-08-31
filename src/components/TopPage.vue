<template>
  <div>
    <v-container>
      <v-row><v-col><h2>杉本健也のポートフォリオサイト</h2></v-col></v-row>
      <v-row><v-col><h3>ようこそ！</h3></v-col></v-row>
      <v-row justify="center">
        <v-col cols="7">
          <v-carousel>
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
        {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
        {src: "./../assets/baseball.jpg"},
        {src: "./../assets/animal.jpg"},
      ],
    }
  },
}
</script>