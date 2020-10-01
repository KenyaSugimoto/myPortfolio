<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12"><h2>開発経験</h2></v-col>

      <v-col cols="8">
        <v-card
          class="mx-auto"
          max-width="800"
        >
          <v-img
            src="@/assets/RitsChiebukuro.jpg"
            max-height="450"
          ></v-img>
          <h2 class="title-text">Rits知恵袋</h2>
          <v-row justify="center">
            <v-col cols="10">
              <h3 class="headline-text">プロダクト概要</h3>
              <h4 class="content-text">
                新型コロナウイルスの影響により授業がオンラインになり、学生間の交流の機会が減少しています。
                学生間で気軽に質問・相談ができる掲示板アプリを開発しました。
              </h4>
              <h3 class="headline-text">使用技術</h3>
              <h4 class="content-text">
                Vue.js, Firebase(Auth, Cloud Firestore)
              </h4>
            </v-col>

          </v-row>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>


<style scoped>
.title-text {
  margin: 16px;
  color: #2c3e50;
  font-weight: bold;
}
.headline-text {
  margin-bottom: 8px;
}
.content-text {
  color: #5d6972;
  margin-bottom: 24px;
}
</style>