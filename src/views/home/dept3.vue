<template>
    <el-container class="container">
        <Header style="height:60px " :icon="null">

            <!-- 系统名字 -->
            <template #title>
                <span class="text-title">成都市金牛区综合行政执法局,欢迎您~</span>
            </template>

        </Header>
        <el-container>
            <!-- 大类和子系统栏 -->
            <el-header class="navHeader">
                <!-- logo -->

                <!-- <el-image class="text-logo" :src="require('@/assets/home/logo-title.jpg')" fit="scale-down"></el-image> -->
                <div class="classification" v-if="showDepts">
                    <class-item v-for="dept in depts" :key="dept.deptId"
                        @click="switchShowDepts(dept.deptId, dept.deptName)" :logo="dept.deptLogo" :name="dept.deptName"
                        styleName="subsysName"></class-item>
                </div>
                <!-- <div class="subsys" v-if="!showDepts">
<div class="subdepts">{{choosedDeptName}}</div>
</div> -->
                <div class="subsys" v-if="!showDepts">

                    <class-item v-for="system in choosedSystems" :key="system.systemId"
                        @click="show(system.systemId, system.url)" :logo="system.systemLogo" :name="system.systemName"
                        styleName="subsysName">
                    </class-item>
                </div>
                <div class="subsys" v-if="!showDepts">
                    <div style="padding-left:15px;margin-top: 20px;">
                        <el-icon color="#000000" size="20px" @click="backtoHome()" style="cursor:pointer;">
                            <svg t="1656145922576" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1267" width="32" height="32">
                                <path
                                    d="M587.776 961.536q-60.416 0-117.248-25.6t-101.376-69.632-71.168-101.888-26.624-122.368l0-39.936q0-23.552-0.512-50.688t-0.512-53.76l0-48.128q0-29.696-6.144-47.104t-26.624-16.384q-15.36 0-35.328-0.512t-36.352-0.512q-26.624 0-34.304-14.336t10.752-37.888q18.432-24.576 43.52-56.32t51.712-65.536 52.224-66.56 46.08-58.368q18.432-23.552 34.816-24.064t34.816 20.992q18.432 22.528 43.52 52.736t51.712 62.976 52.224 64.512 46.08 56.32q22.528 26.624 17.408 44.544t-32.768 17.92q-8.192 0-19.968 0.512t-25.088 1.024-25.6 1.024-21.504 0.512q-19.456 0-24.064 11.776t-4.608 32.256q1.024 46.08 1.024 103.424l0 106.496q0 23.552 10.752 47.104t28.672 43.008 41.472 31.744 50.176 12.288l71.68 0q40.96 0 79.36-0.512t67.072-0.512l35.84 0q22.528 0 37.376 13.824t22.528 34.816 7.68 45.568-7.168 45.568-20.992 34.816-34.304 13.824l-27.648 0-48.128 0q-26.624 0-56.832 0.512t-57.856 0.512l-47.104 0-28.672 0z"
                                    p-id="1268"></path>
                            </svg>
                        </el-icon>
                    </div>
                </div>

            </el-header>

            <div class="background" v-if="choosedDept === 3">
                <img src="@/assets/home/banner-szcg.png" width="10000" style="overflow-y:auto;overflow-x: auto;">
            </div>




            <!-- 页面显示区域 -->
            <el-main class="main">
                <div class="szcg" style="height:15vh;">
                    <div @click="tcwt_click" class="tcwt" style="height:15vh;margin-right:5vw">
                        <img class="syd-icon" src="@/assets/images/szcg/syd.png" alt="">
                        <div class="syd-text" style="color:white;padding:10px;font-size: 18px">
                            突出问题管家</div>
                        <div v-if="zero_selected == true" class="col-line-selected"></div>
                    </div>
                    <div @click="AI_click" class="AI" style="height:10vh;margin-right:5vw">
                        <img class="ai-icon" src="@/assets/images/szcg/ai.png" alt="">


                        <div class="AI-text" style="color:white;padding:5px;font-size: 18px">
                            城管AI识别管家</div>
                        <div v-if="one_selected == true" class="col-line-selected"></div>
                    </div>
                    <div @click="syd_click" class="syd" style="height:10vh;margin-right:5vw">
                        <img class="syd-icon" src="@/assets/images/szcg/syd.png" alt="">
                        <div class="syd-text" style="color:white;padding:10px; font-size: 18px">
                            城管诉易达管家</div>
                        <div v-if="two_selected == true" class="col-line-selected"></div>
                    </div>
                    <div @click="szcg_click" class="szcg_in" style="height:10vh">
                        <img class="szcg-icon" src="@/assets/images/szcg/szcg.png" alt="">

                        <div class="szcg-text" style="color:white;padding:10px;font-size: 18px">
                            数字化城市信息管家</div>
                        <div v-if="three_selected == true" class="col-line-selected"></div>
                    </div>



                </div>
                <div class="extra-col-line"></div>
                <!-- <div class="info">
                    <el-image v-if="zero_selected == true" class="bg" :src="require('@/assets/images/szcg/3.png')"
                        alt=""></el-image>
                    <el-image v-if="one_selected == true" class="bg" :src="require('@/assets/images/szcg/1.png')" alt=""
                        fit="cover"></el-image>
                    <el-image v-if="two_selected == true" class="bg" :src="require('@/assets/images/szcg/2.png')"
                        alt=""></el-image>
                    <el-image v-if="three_selected == true" class="bg" :src="require('@/assets/images/szcg/3.png')"
                        alt=""></el-image>
                </div> -->
                <div class="number">
                    <el-image v-if="zero_selected == true" class="number" :src="require('@/assets/images/szcg/number1.png')"
                        alt="" fit="cover">
                    </el-image>
                    <div v-if="zero_selected == true" class="text" style="color:white;padding:10px;z-index:2">突出问题管家
                    </div>
                    <div v-if="zero_selected == true" class="text"
                        style="color:white;padding:5px;z-index:2 ;font-size:14px">City Administration Identification
                        System
                    </div>

                    <el-image v-if="one_selected == true" class="number" :src="require('@/assets/images/szcg/number2.png')"
                        alt="" fit="cover">
                    </el-image>
                    <div v-if="one_selected == true" class="text" style="color:white;padding:10px;z-index:2">城管AI识别管家
                    </div>
                    <div v-if="one_selected == true" class="text" style="color:white;padding:5px;z-index:2 ;font-size:14px">
                        City Administration AI Identification System
                    </div>

                    <el-image v-if="three_selected == true" class="number"
                        :src="require('@/assets/images/szcg/number4.png')" alt="" fit="cover">
                    </el-image>
                    <div v-if="three_selected == true" class="text" style="color:white;padding:10px;z-index:2">数字化城市信息管家
                    </div>
                    <div v-if="three_selected == true" class="text"
                        style="color:white;padding:5px;z-index:2 ;font-size:14px">
                        Digital City Management Information System
                    </div>

                    <el-image v-if="two_selected == true" class="number" :src="require('@/assets/images/szcg/number3.png')"
                        alt="" fit="cover">
                    </el-image>
                    <div v-if="two_selected == true" class="text" style="color:white;padding:10px;z-index:2">城管诉易达管家
                    </div>
                    <div v-if="two_selected == true" class="text" style="color:white;padding:5px;z-index:2 ;font-size:14px">
                        City Management Suggestion System
                    </div>

                </div>
                <div class="info-list" v-show="zero_selected == true"
                    style="color:white;margin-left:0px;width:500px;padding: 14px;line-height: 30px;">

                    <div id="container" style="width: 400px; height: 400px;float: left;"></div>

                </div>

                <div class="info-list" v-if="one_selected == true"
                    style="color:white;margin-right:0px;width:500px;padding: 0px;line-height: 30px;display: flex;">
                    <!-- <div>
                            <li> ①今日上报案件数:{{ szcg_info.case }}； </li>
                            <li> ②今日结案数:{{ szcg_info.case_end }}； </li>
                            <li> ③今日结案率:{{ szcg_info.rate }} ； </li>
                            <li> ④今日上报问题数:{{ szcg_info.question }} </li>
                        </div> -->
                    <el-table :data="tcwtTableData" stripe style="width: 500px;margin-left: 25px;" max-height="300"
                        :header-cell-style="{
                            'font-size': '18px',
                            'background': '#303133 !important',
                            'color': '#ffffff',
                            'border': 'none !important'
                        }" :cell-style=changeCellStyle>
                        <el-table-column prop="event_name" label="事件名称" width="100" />
                        <el-table-column prop="modify_time" label="确认时间" width="150" />
                        <el-table-column prop="description" label="问题描述" width="100" />
                        <el-table-column prop="create_time" label="创建时间" width="150" />
                        <el-table-column prop="creator" label="创建者" width="100" />
                        <el-table-column prop="tags" label="标签" />

                    </el-table>

                </div>
                <div class="info-list" v-if="three_selected == true"
                    style="color:white;margin-left:150px;width:500px;padding: 14px;line-height: 26px;">


                    <template v-for="tableItem in szcg_statics">
                        <el-table :data="tableItem.data" class="table" :fit="false" :row-style="{ height: '80px' }"
                            :cell-style=cellstyle max-height="200">
                            <el-table-column v-for="i in tableItem.headerNames.length" :label="tableItem.headerNames[i - 1]"
                                :prop="tableItem.dataNames[i - 1]" width="150" />
                        </el-table>
                    </template>
                </div>

                <div v-show="two_selected == true" id="container_syd2"
                    style="width: 500px; height: 300px;float:right;margin-left:50px;"></div>





            </el-main>
            <el-image class="banner" :src="require('@/assets/home/banner.jpg')" style="">

            </el-image>
        </el-container>
        <!-- 底部信息栏 -->
        <!-- <el-container>
      <el-footer class="footer">
        <div class="foot-info">
          
          <li>Copyright 2022 http://zhxzzfj.XXXX.gov.cn All Rights Reserved</li>
          <li>川公网安备 XXXXXXXXXXX号 ICP备案：蜀ICP备XXXXXXXX号 网站标识码：XXXXXXXXXX</li>
          <li>主办：成都市金牛区综合行政执法局 地址：金牛区某街道某门牌号　电话：XXXX-XXXXXX</li>
        </div>
      </el-footer>
    </el-container> -->
    </el-container>
