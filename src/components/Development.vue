<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12"><h1>開発経験</h1></v-col>

      <!-- Rits知恵袋 -->
      <v-col cols="8" lg="6">
        <v-card
          class="mx-auto"
          :max-width="cardMaxWidth"
          :height="cardHeight"
        >
          <!-- カルーセル（画像） -->
          <v-carousel
            hide-delimiters
          >
            <v-carousel-item
              v-for="(item,i) in chiebukuroItems"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>

          <!-- 説明欄 -->
          <h2 class="title-text">Rits知恵袋</h2>
          <v-row justify="center">
            <v-col cols="10">
              <h3 class="headline-text">プロダクト概要・開発背景</h3>
              <h4 class="content-text">
                新型コロナウイルスの影響により授業がオンラインになり、学生間の交流の機会が減少しています。
                私の妹も今年大学1年生で、友達を作る機会が少なく、相談できる大学の先輩がいないという悩みを抱えています。
                また新入生以外の学生も研究室を選択する際に、例年実施されていた研究室見学が実施できない関係で、各研究室の先輩たちに質問や相談ができず選択に悩む学生も存在します。
                そのため、上記のような学生が気軽に学生間で質問や相談ができる掲示板アプリを開発しました。
              </h4>
            </v-col>
            <v-col cols="10">
              <h3 class="headline-text">開発について</h3>
              <h4 class="content-text">
                使用技術：Vue.js, Firebase (Auth, Cloud Firestore) <br>
                開発期間：約3週間 <br>
                開発形態：チーム開発（3名）, オンライン<br>
              </h4>
            </v-col>

            <v-col cols="10">
              <h3 class="headline-text">感想</h3>
              <h4 class="content-text">
                Webアプリケーション開発に関しては今回が初経験だったため、Vue.jsを勉強をしながら開発を行いました。
                1日平均12時間程度開発をする日々が3週間続きましたが、全然苦にはならず、できることが増えていく感覚がとても楽しかったです。
                「誰かのために開発すること」と「できなかったことができるようになること」が開発のモチベーションになりました。
              </h4>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- PROG.CAFE -->
      <v-col cols="8" lg="6">
        <v-card
          class="mx-auto"
          :max-width="cardMaxWidth"
          :height="cardHeight"
        >
          <!-- カルーセル（画像） -->
          <v-carousel
            hide-delimiters
          >
            <v-carousel-item
              v-for="(item,i) in progcafeItems"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>

          <!-- 説明欄 -->
          <h2 class="title-text">PROG.CAFE</h2>
          <v-row justify="center" align-content="center">
            <v-col cols="10">
              <h3 class="headline-text">プロダクト概要・開発背景</h3>
              <h4 class="content-text">
                私のチームはCovid19の影響で自宅でしか作業ができない人が増加する中で、モチベーションが保てない人が多数存在している点に着目しました。
                そこで、「カフェやコワーキングスペースのように作業ができるスペースをオンライン上に作り、モチベーションを維持する仕組みを作る」といったテーマで開発を行いました。
              </h4>
            </v-col>

            <v-col cols="10">
              <h3 class="headline-text">開発について</h3>
              <h4 class="content-text">
                使用技術：Vue.js, TypeScript, Firebase (Auth, Cloud Firestore) <br>
                開発期間：約4日間 （インターンシップ期間は8日間）<br>
                開発形式：チーム開発（6名）, オンライン（楽天 夏インターンのハッカソン）<br>
              </h4>
            </v-col>

            <v-col cols="10">
              <h3 class="headline-text">感想</h3>
              <h4 class="content-text">
                開発期間が短かったこともあり、開発効率が重要だと考えました。
                そのため一定時間進まなかった場合、「恥を捨てて詳しい人に相談する」ことを徹底しました。
                結果として開発効率が上がり、目標としていた機能を全て実装することができました。 <br>
                「他のチームに負けたくない→勝つためには開発効率が重要→開発効率を上げるために恥を捨てる」
                のように行動できたので、自分の負けず嫌いな部分が出せたかなと思いました。
              </h4>
              <v-btn
                text
                class="button"
                @click="toProgCafe"
              >
                <v-img
                  src="@/assets/title_progcafe.svg"
                  width="150"
                />へ
              </v-btn>
            </v-col>
          </v-row>

        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      chiebukuroItems: [
        {src: require("@/assets/chiebukuroLogo.png")},
        {src: require("@/assets/chiebukuro.png")}
      ],
      progcafeItems: [
        {src: require("@/assets/progcafe.png")},
        {src: require("@/assets/room.jpg")},
        {src: require("@/assets/devenv.png")}
      ],
      cardHeight: 1200,
      cardMaxWidth: 800,
    }
  },
  methods: {
    toProgCafe() {
      window.open("https://prog-cafe.web.app/", "_blank");
    }
  }
}
</script>

<style scoped>
.title-text {
  margin: 16px;
  color: #2c3e50;
  font-weight: bold;
}
.headline-text {
  margin-bottom: 8px;
  text-align: start;
}
.content-text {
  color: #5d6972;
  margin-bottom: 24px;
  text-align: start;
  word-break: keep-all;
}

.button {
  margin-bottom: 16px;
}
</style>