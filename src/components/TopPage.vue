<template>
  <div>
    <v-container>
      <v-row><v-col><h2>ポートフォリオサイト</h2><hr></v-col></v-row>
      <v-row><v-col><h3>ようこそ！</h3></v-col></v-row>
      <v-row><v-col><h3>「私」を表す写真たち</h3></v-col></v-row>
      <v-row justify="center" class="slide">
        <v-col cols="8">
          <v-carousel height="700px" show-arrows-on-hover cycle>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
            <div class="episode"><b>{{item.episode}}</b></div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row><v-col></v-col></v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data () {
    return {
      items: [
        {
          src: require("./../assets/panpies.jpg"),
          episode: "野球の大会で念願の優勝した時の写真です。私のサークルチームは野球経験者ばかりではないですが強豪チームにも負けないチーム力があります！"
        },
        {
          src: require("./../assets/baseball.jpg"),
          episode: "関西の選抜チームの投手として、ナゴヤドームで関東選抜チームと試合をしました。試合にも勝ち、両親の前で全力プレーを見せることができました！"
        },
        {
          src: require("./../assets/animal.png"),
          episode: "動物が大好きです！歩いている動物を見つけると一緒に写真を撮りたくなります！"
        },
        {
          src: require("./../assets/animal2.jpg"),
          episode: "猫に癒されたかったので岡山県の真鍋島（猫島）に行きました！"
        },
        {
          src: require("./../assets/onji.jpg"),
          episode: "学部で成績優秀者（上位2%以内）に選ばれた時の写真です。右の友達と一緒に勉強して2人で選ばれることができました！"
        },
        {
          src: require("./../assets/auth.jpg"),
          episode: "オーストラリア留学に行った時の写真です。ホストファミリーとその友人家族とディナーをしました。"
        },
        {
          src: require("./../assets/q1.jpg"),
          episode: "南半球で一番高いビルであるQ1のスカイウォーク体験をしました。怖かったです。"
        },
      ],
    }
  },
}
</script>

<style scoped>
.episode {
  background-color: #c8e6c9c5;
  color: rgb(46, 45, 45);
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
