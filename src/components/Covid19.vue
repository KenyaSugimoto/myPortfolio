<template>
  <div>
    <v-container>
      <v-row><v-col><h2>感染者数</h2></v-col></v-row>

      <v-row><v-col><v-btn @click="search">全件取得</v-btn></v-col></v-row>

      <v-row><v-col><v-btn @click="group">グループ分け</v-btn></v-col></v-row>

      <template v-if="displayFlag">
        <v-data-table
          :headers="headers"
          :items="allCountries"
          :items-per-page="10"
          class="elevation-1"
        ></v-data-table>
      </template>
      <template v-else>
        <v-progress-circular
          :size="70"
          :width="7"
          color="green"
          indeterminate
        />
        <br><br>
        <h3>データ取得中...</h3>

      </template>


    </v-container>

  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      statisticsUrl: "https://covid-193.p.rapidapi.com/statistics",
      countryUrl: "https://covid-193.p.rapidapi.com/countries?search=Japan",
      historyUrl: "https://covid-193.p.rapidapi.com/history?country=Japan",
      displayFlag: false,
      headers: [
        { text: 'Country Name', align: 'start', value: 'name',},
        { text: 'Population', value: 'population' },
        { text: 'Total', value: 'total' },
        { text: 'Recovered', value: 'recovered' },
        { text: 'Deaths', value: 'deaths' },
      ],
    }
  },
  computed: {
    allCountries() {
      return this.$store.getters.allCountriesInfo;
    }
  },
  created() {
    axios.get(
      this.statisticsUrl,
      {headers:
        {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": "f258e90688mshced038fc9d4f116p131982jsn709df2286ff1"
        }
      }
    ).then(res => {
      const temp = res.data.response.map(country => {
        let tempObj = {};
        tempObj["name"] = country.country;
        tempObj["population"] = country.population;
        tempObj["total"] = country.population;
        tempObj["recovered"] = country.cases.recovered;
        tempObj["deaths"] = country.deaths.total;
        return tempObj;
      });
      this.$store.commit("updateAllCountriesInfo", temp);
      this.displayFlag = true;
    });
  },
  methods: {
    search() {
      // axios.get(
      //   this.statisticsUrl,
      //   {headers:
      //     {
      //       "x-rapidapi-host": "covid-193.p.rapidapi.com",
      //       "x-rapidapi-key": "f258e90688mshced038fc9d4f116p131982jsn709df2286ff1"
      //     }
      //   }
      // ).then(res => {
      //   const temp = res.data.response.map(country => {
      //     let tempObj = {};
      //     tempObj["name"] = country.country;
      //     tempObj["population"] = country.population;
      //     tempObj["total"] = country.population;
      //     tempObj["recovered"] = country.cases.recovered;
      //     tempObj["deaths"] = country.deaths.total;
      //     return tempObj;
      //   });
      //   this.$store.commit("updateAllCountriesInfo", temp);
      //   this.displayFlag = true;
      // });
    },
    group() {
      const tempList = this.allCountries;
      const asia = tempList.filter(contry => {
        return contry.continent === "Asia";
      });
      this.$store.commit("updateAsiaCountriesInfo", asia);
    },
  }
}
</script>


