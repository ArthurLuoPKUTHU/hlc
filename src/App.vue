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
    <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p
        class="lead"
      >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
    <div class="container fluid">
      <div class="row">
        <div class="col">
          <h3>Utilities & Chats</h3>

          <clock color="RGB(120,193,173)" />

          <p></p>

          <vue-cal
            xsmall
            :time-from="10 * 60"
            :time-step="2 * 60"
            :disable-views="['day']"
            default-view="month"
            events-count-on-year-view
            :events="events"
          >
            <template v-slot:events-count="{ events, view }">
              <span v-if="customEventsCount(events)">{{ customEventsCount(events) }}</span>
            </template>
          </vue-cal>
        </div>
        <div class="col">
          <h3>FX PX & News</h3>

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
          <div class="row">
            <div class="col">
              <h2>Emphasis classes</h2>
              <p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
              <p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p class="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
              <p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
              <p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p
                class="text-success"
              >Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
              <p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <h3>
            Todos
            <span class="badge badge-primary">9</span> & Contacts
          </h3>
          <div class="row">
            <div class="col">
              <div class="form-group has-success">
                <label class="form-control-label" for="inputSuccess1">Valid input</label>
                <input
                  type="text"
                  value="correct value"
                  class="form-control is-valid"
                  id="inputValid"
                />
                <div class="valid-feedback">Success! You've done it.</div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="alert alert-dismissible alert-primary col-9">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              Sample Alert Demo
            </div>
            <div class="alert alert-dismissible alert-primary col-9">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              Sample Alert Demo
            </div>
            <div class="alert alert-dismissible alert-primary col-9">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              Sample Alert Demo
            </div>
            <div class="alert alert-dismissible alert-primary col-9">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              Sample Alert Demo
            </div>
            <div class="alert alert-dismissible alert-primary col-9">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              Sample Alert Demo
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group has-danger">
                <label class="form-control-label" for="inputDanger1">Invalid input</label>
                <input
                  type="text"
                  value="wrong value"
                  class="form-control is-invalid"
                  id="inputInvalid"
                />
                <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Clock from "vue-clock2";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  components: {
    Clock,
    VueCal
  }
};
</script>

<style>
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
