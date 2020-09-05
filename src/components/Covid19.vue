<template>
  <div>
    <v-container>
      <v-row><v-col><h2>感染者数</h2></v-col></v-row>

      <template v-if="displayFlag">
        <v-select :items="continents" label="continents" v-model="selectedContinent" />

        <v-data-table
          :headers="headers"
          :items="targetCountries"
          :items-per-page="15"
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
      selectedContinent: null,
    }
  },
  computed: {
    targetCountries() {
      return this.$store.getters.targetCountriesInfo;
    },
    allCountries() {
      return this.$store.getters.allCountriesInfo;
    },
    originalInfo() {
      return this.$store.getters.originalInfo;
    },
    continents() {
      return this.$store.getters.continents;
    },

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
      const original = res.data.response;
      const temp = original.map(country => {
        let tempObj = {};
        tempObj["name"] = country.country;
        tempObj["population"] = country.population;
        tempObj["total"] = country.population;
        tempObj["recovered"] = country.cases.recovered;
        tempObj["deaths"] = country.deaths.total;
        return tempObj;
      });
      this.$store.commit("updateOriginalInfo", original);
      this.$store.commit("updateAllCountriesInfo", temp);
      this.$store.commit("updateTargetCountriesInfo", temp);
      this.displayFlag = true;

      // continentsの重複排除した一覧を作成
      const continentsTemp = original.reduce((prev, country) => (prev.indexOf(country.continent)===-1 ? [...prev, country.continent]: prev), []);
      const continents = continentsTemp.filter(item => item !== null);  // nullの削除
      this.$store.commit("updateContinents", continents);

    });
  },
  methods: {
    group(selectedContinent) {
      const tempList = this.originalInfo;
      const temp = tempList.filter(contry => {
        return contry.continent === selectedContinent;
      });
      const asia = temp.map(country => {
        let tempObj = {};
        tempObj["name"] = country.country;
        tempObj["population"] = country.population;
        tempObj["total"] = country.population;
        tempObj["recovered"] = country.cases.recovered;
        tempObj["deaths"] = country.deaths.total;
        return tempObj;
      });
      this.$store.commit("updateTargetCountriesInfo", asia);
    },
  },
  watch: {
    selectedContinent: function() {
      this.group(this.selectedContinent);
    }
  },
}
</script>