</template>
  
<script setup>
import 'element-plus/theme-chalk/display.css'
import { ArrowDown } from '@element-plus/icons-vue'
import { ref, reactive, computed, onBeforeMount, onMounted } from "vue";
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import MainInfo from '@/views/home/components/MainInfo.vue'
import ClassItem from '@/views/home/components/ClassItem.vue'
import Header from "@/components/Header.vue"
import { get, getDeptList, getSystemList } from '@/api/home.js'
import { getMainSzcg, getCase, getStatics } from '@/api/szcg.js'
import { getToken, getMainSyd } from "@/api/syd";
import { params } from '@/store/store.js'
import { getMainTcwt, getAllEvents, getTrend } from '@/api/tcwt';
import * as echarts from "echarts";

import { getMainAI } from '@/api/ai';
import { getAiUrl } from '@/api/ai'
const syd = reactive({ url: '' })
const token = ref('')
const sydUrl = ref("https://www.jncgsqbl.com/namespaces/1/categories/1?_user_login_token=")
const aiUrl = ref('')
const imgVisible = ref(true)
const tcwtTableData = ref([])
const syd_data = ref([])
const echartInit_syd = () => {
    //   document.getElementById("container_syd1").removeAttribute("_echarts_instance_");
    //   var myChart_syd1 = echarts.init(document.getElementById("container_syd1"));
    //document.getElementById("container_syd2").removeAttribute("_echarts_instance_");
    var myChart_syd2 = echarts.init(document.getElementById("container_syd2"));
    var option_syd1 = {
        title: {
            text: '案件分析日统计',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: {
                color: 'white'
            }
        },
        series: [
            {
                name: '案件',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 35,
                        fontWeight: 'bold',

                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: syd_data.value[2].infoVal, name: '今日办结案件数量' },
                    { value: syd_data.value[0].infoVal - syd_data.value[2].infoVal, name: '今日待办案件数量' },
                    // { value: 580, name: 'Email' },
                    // { value: 484, name: 'Union Ads' },
                    // { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    }
    //   myChart_syd1.setOption(option_syd1)
    var option_syd2 = {
        title: {
            text: '案件分析月统计',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: {
                color: 'white'
            }
        },
        series: [
            {
                name: '案件',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 35,
                        fontWeight: 'bold',

                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: syd_data.value[3].infoVal, name: '本月办结案件数量' },
                    { value: syd_data.value[1].infoVal - syd_data.value[3].infoVal, name: '本月待办案件数量' },
                    // { value: 580, name: 'Email' },
                    // { value: 484, name: 'Union Ads' },
                    // { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    }
    myChart_syd2.setOption(option_syd2)
}
function echartInit_tcwt() {
    var myChart = echarts.init(document.getElementById("container"));
    getTrend().then(data => {
        var option = {
            title: {
                text: '事件趋势分析',
                textStyle: {
                    color: 'white'
                }
            },
            legend: {
                top: '5%',
                left: 'center',
                textStyle: {
                    color: 'white'
                }
            },
            //这里的yAxis就是竖轴，xAxis就是横轴
            // yAxis and xAxis 交换可以改变横向或竖向
            yAxis: {
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'white',  //更改坐标轴文字颜色
                        fontSize: 14      //更改坐标轴文字大小
                    }
                },
                data: [data[0].type, data[2].type, data[3].type, data[4].type, data[5].type]
            },
            xAxis: {
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'white',  //更改坐标轴文字颜色
                        fontSize: 14      //更改坐标轴文字大小
                    }
                },
            },
            // 数据的来源
            series: [
                {
                    name: '事件',
                    // bar就是柱状图
                    type: 'bar',
                    color: '#dd6b66', textStyle: {
                        color: 'white'
                    },
                    // 数据
                    data: [data[0].lian_value, data[1].lian_value, data[2].lian_value, data[3].lian_value,
                    data[4].lian_value, data[5].lian_value,]
                }
            ]
        }
        myChart.setOption(option);
    })
}
//用户信息
let zero_selected = ref(false);

