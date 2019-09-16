<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h3>代客台台帐</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-1">
        <b-form-group label="选择">
          <b-form-radio-group
            id="btn-radios-2"
            v-model="ipt"
            :options="options"
            buttons
            stacked
            button-variant="outline-primary"
            size
            name="radio-btn-outline"
          ></b-form-radio-group>
        </b-form-group>
      </div>
      <div class="col-10 border border-primary rounded">
        <form action="#" method="post" class="form-group" v-on:submit.prevent="postTrds">
          <div class="form-row">
            <div class="form-group col-md-2">
              <label for="dt">日期</label>
              <!-- <date-pick v-model="dt" :displayFormat="'M.D'"></date-pick> -->
              <!-- <b-form-input
                id="dt"
                name="dt"
                v-model.trim="dt"
                placeholder="YYYY-MM-DD"
                type="date"
                v-validate.initial="'required|date_format:yyyy-MM-dd'"
              ></b-form-input>-->
              <input
                type="text"
                v-validate.initial="'required|date_format:yyyy-MM-dd'"
                name="dt"
                v-model.trim="dt"
                class="form-control"
                id="dt"
                placeholder="YYYY-MM-DD"
              />
            </div>
            <div class="form-group col-md-2">
              <label for="dq">省份</label>
              <select
                v-validate.initial="'required'"
                name="dq"
                v-model.trim="dq"
                id="dq"
                class="form-control"
              >
                <option value="北京">北京</option>
                <option value="天津">天津</option>
                <option value="河北">河北</option>
                <option value="山西">山西</option>
                <option value="内蒙古">内蒙古</option>
                <option value></option>
                <option value="辽宁">辽宁</option>
                <option value="吉林">吉林</option>
                <option value="黑龙江">黑龙江</option>
                <option value></option>
                <div class="dropdown-divider"></div>
                <option value="上海">上海</option>
                <option value="江苏">江苏</option>
                <option value="浙江">浙江</option>
                <option value="安徽">安徽</option>
                <option value="福建">福建</option>
                <option value="江西">江西</option>
                <option value="山东">山东</option>
                <option value></option>
                <div class="dropdown-divider"></div>
                <option value="河南">河南</option>
                <option value="湖北">湖北</option>
                <option value="湖南">湖南</option>
                <option value="广东">广东</option>
                <option value="广西">广西</option>
                <option value="海南">海南</option>
                <option value></option>
                <div class="dropdown-divider"></div>
                <option value="重庆">重庆</option>
                <option value="四川">四川</option>
                <option value="贵州">贵州</option>
                <option value="云南">云南</option>
                <option value></option>
                <div class="dropdown-divider"></div>
                <option value="陕西">陕西</option>
                <option value="甘肃">甘肃</option>
                <option value="宁夏">宁夏</option>
                <option value="新疆">新疆</option>
                <option value></option>
                <div class="dropdown-divider"></div>
                <option value="大连">大连</option>
                <option value="青岛">青岛</option>
                <option value="宁波">宁波</option>
                <option value="厦门">厦门</option>
                <option value="深圳">深圳</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label for="kehu">客户</label>
              <input
                type="text"
                class="form-control"
                v-validate.initial="'required'"
                name="kehu"
                v-model.trim="kehu"
                id="kehu"
                placeholder="韶钢、宝钢、华富洋、TCL、海油气电、步步高、大众、BMWS"
              />
            </div>
            <div class="form-group col-md-2">
              <label for="jiaoyi">交易</label>
              <select
                v-model.trim="jiaoyi"
                v-validate.initial="'required'"
                name="jiaoyi"
                id="jiaoyi"
                class="form-control"
              >
                <option value="即期">即期</option>
                <option value="远期">远期</option>
                <option value="掉期">掉期</option>
                <option value="期权">期权</option>
                <option value="货掉">货掉</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="jieshou">结售</label>
              <select
                v-model.trim="jieshou"
                v-validate.initial="'required'"
                name="jieshou"
                id="jieshou"
                class="form-control"
              >
                <option value="结汇">结汇</option>
                <option value="购汇">购汇</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="wh">外汇</label>
              <select
                v-model.trim="wh"
                v-validate.initial="'required'"
                name="wh"
                id="wh"
                class="form-control"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CHF">CHF</option>
                <option value="SGD">SGD</option>
                <option value="JPY">JPY</option>
                <option value="CAD">CAD</option>
                <option value="AUD">AUD</option>
                <option value="RUB">RUB</option>
                <option value="HKD">HKD</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="vol">金额</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="vol"
                v-validate.initial="'required'"
                name="vol"
                id="vol"
              />
            </div>
            <div class="form-group col-md-2" v-if="ipt==='tz1'">
              <label for="hq">总行价</label>
              <input type="text" class="form-control" v-model.trim="hq" name="hq" id="hq" />
            </div>
            <div class="form-group col-md-2" v-if="ipt==='tz1'">
              <label for="bra">客户价</label>
              <input type="text" class="form-control" v-model.trim="bra" name="bra" id="bra" />
            </div>
            <div class="form-group col-md-2" v-if="ipt==='tz1'">
              <label for="ty">同业价</label>
              <input type="text" class="form-control" v-model.trim="ty" name="ty" id="ty" />
            </div>

            <div class="form-group col-md-2" v-if="ipt==='tz2'">
              <label for="jq">即期</label>
              <input type="text" class="form-control" v-model.trim="jq" name="jq" id="jq" />
            </div>
            <div class="form-group col-md-2" v-if="ipt==='tz2'">
              <label for="re">准备</label>
              <input type="text" class="form-control" v-model.trim="re" name="re" id="re" />
            </div>

            <div class="form-g">
              <label for="v">提交</label>
              <br />
              <b-button type="submit" pill variant="primary" id="bt">Submit</b-button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <hr />
    <!-- <b-row>
    <b-col>-->
    <!-- <table class="table table-hover table-sm" v-if="t1">
          <thead>
            <tr>
              <th>号</th>
              <th>员</th>
              <th>日</th>
              <th>省</th>
              <th>客</th>
              <th>交易</th>
              <th>结售</th>
              <th>币种</th>
              <th>金额</th>
              <th>总分</th>
              <th>分客</th>
              <th>同业</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in t1" v-bind:key="i.id">
              <td>{{ i.id }}</td>
              <td>{{ i.psn }}</td>
              <td>{{ i.dt }}</td>
              <td>{{ i.dq }}</td>
              <td>{{ i.kehu }}</td>
              <td>{{ i.jiaoyi }}</td>
              <td>{{ i.jieshou }}</td>
              <td>{{ i.wh }}</td>
              <td>{{ i.vol }}</td>
              <td>{{ i.hq }}</td>
              <td>{{ i.bra }}</td>
              <td>{{ i.ty }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>号</th>
              <th>员</th>
              <th>日</th>
              <th>省</th>
              <th>客</th>
              <th>交易</th>
              <th>结售</th>
              <th>币种</th>
              <th>金额</th>
              <th>总分</th>
              <th>分客</th>
              <th>同业</th>
            </tr>
          </tfoot>
        </table>
    <div v-else>Sorry, couldn't pull requests from the server PC</div>-->
    <!-- </b-col>
    </b-row>-->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class>
          <span>请在此输入条件以搜索：</span>
        </div>
      </el-col>
      <el-col :span="10" :offset="0">
        <div class="grid-content bg-purple">
          <el-input v-model="search" size="mini" placeholder="表格中大部分内容均可搜索..." />
        </div>
      </el-col>
      <el-col :span="3">
        <el-link @click="showAll()" type="primary">显示全部项目</el-link>
      </el-col>
    </el-row>

    <el-row v-if="ipt==='tz1'">
      <el-col>
        <el-table
          :data="tz1.filter(data => !search || data.psn.indexOf(search)!==-1 || data.kehu.indexOf(search)!==-1 || data.dq.indexOf(search)!==-1 || data.dt.indexOf(search)!==-1)"
          style="width: 100%"
          height="350"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="总分">
                  <span>{{ props.row.hq }}</span>
                </el-form-item>
                <el-form-item label="分客">
                  <span>{{ props.row.bra }}</span>
                </el-form-item>
                <el-form-item label="同业">
                  <span>{{ props.row.ty }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>

          <el-table-column sortable label="号" prop="id" width="80"></el-table-column>
          <el-table-column sortable label="员" prop="psn" width="80"></el-table-column>
          <el-table-column sortable label="日" prop="dt" :formatter="dtformatter" width="80"></el-table-column>
          <el-table-column sortable label="省" prop="dq" width="80"></el-table-column>
          <el-table-column sortable label="客" prop="kehu"></el-table-column>
          <el-table-column sortable label="交" prop="jiaoyi" width="80"></el-table-column>
          <el-table-column sortable label="结" prop="jieshou" width="80"></el-table-column>
          <el-table-column sortable label="币" prop="wh" width="80"></el-table-column>
          <el-table-column sortable label="额" prop="vol" width="80"></el-table-column>
          <el-table-column sortable label="改" prop="vol" width="80">
            <template slot-scope="scope">
              <el-button
                v-if="auth(scope)"
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
          <!-- <el-table-column sortable label="总" prop="hq"></el-table-column>
      <el-table-column sortable label="分" prop="bra"></el-table-column>
          <el-table-column sortable label="同" prop="ty"></el-table-column>-->

          <!-- <el-table-column align="right">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
          </el-table-column>-->
        </el-table>
      </el-col>
    </el-row>

    <el-row v-if="ipt==='tz2'">
      <el-col>
        <el-table
          :data="tz2.filter(data => !search || data.psn.indexOf(search)!==-1 || data.kehu.indexOf(search)!==-1 || data.dq.indexOf(search)!==-1 || data.dt.indexOf(search)!==-1)"
          style="width: 100%"
          height="350"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="即期">
                  <span>{{ props.row.jq }}</span>
                </el-form-item>
                <el-form-item label="准备">
                  <span>{{ props.row.re }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>

          <el-table-column sortable label="号" prop="id" width="80"></el-table-column>
          <el-table-column sortable label="员" prop="psn" width="80"></el-table-column>
          <el-table-column sortable label="日" prop="dt" :formatter="dtformatter" width="80"></el-table-column>
          <el-table-column sortable label="省" prop="dq" width="80"></el-table-column>
          <el-table-column sortable label="客" prop="kehu"></el-table-column>
          <el-table-column sortable label="交" prop="jiaoyi" width="80"></el-table-column>
          <el-table-column sortable label="结" prop="jieshou" width="80"></el-table-column>
          <el-table-column sortable label="币" prop="wh" width="80"></el-table-column>
          <el-table-column sortable label="额" prop="vol" width="80"></el-table-column>
          <el-table-column sortable label="改" prop="vol" width="80">
            <template slot-scope="scope">
              <el-button
                v-if="auth(scope)"
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
          <!-- <el-table-column sortable label="总" prop="hq"></el-table-column>
      <el-table-column sortable label="分" prop="bra"></el-table-column>
          <el-table-column sortable label="同" prop="ty"></el-table-column>-->

          <!-- <el-table-column align="right">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
          </el-table-column>-->
        </el-table>
      </el-col>
    </el-row>
    <div id="mySidenav">
      <!-- <a id="blog">blog</a> -->
      <a id="about" v-if="errors.all()[0]">
        <small v-for="error in errors.all()" :key="error.id">
          {{error}}
          <br />
        </small>
      </a>
      <a id="blog" v-else>
        <small>You can submit now...</small>
      </a>
      <!-- <a id="contact">contact</a> -->
    </div>
    <!-- <div class="row">
      <b-alert
        show
        variant="info"
        dismissible
        v-for="error in errors.all()"
        :key="error.id"
      >{{ error }}</b-alert>
    </div>-->
  </div>
</template>

<script>
import Axios from 'axios'
// import DatePick from 'vue-date-pick'
// import 'vue-date-pick/dist/vueDatePick.css'
export default {
  name: 'trade',
  components: {
    // DatePick
  },
  data () {
    return {
      tz1: [],
      tz2: [],
      search: '',
      t1: '',
      t2: '',
      psn: '',
      dt: '',
      dq: '',
      kehu: '',
      jiaoyi: '',
      jieshou: '',
      wh: '',
      vol: '',
      hq: '',
      bra: '',
      ty: '',
      jq: '',
      re: '',
      ipt: 'tz1',
      options: [{ text: '流标', value: 'tz1' }, { text: '优惠', value: 'tz2' }]
    }
  },
  mounted () {
    this.getTrds()
    this.dt = this.$store.getters.today_date
  },
  computed: {
    postTrdsPayload () {
      return {
        psn: this.psn,
        dt: this.dt,
        dq: this.dq,
        kehu: this.kehu,
        jiaoyi: this.jiaoyi,
        jieshou: this.jieshou,
        wh: this.wh,
        vol: this.vol,
        hq: this.hq,
        bra: this.bra,
        ty: this.ty,
        jq: this.jq,
        re: this.re,
        ipt: this.ipt
      }
    }
  },
  methods: {
    getTrds () {
      Axios.get(
        'http://' + this.$store.getters.active_url + ':8000/API/hlc/sales/log/'
      ).then(response => {
        // console.log(response.data);
        // this.t1 = response.data;
        this.tz1 = response.data.tz1
        this.tz2 = response.data.tz2
      })
      this.successAlt('获取信息成功', '')
    },
    postTrds () {
      if (!this.errors.any()) {
        Axios.post(
          'http://' +
            this.$store.getters.active_url +
            ':8000/API/hlc/sales/log/',
          this.postTrdsPayload
        ).then(response => {
          if (response.status === 201) {
            this.successAlt('已为您新增交易', 'success')
          }
        })
        this.getTrds()
      } else {
        alert('请完整正确输入后再提交')
      }
    },
    dtformatter (row, column, cellValue, index) {
      return cellValue.slice(5, 10)
    },
    successAlt (msg, typ) {
      this.$message({
        message: msg,
        type: typ
      })
    },
    handleDelete (index, row) {
      Axios.delete(
        'http://' + this.$store.getters.active_url + ':8000/API/hlc/sales/log/',
        { data: { id: row.id, ipt: this.ipt } }
      )
        .then(response => {
          this.successAlt('已为您删除交易', 'success')
          this.getTrds()
        })
        .catch(function (error) {
          this.successAlt('无此条记录' + error, 'warning')
        })
    },
    auth (scope) {
      return scope.row.psn === this.$store.state.client.personnel
    },
    showAll () {
      Axios.get(
        'http://' + this.$store.getters.active_url + ':8000/API/hlc/sales/log/?limit=1000'
      ).then(response => {
        // console.log(response.data);
        // this.t1 = response.data;
        this.tz1 = response.data.tz1
        this.tz2 = response.data.tz2
      })
      this.successAlt('获取全部信息成功', '')
    }

    // getExamples() {
    //   Axios.get("https://jsonplaceholder.typicode.com/posts")
    //     // .then(response => console.log(response.data))
    //     .then(response => {
    //       this.t2 = response.data;
    //     });
    // }
  }
}
</script>

<style scoped>
#mySidenav a {
  position: absolute; /* Position them relative to the browser window */
  right: -150px; /* Position them outside of the screen */
  transition: 0.3s; /* Add transition on hover */
  padding: 15px; /* 15px padding */
  width: 300px; /* Set a specific width */
  text-decoration: none; /* Remove underline */
  font-size: 20px; /* Increase font size */
  color: white; /* White text color */
  border-radius: 5px 0 0 5px; /* Rounded corners on the top right and bottom right side */
}

#mySidenav a:hover {
  right: 0; /* On mouse-over, make the elements appear as they should */
}

/* The about link: 20px from the top with a green background */
#about {
  top: 100px;
  background-color: red;
}

#blog {
  top: 100px;
  background-color: #2196f3; /* Blue */
}

#projects {
  top: 240px;
  background-color: #f44336; /* Red */
}

#contact {
  top: 300px;
  background-color: #555; /* Light Black */
}
.el-link--inner{
  color:blue
}
</style>
