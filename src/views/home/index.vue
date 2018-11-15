<template>
    <el-main>
        <div class="block">
            <el-carousel trigger="click" height="700px" >
                <el-carousel-item v-for="item in 4" :key="item">
                    <img src="../../assets/img/banner.png" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="product">
            <h1>产品展示</h1>
            <p>虚拟化促成了新一代数据中心。这样的数据中心内不再用专用服务器运行不同的负载</p>
            <el-carousel :interval="5000" arrow="always" height="410px" :autoplay="false">
                <el-carousel-item v-for="item in 1" :key="item" >
                    <img src="../../assets/img/product.png" alt="">
                    <div class="proMain">
                        <h1>TurboMail邮件网关</h1>
                        <p>
                            私有云是指在组织专用的内部或外部资源上实施云服务的一种方式。通过使用私有云，
                            您可以获得公共云计算环境所能提供的大部分收益—包括自助服务、扩展性，以及弹性
                            —还可获得额外的控制和定制的专用资源
                        </p>
                        <el-button type="primary" style="margin: 65px auto 0;width: 120px;height: 35px;line-height: 6px;">详情</el-button>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="solution">
            <h1>解决方案</h1>
            <p>虚拟化促成了新一代数据中心。这样的数据中心内不再用专用服务器运行不同的负载</p>
            <ul class="solList">
                <li v-for="item in 6" :key="item.id">
                    <div class="lIcon">
                        <icon
                                name="yaochi1"
                                :w="21"
                                :h="21"
                                style="position: absolute;top: 50%; left: 50%; transform: translate(-50%,-50%)" >
                        </icon>
                    </div>
                    <p>微软azure解决方案</p>
                    <h6>微软azuer解决方案可以降低用户迁移数据降低硬件投入成本喝管理成本，提供灵活扩展，服务更多客户，可靠的防灾备份以及增加服务覆盖地区.</h6>
                </li>
            </ul>
            <el-button type="primary" style="margin: 65px auto;width: 120px;height: 35px;line-height: 6px;">查看更多</el-button>
        </div>
        <div class="description">
            <h1>公司简介</h1>
            <p>虚拟化促成了新一代数据中心。这样的数据中心内不再用专用服务器运行不同的负载</p>
            <div class="desMain">
                <img src="../../assets/img/company.png" alt="">
                <span>
                    <b>中心蓝</b>
                    自2009年成立以来，一直致力于为客户创造新的价值，提供整体综合的IT服务。在多年的发展中，中新蓝与国内外众多知名IT厂商建立长期战略合作关系，
                    是Microsoft、Oracle、Sybase、Symantec、Embarcadero、IBM等世界知名IT厂商的核心合作伙伴。
                    中新蓝已构建成完善的IT服务体系，集软件、硬件产品销售、解决方案、系统集成、软件开发、手机APP应用、技术服务于一体，为电信、广电、电力、烟草、政府、设计研究院、教育、医疗、酒店、零售百货、制造业等
                    各行业客户提供全方位的IT服务及优秀的解决方案。2010年获得微软颁发的中国区最佳成长企业奖；
                    2011年获得湖北省企业发展促进会、（楚商）杂志编辑委员会联合颁发的“湖北省优秀IT企业”之荣誉称号；2012年获得湖北省企业发展促进会、楚商发展促进会联合颁发的“楚商优秀企业”之荣誉称号。
                </span>
            </div>
        </div>
        <div class="news">
            <h1>新闻中心</h1>
            <p>虚拟化促成了新一代数据中心。这样的数据中心内不再用专用服务器运行不同的负载</p>
            <ul class="newList">
                <li v-for="item in 4" :key="item.id">
                    <div class="lBgc">
                        <img src="../../assets/img/news.png" alt="">
                    </div>
                    <p>2015 年《互联网安全威胁报告》要点</p>
                    <h6>保护信息安全和实现公司目标的第一步是了解犯罪分子如何威胁企业安全。 从社交媒体漏洞到数字勒索，赛门铁克 2015年《互联网安全威胁报告》充分利用海量数据...</h6>
                </li>
            </ul>
            <el-button type="primary" style="margin: 65px auto 0;width: 120px;height: 35px;line-height: 6px;">全部新闻</el-button>
        </div>
        <div class="partner">
            <h1>合作伙伴</h1>
            <p>虚拟化促成了新一代数据中心。这样的数据中心内不再用专用服务器运行不同的负载</p>
            <el-carousel :interval="4000" type="card" height="200px" width="1195px" arrow="always" indicator-position="none">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img src="../../assets/img/partner.png" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </el-main>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped lang="scss">
.product{
    padding: 30px 0;
    background-color: #F2F9FE;
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
    .el-carousel__item{
        &>img{
            display: inline-block;
        }
        &>.proMain{
            display: inline-block;
            width: 535px;
            vertical-align: top;
            margin: 85px 0 0 150px;
            text-align: left;
            &>h1{
                color:#5C5C5C;
                font-size: 34px;
                text-align: left;
            }
            &>P{
                text-align: left;
                color: #484848;
                font-size: 14px;
                line-height: 22px;
            }
        }
    }
}
.solution{
    padding: 30px 0;
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
    }
    .solList{
        display: block;
        width: 1200px;
        margin: 0 auto;
        &>li{
            width: 27.33%;
            padding-left: 51px;
            /*padding-right: 65px;*/
            margin: 60px 33px 0;
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            /*margin-top: 60px;*/
            .lIcon{
                width: 51px;
                height: 51px;
                border-radius: 50%;
                background-color: #34A1FA;
                position: absolute;
                top: 0;
                left: 0;

            }
            &>p{
                font-size: 20px;
                margin: 0 0 20px 10px;
                text-align: left;
                color: #2C4755;
            }
            &>h6{
                text-align: left;
                font-size: 14px;
                margin-left: 10px;
                color: #576973;
                font-weight: 600;
            }
        }
    }
}
.description{
    padding: 30px 0;
    background-color: #3895D4;
    h1{
        text-align: center;
        font-size: 30px;
        color: #fff;
        margin-bottom: 30px;
    }
    &>p{
        font-size: 14px;
        color: #fff;
        text-align: center;
    }
    .desMain{
        width: 1195px;
        margin: 70px auto 40px;
        &>span{
            display: inline-block;
            width: 576px;
            margin-left: 40px;
            vertical-align: top;
            text-align: left;
            margin-top: 30px;
            color: #fff;
            font-size: 16px;
            line-height: 22px;
            &>b{
                font-size: 30px;
                color: #fff;
                font-weight: 500;
            }
        }
    }
}
.news{
    padding: 30px 0;
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
    }
    .newList{
        display: block;
        width: 1200px;
        margin: 0 auto;
        &>li{
            width: 50%;
            padding-left: 105px;
            padding-right: 70px;
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            margin-top: 60px;
            .lBgc{
                width: 105px;
                height: 105px;
                position: absolute;
                top: 0;
                left: 0;
            }
            &>p{
                font-size: 22px;
                margin: 5px 0 20px 25px;
                text-align: left;
                color: #616161;
            }
            &>h6{
                text-align: left;
                font-size: 14px;
                margin-left: 25px;
                color: #616161;
                font-weight: 600;
            }
        }
    }
}
.partner{
    padding: 30px 0;
    background-color: #FAFAFA;
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
        margin-bottom: 60px;
    }
}
</style>

