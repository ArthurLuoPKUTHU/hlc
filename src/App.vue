<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Contact Search" />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <p></p>
    <div class="container fluid">
      <div class="row">
        <div class="col">
          <h3>Utilities & Chats</h3>
          <flip-clock />
          <clock :time="time" />
        </div>
        <div class="col">
          <h3>FX PX & News</h3>
        </div>
        <div class="col">
          <h3>Todos & Contacts</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Clock from 'vue-clock2'
import FlipClock from 'kuan-vue-flip-clock'
export default {
  components: {
    Clock,
    FlipClock
  }
}
</script>

<style
.test-clock-container {
  font: normal 12px "Helvetica Neue", Helvetica, sans-serif;
  user-select: none;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  background: radial-gradient(ellipse at center, #969696 0%, #595959 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
