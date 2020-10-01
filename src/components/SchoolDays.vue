<template>
  <div>
    <v-container>
      <v-row><v-col><h2>学生時代本気で取り組んだこと</h2></v-col></v-row>

      <v-row justify="center">
        <!-- 野球 -->
        <v-col cols="8">
          <v-card
            class="mx-auto"
            max-width="800"
          >
            <v-img
              src="@/assets/baseball.jpg"
              max-height="450"
            ></v-img>
            <h2 class="title-text">野球</h2>
            <v-card-subtitle>
              <p>軟式野球サークルの関西選抜（約4000人中12人選出）の投手として選出</p>
              <p>軟式野球サークルの会長として、弱小チームから勝てるチームへ</p>
            </v-card-subtitle>
          </v-card>
        </v-col>

        <!-- 大学の授業 -->
        <v-col cols="8">
          <v-card
            class="mx-auto"
            max-width="800"
          >
            <v-img
              src="@/assets/onji.jpg"
              max-height="450"
            ></v-img>
            <h2 class="title-text">大学の授業</h2>
            <v-card-subtitle>
              <p>学部の成績優秀者に選出（成績上位2%以内）</p>
              <p>成績優秀者を一緒に目指した友達と2人で選出</p>
            </v-card-subtitle>
          </v-card>
        </v-col>

        <!-- 謎解き -->
        <v-col cols="8">
          <v-card
            class="mx-auto"
            max-width="800"
          >
            <v-img
              src="@/assets/hakase.jpg"
              max-height="450"
            ></v-img>
            <h2 class="title-text">謎解きイベント開催</h2>
            <v-card-subtitle>
              <p>京都のレンタルスペースや大学の学祭で開催</p>
              <p>3日間で合計300名動員・満足度95%を達成</p>
            </v-card-subtitle>
          </v-card>
        </v-col>

      </v-row>


    </v-container>
  </div>
</template>

<style scoped>
.title-text {
  margin-top: 16px;
  color: #2c3e50;
}
</style>
