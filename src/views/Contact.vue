<template>
  <div>
    <b-row>
      <b-col>
        <b-form-group
          id="fieldset-1"
          description="请输入以开始搜索."
          label="通讯录搜索，可以输入员工名称（包括汉字/首字母/拼音），座机后四位号码，手机号码，部门名称（汉字/首字母）"
          label-for="ContactSearchInput"
          :invalid-feedback="invalidFeedback"
          :valid-feedback="validFeedback"
          :state="state"
        >
          <b-form-input
            id="ContactSearchInput"
            v-model="search"
            :state="state"
            trim
            placeholder="......例如 张三/zhangsan/zs, 1234, 13101011234, 综合管理处/zhglc"
            v-on:keyup.enter="searching()"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <div class="row">
      <div class="col-3">
        <!--为了画图id下行-->
        <div class="row" @click="display_str_r">
          <div class="col-lg-12">
            <button class="btn btn-block btn-success icbcStrDisplay_Root_alt">中国工商银行总行</button>
          </div>
        </div>
        <div
          class="row justify-content-end"
          v-for="i in str_display"
          :key="i.stridful"
          @click="str_clicked(i.stridsht_sup,i.stridsht)"
        >
          <div :class="str_class(i.stridful)">
            <button
              class="btn btn-block text-truncate"
              :stridsht="i.stridsht"
              :stridful="i.stridful"
              :strnmchn="i.strnmchn"
              :class="{'btn-primary' : isStrPrimary(i.stridsht),'btn-light': !isStrPrimary(i.stridsht) ,'btn-outline-primary': !isStrPrimary(i.stridsht)}"
            >
              {{ i.strnmchn }}
              <!-- {{ i.str_class }} -->
            </button>
          </div>
        </div>

        <div>
          <canvas id="duty_dis"></canvas>
        </div>
      </div>

      <div class="col-9">
        <div
          class="row psncard"
          v-for="i in contact.psn"
          :key="i.psnid"
          @click="get_bra(i.stridsht_sup, i.strid)"
        >
          <div class="col-12">
            <div class="card border-primary icbccntPsnDisplay_Panel">
              <div class="card-header" style="padding: 0.5rem 0.75rem">
                <h4>
                  <b>
                    <span
                      :psnid="i.psnid"
                      :name="i.name"
                      :strid="i.strid"
                      :strnmchn="i.strnmchn"
                      :stridsht_sup="i.stridsht_sup"
                      :dutylevel="i.dutylevel"
                    >{{ i.name }}</span>
                  </b>
                </h4>
              </div>
              <div class="card-body" style="padding: 0.5rem">
                <div class="row">
                  <div class="col-2">
                    <img class="img-thumbnail .p-1" :src="i.pic" style="max-height: 7em" />
                  </div>
                  <!--此处加上height是为了ie适配-->
                  <div class="col-10">
                    <table class="table table-sm table-hover">
                      <tr>
                        <td>
                          <i class="fas fa-tags fa-fw"></i>
                          {{ i.strnmchn_sup }}
                        </td>
                        <td>
                          <i class="fas fa-tag fa-fw"></i>
                          {{ i.strnmchn }}
                        </td>
                        <td>
                          <i class="fas fa-sort-amount-up fa-fw"></i>
                          {{ i.dutylevel }}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i class="fas fa-phone fa-fw"></i>
                          {{ i.officephone }}
                        </td>
                        <td>
                          <i class="fas fa-signal fa-fw"></i>
                          {{ i.mobile }}
                        </td>
                        <td>
                          <i class="fas fa-info-circle fa-fw"></i>
                          {{ i.ssicid }}
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3">
                          <i class="fas fa-envelope fa-fw"></i>
                          {{ i.notes }}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-row>
      <!-- <el-col :span="6" v-for="(o, index) in contact" :key="o" :offset="index > 0 ? 2 : 0"> -->
      <!-- <ContactCardList v-for="(o, index) in contact" :key="o" /> -->
      <!-- </el-col> -->
    </el-row>
  </div>
</template>

<script>
import Axios from "axios";
// import ContactCardList from '../components/ContactCardList'
export default {
  data() {
    return {
      search: "",
      contact: {
        str: [], // 全量
        psn: [] // 展示
      },
      str_display: [], // 展示
      str_current: "", // 当前psn或str位置,css used
      str_current_sup: "" // 当前psn或str的上级位置,css used
    };
  },
  components: {
    // ContactCardList
  },
  mounted() {
    Axios.get(
      "http://" +
        this.$store.getters.active_url +
        ":8000/API/contact/?searchtype=init"
    ).then(response => {
      this.contact.str = response.data.str;
      this.display_str_r();
    });
  },
  computed: {
    state() {
      return this.search.length >= 2;
    },
    invalidFeedback() {
      if (this.search.length > 2) {
        return "";
      } else if (this.search.length > 0) {
        return "请输入至少两个字符";
      } else {
        return "请输入要搜索的内容，拼音/拼音首字母/电话短号/汉字文字";
      }
    },
    validFeedback() {
      return this.state === true ? "请按回车开始搜索..." : "";
    },
    str_r() {
      return this.contact.str.filter(data => data.stridful.length === 35);
    }
  },
  methods: {
    str_clicked(stridsht_sup, stridsht) {
      this.str_current = stridsht;
      this.stridsht_sup = stridsht_sup;
      this.str_display = this.contact.str.filter(
        data => data.stridful.indexOf(stridsht_sup) !== -1
      );
      Axios.get(
        "http://" +
          this.$store.getters.active_url +
          ":8000/API/contact/?searchtype=psn&str=" +
          stridsht
      ).then(response => {
        this.contact.psn = response.data.psn;
      });
    },
    display_str_r() {
      this.str_display = this.str_r;
    },
    str_class(stridful) {
      var k = 12 - ((stridful.length - 11) / 12).toFixed(0) + 1; // str(12 - (len(a[1].strip()) - 11) // 12 + 1)
      console.log(k);
      return "col-" + k;
    },
    searching() {
      Axios.get(
        "http://" +
          this.$store.getters.active_url +
          ":8000/API/contact/?searchtype=srch&search=" +
          this.search
      ).then(response => {
        this.contact.psn = response.data.data.psn;
        this.str_display = response.data.data.str;
      });
    },
    get_bra(stridsht_sup, stridsht) {
      this.str_current = stridsht;
      this.stridsht_sup = stridsht_sup;
      this.str_display = this.contact.str.filter(
        data => data.stridful.indexOf(stridsht_sup) !== -1
      );
    },
    isStrPrimary(stridsht) {
      return stridsht == this.str_current;
    }
  }
};
</script>
<style scoped>
.psncard {
  margin-top: 10px;
}
</style>
