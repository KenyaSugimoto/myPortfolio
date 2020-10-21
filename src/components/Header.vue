<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      width="20%"
    >
      <v-list nav>
        <v-list-item-group color="#cf7500">
          <v-list-item @click="toHome">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item>

          <v-list-item @click="toAboutMe">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>私について</v-list-item-title>
          </v-list-item>

          <v-list-item @click="toMyStudy">
            <v-list-item-icon>
              <v-icon>mdi-notebook</v-icon>
            </v-list-item-icon>
            <v-list-item-title>研究について</v-list-item-title>
          </v-list-item>

          <v-list-item @click="toDevs">
            <v-list-item-icon>
              <v-icon>mdi-tools</v-icon>
            </v-list-item-icon>
            <v-list-item-title>開発経験</v-list-item-title>
          </v-list-item>

          <v-list-item @click="toSchoolDays">
            <v-list-item-icon>
              <v-icon>mdi-school</v-icon>
            </v-list-item-icon>
            <v-list-item-title>本気で取り組んだこと</v-list-item-title>
          </v-list-item>

          <!-- <v-list-item @click="toContact">
            <v-list-item-icon>
              <v-icon>mdi-email-send</v-icon>
            </v-list-item-icon>
            <v-list-item-title>お問い合わせ</v-list-item-title>
          </v-list-item> -->

          <v-list-item @click="toCovid19">
            <v-list-item-icon>
              <v-icon>mdi-alert-rhombus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Covid19感染者 統計情報</v-list-item-title>
          </v-list-item>

          <hr>

          <v-list-item @click="toGithub">
            <v-list-item-icon>
              <v-icon>mdi-github</v-icon>
            </v-list-item-icon>
            <v-list-item-title>GitHub <v-icon small>mdi-checkbox-multiple-blank-outline</v-icon></v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <header>
      <v-app-bar
        app
        color="#91d18b"
        max-height="100"
      >

      <v-btn x-large text @click="drawer = true">
        <v-icon x-large>mdi-menu</v-icon>
      </v-btn>

      <div class="d-flex align-center logo">
        <v-img src="http://sugimoto-kenya.floppy.jp/images/KenyaSugimotoLogo.png" @click="toHome" />
      </div>
      </v-app-bar>
    </header>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
    }),
    methods: {
      toAboutMe() {
        this.$router.push("/mypage");
      },
      toHome() {
        this.$router.push("/");
      },
      toDevs() {
        this.$router.push("/devs");
      },
      toMyStudy() {
        this.$router.push("/mystudy");
      },
      toSchoolDays() {
        this.$router.push("/schoolDays");
      },
      toGithub() {
        window.open('https://github.com/KenyaSugimoto', '_blank');
      },
      toContact() {
        this.$router.push("/contact");
      },
      toCovid19() {
        this.$router.push("/covid19");
      },
    },
  }
</script>

<style scoped>

.logo :hover {
  cursor: pointer;
}
</style>

