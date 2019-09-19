<template>
  <div>
    <el-table :data="tableData2" style="width: 100%" show-summary height="225px">
      <el-table-column
        :label="tableData1[i]"
        :prop="i"
        v-for="i in Object.keys(tableData1)"
        v-bind:key="i"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      tableData: [

      ],
      bxd:"ugly",//angry, ugly
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  mounted() {
    Axios.post(
      "http://" + this.$store.getters.active_url + ":3000/excelHandler/",
      {}
    ).then(res => this.tableData = res.data["外汇期权交易簿记列表"])
  },
  computed:{
    tableData1(){
      return this.tableData[0]
    },
    tableData2(){
      return this.tableData.slice(1)
    },
    bxdisconcerned(){
      if(bxd === "ugly"){
        
      }
    },
    xgnbxd(){
      return ["交易类型","期权类型","交易员","Folder简称","交易日","币种对","币种一名义本金","期权交易对手","期权组合类型"]
      },

  }
};
</script>
