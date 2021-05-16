<template>
<div class="login-wrap">
    <el-form 
    :rules="rules"
    ref="formdata"
    class="login-form"
    label-position="top" 
    label-width="80px" 
    :model="formdata">
    <h2>用户登录</h2>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="formdata.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formdata.password" type="password"></el-input>
    </el-form-item>
      <el-button type="primary" class="login-btn" @click="handleLogin()">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //登录表单的用户绑定 
      formdata:{
        username:'',
        password:''
      },
    
    }
  },
  methods:{
    handleLogin(){
      this.$http.post('login',this.formdata).then((res)=>{
        const{
          data,meta:{msg,status}
        }=res.data
        if (status==200) {
          //保存token
          localStorage.setItem('token',data.token)
          //登录成功跳转到home
          this.$router.push({name:'home'})
          //提示成功
         this.$message.success(msg);
        }else{
          //提示失败
           this.$message.error(msg)
        }
      })
    }
  }
 }
</script>

<style>
.login-wrap{
  height: 100%;
  background: rgb(139, 115, 58) ;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form{
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-wrap .login-btn{
  width: 100%;
}
</style>
