<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="error" top>
      {{text}}
    </v-snackbar>
    <v-container>
      <v-row><v-col><h2>お問い合わせフォーム</h2></v-col></v-row>
      <v-form ref="form">
        <v-row justify="center">
          <v-col cols="5"><v-text-field  label="タイトル" v-model="text1" :rules="titleRules" /></v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="5"><v-text-field label="氏名" v-model="text2" :rules="nameRules" /></v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="5"><v-text-field label="メールアドレス" v-model="text3" :rules="emailRules" /></v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="5"><v-textarea  label="お問い合わせ内容" v-model="text4" :rules="contentRules" /></v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-dialog v-model="dialog" persistent max-width="30%">
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
      </v-form>

    </v-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      sendText: "お問い合わせ内容を送信しました！",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      titleRules: [
        v => !!v || 'タイトルを入力してください',
        v => v.length <= 5 || '5文字以上でタイトルを入力してください',
      ],
      nameRules: [
        v => !!v || '氏名を入力してください',
      ],
      emailRules: [
        v => !!v || 'メールアドレスを入力してください',
        v => /.+@.+\..+/.test(v)|| 'メールアドレスを入力してください',
      ],
      contentRules: [
        v => !!v || 'お問い合わせ内容を入力してください',
      ],
      snackbar: false,
      text: '入力内容に不備があります',
      timeout: 2000,
    }
  },
  methods: {
    sendComplete() {
      if (this.$refs.form.validate()) {
        this.dialog = false;
        this.$router.push("/sendComplete");
      } else {
        this.snackbar = true;
      }
    },
    validateField () {
      this.$refs.form.validate()
    },
  },

  watch: {
    text1: 'validateField',
    text2: 'validateField',
    text3: 'validateField',
    text4: 'validateField',
  },
}
</script>

