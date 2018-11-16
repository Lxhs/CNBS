<template>
    <el-main>
        <div class="banner">
            <div class="searchBar">
                <div class="search">
                    <span class="searchBtn">搜索</span>
                    <div class="searchMain">
                        <input type="text" placeholder="请输入您想要购买的产品名称">
                        <icon name="search" :w="20" :h="20" class="srhIcon"></icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="productList">
            <ul>
                <li v-for="item in 8" :key="item.id">
                    <img src="../../assets/img/book1.png" alt="" @click="$router.push('/product/detail')">
                    <div class="title">
                        <p @click="$router.push('/product/detail')">Office 2013</p>
                        <h6>发布日期：2015-12-12</h6>
                        <h1>
                            Microsoft Office 2013, 又称为Office 2013 或Office 15 ,是应用于MicrosoftWindows
                            视窗系统的一套办公室套装软件，是继续Microsoft Office 2010 后的新一代套装软件
                        </h1>
                    </div>
                </li>

            </ul>
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="8"
                    :total="64"
                    style="margin-top: 40px; margin-bottom: 20px">
            </el-pagination>
        </div>
    </el-main>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    .banner{
        width: 100%;
        height: 491px;
        background: url("../../assets/img/banner2.png") no-repeat;
        position: relative;
        .searchBar{
            padding: 15px 0;
            width: 100%;
            position: absolute;
            bottom: 0;
            background-color: rgba(56,149,212,0.8);
            .search{
                width: 1195px;
                margin: 0 auto;
                .searchMain{
                    float: right;
                    width: 560px;
                    height: 35px;
                    background-color: #fff;
                    border-radius: 10px;
                    padding-left: 20px;
                    text-align: left;
                    box-sizing: border-box;
                    line-height: 35px;
                    position: relative;
                    input[type="text"]{
                        width: 90%;
                        outline: none;
                        border: 0;
                        &::-webkit-input-placeholder {
                              /* placeholder颜色  */
                            color: #3399E9;
                            /* placeholder字体大小  */
                            font-size: 14px;
                              /* placeholder位置  */
                        }
                    }
                    .srhIcon{
                        position: absolute;
                        top: 50%;
                        right: 10px;
                        transform: translateY(-50%);
                        cursor: pointer;
                    }
                }
                .searchBtn{
                    display: block;
                    float: right;
                    line-height: 35px;
                    margin-left: 30px;
                    color: #fff;
                    letter-spacing: 10px;
                    cursor: pointer;
                }
            }
        }
    }
    .productList{
        width: 1195px;
        margin: 0 auto;
        &>ul{
            &>li{
                padding: 50px 0;
                width: 44%;
                border-bottom: 1px dashed #ccc;
                display: inline-block;
                &:nth-child(n+1){
                    padding-right: 40px;
                }
                &:nth-child(2n+2){
                    padding-left: 40px;
                }
                &>img{
                    display: inline-block;
                    cursor: pointer;
                }
                .title{
                    display: inline-block;
                    vertical-align: top;
                    width: 360px;
                    &>p{
                        font-size: 18px;
                        margin: 0 0 20px 10px;
                        padding-top: 5px;
                        text-align: left;
                        color: #333333;
                        padding-left: 20px;
                        border-left: 5px solid rgb(56,149,212) ;
                        cursor: pointer;

                    }
                    &>h6{
                        color: #B3B3B3;
                        font-size: 14px;
                        font-weight: 500;
                        text-align: left;
                        padding-left: 10px;
                        margin-bottom: 20px;
                    }
                    &>h1{
                        color: #808080;
                        text-align: left;
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 22px;
                        padding-left: 5px;
                    }
                }
            }
        }
    }
</style>
