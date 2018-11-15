<template>
    <el-main>
        <div class="banner">
            <div class="bannerNav">
                <ul class="navList">
                    <li v-for="(item,index) in navList" :key="index" :class="activeList === index ? 'nav-active': ''" @click="activeList = index">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="caseShare">
            <h1>政府机关案例分享</h1>
            <p>降低用户迁移数据降低硬件投入和管理成本，提供灵活扩展，服务更多客户，可靠的防灾备份以及增加服务覆盖地区。</p>
            <div class="caseMain">
                <img src="../../assets/img/case_1.png" alt="">
               <div class="caseTxt">
                   <p>微软公有云解决方案</p>
                   <h6>
                       WindowsAzure是微软基于云计算的操作系统,现在更名为“Microsoft Azure”,和Azure Services Platform一样,是微软软件“软件和服务”技术的名称<br>
                       Windows Azure的主要目标是未开发者提供一个平台，帮助开发可运行在云服务器、数据中心、Web和PC上的应用程序。云计算的开发者能使用微软全球数据中的储存、
                       计算能力和网络基础服务。Azure服务平台包括了以下主要组件：Windows Azure；Microsoft SQL数据库服务，Microsoft .Net服务；用于
                       分享、储存和同步文件的Live服务；针对商业的Microsoft SharePoint和Microsoft Dynamics CRM服务
                   </h6>
               </div>
            </div>
        </div>
        <div class="caseMore">
            <h1>更多案例</h1>
            <ul class="caseList">
                <li>
                    <img src="../../assets/img/5.png" alt="">
                    <p>什么什么案例</p>
                </li>
                <li>
                    <img src="../../assets/img/4.png" alt="">
                    <p>什么什么案例</p>
                </li>
                <li>
                    <img src="../../assets/img/3.png" alt="">
                    <p>什么什么案例</p>
                </li>
                <li>
                    <img src="../../assets/img/case_2.png" alt="">
                    <p>什么什么案例</p>
                </li>
            </ul>
        </div>
    </el-main>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            navList:['政府机构','医疗行业','网络推广','设计院',
                '制造业','电力行业','交通运输','公共事业',
                'Microsoft exchange 邮件系统','Microsoft project',
                'Microsoft sharpoint 及金额', '深信服虚拟化桌面',
                'Oa系统','宝利通视频会议解决方案'
            ],
            activeList: 0
        }
    }
}
</script>

<style scoped lang="scss">
    .banner{
        width: 100%;
        height: 701px;
        background: url("../../assets/img/banner.png") no-repeat;
        position: relative;
        .bannerNav{
            width: 100%;
            /*height: 115px;*/
            padding: 10px 0;
            position: absolute;
            bottom: 0;
            background-color: rgba(56,149,212,0.8);
            .navList{
                width: 1195px;
                margin: 0 auto;
                text-align: left;
                &>li{
                    display: inline-block;
                    padding: 0 25px;
                    height: 42px;
                    line-height: 42px;
                    border-radius: 5px ;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
    .nav-active{
        background-color: #fff;
        color: #2c3e50 !important;
    }
    .caseShare{
        padding: 30px 0;
        /*background-color: #F2F9FE;*/
        h1{
            text-align: center;
            font-size: 30px;
            color: #4D4D4D;
            margin-bottom: 30px;
        }
        &>p{
            font-size: 14px;
            color: #8294A0;
            text-align: center;
            margin-bottom: 40px;
        }

        .caseMain{
            width: 1086px;
            margin: 0 auto;
            img{
                display: inline-block;
                margin-right: 60px ;
            }
            .caseTxt{
                width: 660px;
                display: inline-block;
                vertical-align: top;
                &>p{
                    font-size: 20px;
                    margin: 20px 0 30px 10px;
                    text-align: left;
                    color: #666;
                    padding-left: 20px;
                    border-left: 5px solid rgb(56,149,212) ;
                }
                &>h6{
                    text-align: left;
                    font-size: 14px;
                    margin-left: 10px;
                    color: #808080;
                    font-weight: 500;
                    line-height: 28px;
                }
            }
        }
    }
    .caseMore{
        padding: 30px 0;
        /*background-color: #F2F9FE;*/
        background-color: #F5F5F5;
        h1{
            text-align: center;
            font-size: 30px;
            color: #4D4D4D;
            margin-bottom: 75px;
        }
        .caseList{
            display: block;
            width: 1195px;
            margin: 0 auto;
            &>li{
                width: 271px;
                display: inline-block;
                margin-right: 32px;
                cursor: pointer;
                &>p{
                    margin-top: 10px;
                    color: #878787;
                }
                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
</style>
