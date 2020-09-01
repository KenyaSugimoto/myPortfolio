<template>
  <div>
    <v-container>
      <v-row><v-col><h2>お問い合わせフォーム</h2></v-col></v-row>
      <v-row justify="center">
        <v-col cols="5"><v-text-field label="タイトル" /></v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="5"><v-text-field label="氏名" /></v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="5"><v-text-field label="メールアドレス" /></v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="5"><v-textarea  label="お問い合わせ内容" /></v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn large v-bind="attrs" v-on="on">送信</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">送信確認</v-card-title>
              <v-card-text>お問い合わせ内容を送信しますか？</v-card-text>
              <v-card-actions>
                <v-row justify="center">
                  <v-col cols="5"><v-btn @click="dialog = false">キャンセル</v-btn></v-col>
                  <v-col cols="5"><v-btn @click="sendComplete">送信</v-btn></v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      sendText: "お問い合わせ内容を送信しました！"
    }
  },
  methods: {
    sendComplete() {
      this.dialog = false;
      this.$router.push("/sendComplete");
    }
  }
}
</script>

