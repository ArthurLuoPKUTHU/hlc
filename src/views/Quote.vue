<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24">
          <h3>录入交易</h3>
          <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
            :rules="rules"
            size="mini"
            label-width="100px"
            ref="formInline"
          >
            <el-form-item>
              <el-switch
                v-model="formInline.trdtype"
                active-text="购汇"
                inactive-text="结汇"
                active-color="#e83e8c"
                inactive-color="#6CC3D5"
              ></el-switch>
            </el-form-item>
            <el-form-item label="交易金额" prop="vol">
              <el-input v-model="formInline.vol"></el-input>
            </el-form-item>
            <el-form-item label="锁定汇率" prop="fxpx">
              <el-input v-model="formInline.fxpx"></el-input>
            </el-form-item>

            <el-form-item label="选择货币" prop="wh">
              <el-select v-model="formInline.wh" placeholder="请选择所属分行" filterable>
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
              <el-select v-model="formInline.region" placeholder="请选择所属分行" filterable>
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

            <!--
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>-->
            <el-form-item>
              <el-button type="primary" @click="submitForm('formInline')">立即创建</el-button>
              <el-button @click="resetForm('formInline')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <el-row>
        <el-row>
          <el-col :span="24">
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
          <el-col :span="3">
            <span>结汇/购汇</span>
            <el-checkbox-group v-model="trdfilterred.trdtype" size="mini">
              <el-checkbox-button checked = true label="结汇"></el-checkbox-button>
              <el-checkbox-button checked = true label="购汇"></el-checkbox-button>
            </el-checkbox-group>
          </el-col>
          <el-col :span="3">
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
          <el-col :span="3">
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
        </el-row>
        <el-row>
          <el-col :span="12">
            <b-card-group columns>
              <b-card
                border-variant="info"
                header-border-variant="info"
                header-text-variant="info"
                align="info"
                header="7.1000 - USD"
                title="3000"
                sub-title="中石油"
                footer="北京分行"
                v-for="i in tradesjiehui"
                :key="i"
              >
                <b-card-text>
                  <p>9：00</p>
                  <p>19：00</p>
                </b-card-text>
              </b-card>
              <!-- <b-card
                border-variant="info"
                header-border-variant="info"
                header-text-variant="info"
                align="info"
                header="7.1000 - USD"
                title="3000"
                sub-title="中石油"
                footer="北京分行"
                v-for="i in 6"
                :key="i"
              >
                <b-card-text>
                  <p>9：00</p>
                  <p>19：00</p>
                </b-card-text>
              </b-card> -->
            </b-card-group>
          </el-col>
          <el-col :span="12">
            <b-card-group columns>
              <b-card
                border-variant="success"
                header-border-variant="success"
                header-text-variant="success"
                align="success"
                header="7.1000 - USD"
                title="3000"
                sub-title="中石油"
                footer="北京分行"
              >
                <b-card-text>
                  <span>9：00</span>
                  <br />
                  <span>19：00</span>
                </b-card-text>
              </b-card>
              
              <!-- <b-card
                border-variant="success"
                header-border-variant="success"
                header-text-variant="success"
                align="success"
                header="7.1000 - USD"
                title="3000"
                sub-title="中石油"
                footer="北京分行"
              >
                <b-card-text>
                  <span>9：00</span>
                  <br />
                  <span>19：00</span>
                </b-card-text>
              </b-card> -->
            </b-card-group>
          </el-col>
        </el-row>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      formInline: {
        trdtype: false,
        vol: '',
        fxpx: '',
        wh: '',
        fwddt: '',
        region: '',
        name: ''
        // date1: "",
        // date2: "",
        // delivery: false,
        // type: [],
        // resource: "",
        // desc: ""
      },
      trdfilterred: {
        trd_filter_input: '',
        trdtype: [],
        psn: '',
        wh: ''
      },
      rules: {
        fxpx: [{ required: true, message: '请输入交易价格', trigger: 'blur' }],
        vol: [{ required: true, message: '请输入交易金额', trigger: 'blur' }],
        name: [
          { required: false, message: '请输入活动名称', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [{ required: false, message: '请选择分行', trigger: 'change' }],
        wh: [{ required: true, message: '请选择外汇', trigger: 'blur' }]
      },
      trades: []
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('before post')
          Axios.post(
            'http://' + this.$store.getters.active_url + ':5000/pendingTrades/', this.formInline
          ).then(res => {
            this.trades = res
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  computed:{
    tradesjiehui(){
      return this.trades.filter(data =>{
        data.trdtype === false
      })
    },
    tradesgouhui(){
      return this.trades.filter(data =>{
        data.trdtype === true
      })
    }
  },
  mounted () {
    Axios.post(
      'http://' + this.$store.getters.active_url + ':5000/pendingTrades/'
    ).then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
.card-columns {
  margin: 10px;
}
</style>
