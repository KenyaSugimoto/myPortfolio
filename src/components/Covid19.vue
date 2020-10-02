<template>
  <div>
    <v-container>
      <v-row><v-col><h2>今日までのコロナ感染者 統計情報</h2></v-col></v-row>
      <v-row justify="center">
        <v-col cols="12">
          <p>{{formatedToday}}現在</p>
          <br>
          <template v-if="displayFlag">
            <v-row justify="center">
              <!-- グラフ部分 -->
              <v-col cols="7">
                <v-data-table
                  :headers="headers"
                  :items="targetCountries"
                  :items-per-page="15"
                  class="elevation-1"
                ></v-data-table>
              </v-col>

              <!-- 絞り込み部分 -->
              <v-col cols="3">
                <v-card
                  color="#dddddd"
                  outlined
                >
                  <v-row justify="center">
                    <v-col cols="10">
                      <br><h3>絞り込み条件<hr></h3>
                    </v-col>
                    <v-col cols="10">
                      <v-select
                        :items="continents"
                        label="地域を選択"
                        v-model="selectedContinent"
                        color="green"
                        />
                    </v-col>
                    <v-col>
                      <v-btn @click="narrowDown">絞り込む</v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>

            <br><br><br>
          </template>

          <!-- ローディング画面 -->
          <template v-else>
            <br><br>
            <v-progress-circular
              :size="70"
              :width="7"
              color="green"
              indeterminate
            />
            <br><br>
            <h3>データ取得中...</h3>
          </template>
        </v-col>
      </v-row>


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
        { text: '国名', align: 'start', value: 'name',},
        { text: '人口', value: 'population' },
        { text: '新規感染者', value: 'new' },
        { text: '回復した人', value: 'recovered' },
        { text: '感染者合計', value: 'total' },
        { text: '死亡人数', value: 'deaths' },
      ],
      selectedContinent: null,
      today: new Date(),
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
    formatedToday() {
      return this.today.getFullYear() + "年" + ("00" + (this.today.getMonth() + 1)).slice(-2) + "月" + ("00" + (this.today.getDate())).slice(-2) + "日";
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
      const original = res.data.response;
      const temp = original.map(country => {
        let tempObj = {};
        tempObj["name"] = country.country;
        tempObj["population"] = country.population;
        tempObj["total"] = country.cases.total;
        tempObj["recovered"] = country.cases.recovered;
        tempObj["new"] = country.cases.new;
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
    // this.$store.dispatch("getCovidInfo", this.statisticsUrl).then(() => {
    //   this.displayFlag = true;
    // });

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
        tempObj["total"] = country.cases.total;
        tempObj["recovered"] = country.cases.recovered;
        tempObj["new"] = country.cases.new;
        tempObj["deaths"] = country.deaths.total;
        return tempObj;
      });
      this.$store.commit("updateTargetCountriesInfo", asia);
    },
    narrowDown() {
      this.group(this.selectedContinent);
    },
  },

}
</script>


