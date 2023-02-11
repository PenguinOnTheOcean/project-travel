<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of searchList"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      searchList: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.searchList.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (!this.keyword) {
        this.searchList = [];
        return;
      }

      this.timer = setTimeout(() => {
        const result = [];
        for (let key in this.cities) {
          this.cities[key].forEach(innerItem => {
            if (
              innerItem.spell.indexOf(this.keyword) > -1 ||
              innerItem.name.indexOf(this.keyword) > -1
            ) {
              result.push(innerItem);
            }
          });
        }
        this.searchList = result;
      }, 100);
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search, {
      mouseWheel: true,
      click: true,
      tap: true
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: lightgreen
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
