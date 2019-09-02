<template>
  <div id="app">
    <nav class="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">人民币汇率交易处</a>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="通讯录快速查询"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">返回主站</a>
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
                <router-link class="nav-link" to="/contact">
                  <i class="el-icon-s-custom"></i>通讯录
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/trade">
                  <i class="el-icon-document-copy"></i>
                  交易簿记
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">
                  <i class="el-icon-pie-chart"></i>
                  经营数据
                </router-link>
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
              <span>Saved reports</span>
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
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </a>
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
export default {
  components: {}
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
</style>