let one_selected = ref(true);
let two_selected = ref(false);
let three_selected = ref(false);
function changeCellStyle(row) {
    // 可自行输出row查看样式
    const styleObject = {
        'background': '#303133 !important',
        'color': '#ffffff',
        'font-size': '18px',
    }
    return styleObject
}
function cellStyle(row) {
    // 可自行输出row查看样式
    const styleObject = {
        'background': '#303133 !important',
        'color': '#ffffff',
        'font-size': '18px',
    }
    return styleObject
}
const user = reactive({
    username: '张三',
    role: '管理员'
})
//日期 周
let date = new Date().toLocaleDateString();
var a = new Array("日", "一", "二", "三", "四", "五", "六");
var str = new Date().getDay();
var week = "星期" + a[str];
function toSystem(item) {
    router.push({ name: item.to, params: item.systemName })
}
var time = new Date().getTime();
//setInterval(refreshSydToken, 1000 * 61)
const today =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();
const tomorrow =
    new Date(time + 1 * 24 * 60 * 60 * 1000).getFullYear() +
    "-" +
    (new Date(time + 1 * 24 * 60 * 60 * 1000).getMonth() + 1) +
    "-" +
    new Date(time + 1 * 24 * 60 * 60 * 1000).getDate();
const szcg_info = reactive(
    {
        case: '',
        case_end: '',
        rate: '',
        question: '',
    })
