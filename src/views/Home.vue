<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-3">汇率处协作平台</h1>
      <p class="lead">为暂时解决Y盘不能使用带来的影响，制作本平台</p>
      <hr class="my-4" />
      <p>Sales SubDiv, RMB/FX Trading Div, ICBC Global Market Dept.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="/about" role="button">Learn more</a>
      </p>

    </div>

    <DraggableCal :past-is-disabled="false" accent-color="darkgreen"></DraggableCal>

    <!-- <pastenabledyears
          :prepended-years="3"
          :years="5"
          :past-is-disabled="false"
          accent-color="darkgreen"
    ></pastenabledyears>-->
    <b-container fluid>
      <b-row>
        <b-col cols="5">
          <div class="row">
            <h3>当前汇率</h3>
          </div>
          <div class="row">
            <div class="col-5">
              <div class="card text-white bg-secondary mb-3 text-right" style="max-width: 20rem;">
                <div class="card-header">BID</div>
                <div class="card-body">
                  <h4 class="card-title">00</h4>
                  <p class="card-text">6.00</p>
                </div>
              </div>
            </div>
            <div class="col-5">
              <div class="card text-white bg-success mb-3" style="max-width: 20rem;">
                <div class="card-header">ASK</div>
                <div class="card-body">
                  <h4 class="card-title">00</h4>
                  <p class="card-text">7.00</p>
                </div>
              </div>
            </div>
          </div>
          <b-row>
            <h3>当前时间</h3>
          </b-row>
          <b-row>
            <b-col>
              <clock color="RGB(120,193,173)" />
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="7">
          <b-row>
            <h3>待办事项</h3>
          </b-row>
          <div class="row justify-content-left">
            <div class="alert alert-primary col-8">
              您有
              <span class="badge badge-danger">9</span>条待办事项
            </div>
            <div class="alert alert-primary col-8">
              您有
              <span class="badge badge-danger">9</span>条新消息
            </div>
            <div class="alert alert-primary col-8">今日食堂菜单已经更新</div>
          </div>
          <b-row>
            <h3>新闻</h3>
          </b-row>
          <div class="row justify-content-left">
            <div class="alert alert-primary col-8">
              <div class="button">特朗普已获得连任...</div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Clock from 'vue-clock2'
import DraggableCal from 'vue-draggable-cal'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    Clock,
    DraggableCal
  }
  // computed: {
  //   fx () {
  //     return this.$store.state.fx_px_usd
  //   }
  // },
  // methods: {
  //   getFX () {
  //     this.$store.dispatch('getFX')
  //   }
  // }
}
</script>
<style scoped>
.test-clock-container {
  font: normal 12px "Helvetica Neue", Helvetica, sans-serif;
  user-select: none;
  text-shadow: 0 1px 0 rgba(120, 193, 173, 0.3);
  background: #78c2ad;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vuecal__menu,
.vuecal__cell-events-count {
  background-color: #42b983;
}
.vuecal__menu button {
  border-bottom-color: #fff;
  color: #fff;
}
.vuecal__menu button.active {
  background-color: rgba(255, 255, 255, 0.15);
}
.vuecal__title-bar {
  background-color: #e4f5ef;
}
.vuecal__cell.today,
.vuecal__cell.current {
  background-color: rgba(240, 240, 255, 0.4);
}
.vuecal:not(.vuecal--day-view) .vuecal__cell.selected {
  background-color: rgba(235, 255, 245, 0.4);
}
.vuecal__cell.selected:before {
  border-color: rgba(66, 185, 131, 0.5);
}
</style>
