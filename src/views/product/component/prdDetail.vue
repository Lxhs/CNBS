<template>
    <el-main>
        <div class="banner">
            <div class="Breadcrumb">
                <div class="crumb">
                    <h6>
                        当前位置/
                        <span style="cursor: pointer;" @click="$router.push('/product')">产品中心</span>
                        /office2013
                    </h6>
                </div>
            </div>
        </div>
        <div class="detail">
            <p>Office 2013</p>
            <h6>发布日期：2015-12-12</h6>
            <el-button type="primary" style="margin: 30px auto 0;width: 120px;height: 35px;line-height: 6px; margin-right: 40px">下载应用说明</el-button>
            <el-button type="primary" style="margin: 30px auto 0;width: 120px;height: 35px;line-height: 6px;">下载功能说明</el-button>
            <div class="detailMain">
                <img src="../../../assets/img/book3.png" alt="">
                <span class="detailDes">
                    Microsoft Office是一套由微软公司开发的办公软件，它为 Microsoft Windows 和 Mac OS X而开发。与办公室应用程序一样，它包括联合的服务器和基于互联网的服务。最近版本的 Office 被称为 “Office system” 而不叫 “Office suite”，反映出它们也包括服务器的事实。<br>
                    该软件最初出现于九十年代早期，最初是一个推广名称，指一些以前曾单独发售的软件的合集。当时主要的推广重点是购买合集比单独购买要省很多钱。最初的 Office 版本只有 Word、Excel 和 Powerpoint；另外一个专业版包含 Microsoft Access；随着时间的流逝，Office 应用程序逐渐整合，共享一些特性，例如拼写和语法检查、OLE 数据整合和微软 Microsoft VBA（Visual Basicfor Applications）脚本语言。<br>
                    该软件被认为是一个开发文档的事实标准，而且有一些特性在其他产品中并不存在；但是其他产品也有 Office 缺少的特性。2007 Microsoft Office System 有一个和以前版本差异很大的用户界面。<br>
                    Microsoft 使用早期的 Apple 雏形开发了Word 1.0，它于1984年发布在最初的 Mac 中。Multiplan 和 Chart 也在 512K Mac 下开发，最后它们于1985年合在一起作为Microsoft Excel 1.0 发布：第一个在 Mac 上使用的轰动一时的零售程序。<br>
                </span>
            </div>
        </div>
    </el-main>
</template>

<script>
    export default {
        name: "prdDetail"
    }
</script>

<style scoped lang="scss">
    .banner{
        width: 100%;
        height: 491px;
        background: url("../../../assets/img/banner2.png") no-repeat;
        position: relative;
        .Breadcrumb{
            padding: 15px 0;
            width: 100%;
            position: absolute;
            bottom: 0;
            background-color: rgba(56,149,212,0.8);
            .crumb{
                width: 1195px;
                margin: 0 auto;
                text-align: left;
                &>h6{
                    font-size: 16px;
                    color: #fff;
                    font-weight: 500;
                }
            }
        }
    }
    .detail{
        &>p{
            font-size: 18px;
            margin: 50px 0 20px 10px;
            color: #333333;
        }
        &>h6{
            color: #B3B3B3;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 20px;
        }
        .detailMain{
            width: 1195px;
            margin: 50px auto 100px ;
            &>img{
                display: inline-block;
            }
            .detailDes{
                display: inline-block;
                vertical-align: top;
                text-align: left;
                width: 685px;
                margin-left: 70px;
                font-size: 14px;
                color: #666666;
                line-height: 28px;
            }
        }
    }
</style>
