<template>
  <div>
    <v-container>
      <v-row><v-col><h2>私の研究について</h2></v-col></v-row>

      <v-row justify="center">
        <v-col cols="6">
          <v-tabs v-model="tab">
            <v-row>
              <v-col><v-tab class="tab">学部3年</v-tab></v-col>
              <v-col><v-tab class="tab">卒業研究</v-tab></v-col>
              <v-col><v-tab class="tab">修士研究</v-tab></v-col>
            </v-row>
          </v-tabs>
        </v-col>
      </v-row>



      <div v-if="tab == 0">
        <v-row><v-col><h2>除雪車運行支援タブレットシステム</h2></v-col></v-row>

        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header><h2>総務省 紹介動画</h2></v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <v-card>
                    <iframe width="840" height="472.5" src="https://www.youtube-nocookie.com/embed/2CTZlxcGTTA?start=42" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3>総務省動画チャンネル（Youtube）より</h3>
                  </v-card>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header><h2>KDDI 紹介動画</h2></v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <v-card>
                    <iframe width="840" height="472.5" src="https://www.youtube-nocookie.com/embed/OCWVnn6x0b0?start=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3>KDDIofficial（Youtube）より</h3>
                  </v-card>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

      </div>


      <div v-if="tab == 1">
        <v-row><v-col><h2>除雪車運行支援のための除雪オペレータ行動観測システムの研究開発</h2></v-col></v-row>

        <v-row>
          <v-col>
            <v-card>
              <iframe src="//www.slideshare.net/slideshow/embed_code/key/3BdJ5C6RhO1zJc" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"></div>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card>
              <iframe src="https://drive.google.com/file/d/1UqlsYZOcpNniTMUyskKRrP_UFezloAAW/preview" width="600" height="800"></iframe>
            </v-card>
          </v-col>
        </v-row>
      </div>


      <div v-if="tab == 2">
        <v-row><v-col><h2>修士研究</h2></v-col></v-row>

      </div>
    </v-container>
  </div>
</template>


<script>

export default {
  data() {
    return {
      tab: null,
    }
  }
}
</script>


<style scoped>
.tab {
  height: 50px;
  font-size: 1.1rem;
}

</style>