<template>
  <section class="view view-notes">
    <div class="note-tips" v-if="filteredList.length === 0">
      <span class="iconfont icon-wuziliao">
        <i>没有相关文章</i>
      </span>
    </div>
    <template v-else class="notes-wrap">
      <div class="notes-list">
        <article v-for="{ title, sha, date } in filteredList" :key="sha" class="list-item">
          <div class="note-main">
            <router-link :to="'/post/' + sha" class="item-title">
              {{ title }}
            </router-link>
            <time pubdate="pubdate" :datetime="date | formatDate" :title="date | formatDate" class="item-date">{{ date | dtime }}</time>
          </div>
        </article>
      </div>
    </template>
  </section>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import API from 'config'
import conf from 'config/conf.json'
import { instance } from 'config/instanceShared'

export default {
  name: 'listView',
  data() {
    return {
      site: conf,
      loading: true,
      list: []
    }
  },
  components: {
  },
  computed: {
    filteredList() {
      let keyword = ''
      if (this.$route) {
        keyword = (this.$route.query.q || '').toLowerCase()
      }
      return this.list
        .filter(item => (item.title.toLowerCase().indexOf(keyword) > -1))
        .sort((itemA, itemB) => (new Date(itemB.date) - new Date(itemA.date)))
    }
  },
  created() {
    this.loadList()
    instance.$on('checkedTag', () => {
      API.getList().then((res) => {
        this.filterByList(res[0])
      })
    })
  },
  methods: {
    loadList() {
      window.document.title = conf.title
      API.getList().then((res) => {
        this.filterByList(res[0])
        this.loading = false
      })
      this.$parent.isDetail = false
    },
    filterByList(list) {
      let sessionList = list, filterItems, route = this.$route
      if (route.query && route.query.hasOwnProperty('tag')) {
        this.list = sessionList.filter(v => {
          return v.tag.toLowerCase().indexOf(route.query.tag.toLowerCase()) > -1
        })
      } else {
        this.list = filterItems = sessionList
      }
    }
  },
  $route(route) {
  }
}
</script>
<style lang="less">
@import '../assets/style/_vars.less';
.btn-material {
  display: none;
  position: fixed;
  right: 30px;
  bottom: 50px;
  background-color: #ff5722;
}

.icon-wuziliao{
  font-size: 50px;
  padding: 30px;
}

.icon-guanyu {
  color: white;
  font-size: 20px;
}

.note-tips {
  display: flex;
  justify-content: center;
  i {
    font-size: 15px;
  }
}

.view-notes {
  padding: 94px 0 0 0;
  .item-title {
    color: @title;
    font-weight: bold;
    transition: padding .2s ease-out;
    &:hover {
      padding-left: 10px;
    }
  }

  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin-right: 20px;
  }
  .item-date {
    color: @subTitle;
  }
  .list-item {
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: 1px dotted @border;
    padding: 15px 0;
  }
}
.notes-list {
  padding: 0 30px;
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .view-notes {
    position: absolute;
    top: 55px;
    width: 100%;
    padding: 40px 0 0 0;
    .list-item {
      font-size: 13px;
      padding: 10px 0;
      margin: 0;
    }
  }
  .notes-list {
    padding: 0 20px;
  }
  .btn-material {
    display: block;
  }
}
</style>