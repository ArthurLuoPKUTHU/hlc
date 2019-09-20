<template>
  <div>
    <el-table :data="tableData2" style="width: 100%" show-summary height="400px">
      <!-- <el-table-column
        :label="tableData1[i]"
        :prop="i"
        v-for="i in Object.keys(bxdisconcerned)"
        v-bind:key="i"
        sortable
      ></el-table-column>-->
      <el-table-column
        lable="交易类型"
        prop="F"
        sortable
        :filters="[{ text: 'Buy', value: 'Buy' }, { text: 'Sell', value: 'Sell' }]"
        :filter-method="filterTag"
      ></el-table-column>
      <el-table-column
        lable="期权类型"
        prop="G"
        sortable
        :filters="[{ text: 'Put', value: 'Put' }, { text: 'Call', value: 'Call' }]"
        :filter-method="filterTag"
      ></el-table-column>
      <el-table-column
        lable="Folder简称"
        prop="N"
        sortable
        :filters="[{ text: 'GM-BJ-RMBFX-CU-OPT-OPT-CL-CL', value: 'GM-BJ-RMBFX-CU-OPT-OPT-CL-CL' }, { text: 'GM-BJ-RMBFX-CU-OPT-OPT-CL-RR', value: 'GM-BJ-RMBFX-CU-OPT-OPT-CL-RR' }]"
        :filter-method="filterTag"
      ></el-table-column>
      <el-table-column
        lable="币种对"
        prop="S"
        sortable
        :filters="[{ text: 'USD/CNY', value: 'USD/CNY' }, { text: 'EUR/CNY', value: 'EUR/CNY' }]"
        :filter-method="filterTag"
      ></el-table-column>
      <el-table-column lable="币种一名义本金" prop="U" sortable></el-table-column>
      <el-table-column lable="期权交易对手" prop="Z" sortable></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Axios from "axios";
let _ = require("lodash");
export default {
  data() {
    return {
      tableData: [],
      bxd: "angry", //angry, ugly
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    filterTag(value, row) {
      return row.tag === value;
    }
  },
  mounted() {
    Axios.post(
      "http://" + this.$store.getters.active_url + ":3000/excelHandler/",
      {}
    ).then(res => (this.tableData = res.data["外汇期权交易簿记列表"]));
  },
  computed: {
    tableData1() {
      return this.tableData[0];
    },
    tableData2() {
      return this.tableData.slice(1);
    },
    bxdisconcerned() {
      if (this.bxd === "ugly") {
        return this.tableData1;
      } else {
        return this.xgnbxd;
      }
    },
    xgnbxd() {
      return {
        D: "交易状态",
        E: "期权状态",
        M: "交易员",
        N: "Folder简称",
        O: "交易日",
        S: "币种对",
        U: "币种一名义本金",
        Z: "期权交易对手",
        AA: "期权组合类型"
      };
    }
  }
};
</script>
