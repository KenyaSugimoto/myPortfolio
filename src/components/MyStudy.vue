<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="9">
        <h1 class="title-text">私の研究について</h1>
        <v-tabs v-model="tab" background-color="#dddddd" color="#2c3e50" grow>
            <v-tab class="tab">学部3年</v-tab>
            <v-tab class="tab">卒業研究</v-tab>
            <v-tab class="tab">修士研究</v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="9">
        <div v-if="tab == 0">
          <h2 class="title-text">除雪車運行支援タブレットシステム</h2>
          <h4 class="content-text">
            長野県白馬村やKDDI株式会社と産学官連携で除雪作業の課題解決に向け、次世代移動通信システム「5G」 を活用した除雪車支援の研究を行ないました。
            私は除雪注意箇所をタブレット画面で除雪オペレータに提示するAndroidアプリの開発を担当しました。

            私は九州出身のため、日常に「除雪」という概念はありませんでした。
            除雪オペレータの方に除雪界隈で起こっている問題点をたくさん聞き、実際に目の当たりにしました。
            現在は少しでもそれらの問題を解決できるよう、日々の研究に取り組んでいます。
          </h4>
          <v-btn
            @click="toKDDI"
            text
            color="#1a0dab"
            class="button"
          >
            KDDIのニュースリリース
          </v-btn>
          <v-expansion-panels mandatory>
            <v-expansion-panel>
              <v-expansion-panel-header><h2>総務省 紹介動画</h2></v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card flat>
                  <iframe  width="672" height="378.1" src="https://www.youtube-nocookie.com/embed/2CTZlxcGTTA?start=42" title="movie" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <h3>総務省動画チャンネル（Youtube）より</h3>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header><h2>KDDI 紹介動画</h2></v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card flat>
                  <iframe width="672" height="378.1" src="https://www.youtube-nocookie.com/embed/OCWVnn6x0b0?start=0" title="movie" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <h3>KDDIofficial（Youtube）より</h3>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

        <div v-if="tab == 1">
          <v-card outlined>
            <h2 class="title-text">除雪車運行支援のための除雪オペレータ行動観測システムの研究開発</h2>
            <iframe class="slide" src="//www.slideshare.net/slideshow/embed_code/key/3BdJ5C6RhO1zJc" title="slide" width="595" height="485" allowfullscreen />
          </v-card>
        </div>

        <div v-if="tab == 2">
          <v-row justify="center">
            <v-col cols="8">
              <v-card
                outlined
                max-width="800"
              >
                <v-row justify="center">
                  <v-col cols="10">
                    <h3 class="title-text">豪雪地帯における除雪オペレータ習熟支援システムの研究開発</h3>
                    <h4 class="content-text">
                      本研究では安心安全な生活を実現する上で除雪作業が必要不可欠である豪雪地帯を対象として、除雪オペレータによる操縦動作を複数種類のセンサにより計測し、
                      その計測結果を機械学習等の技術を活用して解析することで運転動作の習熟度を定量化する、習熟支援システムの研究開発を行っています。
                      2020年度は除雪車内における除雪オペレータの操縦動作をサーモカメラや赤外線カメラなどの様々なセンサで計測し、操縦動作の観測に適した計測方法を確立する予定です。
                      実際に除雪オペレータを観測した結果を解析することで、習熟度と関連のある操縦動作 (ハンドルやレバー操作の滑らかさ、同時操作の滑らかさ) を特定し、
                      習熟度を定量化するための計測データ解析手法を検討します。
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>


<script>

export default {
  data() {
    return {
      tab: null,
    }
  },
  methods: {
    toKDDI() {
      window.open("https://news.kddi.com/kddi/corporate/newsrelease/2019/01/17/3561.html", "_blank");
    }
  }
}
</script>


<style scoped>
.tab {
  height: 50px;
  font-size: 1.1rem;
}
.title-text {
  margin: 16px;
  color: #2c3e50;
  font-weight: bold;
  word-break: keep-all;
}
.content-text {
  color: #5d6972;
  margin-bottom: 24px;
  text-align: start;
  word-break: keep-all;
}

.slide {
  border:1px solid #CCC;
  border-width:1px;
  margin-bottom:5px;
  max-width: 100%;
}

.button {
  margin-bottom: 16px;
}

</style>