const tcwt_info = reactive(
    {
        case: '',
        case_end: '',
        case_need: '',
        out_date: '',
        case_today: '',
    }
)
const ai_info = reactive(
    {
        case_today: '',
        case_today_need: '',
        case_end: '',
        case_out: '',
    }
)

const syd_case_today = ref(0)
const syd_case_month = ref(0)
const syd_case_end_today = ref(0)
const syd_case_end_month = ref(0)

function tcwt_click() {
    one_selected.value = false;
    two_selected.value = false;
    three_selected.value = false;
    zero_selected.value = true;

}
function AI_click() {
    zero_selected.value = false;
    one_selected.value = true;
    two_selected.value = false;
    three_selected.value = false;

}
function szcg_click() {
    zero_selected.value = false;
    one_selected.value = false;
    three_selected.value = true;
    two_selected.value = false;

}
function syd_click() {
    zero_selected.value = false;
    one_selected.value = false;
    two_selected.value = true;
    three_selected.value = false;
}
const szcg_statics = ref([])
//部门列表, 从后端获取
const depts = ref([])
onBeforeMount(() => {
    getDeptList()
        .then(response => {
            depts.value = response
        })

    getMainSzcg().then(data => {

        szcg_info.case = data[0].infoVal
        szcg_info.case_end = data[1].infoVal
        szcg_info.rate = data[2].infoVal
        szcg_info.question = data[3].infoVal

    })

    getMainTcwt().then(data => {

        tcwt_info.case = data[0].infoVal
        tcwt_info.case_end = data[1].infoVal
        tcwt_info.case_need = data[2].infoVal
        tcwt_info.out_date = data[3].infoVal
        tcwt_info.case_today = data[3].infoVal
    })
    getMainAI().then(data => {
        ai_info.case_today = data[0].infoVal
        ai_info.case_today_need = data[1].infoVal
        ai_info.case_end = data[2].infoVal
        ai_info.case_out = data[3].infoVal
    })
    getStatics().then(data => {
        szcg_statics.value = data
    })
    getMainSyd().then(data => {
        syd_data.value = data
        console.log(data[0].infoVal)
        syd_case_today.value = data[0].infoVal
        syd_case_month.value = data[1].infoVal
        syd_case_end_today.value = data[2].infoVal
        syd_case_end_month.value = data[3].infoVal
        echartInit_syd()
    })

    getAllEvents(today, tomorrow).then(data => {
        tcwtTableData.value = data
    })

})

