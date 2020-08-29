<template>
  <div>
    <v-container>
      <v-row><v-col><h2>私の研究について</h2></v-col></v-row>

      <v-row justify="center">
        <v-col cols="6">
          <v-tabs v-model="tab">
            <v-row>
              <v-col><v-tab>学部3年</v-tab></v-col>
              <v-col><v-tab>卒業研究</v-tab></v-col>
              <v-col><v-tab>修士研究</v-tab></v-col>

            </v-row>
          </v-tabs>
        </v-col>
      </v-row>

      <div v-if="tab == 0">
        <h3>除雪車運行支援タブレットシステム</h3>
      </div>
      <div v-if="tab == 1">
        <h3>除雪車運行支援のための除雪オペレータ行動観測システムの研究開発</h3>
      </div>
      <div v-if="tab == 2">
        <h3>修士研究</h3>
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