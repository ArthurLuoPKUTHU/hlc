<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24">
          <h3>录入交易</h3>
        </el-col>
      </el-row>

      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        :rules="rules"
        size="mini"
        label-width="5rem"
        ref="formInline"
      >
        <el-collapse v-model="activeNames">
          <el-collapse-item title="必输项目" name="1">
            <el-form-item>
              <el-switch
                v-model="formInline.trdtype"
                active-text="购汇"
                inactive-text="结汇"
                active-color="#e83e8c"
                inactive-color="#6CC3D5"
              ></el-switch>
            </el-form-item>

            <el-form-item label="量级" prop="vol">
              <el-input v-model="formInline.vol" class="smallinput"></el-input>
            </el-form-item>

            <el-form-item label="汇率" prop="fxpx">
              <el-input v-model="formInline.fxpx" class="smallinput"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('formInline')">立即创建</el-button>
              <el-button @click="resetForm('formInline')">重置</el-button>
            </el-form-item>
          </el-collapse-item>

          <el-collapse-item title="其他项目" name="2">
            <el-form-item label="货币" prop="wh">
              <el-select v-model="formInline.wh" placeholder="货币" filterable>
                <el-option value="USD">USD</el-option>
                <el-option value="EUR">EUR</el-option>
                <el-option value="GBP">GBP</el-option>
                <el-option value="CHF">CHF</el-option>
                <el-option value="SGD">SGD</el-option>
                <el-option value="JPY">JPY</el-option>
                <el-option value="CAD">CAD</el-option>
                <el-option value="AUD">AUD</el-option>
                <el-option value="RUB">RUB</el-option>
                <el-option value="HKD">HKD</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="远期时间" prop="fwddt">
              <el-input v-model="formInline.fwddt"></el-input>
            </el-form-item>

            <el-form-item label="所属分行" prop="region">
              <el-select v-model="formInline.region" placeholder="所属分行" filterable>
                <el-option value="北京">北京</el-option>
                <el-option value="天津">天津</el-option>
                <el-option value="河北">河北</el-option>
                <el-option value="山西">山西</el-option>
                <el-option value="内蒙古">内蒙古</el-option>
                <el-option value disabled></el-option>
                <el-option value="辽宁">辽宁</el-option>
                <el-option value="吉林">吉林</el-option>
                <el-option value="黑龙江">黑龙江</el-option>
                <el-option value disabled></el-option>
                <el-option value="上海">上海</el-option>
                <el-option value="江苏">江苏</el-option>
                <el-option value="浙江">浙江</el-option>
                <el-option value="安徽">安徽</el-option>
                <el-option value="福建">福建</el-option>
                <el-option value="江西">江西</el-option>
                <el-option value="山东">山东</el-option>
                <el-option value disabled></el-option>
                <el-option value="河南">河南</el-option>
                <el-option value="湖北">湖北</el-option>
                <el-option value="湖南">湖南</el-option>
                <el-option value="广东">广东</el-option>
                <el-option value="广西">广西</el-option>
                <el-option value="海南">海南</el-option>
                <el-option value disabled></el-option>
                <el-option value="重庆">重庆</el-option>
                <el-option value="四川">四川</el-option>
                <el-option value="贵州">贵州</el-option>
                <el-option value="云南">云南</el-option>
                <el-option value disabled></el-option>
                <el-option value="陕西">陕西</el-option>
                <el-option value="甘肃">甘肃</el-option>
                <el-option value="宁夏">宁夏</el-option>
                <el-option value="新疆">新疆</el-option>
                <el-option value disabled></el-option>
                <el-option value="大连">大连</el-option>
                <el-option value="青岛">青岛</el-option>
                <el-option value="宁波">宁波</el-option>
                <el-option value="厦门">厦门</el-option>
                <el-option value="深圳">深圳</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="客户名称" prop="name">
              <el-input v-model="formInline.name"></el-input>
            </el-form-item>
          </el-collapse-item>
        </el-collapse>
      </el-form>

      <el-row>
        <el-row>
          <el-col :span="24">
            <p>&nbsp;</p>

            <h3>明细</h3>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <span>搜索内容</span>
            <el-input
              label="搜索："
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="trdfilterred.trd_filter_input"
              size="mini"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <span>结汇/购汇</span>
            <el-checkbox-group v-model="trdfilterred.trdtype" size="mini">
              <el-checkbox-button label="结汇"></el-checkbox-button>
              <el-checkbox-button label="购汇"></el-checkbox-button>
            </el-checkbox-group>
          </el-col>
          <el-col :span="2">
            <span>交易员</span>
            <el-select v-model="trdfilterred.psn" placeholder="交易员" size="mini" filterable>
              <el-option value="赵一林" label="赵一林">赵一林</el-option>
              <el-option value="杜宇斐" label="杜宇斐">杜宇斐</el-option>
              <el-option value="许晓" label="许晓">许晓</el-option>
              <el-option value="罗建宇" label="罗建宇">罗建宇</el-option>
              <el-option value="许杨" label="许杨">许杨</el-option>
              <el-option value="袁雁静" label="袁雁静">袁雁静</el-option>
              <el-option value="于佳" label="于佳">于佳</el-option>
              <el-option value="韩昭" label="韩昭">韩昭</el-option>
            </el-select>
          </el-col>
          <el-col :span="2">
            <span>币种</span>
            <el-select v-model="trdfilterred.wh" placeholder="币种" size="mini" filterable>
              <el-option value="USD" label="USD">USD</el-option>
              <el-option value="EUR" label="EUR">EUR</el-option>
              <el-option value="GBP" label="GBP">GBP</el-option>
              <el-option value="CHF" label="CHF">CHF</el-option>
              <el-option value="SGD" label="SGD">SGD</el-option>
              <el-option value="JPY" label="JPY">JPY</el-option>
              <el-option value="CAD" label="CAD">CAD</el-option>
              <el-option value="AUD" label="AUD">AUD</el-option>
              <el-option value="RUB" label="RUB">RUB</el-option>
              <el-option value="HKD" label="HKD">HKD</el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <span>升降</span>
            <el-select v-model="trdfilterred.rk" placeholder="升降" size="mini" filterable>
              <el-option value="1" label="提交升序排列">提交升序排列</el-option>
              <el-option value="2" label="提交降序排列">提交降序排列</el-option>
              <el-option value="3" label="流入升序排列">流入升序排列</el-option>
              <el-option value="4" label="流入降序排列">流入降序排列</el-option>
            </el-select>
          </el-col>
          <el-col :span="2">
            <span>流入</span>
            <el-select v-model="trdfilterred.lr" placeholder="流入" size="mini" filterable>
              <el-option :value="true" label="已提">已提</el-option>
              <el-option :value="false" label="未提">未提</el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <span>清空条件</span>
            <el-button
              @click="trdfilterred = {trd_filter_input: '',trdtype: ['结汇', '购汇'],psn: '',wh: '',rk:'',lr:''}"
              size="mini"
            >清空条件</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span="trdfilterred.trdtype.length === 2?12:24"
            v-if="trdfilterred.trdtype.includes('结汇')"
          >
            <b-card-group columns>
              <b-card
                :bg-variant="i.lr===true?'info':''"
                :text-variant="i.lr===true?'white':''"
                :border-variant="!i.lr===true?'info':''"
                :header-border-variant="!i.lr===true?'white':''"
                :header-text-variant="!i.lr===true?'info':''"
                :header="i.fxpx +' - ' + i.wh"
                :title="i.vol"
                :footer="i.region + ' - ' + i.psn"
                v-for="i in tradesjiehui"
                :key="i.id"
                @dblclick="lr(i.id)"
              >
                <div class="float-right align-top">
                  <span @click="edit(i.id)">
                    <i class="el-icon-edit"></i>
                  </span>
                  <br />
                  <span @click="dlt(i.id)">
                    <i class="el-icon-delete"></i>
                  </span>
                </div>
                <b-card-text>
                  <span>锁：{{i.ts1}}</span>
                  <br />
                  <span>提：{{i.ts2}}</span>
                </b-card-text>
              </b-card>
            </b-card-group>
          </el-col>
          <el-col
            :span="trdfilterred.trdtype.length === 2?12:24"
            v-if="trdfilterred.trdtype.includes('购汇')"
          >
            <b-card-group columns>
              <b-card
                :bg-variant="i.lr===true?'success':''"
                :text-variant="i.lr===true?'white':''"
                :border-variant="!i.lr===true?'success':''"
                :header-border-variant="!i.lr===true?'white':''"
                :header-text-variant="!i.lr===true?'success':''"
                :header="i.fxpx + ' - ' + i.wh"
                :title="i.vol"
                :footer="i.region + ' - ' + i.psn"
                v-for="i in tradesgouhui"
                :key="i.id"
                @dblclick="lr(i.id)"
              >
                <div class="float-right align-top">
                  <span @click="edit(i.id)">
                    <i class="el-icon-edit"></i>
                  </span>
                  <br />
                  <span @click="dlt(i.id)">
                    <i class="el-icon-delete"></i>
                  </span>
                </div>
                <b-card-text>
                  <span>锁：{{i.ts1}}</span>
                  <br />
                  <span>提：{{i.ts2}}</span>
                </b-card-text>
              </b-card>
            </b-card-group>
          </el-col>
        </el-row>
      </el-row>

      <el-dialog :title="'修改编号为' + drawer_trade.id + '的交易'" :visible.sync="drawer" width="30%">
        <el-form :model="drawer_trade" :rules="rules" ref="formInline" size="mini">
          <el-form-item>
            <el-switch
              v-model="drawer_trade.trdtype"
              active-text="购汇"
              inactive-text="结汇"
              active-color="#e83e8c"
              inactive-color="#6CC3D5"
            ></el-switch>
          </el-form-item>

          <el-form-item label="量级" prop="vol">
            <el-input v-model="drawer_trade.vol"></el-input>
          </el-form-item>

          <el-form-item label="汇率" prop="fxpx">
            <el-input v-model="drawer_trade.fxpx"></el-input>
          </el-form-item>

          <el-form-item label="远期时间" prop="fwddt">
            <el-input v-model="drawer_trade.fwddt"></el-input>
          </el-form-item>

          <el-form-item label="客户名称" prop="name">
            <el-input v-model="drawer_trade.name"></el-input>
          </el-form-item>
          <el-form-item label="货币" prop="wh">
            <el-select v-model="drawer_trade.wh" filterable>
              <el-option value="USD">USD</el-option>
              <el-option value="EUR">EUR</el-option>
              <el-option value="GBP">GBP</el-option>
              <el-option value="CHF">CHF</el-option>
              <el-option value="SGD">SGD</el-option>
              <el-option value="JPY">JPY</el-option>
              <el-option value="CAD">CAD</el-option>
              <el-option value="AUD">AUD</el-option>
              <el-option value="RUB">RUB</el-option>
              <el-option value="HKD">HKD</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属分行" prop="region">
            <el-select v-model="drawer_trade.region" filterable>
              <el-option value="北京">北京</el-option>
              <el-option value="天津">天津</el-option>
              <el-option value="河北">河北</el-option>
              <el-option value="山西">山西</el-option>
              <el-option value="内蒙古">内蒙古</el-option>
              <el-option value disabled></el-option>
              <el-option value="辽宁">辽宁</el-option>
              <el-option value="吉林">吉林</el-option>
              <el-option value="黑龙江">黑龙江</el-option>
              <el-option value disabled></el-option>
              <el-option value="上海">上海</el-option>
              <el-option value="江苏">江苏</el-option>
              <el-option value="浙江">浙江</el-option>
              <el-option value="安徽">安徽</el-option>
              <el-option value="福建">福建</el-option>
              <el-option value="江西">江西</el-option>
              <el-option value="山东">山东</el-option>
              <el-option value disabled></el-option>
              <el-option value="河南">河南</el-option>
              <el-option value="湖北">湖北</el-option>
              <el-option value="湖南">湖南</el-option>
              <el-option value="广东">广东</el-option>
              <el-option value="广西">广西</el-option>
              <el-option value="海南">海南</el-option>
              <el-option value disabled></el-option>
              <el-option value="重庆">重庆</el-option>
              <el-option value="四川">四川</el-option>
              <el-option value="贵州">贵州</el-option>
              <el-option value="云南">云南</el-option>
              <el-option value disabled></el-option>
              <el-option value="陕西">陕西</el-option>
              <el-option value="甘肃">甘肃</el-option>
              <el-option value="宁夏">宁夏</el-option>
              <el-option value="新疆">新疆</el-option>
              <el-option value disabled></el-option>
              <el-option value="大连">大连</el-option>
              <el-option value="青岛">青岛</el-option>
              <el-option value="宁波">宁波</el-option>
              <el-option value="厦门">厦门</el-option>
              <el-option value="深圳">深圳</el-option>
            </el-select>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="editt(drawer.id)">修定</el-button>
        </span>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      formInline: {
        trdtype: false,
        vol: "",
        fxpx: "",
        wh: "",
        fwddt: "",
        region: "",
        name: "",
        lr: false // 流入
      },
      trdfilterred: {
        trd_filter_input: "",
        trdtype: ["结汇", "购汇"],
        psn: "",
        wh: "",
        rk: "",
        lr: ""
      },
      rules: {
        fxpx: [{ required: true, message: "请输入交易价格", trigger: "blur" }],
        vol: [{ required: true, message: "请输入交易金额", trigger: "blur" }],
        name: [
          { required: false, message: "请输入活动名称", trigger: "blur" },
          { min: 1, max: 50, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [{ required: false, message: "请选择分行", trigger: "change" }],
        wh: [{ message: "请选择外汇", trigger: "blur" }]
      },
      trades: [],
      activeNames: ["1"],
      drawer: false,
      direction: "btt",
      drawer_trade: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.getTrades(this.formInline);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getTrades(payLoad, id = "", k = "") {
      Axios.post(
        "http://" + this.$store.getters.active_url + ":3000/pendingTrades/",
        { payLoad: payLoad, id: id, k: k }
      ).then(response => {
        if (response.status === 204) {
          this.trades.filter(
            data => data.id === id
          )[0].lr = !this.trades.filter(data => data.id === id)[0].lr;
          this.trades.filter(data => data.id === id)[0].ts2 =
            new Date().getHours() + ":" + new Date().getMinutes();
        } else {
          this.trades = response.data;
        }
      });
    },
    lr(id) {
      this.getTrades({}, id);
    },
    edit(id) {
      this.drawer = true;
      this.drawer_trade = this.trades.filter(data => data.id === id)[0];
    },
    dlt(id) {
      this.getTrades({}, id, id);
    },
    editt(id) {
      this.getTrades(this.drawer_trade);
      this.dlt(id);
    }
  },
  computed: {
    preproctrades() {
      return this.trades
        .filter(
          item =>
            !this.trdfilterred.trd_filter_input ||
            item.vol.includes(this.trdfilterred.trd_filter_input) ||
            item.fxpx.includes(this.trdfilterred.trd_filter_input) ||
            item.region.includes(this.trdfilterred.trd_filter_input) ||
            item.name.includes(this.trdfilterred.trd_filter_input)
        )
        .filter(
          item =>
            !this.trdfilterred.psn || item.psn.includes(this.trdfilterred.psn)
        )
        .filter(
          item =>
            !this.trdfilterred.wh || item.wh.includes(this.trdfilterred.wh)
        )
        .filter(
          item => this.trdfilterred.lr === "" || !item.lr ^ this.trdfilterred.lr
        )
        .sort(
          (a, b) =>
            (this.trdfilterred.rk === "1" && a.ts1.localeCompare(b.ts1, "zh")) +
            (this.trdfilterred.rk === "2" && b.ts1.localeCompare(a.ts1, "zh")) +
            (this.trdfilterred.rk === "3" && a.ts2.localeCompare(b.ts2, "zh")) +
            (this.trdfilterred.rk === "4" && b.ts2.localeCompare(a.ts2, "zh"))
        );
    },
    tradesjiehui() {
      return this.preproctrades.filter(data => data.trdtype === false);
    },
    tradesgouhui() {
      return this.preproctrades.filter(data => data.trdtype === true);
    }
  },
  mounted() {
    this.getTrades({});
  }
};
</script>

<style scoped>
.card-columns {
  margin: 10px;
}
.card-body {
  padding: 0.5rem 0.75rem;
}
.card-header,
.card-footer {
  padding: 0.25rem 0.75rem;
}
.card-title {
  margin: 0;
  padding: 0;
}

.smallinput {
  width: 9rem;
}

label {
  width: 50px;
}
</style>