// 系统列表
const systems = ref([])
onMounted(() => {
    getSystemList().then(data => {
        systems.value = data
        // 请求各个子系统要显示的数据
        systems.value.forEach(system => {
            if (system.api !== '') {
                //get(system.api).then(data => system.data = data)
            }
        })
    })
    echartInit_tcwt()
    tcwt_click()

})
//选中的部门
// -1表示全选，为默认值
const choosedDept = ref(3)
const choosedDeptName = ref()
//选中部门对应的子系统
const choosedSystems = computed(() => {
    //过滤函数
    let filterFun = (system) => {
        // 只显示选中部门的子系统
        return system.deptId === choosedDept.value
    }
    //显示所有部门的子系统
    if (choosedDept.value === -1) {
        filterFun = () => true
    }

    return systems.value
        .filter(filterFun)
    // .filter(system => {
    //   console.log(system)
    //   // 只显示有数据的子系统
    //   return system.data && system.data.length != 0
    // })
})

// 切换显示部门和子系统
const showDepts = ref(false)
function switchShowDepts(deptId, deptName) {
    router.push('dept' + deptId)
    // choosedDept.value = deptId
    // showDepts.value = !showDepts.value
    // choosedDeptName.value = deptName
    // if (deptId != 1) {
    //   imgVisible.value = false
    // }
    // if (deptId == -1) {
    //   imgVisible.value = true

    // }
}

const router = useRouter()
// 跳转到to指定的子系统汇总页面
function show(id, url) {
    // if (url === '') {

    //     ElMessage({
    //         showClose: true,
    //         message: '正在开发中...'
    //     })
    // } else {
    //     // router.push({ name: to, params: { subsysName } })
    //     if (id != '16' && id != '17' && id != '4')
    //         window.open(url)
    //     else if (id == '16')
    //         getToken().then(data => {
    //             token.value = data
    //             var sydUrl = "https://www.jncgsqbl.com/namespaces/1/categories/1?_user_login_token="
    //             sydUrl = sydUrl + token.value
    //             syd.url = sydUrl
    //             console.log(syd.url)
    //             window.open(syd.url)
    //         })
    //     else if (id == '17' || id == '4') {
    //         getAiUrl().then(data => {
    //             aiUrl.value = data.message
    //             console.log(data, aiUrl)
    //             window.open(aiUrl.value)
    //         })
    //     }
    // }
}
function toMap() {
    router.push('/map')
}
function logout() {
    //TODO 清除登录信息
    router.push('/login')
}
function backtoHome() {
    router.push('/home')
}
</script>
  
