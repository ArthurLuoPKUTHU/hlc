<template>
  <div id="app">
    <nav class="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
      <a
        class="navbar-brand col-sm-3 col-md-2 mr-0"
        href="/"
      >汇率处 - {{this.$store.state.client.personnel}}</a>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="通讯录快速查询"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="/">返回主站</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link class="nav-link" to="/home">
                  <i class="el-icon-menu"></i>
                  综述
                </router-link>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#" @click.prevent="navcol.col1 = !navcol.col1">
                  <i class="el-icon-s-custom"></i>通讯录
                </a>
                <transition name="bounce">
                  <ul class="subul" v-if="navcol.col1">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/contact">
                        <i class="el-icon-upload2"></i>总行
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/contactqh">
                        <i class="el-icon-download"></i>全行
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/emaillist">
                        <i class="el-icon-s-promotion"></i>邮件收件人
                      </router-link>
                    </li>
                  </ul>
                </transition>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/todo">
                  <i class="el-icon-notebook-1"></i>待办事项
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/surround">
                  <i class="el-icon-s-comment"></i>环顾四周
                </router-link>
              </li>
            </ul>
            <h6
              class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
            >
              <span>Sales
              </span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <router-link class="nav-link" to="/trade">
                  <i class="el-icon-document-copy"></i>
                  交易簿记
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/quote">
                  <i class="el-icon-notebook-1"></i>客户报价
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">
                  <i class="el-icon-pie-chart"></i>
                  经营数据
                </router-link>
              </li>
            </ul>
            <h6
              class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
            >
              <span>---</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </a>
              </li>
              <li class="nav-item" @click.prevent="navcol.col1 = !navcol.col1">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </a>
                <transition name="sub1">
                  <ul class="subul" v-if="navcol.col1">
                    <li class="nav-item">1</li>
                    <li class="nav-item">2</li>
                    <li class="nav-item">3</li>
                  </ul>
                </transition>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-10 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
// import { Promise } from 'q'
import 'animate.css'
export default {
  data () {
    return {
      navcol: {
        col1: false
      }
    }
  },
  components: {},
  mounted () {
    this.$store.dispatch('getPersonnel')

    this.$notify.success({
      title: 'Welcome',
      message: '欢迎光临' + this.$store.state.client.personnel,
      showClose: false
    })
  }
}
</script>

<style scoped>
nav li a:hover,
.router-link-active,
.router-link-exact-active {
  background-color: lightseagreen;
  cursor: pointer;
  color: white;
}
body {
  font-size: 14px;
}
ul.subul {
  padding: 0 0 0 15px;
}
ul.subul li {
  list-style-type: none;
}
.sub1-enter-active,
.sub1-leave-active {
  transition: opacity 0.5s;
}
.sub1-enter,
.sub1-leave-to {
  opacity: 0;
}


.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
