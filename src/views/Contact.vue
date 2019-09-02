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
            v-model="name"
            :state="state"
            trim
            placeholder="......例如 张三/zhangsan/zs, 1234, 13101011234, 综合管理处/zhglc"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        title:
        <input v-model="title" />
        body:
        <input v-model="body" />
        userId:
        <input v-model="userId" />

        <button v-on:click="pst()">click here pls</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      name: '',
      t1: '',
      title: '1',
      body: '2',
      userId: '3'
    }
  },
  mounted () {
    Axios.post('https://jsonplaceholder.typicode.com/posts', {
      userId: this.userId,
      title: this.title,
      body: this.body
    }).then(response => {
      console.log(response.data)
    })
  },
  computed: {
    state () {
      return this.name.length >= 2
    },
    invalidFeedback () {
      if (this.name.length > 2) {
        return ''
      } else if (this.name.length > 0) {
        return 'Enter at least 2 characters'
      } else {
        return 'Please enter something'
      }
    },
    validFeedback () {
      return this.state === true ? 'Searching...' : ''
    }
  },
  methods: {
    pst () {
      Axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: this.userId,
        title: this.title,
        body: this.body
      }).then(response => {
        console.log(response.data)
      })
    }
  }
}
</script>