<style scoped>
.text {
    margin-top: 0px;
    margin-left: -15px;
    font-size: 10px;
}



.number {
    z-index: 2;
    margin-top: 5vh;
    margin-left: 50px;

}

.col-line-selected {
    width: 60px;
    background: #1677D9;
    height: 4px;
    margin-top: 18px;
    padding: 2px
}

.col-line {
    width: 1000px;
    height: 112px;
    background: #CCCCCC;

    top: 310px
}

.extra-col-line {
    width: 100vw;
    height: 2px;
    background: #CCCCCC;
    position: absolute;
    margin-top: 165px
}

.bg {
    width: 80vw;
    text-align: center;
    margin-left: 1vw;
    padding: 5px;
    z-index: 1
}

.szcg {
    /* 
    height:760px;
    width: 100%;
    background-size: 100%;
     background-image: url('@/assets/images/szcg/background.png'); 
    opacity: 0.9;
     */
    height: 15vh;
    display: flex;
    text-align: center;
}



.jgzmInfo {
    height: 30vh;
    width: 100vh;
    height: auto;
    margin-left: 5%;
    display: flex;
    padding: 5px;
    color: black;
}

.szcgInfo {
    height: 600px;
    width: 400px;
    height: auto;
    margin-left: 5%;
    padding: 5px;
    color: white;


}





.classification-title {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /*当屏幕尺寸变小时，各个子系统汇总模块自动换行*/
    font-size: 30px;
    color: #1677D9;

}

.banner {
    width: 100%;
}

.text-week {
    margin-left: 20px;
    font-size: large;
    color: #fff;
    line-height: 60px;
    width: 100%;
}

.text-title {
    margin-left: 20px;
    font-size: large;
    color: #fff;
    line-height: 60px;
    width: 30%;
    padding: 5px;
}

.text-logo {
    margin-left: 20px;
    font-size: large;
    color: #fff;
    line-height: 60px;
    width: 30%;
    padding: 5px;
}

.buttonToMap {
    font-size: large;
    color: #fff;
}

.el-dropdown-link {
    font-size: 20px;
}

.container {
    display: flex;
    flex-direction: column;
    color: #004B8C;
}

.navHeader {
    background-color: #fff;
    color: #004B8C;
    margin-left: -20px;
    margin-right: -20px;
    height: initial;
    display: flex;
}

.title {
    padding: 25px;
    font-size: 40px;
    margin-left: 10px;
    margin-bottom: 10px;
    white-space: nowrap;
    letter-spacing: 3px;

}

.subsys {
    /**保持子系统栏与标题栏背景色一致 */
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    text-align: center;

}

.classification {
    /**保持子系统栏与标题栏背景色一致 */
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    text-align: center;
    float: right;
    margin-left: 5%;


}

.main {
    display: flex;
    flex-wrap: wrap;
    /*当屏幕尺寸变小时，各个子系统汇总模块自动换行*/
    justify-content: center;
    background-image: url('@/assets/images/szcg/background.png');
    background-size: cover;
    height: 80vh
}

.logo-title {
    margin-left: 40px;
    font-size: large;
    color: #fff;
    line-height: 60px;
    width: 25%;
    padding: 5px;
}

.background {
    display: flex;
    flex-wrap: wrap;
    width: 200;
}

.subdepts {
    padding: 0px;
    font-size: 25px;
    margin-left: -25px;
    margin-top: 50%;
    white-space: nowrap;
    float: left;
    text-decoration: underline;
}

.router {
    padding: 15px;
    font-size: 25px;
    margin-left: 10px;
    margin-top: -3px;
    white-space: nowrap;
    letter-spacing: 3px;
}

.logo-icon {
    margin-top: 25px;
    margin-left: 20px;
}

.footer {
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
    line-height: 32px;
    background: #004B8C;
    height: 120px;
}

.foot-info {
    padding: 10px;
}

.el-button-succeed {
    width: 180px;
    flex-wrap: wrap;
    font-size: 20px;
    color: #1677D9;
}

.el-button-null {
    font-size: 20px;
    color: gray;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>