<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <h1>私について</h1>
      </v-col>
      <v-col cols="10">
        <v-card class="mx-auto">
          <br>

          <v-row justify="center">
            <v-col cols="3">
              <br>
              <v-row><v-img src="http://sugimoto-kenya.floppy.jp/images/face.jpg" /></v-row>
              <v-row justify="center"><v-col><v-img src="http://sugimoto-kenya.floppy.jp/images/ritsumeikan.jpg" /></v-col></v-row>
              <br>
              <v-row justify="center">
                <v-col cols="6"><v-btn color="orange" text href="https://github.com/KenyaSugimoto" target="_blank"><v-icon>mdi-github</v-icon>GitHub<v-icon small>mdi-checkbox-multiple-blank-outline</v-icon></v-btn></v-col>
              </v-row>
            </v-col>
            <v-col cols="8">
              <v-card-text class="text--primary">
                <v-row>
                  <v-col cols="12"><h1>杉本 健也</h1></v-col>
                  <v-col cols="12"><h3>Sugimoto Kenya</h3></v-col>
                </v-row>
                <div>
                  <v-row class="index" justify="center"><v-col cols="11"><h2>所属</h2></v-col></v-row>
                  <v-row class="detail" justify="center">
                    <v-col cols="10"><h3>・立命館大学大学院 情報理工学研究科 情報理工学専攻 計算機科学コース 1年</h3></v-col>
                    <v-col cols="10">
                      <h3>・情報ネットワーキング研究室 所属</h3>
                      <v-btn @click="toLabPage" text color="#1a0dab">
                        <h4>研究室のホームページ</h4>
                        <v-icon small>mdi-checkbox-multiple-blank-outline</v-icon>
                      </v-btn>
                    </v-col>

                  </v-row>
                </div>
                <div>
                  <v-row class="index" justify="center"><v-col cols="11"><h2>出身</h2></v-col></v-row>
                  <v-row class="detail" justify="center">
                    <v-col cols="10"><h3>・大分県別府市出身 ♨︎</h3></v-col>
                  </v-row>
                </div>
                <div>
                  <v-row class="index" justify="center"><v-col cols="11"><h2>趣味</h2></v-col></v-row>
                  <v-row class="detail" justify="end">
                    <v-col cols="11"><h3>・プログラミング ・野球 ・謎解き ・マラソン</h3></v-col>
                  </v-row>
                </div>
                <div>
                  <v-row class="index" justify="center"><v-col cols="11"><h2>資格</h2></v-col></v-row>
                  <v-row class="detail" justify="end">
                    <v-col cols="11"><h3>・基本情報技術者試験 合格 （2018年5月）・応用情報技術者試験 合格 （2018年12月）</h3></v-col>
                    <v-col cols="11"><h3></h3></v-col>
                  </v-row>
                </div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kenyaSugimoto&layout=compact" />
      </v-col>
      <v-col cols="5" align-self="center">
        <v-img src="https://grass-graph.moshimo.works/images/KenyaSugimoto.png" />
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
export default {
  methods: {
    toLabPage() {
      window.open("http://www.infonet-labo.org/", "_blank");
    }
  }
}
</script>

<style scoped>
.index {
  text-align: left;
}
.detail {
  text-align: left;
}
</style>

