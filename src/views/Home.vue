<template>
  <el-container>
    <el-header height="66px">
      <div class="navBar containerM">
        <img src="../assets/img/logo.png" alt="">
        <ul class="nav">
          <li @click="$router.push('/')" :class="$route.name === 'home' ? 'active' : ''">首页</li>
          <li>产品中心</li>
          <li @click="$router.push('/solution')" :class="$route.name === 'solution' ? 'active' : ''">解决方案</li>
          <li @click="$router.push('/caseShare')" :class="$route.name === 'caseShare' ? 'active' : ''">案例分享</li>
          <li>软件开发</li>
          <li>关于我们</li>
        </ul>
      </div>
    </el-header>
    <router-view></router-view>
    <el-footer height="230px">
      <ul class="link">
        <li>首页</li>
        <li>智美app</li>
        <li>趣心理</li>
      </ul>
      <h1 style="font-size: 28px; margin-bottom: 25px">咨询电话:027-88888888</h1>
      <p style="font-size: 18px; margin-bottom: 10px">CopyRight©2009-2014 中新蓝 All Rights Reserved</p>
      <p style="font-size: 14px; margin-bottom: 10px">服务热线：027-87265481 传真：027-87265480 邮箱1111111：zhongxinlan090216@hotmail.com</p>
      <p style="font-size: 14px; margin-bottom: 10px">公司地址：武汉市武昌区静安路6号5.5创意产业园尚文科技大厦9-B. 鄂ICP备12011839号-3</p>
    </el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",

};
</script>

<style scoped lang="scss">
  .containerM{
    width: 1400px;
    margin: 0 auto;
  }

  header{
    width: 100%;
    height: 66px !important;
  }
  .navBar{
    height: 66px;
    img{
      margin-top: 10px;
    }
    ul{
      overflow: hidden;
      width: 800px;
      float: right;
      li{
        color: #5C5C5C;
        font-size: 16px;
        padding: 0 22px;
        height: 66px;
        line-height: 66px;
        margin: 0 10px;
        float: left;
        cursor: pointer;
      }
    }
  }
  footer{
    width: 100%;
    padding: 30px 0;
    background-color: #2D312F;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    color: #8C9494;
    .link{
      overflow: hidden;
      margin: 0 auto 30px;

      li{
        display: inline-block;
        padding: 0 5px;
        font-size: 14px;
        cursor: pointer;
        border-right: 1px solid #8C9494;
        &:last-child{
          border-right: none;
        }
      }
    }
  }
  .active{
    background-color: #35A0F7;
    color: #fff !important;
  }
</style>
