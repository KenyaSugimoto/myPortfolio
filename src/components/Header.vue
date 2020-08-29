<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="toHome">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="toAboutMe">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <header>
      <v-app-bar
        app
        color="#E3F2FD"
      >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <div class="d-flex align-center logo">
          <v-img src="../assets/myLogo.png" @click="toHome" />
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
      }
    },
  }
</script>

<style scoped>
.logo :hover {
  cursor: pointer;
}
</style>

