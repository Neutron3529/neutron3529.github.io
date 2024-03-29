        //配方 ，如果数据改变时有可能需要重置配方
        var muls = 3600
        var data = [
            {
                //s ： 产物(可能多产物)
                //q ： 需求
                //n ： 数量(如果不提供就是1)
                //m ： 生产设备
                //t ： 生产时间(秒)
                s: [{ name: "宇宙矩阵" }], q:
                    [
                        { name: "蓝矩阵", n: 1 },
                        { name: "红矩阵", n: 1 },
                        { name: "黄矩阵", n: 1 },
                        { name: "紫矩阵", n: 1 },
                        { name: "绿矩阵", n: 1 },
                        { name: "反物质", n: 1 }
                    ], t: 15, m: "研究站", group: "产品"
            },

            {
                s: [{ name: "铁矿" }], q: [], m: "采矿机", t: 1
            },
            {
                s: [{ name: "铜矿" }], q: [], m: "采矿机", t: 1
            },
            {
                s: [{ name: "煤矿" }], q: [], m: "采矿机", t: 1
            },
            {
                s: [{ name: "石矿" }], q: [], m: "采矿机", t: 1
            },
            {
                s: [{ name: "钛石" }], q: [], m: "采矿机", t: 1
            },
            {
                s: [{ name: "原油" }], q: [], m: "原油萃取站", t: 1
            },
            {
                s: [{ name: "水" }], q: [], m: "抽水机", t: 1
            },
            {
                s: [{ name: "硅石" }], q: [], m: "采矿机", t: 1
            },
            {
                s: [{ name: "蓄电池满" }], q: [{ name: "蓄电池" }], m: "能量枢纽", t: 1
            },


            {
                s: [{ name: "蓝矩阵" }], q: [{ name: "磁线圈", n: 1 }, { name: "电路板", n: 1 }], t: 3, m: "研究站", group: "产品"
            },
            {
                s: [{ name: "红矩阵" }], q: [
                    { name: "高级石墨", n: 2 },
                    { name: "氢", n: 2 }
                ], t: 6, m: "研究站", group: "产品"
            },
            {
                s: [{ name: "黄矩阵" }], q: [
                    { name: "金刚石", n: 1 },
                    { name: "钛晶石", n: 1 }
                ], t: 8, m: "研究站", group: "产品"
            },
            {
                s: [{ name: "紫矩阵" }], q: [
                    { name: "处理器", n: 2 },
                    { name: "粒子带宽", n: 1 }
                ], t: 10, m: "研究站", group: "产品"
            },
            {
                s: [{ name: "绿矩阵", n: 2 }], q: [
                    { name: "量子芯片", n: 1 },
                    { name: "引力透镜", n: 1 }
                ], t: 24, m: "研究站", group: "产品"
            },

            {
                s: [{ name: "空间翘曲器", n: 8 }], group: "消耗品", m: "制作台", q: [
                    { name: "绿矩阵", n: 1 }
                ], t: 10
            },
            {
                s: [{ name: "空间翘曲器", n: 1 }], group: "消耗品", m: "制作台", q: [
                    { name: "引力透镜", n: 1 }
                ], t: 10
            },
            {
                s: [{ name: "氘核燃料棒", n: 2 }], group: "消耗品", m: "制作台", q: [
                    { name: "钛合金", n: 1 },
                    { name: "重氢", n: 20 },
                    { name: "超级磁场环", n: 1 }
                ], t: 12
            },
            {
                s: [{ name: "引力透镜", n: 1 }], group: "消耗品", m: "制作台", q: [
                    { name: "金刚石", n: 4 },
                    { name: "奇异物质", n: 1 }
                ], t: 6
            },





            {
                s: [{ name: "硅石" }], q: [{ name: "石矿", n: 10 }], m: "冶炼设备", t: 10
            },
            {
                s: [{ name: "铁块" }], group: "组件", m: "冶炼设备", q: [
                    { name: "铁矿", n: 1 }
                ], t: 1
            },
            {
                s: [{
                    name: "钢材"
                }
                ], group: "组件", m: "冶炼设备", q: [
                    { name: "铁块", n: 3 }
                ], t: 3
            },
            {
                s: [{ name: "钛块" }], group: "组件", m: "冶炼设备", q: [{ name: "钛石", n: 2 }], t: 2
            },
            {
                s: [{
                    name: "铜块"
                }], group: "组件", m: "冶炼设备", q: [
                    { name: "铜矿", n: 1 }
                ], t: 1
            },

            {
                s: [{ name: "磁铁" }], group: "组件", m: "冶炼设备", q: [
                    { name: "铁矿", n: 1 }
                ], t: 1.5
            },

            {
                s: [{ name: "磁线圈", n: 2 }], group: "组件", m: "制作台", q: [
                    { name: "磁铁", n: 2 },
                    { name: "铜块", n: 1 }
                ], t: 1
            },

            {
                s: [{ name: "电路板", n: 2 }], group: "组件", m: "制作台", q: [
                    { name: "铁块", n: 2 },
                    { name: "铜块", n: 1 }
                ], t: 1
            },

            {
                s: [{ name: "齿轮" }], group: "组件", m: "制作台", q: [
                    { name: "铁块", n: 1 }
                ], t: 1
            },

            {
                s: [{ name: "高级石墨" }], group: "组件", m: "冶炼设备", q: [
                    { name: "煤矿", n: 2 }
                ], t: 2
            },


            {
                s: [{ name: "氢" }, { name: "重氢" }], group: "组件", m: "轨道采集器2", q: [

                ], t: 1
            }, 
            {
                s: [{ name: "氢" }, { name: "精炼油", n: 2 }], group: "组件", m: "原油精炼机", q: [
                    { name: "原油", n: 2 }
                ], t: 4
            },

            {
                s: [{ name: "氢", n: 1 }, { name: "石墨烯", n: 2 }], group: "组件", m: "化工设备", q: [
                    { name: "可燃冰", n: 2 }


                ], t: 2
            },
             
            {
                s: [{ name: "可燃冰" }, { name: "氢" }], group: "组件", m: "轨道采集器", q: [

                ], t: 1
            },
            {
                s: [{ name: "可燃冰" }], group: "组件", m: "采矿机", q: [

                ], t: 1
            },
            {
                s: [{ name: "刺笋结晶" }], group: "组件", m: "采矿机", q: [

                ], t: 1
            },
            {
                s: [{ name: "玻璃", n: 1 }], group: "组件", m: "冶炼设备", q: [
                    { name: "石矿", n: 2 }
                ], t: 2
            },

            {
                s: [{ name: "棱镜", n: 2 }], group: "组件", m: "制作台", q: [
                    { name: "玻璃", n: 3 }
                ], t: 2
            },

            {
                s: [{ name: "高纯硅块", n: 1 }], group: "组件", m: "冶炼设备", q: [
                    { name: "硅石", n: 2 }
                ], t: 2
            },

            {
                s: [{ name: "微晶元件", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "高纯硅块", n: 2 },
                    { name: "铜块", n: 1 }
                ], t: 2
            },

            {
                s: [{ name: "处理器", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "电路板", n: 2 },
                    { name: "微晶元件", n: 2 }
                ], t: 3
            },

            {
                s: [{ name: "金刚石", n: 1 }], group: "组件", m: "冶炼设备", q: [
                    { name: "高级石墨", n: 1 }
                ], t: 2
            },

            {
                s: [{ name: "塑料", n: 1 }], group: "组件", m: "化工设备", q: [
                    { name: "精炼油", n: 2 },
                    { name: "高级石墨", n: 1 }
                ], t: 3
            },

            {
                s: [{ name: "有机晶体", n: 1 }], group: "组件", m: "化工设备", q: [
                    { name: "塑料", n: 2 },
                    { name: "精炼油", n: 1 },
                    { name: "水", n: 1 }
                ], t: 6
            },
            {
                s: [{ name: "有机晶体" }], group: "组件", m: "采矿机", q: [

                ], t: 1
            },
            {
                s: [{ name: "钛晶石", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "有机晶体", n: 1 },
                    { name: "钛块", n: 3 }
                ], t: 4
            },
            {
                s: [{ name: "晶格硅", n: 1 }], group: "组件", m: "冶炼设备", q: [
                    { name: "高纯硅块", n: 1 }
                ], t: 2
            },

            {
                s: [{ name: "石材", n: 1 }], group: "组件", m: "冶炼设备", q: [
                    { name: "石矿", n: 1 }
                ], t: 1
            },

            {
                s: [{ name: "电动机", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "铁块", n: 2 },
                    { name: "齿轮", n: 1 },
                    { name: "磁线圈", n: 1 }
                ], t: 2
            },
            {
                s: [{ name: "电磁涡轮", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "电动机", n: 2 },
                    { name: "磁线圈", n: 2 }
                ], t: 2
            },
            {
                s: [{ name: "硫酸", n: 4 }], group: "组件", m: "化工设备", q: [
                    { name: "精炼油", n: 6 },
                    { name: "石矿", n: 8 },
                    { name: "水", n: 4 }
                ], t: 6
            },
            {
                s: [{ name: "石墨烯", n: 2 }], group: "组件", m: "化工设备", q: [
                    { name: "硫酸", n: 1 },
                    { name: "高级石墨", n: 3 }
                ], t: 3
            },
            {
                s: [{ name: "碳纳米管", n: 2 }], group: "组件", m: "化工设备", q: [
                    { name: "石墨烯", n: 3 },
                    { name: "钛块", n: 1 }
                ], t: 4
            },

            {
                s: [{ name: "碳纳米管", n: 2 }], group: "组件", m: "化工设备", q: [
                    { name: "刺笋结晶", n: 2 }
                ], t: 4
            },

            {
                s: [{ name: "粒子带宽", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "碳纳米管", n: 2 },
                    { name: "晶格硅", n: 2 },
                    { name: "塑料", n: 1 }
                ], t: 8
            },
            {
                s: [{ name: "钛化玻璃", n: 2 }], group: "组件", m: "制作台", q: [
                    { name: "玻璃", n: 2 },
                    { name: "钛块", n: 2 },
                    { name: "水", n: 2 }
                ], t: 5
            }, {
                s: [{ name: "卡西米尔晶片", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "钛晶石", n: 1 },
                    { name: "石墨烯", n: 2 },
                    { name: "氢", n: 12 }
                ], t: 4
            }, {
                s: [{ name: "位面过滤器", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "卡西米尔晶片", n: 1 },
                    { name: "钛化玻璃", n: 2 }
                ], t: 12
            }
            , {
                s: [{ name: "量子芯片", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "处理器", n: 2 },
                    { name: "位面过滤器", n: 2 }
                ], t: 6
            }
            ,
            {
                s: [{ name: "粒子容器", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "电磁涡轮", n: 2 },
                    { name: "铜块", n: 2 },
                    { name: "石墨烯", n: 2 }
                ], t: 4
            },
            {
                s: [{ name: "重氢", n: 5 }], group: "组件", m: "粒子对撞机", q: [
                    { name: "氢", n: 10 }
                ], t: 5
            },
            {
                s: [{ name: "奇异物质", n: 1 }], group: "组件", m: "粒子对撞机", q: [
                    { name: "粒子容器", n: 2 },
                    { name: "铁块", n: 2 },
                    { name: "重氢", n: 10 }
                ], t: 8
            },
            {
                s: [{ name: "临界光子", n: 1 }], group: "组件", m: "射线接收塔", q: [
                ], t: 10
            },



            {
                s: [{ name: "反物质", n: 2 }, { name: "氢", n: 2 }], group: "组件", m: "粒子对撞机", q: [
                    { name: "临界光子", n: 2 }
                ], t: 2
            },

            {
                s: [{ name: "超级磁场环", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "电磁涡轮", n: 2 },
                    { name: "磁铁", n: 3 },
                    { name: "高级石墨", n: 1 }
                ], t: 3
            },
            {
                s: [{ name: "钛合金", n: 4 }], group: "组件", m: "冶炼设备", q: [
                    { name: "钛块", n: 4 },
                    { name: "钢材", n: 4 },
                    { name: "硫酸", n: 8 }
                ], t: 12
            },
            {
                s: [{ name: "电浆激发器", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "磁线圈", n: 4 },
                    { name: "棱镜", n: 2 }
                ], t: 2
            },
            {
                s: [{ name: "框架材料", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "碳纳米管", n: 4 },
                    { name: "钛合金", n: 1 },
                    { name: "高纯硅块", n: 1 }
                ], t: 6
            },

            {
                s: [{ name: "光子合并器", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "棱镜", n: 2 },
                    { name: "电路板", n: 1 }
                ], t: 3
            },
            {
                s: [{ name: "太阳帆", n: 2 }], group: "消耗品", m: "制作台", q: [
                    { name: "石墨烯", n: 1 },
                    { name: "光子合并器", n: 1 }
                ], t: 4
            },
            {
                s: [{ name: "戴森球组件", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "框架材料", n: 3 },
                    { name: "太阳帆", n: 3 },
                    { name: "处理器", n: 3 }
                ], t: 8
            },
            {
                s: [{ name: "小型运载火箭", n: 1 }], group: "消耗品", m: "制作台", q: [
                    { name: "戴森球组件", n: 2 },
                    { name: "氘核燃料棒", n: 4 },
                    { name: "量子芯片", n: 2 }
                ], t: 6
            },


            {
                s: [{ name: "硫酸", n: 1 }], group: "组件", m: "抽水机", q: [
                ], t: 1
            },
            {
                s: [{ name: "光栅石" }], q: [], m: "采矿机", t: 1
            }, {
                s: [{ name: "卡西米尔晶片", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "光栅石", n: 4 },
                    { name: "石墨烯", n: 2 },
                    { name: "氢", n: 12 }
                ], t: 4
            },
            {
                s: [{ name: "单极磁石" }], q: [], m: "采矿机", t: 1
            },
            {
                s: [{ name: "粒子容器", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "单极磁石", n: 10 },
                    { name: "铜块", n: 2 }
                ], t: 4
            },

            {
                s: [{ name: "金伯利矿石" }], q: [], m: "采矿机", t: 1
            },
            {
                s: [{ name: "金刚石", n: 2 }], group: "组件", m: "冶炼设备", q: [
                    { name: "金伯利矿石", n: 1 }
                ], t: 1.5
            },
            {
                s: [{ name: "分形硅石" }], q: [], m: "采矿机", t: 1
            },
            {
                s: [{ name: "晶格硅", n: 2 }], group: "组件", m: "制作台", q: [
                    { name: "分形硅石", n: 1 }
                ], t: 1.5
            },
            {
                s: [{ name: "地基", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "石材", n: 3 },
                    { name: "钢材", n: 1 }
                ], t: 1
            },
            {
                s: [{ name: "液氢燃料棒", n: 2 }], group: "组件", m: "制作台", q: [
                    { name: "钛块", n: 1 },
                    { name: "氢", n: 10 }
                ], t: 6
            },


            {
                s: [{ name: "电力感应塔", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "铁块", n: 2 },
                    { name: "磁线圈", n: 1 }
                ], t: 1
            },

            {
                s: [{ name: "无线输电塔", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "电力感应塔", n: 1 },
                    { name: "电浆激发器", n: 3 }
                ], t: 3
            },

            {
                s: [{ name: "卫星配电站", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "无线输电塔", n: 1 },
                    { name: "超级磁场环", n: 10 },
                    { name: "框架材料", n: 2 }
                ], t: 5
            },
            {
                s: [{ name: "风力涡轮机", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "铁块", n: 6 },
                    { name: "齿轮", n: 1 },
                    { name: "磁线圈", n: 3 }
                ], t: 4
            },
            {
                s: [{ name: "火力发电机", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "铁块", n: 10 },
                    { name: "石材", n: 4 },
                    { name: "齿轮", n: 4 },
                    { name: "磁线圈", n: 4 }
                ], t: 5
            },
            {
                s: [{ name: "传送带", n: 3 }], group: "建筑", m: "制作台", q: [
                    { name: "铁块", n: 2 },
                    { name: "齿轮", n: 1 }
                ], t: 1
            },
            {
                s: [{ name: "高速传送带", n: 3 }], group: "建筑", m: "制作台", q: [
                    { name: "传送带", n: 3 },
                    { name: "电磁涡轮", n: 1 }
                ], t: 1
            },
            {
                s: [{ name: "极速传送带", n: 3 }], group: "建筑", m: "制作台", q: [
                    { name: "高速传送带", n: 3 },
                    { name: "超级磁场环", n: 1 },
                    { name: "石墨烯", n: 1 }
                ], t: 1
            },
            {
                s: [{ name: "小型储物仓", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "铁块", n: 4 },
                    { name: "石材", n: 4 }
                ], t: 2
            },
            {
                s: [{ name: "大型储物仓", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "钢材", n: 8 },
                    { name: "石材", n: 8 }
                ], t: 4
            },
            {
                s: [{ name: "太阳能板", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "高纯硅块", n: 10 },
                    { name: "铜块", n: 10 },
                    { name: "电路板", n: 5 }
                ], t: 6
            },

            {
                s: [{ name: "蓄电池", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "铁块", n: 6 },
                    { name: "超级磁场环", n: 1 },
                    { name: "晶格硅", n: 6 }
                ], t: 5
            },

            {
                s: [{ name: "射线接收站", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钢材", n: 20 },
                    { name: "高纯硅块", n: 20 },
                    { name: "光子合并器", n: 10 },
                    { name: "处理器", n: 5 },
                    { name: "超级磁场环", n: 20 }
                ], t: 8
            },

            {
                s: [{ name: "微型聚变发电站", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钛合金", n: 12 },
                    { name: "超级磁场环", n: 10 },
                    { name: "碳纳米管", n: 8 },
                    { name: "处理器", n: 4 }
                ], t: 10
            },
            {
                s: [{ name: "能量枢纽", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钢材", n: 40 },
                    { name: "钛合金", n: 40 },
                    { name: "处理器", n: 40 },
                    { name: "粒子容器", n: 8 }
                ], t: 15
            },
            {
                s: [{ name: "储液灌", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "铁块", n: 8 },
                    { name: "石材", n: 4 },
                    { name: "玻璃", n: 4 }
                ], t: 2
            },


            {
                s: [{ name: "分拣器" }], group: "组件", m: "制作台", q: [
                    { name: "铁块", n: 1 },
                    { name: "电路板", n: 1 }
                ], t: 1
            },
            {
                s: [{ name: "高速分拣器", n: 2 }], group: "组件", m: "制作台", q: [
                    { name: "分拣器", n: 2 },
                    { name: "电动机", n: 1 }
                ], t: 1
            },

            {
                s: [{ name: "极速分拣器", n: 2 }], group: "组件", m: "制作台", q: [
                    { name: "高速分拣器", n: 2 },
                    { name: "电磁涡轮", n: 1 }
                ], t: 1
            },
            {
                s: [{ name: "采矿机", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "铁块", n: 4 },
                    { name: "电路板", n: 2 },
                    { name: "磁线圈", n: 2 },
                    { name: "齿轮", n: 2 }
                ], t: 3
            },
            {
                s: [{ name: "抽水机", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "铁块", n: 8 },
                    { name: "石材", n: 4 },
                    { name: "电动机", n: 4 },
                    { name: "电路板", n: 2 }
                ], t: 4
            },
            {
                s: [{ name: "原油萃取站", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "钢材", n: 12 },
                    { name: "石材", n: 12 },
                    { name: "电路板", n: 6 },
                    { name: "电浆激发器", n: 4 }
                ], t: 8
            },
            {
                s: [{ name: "原油精炼厂", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "钢材", n: 10 },
                    { name: "石材", n: 10 },
                    { name: "电路板", n: 6 },
                    { name: "电浆激发器", n: 6 }
                ], t: 6
            },
            {
                s: [{ name: "垂直发射井", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "钛合金", n: 80 },
                    { name: "框架材料", n: 30 },
                    { name: "引力透镜", n: 20 },
                    { name: "量子芯片", n: 10 }
                ], t: 30
            },


            {
                s: [{ name: "四向分流器", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "铁块", n: 3 },
                    { name: "齿轮", n: 2 },
                    { name: "电路板", n: 1 }
                ], t: 2
            },


            {
                s: [{ name: "制作台Mk.Ⅰ", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "铁块", n: 4 },
                    { name: "齿轮", n: 8 },
                    { name: "电路板", n: 4 }
                ], t: 2
            },
            {
                s: [{ name: "制作台Mk.Ⅱ", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "制作台Mk.Ⅰ", n: 1 },
                    { name: "石墨烯", n: 8 },
                    { name: "处理器", n: 4 }
                ], t: 3
            },
            {
                s: [{ name: "制作台Mk.Ⅲ", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "制作台Mk.Ⅱ", n: 1 },
                    { name: "粒子带宽", n: 8 },
                    { name: "量子芯片", n: 2 }
                ], t: 4
            },
            {
                s: [{ name: "制作台Mk.Ⅲ", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "制作台Mk.Ⅱ", n: 1 },
                    { name: "粒子带宽", n: 8 },
                    { name: "量子芯片", n: 2 }
                ], t: 4
            },
            {
                s: [{ name: "电弧熔炉", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "铁块", n: 4 },
                    { name: "石材", n: 2 },
                    { name: "电路板", n: 4 },
                    { name: "磁线圈", n: 2 }
                ], t: 3
            },
			{
			    s: [{ name: "位面熔炉", n: 1 }], group: "建筑", m: "制作台", q: [
			        { name: "电弧熔炉", n: 1 },
			        { name: "框架材料", n: 5 },
			        { name: "位面过滤器", n: 4 },
			        { name: "单极磁石", n: 15 }
			    ], t: 5
			},
            {
                s: [{ name: "分馏塔", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钢材", n: 8 },
                    { name: "石材", n: 4 },
                    { name: "玻璃", n: 4 },
                    { name: "处理器", n: 1 }
                ], t: 3
            },
            {
                s: [{ name: "化工厂", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钢材", n: 8 },
                    { name: "石材", n: 8 },
                    { name: "玻璃", n: 8 },
                    { name: "电路板", n: 2 }
                ], t: 5
            },
            {
                s: [{ name: "矩阵研究站", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "铁块", n: 8 },
                    { name: "玻璃", n: 4 },
                    { name: "电路板", n: 4 },
                    { name: "磁线圈", n: 4 }
                ], t: 3
            },
            {
                s: [{ name: "电磁轨道弹射器", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钢材", n: 20 },
                    { name: "齿轮", n: 20 },
                    { name: "处理器", n: 5 },
                    { name: "超级磁场环", n: 10 }
                ], t: 6
            },
            {
                s: [{ name: "行星内物流运输站", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钢材", n: 40 },
                    { name: "钛块", n: 40 },
                    { name: "处理器", n: 40 },
                    { name: "粒子容器", n: 20 }
                ], t: 20
            },
            {
                s: [{ name: "微型粒子对撞机", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钛合金", n: 20 },
                    { name: "框架材料", n: 20 },
                    { name: "超级磁场环", n: 50 },
                    { name: "石墨烯", n: 10 },
                    { name: "处理器", n: 8 }
                ], t: 15
            },
            {
                s: [{ name: "星际物流运输站", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "行星内物流运输站", n: 1 },
                    { name: "钛合金", n: 40 },
                    { name: "粒子容器", n: 20 }
                ], t: 30
            },
            {
                s: [{ name: "加力推进器", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钛合金", n: 5 },
                    { name: "电磁涡轮", n: 5 }
                ], t: 6
            },
            {
                s: [{ name: "轨道采集器", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "星际物流运输站", n: 1 },
                    { name: "超级磁场环", n: 50 },
                    { name: "加力推进器", n: 20 },
                    { name: "蓄电池满", n: 20 }
                ], t: 30
            },
            {
                s: [{ name: "推进器", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钢材", n: 2 },
                    { name: "铜块", n: 3 }
                ], t: 4
            },
            {
                s: [{ name: "物流运输机", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "铁块", n: 5 },
                    { name: "处理器", n: 2 },
                    { name: "推进器", n: 2 }
                ], t: 4
            },
            {
                s: [{ name: "星际物流运输机", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钛合金", n: 10 },
                    { name: "处理器", n: 10 },
                    { name: "加力推进器", n: 2 }
                ], t: 6
            },


            {
                s: [{ name: "光子合并器", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "光栅石", n: 1 },
                    { name: "电路板", n: 1 }
                ], t: 3
            },


            {
                s: [{ name: "湮灭约束球", n: 1 }], group: "组件", m: "制作台", q: [
                    { name: "粒子容器", n: 1 },
                    { name: "处理器", n: 1 }
                ], t: 20
            },


            {
                s: [{ name: "反物质燃烧棒", n: 2 }], group: "消耗品", m: "制作台", q: [
                    { name: "反物质", n: 12 },
                    { name: "氢", n: 12 },
                    { name: "湮灭约束球", n: 1 },
                    { name: "钛合金", n: 1 }
                ], t: 24
            },


            {
                s: [{ name: "人造恒星", n: 1 }], group: "建筑", m: "制作台", q: [
                    { name: "钛合金", n: 20 },
                    { name: "框架材料", n: 20 },
                    { name: "湮灭约束球", n: 10 },
                    { name: "量子芯片", n: 10 }
                ], t: 30
            },


            {
                s: [{ name: "氢", n: 1 }, { name: "高级石墨", n: 1 }], group: "组件", m: "原油精炼机", q: [
                    { name: "精炼油", n: 1 }
                ], t: 4
            },


            {
                s: [{ name: "临界光子", n: 1 }], group: "组件", m: "射线接收塔", q: [
                    { name: "引力透镜", n: 0.025 }
                ], t: 5
            },

            {
                s: [{ name: "重氢", n: 0.01 }, { name: "氢", n: 0.99 }], group: "组件", m: "分馏塔", q: [
                    { name: "氢", n: 1 }
                ], t: 1
            },
        ];

        var energyData = {};
        energyData["研究站"] = 0.48;
        energyData["制作台Mk.Ⅰ"] = 0.27;
        energyData["制作台Mk.Ⅱ"] = 0.54;
        energyData["制作台Mk.Ⅲ"] = 1.08;
        energyData["电弧熔炉"] = 0.36;
        energyData["位面熔炉"] = 1.44;
        energyData["矿脉"] = 0.42 / 6;
        energyData["采矿机"] = 0.42;
        energyData["原油萃取站"] = 0.84;
        energyData["抽水机"] = 0.3;
        energyData["原油精炼机"] = 0.96;
        energyData["化工厂"] = 0.72;
        energyData["粒子对撞机"] = 12;
        energyData["轨道采集器"] = 0;
        energyData["射线接收塔"] = 0;
        energyData["能量枢纽"] = 0;
        energyData["分馏塔"] = 0.72;


       

        var version = "081";

        function f_initData() {

  

            $(data).each(function (i, item) {
                item.id = i;//配方的id，用index设置，data改变时应该重置配方

                var ms = [];
                if (item.m == "研究站") {
                    ms = [
                        { name: "研究站", speed: 1 }
                    ];
                }
                if (item.m == "制作台") {
                    ms = [
                        { name: "制作台Mk.Ⅰ", speed: 0.75 },
                        { name: "制作台Mk.Ⅱ", speed: 1 },
                        { name: "制作台Mk.Ⅲ", speed: 1.5 }
                    ];
                }

                if (item.m == "冶炼设备") {
                    ms = [
                        { name: "电弧熔炉", speed: 1 },
                        { name: "位面熔炉", speed: 2 },
                    ];
                }
                if (item.m == "采矿机") {
                    ms = [
                        { name: "采矿机", speed: 0.5 * 6 },
                        { name: "矿脉", speed: 0.5 * 1 }
                    ];
                }
                if (item.m == "能量枢纽") {
                    ms = [
                        { name: "能量枢纽", speed: 1 }
                    ];
                }




                if (item.m == "原油萃取站") {
                    ms = [
                        { name: "原油萃取站", speed: 4 }
                    ];
                }
                if (item.m == "抽水机") {
                    ms = [
                        { name: "抽水机", speed: 50 / 60 }
                    ];
                }


                if (item.m == "原油精炼机") {
                    ms = [
                        { name: "原油精炼机", speed: 1 }
                    ];
                }
                if (item.m == "化工设备") {
                    ms = [
                        { name: "化工厂", speed: 1 }
                    ];
                }
                if (item.m == "粒子对撞机") {
                    ms = [
                        { name: "粒子对撞机", speed: 1 }
                    ];
                }
                if (item.m == "轨道采集器") {
                    ms = [ 
                        { name: "轨道采集器(巨冰)", speed: 1 }
                    ];
                }
                if (item.m == "轨道采集器2") {
                    ms = [
                        { name: "轨道采集器(气态)", speed: 1 } 
                    ];
                }



                if (item.m == "射线接收塔") {
                    ms = [
                        { name: "射线接收塔", speed: 1 }
                    ];
                }

                if (item.m == "分馏塔") {
                    ms = [
                        { name: "分馏塔", speed: 30 }
                    ];
                }

                item.mName = item.m;
                item.m = ms;

            });
            // console.log(data);
        }
        var pointLength = 1;
        var settingsLocal = {};//不存储cookie
        var settings = {};
        function saveSetting() {
            $.cookie('machine_settings' + version, JSON.stringify(settings));
        }
        function loadSetting() {
            var json = $.cookie('machine_settings' + version);
            if (json) {
                eval("settings = " + json);
            }
        }
        var settings_time = {};
        function saveSettingTime() {
            $.cookie('machine_settings_time' + version, JSON.stringify(settings_time));
        }
        function loadSettingTime() {
            var json = $.cookie('machine_settings_time' + version);
            if (json) {
                eval("settings_time = " + json);
            }
        }
        var settings_pf = {};
        function saveSettingPf() {
            $.cookie('machine_settings_pf' + version, JSON.stringify(settings_pf));
        }
        function loadSettingPf() {
            var json = $.cookie('machine_settings_pf' + version);
            if (json) {
                eval("settings_pf = " + json);
            }
        }
        var projects = [];
        function saveSettingProjects() {
            $.cookie('settings_projects' + version, JSON.stringify(projects));
        }
        function loadSettingProjects() {
            var json = $.cookie('settings_projects' + version);
            if (json) {
                eval("projects = " + json);
            }
        }
        //获取配方默认的机器
        function getMachine(arg) {
            var item = typeof (arg) == "string" ? find(arg) : arg;
            if (!item) return null;
            var machine = settings[item.id] || null;
            if (machine != null) return machine;

            machine = settingsLocal[item.id] || null;
            if (machine != null) return machine;

            return item.m[0].name;
        }
        //获取时间  参数
        function getValue(arg) {
            var item = typeof (arg) == "string" ? find(arg) : arg;
            if (!item) return null;
            var machine = getMachine(item);
            var speed = settings_time[machine];

            if (speed) {
                return {
                    name: machine, t: item.t, speed: speed, time: item.t / speed, isChange: true
                }
            }
            for (var i = 0; i < item.m.length; i++) {
                var m = item.m[i];
                if (m.name == machine) {
                    return {
                        name: m.name, t: item.t, speed: m.speed, time: item.t / m.speed
                    }
                }
            }
            m = item.m[0];
            return {
                name: m.name, t: item.t, speed: m.speed, time: item.t / m.speed
            }
        }

        var currentItem = null;

        //要计算的目标
        var xqs = [

        ];
        //独立生产 [{ id :"配方id",number : 1 }] 配置了这个，将独立生产以后再计算其他
        var singleMake = [

        ];

        var xqss = [];
        var game_data = {};
        var isDataLoaded = false;
        $(function () {
            $.ajax({
                url: "./Scripts/data.json?v" + version,
                dataType: "json",
                timeout: 1000000,
                success: function (data) {
                    game_data = data;
                    isDataLoaded = true;
                    f_initIcons();
                },
                error: function () {
                    alert("游戏资源加载失败，图标将无法显示正常，请刷新再试");
                }
            });

            f_init();
        });

        function getGroup() {
            var groups = [];
            $(data).each(function (i, item) {
                if (!item.group) return;

                if ($.inArray(item.group, groups) == -1) {
                    groups.push(item.group);
                }
            });
            return groups;
        }


        function f_fillData() {
            var names = [];

            $(getGroup()).each(function (i, group) {
                var jgroup = $("<optgroup label='" + group + "'></optgroup>");
                $(data).each(function (i, item) {
                    var name = item.name;
                    if (item.group == group) {

                        for (var j = 0; j < item.s.length; j++) {
                            if ($.inArray(item.s[j].name, names) == -1) {
                                names.push(item.s[j].name);
                                jgroup.append("<option value='" + item.s[j].name + "'>" + item.s[j].name + "</option>");
                            }

                        }

                    }

                });
                $("#seldata").append(jgroup);
            });


            for (var i = 1; i < 200; i = i + 1) {
                $("#selmaince").append("<option value='" + i + "'>需要" + i + "个设备</option>");
            }
            //for (var i = 110; i < 1000; i = i + 10) {
            //    $("#selore").append("<option value='" + i / 100 + "'>" + i + "%</option>");
            //}
        }
        //找到这个物品的配方
        function getPfs(name) {
            var pfs = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                for (var j = 0; j < item.s.length; j++) {
                    if (item.s[j].name == name) {
                        var pf = $.extend(true, {}, item);
                        pfs.push(pf);

                    }
                }
            }
            return pfs;
        }
        function getPfsByQ(name) {
            var pfs = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                for (var j = 0; item.q && j < item.q.length; j++) {
                    if (item.q[j].name == name) {
                        var pf = $.extend(true, {}, item);
                        pfs.push(pf);
                    }
                }
            }
            return pfs;
        }
        function getIconImg(name) {
            var title = [];
            if (name == "研究站") name = "矩阵研究站";
            if (name == "电弧熔炉") name = "电弧熔炉";
			if (name == "位面熔炉") name = "位面熔炉";
            if (name == "原油精炼机") name = "原油精炼厂";
            if (name == "粒子对撞机") name = "微型粒子对撞机";
            if (name == "射线接收塔") name = "射线接收站";
            if (name == "轨道采集器(气态)") name = "轨道采集器";
            if (name == "轨道采集器(巨冰)") name = "轨道采集器";
            
            if (icons[name]) {
                title.push("<img class='sicon' src='data:image/png;base64," + icons[name] + "' title='" + name + "' />");
            } else {
                title.push(name);
            }
            return title.join("");
        }
        function getIconShow(name, number) {
            var title = [];
            title.push(getIconImg(name));
            title.push("<sub>" + number.toFixed(2) + "</sub>");

            return title.join("");
        }
        function getPfTitle(item,info) {
            var title = [];
            for (var j = 0; j < item.q.length; j++) {
                title.push(getIconShow(item.q[j].name, item.q[j].n || 1));

                if (info && $("#showMaxOneBelt").get(0).checked) {
                    var number = 1800 / (60 / (item.t || 1) * info.speed * (item.q[j].n || 1));
                    title.push("<sub class='maxOneBelt'>" + number.toFixed(pointLength));
                    title.push("</sub>");
                }
            }

            if (item.q.length) {
                title.push('<img class="to" src="./img/to.png" />');
            }
            for (var j = 0; j < item.s.length; j++) {
                title.push(getIconShow(item.s[j].name, item.s[j].n || 1));


                if (info && $("#showMaxOneBelt").get(0).checked) {
                    var number = 1800 / (60 / (item.t || 1) * info.speed * (item.s[j].n || 1));
                    title.push("<sub class='maxOneBelt'>" + number.toFixed(pointLength));
                    title.push("</sub>");
                }

            }
            title.push("(" + (item.t || 1).toFixed(1) + "s)");


            return title.join(" ");

        }

        //找到这个物品的配方(同时赋值s[XX]里的 t 和 n )
        function find(name) {
            function get(item) {
                for (var j = 0; j < item.s.length; j++) {
                    if (item.s[j].name == name) {
                        var o = $.extend(true, {}, item);
                        $.extend(o, item.s[j]);
                        return o;
                    }
                }
            }

            var pf = settings_pf[name];
            if (pf) {
                return get(data[parseInt(pf)]);
            }

            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                for (var j = 0; j < item.s.length; j++) {
                    if (item.s[j].name == name) {


                        return get(item);
                    }
                }
            }
        }


        function f_add3() {

            var value = $("#seldata").val();
            currentItem = find(value);
            var number = parseInt($("#txtnumber").val())*muls/60;
            var v = $("#selmaince").val();
            if (v) {
                var info = getValue(currentItem);
                for (var i = 0; i < currentItem.s.length; i++) {
                    if (currentItem.s[i].name == value) {
                        number = parseInt(v) * 60 / (currentItem.t || 1) * info.speed * (currentItem.s[i].n || 1);
                    }
                }
            }

            addItem(currentItem, number);
        }
        function addItem(item, number) {

            xqs.push({
                item: item,
                number: number
            });

            update_all();
        }



        var app = null;
        function f_init() {

            app = new Vue({
                el: '#result',
                data: {
                    totalEnergy: 0,
                    total: [],
                    xqs: [],
                    icons: icons,
                    items: [],
                    items2: [],
                    items0: [],
                    ig_names: []
                },
                methods: {

                    speedChange: function (item) {

                        settings_time[item.machineName] = parseFloat(item.speed);
                        saveSettingTime();
                        update_all();
                    }
                }
            });
            f_initData();
            f_fillData();
            doSpeed1();
            update_all();
            loadSetting();
            loadSettingTime();
            loadSettingPf();
            loadSettingProjects();

            projectsUpdate();
            $("#btnAdd3").click(f_add3); 
            $("#btnReset2").click(function () {
                settings = {};
                saveSetting();
                update_all();
            });

            $("#btnReset3").click(function () {
                settings_time = {};
                saveSettingTime();
                update_all();
            });
            $("#selore").change(function () {

                $(data).each(function () {
                    if (this.m) {
                        for (var i = 0; i < this.m.length; i++) {
                            if (this.m[i].name == "矿脉") {
                                this.m[i].speed = Math.min(0.5 * 1 *0.01* parseFloat($("#selore").val()),30);
                            } if (this.m[i].name == "采矿机") {
                                this.m[i].speed = Math.min(0.5 * 6 * 0.01 * parseFloat($("#selore").val()),30);
                            } if (this.m[i].name == "抽水机") {
                                this.m[i].speed = Math.min(50 * 0.01 * parseFloat($("#selore").val()) / 60, 30);
                            }  
                        }
                    }

                });
                doSpeed1();
                update_all();

            });
            $("#btnSetting").click(function () {

                $("#MoreSetting").toggle();
            })
            $("#showMaxOneBelt").change(function () {
                update_all();
            })
            $("#pointLength").change(function () {
                pointLength = parseInt($(this).val());
                update_all();
            });
            $("#fractionatorSpeed").change(function () {
                $(data).each(function () {
                    if (this.m) {
                        for (var i = 0; i < this.m.length; i++) {
                            if (this.m[i].name == "分馏塔") {
                                this.m[i].speed = parseFloat($("#fractionatorSpeed").val()) / (0.01 * 60);
                            }
                        }
                    } 
                });
                update_all();
            });
            $("#oilSpeed").change(function () {
                $(data).each(function () {
                    if (this.m) {
                        for (var i = 0; i < this.m.length; i++) {
                            if (this.m[i].name == "原油萃取站") {
                                this.m[i].speed = parseFloat($("#oilSpeed").val());
                            }
                        }
                    } 
                });
                update_all();
            });
            $("#gzSpeed").change(function () {
                $(data).each(function () {
                    if (this.s && this.s[0].name == "临界光子") {
                        if (this.m) {
                            for (var i = 0; i < this.m.length; i++) {
                                if (this.m[i].name == "射线接收塔") {
                                    this.t = 60 / parseFloat($("#gzSpeed").val()) * (this.q && this.q.length ? 0.5 : 1);
                                }
                            }
                        }
                    }
                });
                update_all();
            }); 

                            /*产量：可燃冰 0.65/s 氢0.25/s
每分钟采集物=60*产量*采矿作业速度*8（这是大佬量化表的现状）
可燃冰 60*0.65*110%*8=343.2
氢气 60*0.25*110%*8=132
供电消耗是按产出物的总能量占比计算的
供电占比=产量*能量/总能量
可燃冰占比=0.65*4.8/（0.65*4.8+0.25*8）=60.9%
氢气占比=0.25*8/（0.65*4.8+0.25*8）=39.1%
每分钟供电消耗=60*采集器功率*供电占比/采集物能量
可燃冰供电消耗=60*30*60.9%/4.8=228.5
氢气供电消耗=60*30*39.1%/8=87.9
实际产出=每分钟采集-供电消耗
可燃冰=343.2-228.5=114.7
氢气=132-87.9=44.1*/

            function doSpeed1() {
                 
                var speed1_1 = parseFloat($("#speed1_1").val());
                var speed1_2 = parseFloat($("#speed1_2").val());
                var speed1_3 = parseFloat($("#speed1_3").val());
                var speed1_4 = parseFloat($("#speed1_4").val());
                var ore = parseFloat($("#selore").val());

                function getSum(value1, value2, p1, p2) {
                    var sum = 0;
                     
                    sum = 60 * value1 * 0.01 * ore * 8;
                    var per = value1 * p1 / (value1 * p1 + value2 * p2);
                    sum -= 60 * 30 * per / p1;
                     
                    return sum;
                }
                $(data).each(function () {
                    if (!this.m) return;
                    if (this.m[0].name == "轨道采集器(气态)") {
                        for (var i = 0; i < this.s.length; i++) {
                            if (this.s[i].name == "氢") { 
                                this.s[i].n = getSum(speed1_1, speed1_2, 8, 8) / 60;
                            } else if (this.s[i].name == "重氢") { 
                                this.s[i].n = getSum(speed1_2, speed1_1, 8, 8) / 60;
                            }
                        }
                    }
                    else if (this.m[0].name == "轨道采集器(巨冰)") {
                        for (var i = 0; i < this.s.length; i++) {
                            if (this.s[i].name == "氢") {
                                this.s[i].n = getSum(speed1_4, speed1_3, 8, 4.8) / 60;
                            } else if (this.s[i].name == "可燃冰") { 
                                this.s[i].n = getSum(speed1_3, speed1_4, 4.8, 8) / 60;
                            }
                        }
                    }
                });
            }

            $(".speed1").change(function () {
                doSpeed1();
                update_all();
            });

            $("#btnReset4").click(function () {
                settings_pf = {};
                saveSettingPf();
                update_all();
            });
            $("#btnReset5").click(function () {
                projects = [];
                saveSettingProjects();
                projectsUpdate();
            });
            $("#btnLoadProject").click(function () {

                var value = $("#selprojects").val();
                if (!value) return;
                for (var i = 0; i < projects.length; i++) {
                    if (projects[i].name == value) {
                        xqs = projects[i].value;
                        singleMake = projects[i].singleMake || [];
                        ig_names = projects[i].ig_names || [];
                        update_all();
                        return;
                    }
                }
            });
            $("#selmodein").change(function () {
                var value = $("#selmodein").val();
                $(data).each(function () {
                    if (this.mName == "制作台") {
                        settingsLocal[this.id] = value;
                    }
                });

                saveSetting();
                update_all();
            });
			$("#furnace").change(function () {
			    var value = $("#furnace").val();
			    $(data).each(function () {
			        if (this.mName == "冶炼设备") {
			            settingsLocal[this.id] = value;
			        }
			    });
			
			    saveSetting();
			    update_all();
			});
            $("#isMerge").change(function () {
                update_all();
            });
            $("#hideSource").change(function () {
                update_all();
            });
            $(document).click(function (e) {
                var jname = null;
                if ($(e.target).is(".cell-name")) {
                    jname = $(e.target);
                }
                if ($(e.target).parent().is(".cell-name")) {
                    jname = $(e.target).parent();
                }
                if ($(e.target).parent().parent().is(".cell-name")) {
                    jname = $(e.target).parent().parent();
                }
                if (jname) {
                    var msgs = [];
                    var name = jname.attr("data-name");
                    msgs.push("<p>" + name + "</p>");
                    msgs.push("<p>生产于：</p>");
                    var pfs = getPfs(name);
                    for (var i = 0; i < pfs.length; i++) {
                        var title = getPfTitle(pfs[i]);
                        msgs.push("<p><a class='pf pf2'>" + title + "</a></p>");
                    }
                    pfs = getPfsByQ(name);
                    if (pfs && pfs.length) {
                        msgs.push("<p>作为原料可生产：</p>");

                        for (var i = 0; i < pfs.length; i++) {
                            var title = getPfTitle(pfs[i]);
                            msgs.push("<p><a class='pf pf2'>" + title + "</a></p>");
                        }
                    }

                    jname.tips({
                        side: 3,  //1,2,3,4 分别代表 上右下左
                        msg: msgs.join(""),
                        color: '#FFF',//文字颜色，默认为白色
                        bg: '#4A5C72',//背景色，默认为红色
                        time: 2,
                        x: 0,
                        y: 0
                    });
                }


            });
        }

        var single_list = []; //独立生产
        var xh_list = [];
        var out_list = [];

        function addXH(name, value) {
            for (var i = 0; i < xh_list.length; i++) {
                var item = xh_list[i];
                if (item.name == name) {
                    item.value += value;  //需求
                    return;
                }
            }
            xh_list.push({ name: name, value: value });
        }
        function addOut(name, value) {
            for (var i = 0; i < out_list.length; i++) {
                var item = out_list[i];
                if (item.name == name) {
                    item.value += value;  //需求
                    return;
                }
            }
            out_list.push({ name: name, value: value });
        }
        function findOut(name) {
            for (var i = 0; i < out_list.length; i++) {
                var item = out_list[i];
                if (item.name == name) {
                    return item.value;
                }
            }
            return null;
        }
        //其他产出是否包括在原料里面(如某配方 原料和产物都有氢)
        function getSameNameWithSource(item, itemName) {
            for (var i = 0; i < item.s.length; i++) {
                if (item.s[i].name != itemName) {
                    for (var j = 0; item.q && j < item.q.length; j++) {
                        var q = item.q[j];
                        if (q.name == item.s[i].name) {
                            return q.name;
                        }
                    }
                }
            }
            return null;
        }
        var ig_names = [];//排除的物品
        //加载需求
        function loadNumber(itemName, n) {
            try { 
                var item = find(itemName);
                var info = getValue(itemName);
                var sameName = getSameNameWithSource(item, itemName);
                if (sameName) {
                    for (var i = 0; i < item.s.length; i++) {
                        if (item.s[i].name == sameName) {
                            for (var j = 0; item.q && j < item.q.length; j++) {
                                var q = item.q[j];
                                if (q.name == sameName) {
                                    var minNumber = Math.min(q.n || 1, item.s[i].n || 1);
                                    q.n = (q.n || 1) - minNumber;
                                    item.s[i].n = (item.s[i].n || 1) - minNumber; //抵消
                                }
                            }
                        }
                    }
                }

                addXH(itemName, n);
                for (var i = 0; i < item.s.length; i++) {
                    if (item.s[i].name != itemName) {
                        if (item.s[i].n === 0) continue;
                        addOut(item.s[i].name, -1 * n * (item.s[i].n || 1) / (item.n || 1));
                    }
                }
                for (var i = 0; item.q && i < item.q.length; i++) {
                    var q = item.q[i];
                    if ($.inArray(q.name, ig_names) != -1) {
                        continue;
                    }
                    if (q.n === 0) continue;
                    //如果配方产物和原料有相同的
                    if (q.name == itemName) {
                        //addXH(itemName, -1 * n * (q.n || 1) / (item.n || 1));
                    } else {
                        loadNumber(q.name, n * (q.n || 1) / (item.n || 1));
                    }
                }
            } catch (e) {
                // console.log(itemName);
                throw e;
            }

        }
        //处理多产出
        function getXhs(itemId) {
            var xhs = [];
            for (var i = 0; i < xh_list.length; i++) {
                var xh = xh_list[i];
                if (!xh.value) continue;
                var itemName = xh.name;
                var item = find(itemName);
                if (item.id == itemId) xhs.push(xh);
            }
            return xhs;
        }
        function doMergeMul(xhs) {
            var maxValue2Index = -1;
            var max = 0;
            for (var i = 0; i < xhs.length; i++) {
                if (xhs[i].value2 > max) maxValue2Index = i;
            }
            
            for (var i = 0; i < xhs.length; i++) {
                if (i != maxValue2Index && xhs[i].value2 > 0) {
                    var number = xhs[i].value;
                    xhs[i].value2 = 0;
                    var item = find(xhs[i].name);
                    for (var j = 0; j < item.s.length; j++) {
                        addOut(item.s[j].name, number * (item.s[j].n || 1) / (item.n || 1));
                    }
                }
            }

            
        }
        function mergeMul() {
            var gs = [];
            var ids = [];
            for (var i = 0; i < xh_list.length; i++) {
                var xh = xh_list[i];
                if (!xh.value) continue;
                var itemName = xh.name;
                var item = find(itemName);
                if ($.inArray(item.id, ids) != -1) continue;
                var xhs = getXhs(item.id);

                if (xhs.length > 1) {
                    gs.push(xhs);
                    ids.push(item.id);

                }
            }
            // console.log(gs); //gs:分组
            for (var i = 0; i < gs.length; i++) {
                doMergeMul(gs[i]);
            }
        }

        function checkResult() {
            //当前设备数量是否会 出现几个产出都多余，比如氢-120 精炼油-120，那么应该把设备调整到合适数量
            function isOverflow(item, info,nn) {
                for (var j = 0; j < item.s.length; j++) {
                    var x = findOut(item.s[j].name);
                    if (x == null) return false;
                    var mn = nn * 60 / item.t * info.speed * (item.s[j].n || 1); //1分钟1个设备产量 
                    if (x > -1 * mn) return false;
                }
                return true;
            }

            for (var i = 0; i < xh_list.length; i++) {
                var number = xh_list[i].value;
                var item = find(xh_list[i].name);
                var info = getValue(item); 
                var nn = 1;
                if (xh_list[i].value2 < 1) {
                    nn = xh_list[i].value2;
                }

                while (isOverflow(item, info,nn) && xh_list[i].value2 > 0) { //直到满足条件
                      
                    if (xh_list[i].value2 < 1) {
                        nn = xh_list[i].value2;
                    }
                    xh_list[i].value2 = xh_list[i].value2 - nn;//调整数量
                    for (var j = 0; j < item.s.length; j++) {
                        var mn = nn * 60 / item.t * info.speed * (item.s[j].n || 1); //1分钟1个设备产量 
                        addOut(item.s[j].name, mn);
                    }
                    if (xh_list[i].value2 < 1) {
                        nn = xh_list[i].value2;
                    }
                    //console.log(JSON.stringify(out_list));
                }
            }
        }
        function update_all() {

            var outResult = [];
            xh_list = [];
            out_list = [];
            single_list = [];

            for (var m = 0; m < singleMake.length; m++) {
                var item = data[singleMake[m].id];//配方
                var info = getValue(item);
                var times = 60 * parseInt(singleMake[m].number) * info.speed / (item.t || 1);

                for (var i = 0; i < item.s.length; i++) {
                    single_list.push({
                        id: singleMake[m].id,
                        number: singleMake[m].number,
                        name: item.s[i].name,
                        mName: info.name,
                        value: times * (item.s[i].n || 1)
                    });
                    loadNumber(item.s[i].name, -1 * times * (item.s[i].n || 1));
                }
                for (var j = 0; item.q && j < item.q.length; j++) {
                    loadNumber(item.q[j].name, times * (item.q[j].n || 1));
                }

            }
            for (var m = 0; m < xqs.length; m++) {
                var currentItem = xqs[m].item;
                loadNumber(currentItem.name, xqs[m].number);
            }
             
            function isXqs(name) {
                for (var m = 0; m < xqs.length; m++) {
                    if (xqs[m].item.name == name) return true;
                }
                return false;
            } 
            var items0 = [];
            var items = [];
            var items2 = [];
            for (var i = 0; i < xh_list.length; i++) {
                var xh = xh_list[i];
                if (!xh.value) continue;
                var itemName = xh.name;
                var item = find(itemName);
                var info = getValue(itemName);
                if (xh.value > 0) {
                    xh.value2 = xh.value / (1 / info.time) / 60 / (item.n || 1);
                }
            } 
            //mergeMul();//处理合并 多个产出使用了同一个配方 ,暂时弃用，checkResult会处理这种情况
            checkResult();//优化当前结果，遍历配方，如果 出现几个产出都多余，比如氢-120 精炼油-120，那么应该把设备调整到合适数量
            
            for (var i = 0; i < single_list.length; i++) {
                if (!single_list[i].value) continue;
                var item = data[single_list[i].id];
                var info = getValue(single_list[i].name);
                var outitem = {
                    name: single_list[i].name,
                    number1: single_list[i].value,
                    number2: single_list[i].number,
                    time: info.time.toFixed(pointLength),
                    t: info.t.toFixed(pointLength),
                    speed: info.speed.toFixed(pointLength),
                    pfTitle: getPfTitle(item,info),
                    mName: single_list[i].mName
                };
                items0.push(outitem);
            }

            //for (var i = 0; i < out_list.length; i++) {
            //    addXH(out_list[i].name, out_list[i].value);
            //    out_list[i].value = 0;
            //}
            for (var i = 0; i < xh_list.length; i++) {
                var xh = xh_list[i];
                if (!xh.value) continue;
                var itemName = xh.name;
                var item = find(itemName);
                var info = getValue(itemName);
                if (xh.value < 0) {
                    xh.value2 = 0;
                }
            }
            var total = [];
            function addTotal(name, value) {
                var energy = energyData[name] || 0;

                for (var i = 0; i < total.length; i++) {
                    var item = total[i];

                    if (!item.energy) item.energy = 0;
                    if (item.name == name) {
                        item.value += value;
                        item.energy += energy * (value || 0);
                        return;
                    }
                }
                total.push({ name: name, value: value, energy: energy * (value || 0) });
            }


            for (var i = 0; i < xh_list.length; i++) {
                if (!xh_list[i].value) continue;

                var item = find(xh_list[i].name);
                var info = getValue(xh_list[i].name);
                if ($("#hideSource").get(0).checked) {
                    if (!item.q || !item.q.length) {
                        continue;
                    }
                }
                var img = getIconImg(info.name);
                if (img.indexOf("<img") == -1) {
                    img = "X" + img;
                }
                var outitem = {
                    name: xh_list[i].name,
                    number1: xh_list[i].value.toFixed(0),
                    number2: (xh_list[i].value2 ? xh_list[i].value2.toFixed(pointLength) : ""),
                    number2full : (xh_list[i].value2 ? xh_list[i].value2.toFixed(pointLength) : "") + img,
                    time: info.time.toFixed(pointLength),
                    t: info.t.toFixed(pointLength),
                    speed: info.speed.toFixed(pointLength),
                    speedClass: info.isChange ? "time time2" : "time",
                    rowClass: isXqs(xh_list[i].name) ? "xqsrow" : "",
                    machineName: info.name,
                    m: [],
                    pf: []
                };
                if (!outitem.number2) outitem.number2full = "";
                if (xh_list[i].name == "太阳帆") {
                    outitem.numberOther = "(可供" + getIconShow("电磁轨道弹射器", outitem.number1 / 20) + ")";
                }
                if (xh_list[i].name == "小型运载火箭") {
                    outitem.numberOther = "(可供" + getIconShow("垂直发射井", outitem.number1 / 5) + ")";
                }
                addTotal(info.name, Math.ceil(outitem.number2));
                var pfds = getPfs(xh_list[i].name);

                for (var j = 0; j < pfds.length; j++) {
                    var pf = {
                        class: item.id == pfds[j].id ? "pf selected" : "pf",
                        href: item.id == pfds[j].id ? "javascript:void(0)" : "javascript: selectPf(\"" + item.name + "\",\"" + pfds[j].id + "\")",
                        title: getPfTitle(pfds[j], item.id == pfds[j].id ? info : null)
                    };
                    outitem.pf.push(pf);
                }
                for (var j = 0; j < item.m.length; j++) {
                    var m = {
                        class: info.name == item.m[j].name ? "m selected" : "m",
                        itemName: item.name,
                        href: info.name == item.m[j].name ? "javascript:void(0)" : "javascript: selectM(\"" + item.id + "\",\"" + item.m[j].name + "\")",
                        name: item.m[j].name,
                        title: "设备速度:" + (item.m[j].speed.toFixed(pointLength)),
                        showName: item.m[j].name.replace("制作台", "")
                    };
                    if (m.showName == "采矿机") {
                        m.title += " 采矿机按6个矿脉计算(因所限传送带速度最高30)"
                    }
                    if (m.showName == "矿脉") {
                        m.title += " (速度最高30)"
                    }
                    outitem.m.push(m);

                }
                items.push(outitem);

            }

            for (var i = 0; i < out_list.length; i++) {
                if (!out_list[i].value) continue;
                var item = find(out_list[i].name);
                var info = getValue(out_list[i].name);
                var outitem = {
                    name: out_list[i].name,
                    number1: out_list[i].value.toFixed(pointLength),
                    number2: out_list[i].value2 ? out_list[i].value2.toFixed(pointLength) : "",
                    time: info.time.toFixed(pointLength),
                    t: info.t.toFixed(pointLength),
                    speed: info.speed.toFixed(pointLength),
                    speedClass: info.isChange ? "time time2" : "time",
                    rowClass: "outrow",
                    m: [],
                    pf: []
                };
                items2.push(outitem);
            }
            app.items0 = items0;
            app.xqs = xqs;
            app.items = items;
            app.items2 = items2;
            app.total = total;
            app.ig_names = ig_names;
            var energy = 0;
            for (var i = 0; i < total.length; i++) {
                energy += total[i].energy || 0;
            }
            app.totalEnergy = energy.toFixed(pointLength);
        }
        function selectM(id, m) {
            settings[id] = m;
            saveSetting();
            update_all();
        }
        function selectPf(name, value) {
            settings_pf[name] = parseInt(value);
            saveSettingPf();
            update_all();
        }
        function f_tag(obj) {
            var jrow = $(obj).parents("tr:first");
            if (jrow.hasClass("row-tag")) {

                jrow.removeClass("row-tag");
            } else {

                jrow.addClass("row-tag");
            }
        }
        function f_ig(obj) {
            var name = $(obj).attr("data-name");
            ig_names.push(name);

            update_all();
        }
        function f_remove_ig(obj){
            var remove_name = $(obj).attr("title");
            var new_ig_names=[];
            ig_names.forEach(function (ig_name){
                if(ig_name!=remove_name){
                    new_ig_names.push(ig_name);
                }
            })
            ig_names=new_ig_names;
            update_all();
        }
        function f_reset() {
            xqs = [];
            update_all();
        }
        function f_reset_ig() {
            ig_names = [];

            update_all();
        }
        function projectsUpdate() {

            $("#selprojects").html("");
            $(projects).each(function () {
                $("#selprojects").append("<option value='" + this.name + "'>" + this.name + "</option>");
            });
            if (projects.length) {
                $("#projectdiv").show();
            } else {

                $("#projectdiv").hide();
            }
        }
        function f_save() {
            var name = prompt("输入方案名");
            if (!name) return;
            projects.push({
                name: name,
                singleMake: singleMake,
                ig_names: ig_names || [],
                value: xqs
            });
            saveSettingProjects();
            projectsUpdate();
        }
        function f_add() {
            if (!isDataLoaded) {
                alert("游戏资源尚未加载完毕")
            }
            $("#UIselector").show();
        }
		function actions(that)
		{
			// console.log(that.value)
			if( !that.value){
				return false;
			}else{
				window.open(that.value);
			}
		}
        function f_split(obj) {

            var name = $(obj).attr("data-name");



            $("#Split").html("<p>选择配方：</p>");
            var pfs = getPfs(name);
            if (pfs.length == 1) {
                alert("不存在多配方");
                return;
            }
            var selected = null;
            for (var i = 0; i < pfs.length; i++) {
                (function (i) {
                    var jlink = $("<div class='split-pf'></div>");
                    jlink.html(getPfTitle(pfs[i]));
                    jlink.appendTo($("#Split")).click(function () {
                        selected = pfs[i];
                        $("#Split .split-pf").removeClass("split-pf-selected");
                        jlink.addClass("split-pf-selected");
                    });
                })(i);
            }
            $("#Split").append("<p>设备数量：</p>");
            $("#Split").append("<div><input type='text' value='1' class='split-number' /></div>");
            $("#Split").append("<div><button>确定</button> </div>");
            $("#Split").find("button").click(function () {
                if (!selected) {
                    alert("未选择配方");
                    return;
                }
                singleMake.push({
                    id: selected.id,
                    number: parseFloat($("#Split").find(":text").val())
                });
                update_all();
                $("#Split").hide();
            });

            setTimeout(function () {
                $("#Split").show();
            }, 50);


        }
        var icons_define = {
            "氢": [-1, 3, 7, "氢"],
            "可燃冰": [-1, 2, 7, "可燃冰"]
        };
        var icons = {}
        function f_initIcons() {
            var reg = /^(\d)-(\d{1,2})-(.*)+/;
            for (var i = 0; i < game_data.icons1.length; i++) {
                var icon = game_data.icons1[i];
                if (reg.test(icon.name)) {
                    var x = icon.name.match(reg);
                    icons[x[3]] = icon.value;
                } else {
                    icons[icon.name] = icon.value;
                }
            }
            for (var i = 0; i < game_data.icons2.length; i++) {
                var icon = game_data.icons2[i];
                if (reg.test(icon.name)) {
                    var x = icon.name.match(reg);
                    icons[x[3]] = icon.value;
                } else {
                    icons[icon.name] = icon.value;
                }
            }
            app.icons = icons;
            $(document).click(function (e) {
                if (!$(e.target).closest('#UIselector').length) {
                    $('#UIselector').hide();
                }
                if (!$(e.target).closest('#Split').length) {
                    $('#Split').hide();
                }



            });
            $("#UIselector").html('<div id="selector" class="selector" style="width: ' + w + 'px; height: ' + h + 'px"><div id="tabs"></div></div>').hide();
            var w = 900;
            var h = 700;

            var jimg1 = $("<div class='tab selected'><img src='./img/component-icon.png'/></div>").appendTo("#tabs");
            var jimg2 = $("<div class='tab'><img src='./img/factory-icon.png'/></div>").appendTo("#tabs");

            jimg1.click(function () {
                jicons2.removeClass("icons-selected");
                jicons.addClass("icons-selected");
                jimg2.removeClass("selected");
                jimg1.addClass("selected");
            });
            jimg2.click(function () {
                jicons.removeClass("icons-selected");
                jicons2.addClass("icons-selected");
                jimg1.removeClass("selected");
                jimg2.addClass("selected");
            });

            var jicons = $('<div class="icons icons-selected"></div>').appendTo("#selector");
            addIcons(jicons, game_data.icons1);
            var jicons2 = $('<div class="icons"></div>').appendTo("#selector");
            addIcons(jicons2, game_data.icons2);

            function addIcons(jicons, icons) {
                jicons.width(w - 80).height(h - 220);

                for (var i = 0; i < 7; i++) {
                    var jrow = $("<div class='iconrow'></div>").appendTo(jicons);
                    for (var j = 0; j < 12; j++) {
                        var jicon = $("<div class='icon'><div class='s'></div></div>").appendTo(jrow);
                        jicon.click(function () {
                            var name = $(this).attr("data-name");
                            if (!name) return;
                            if (name == "电弧熔炉") name = "电弧熔炉";
                            if (name == "位面熔炉") name = "位面熔炉";
							
                            currentItem = find(name);

                            var number = parseInt($("#txtnumber").val())*muls/60;
                            var v = $("#selmaince").val();
                            if (v) {
                                var info = getValue(currentItem);
                                for (var i = 0; i < currentItem.s.length; i++) {
                                    if (currentItem.s[i].name == name) {
                                        number = parseInt(v) * 60 / (currentItem.t || 1) * info.speed * (currentItem.s[i].n || 1);
                                    }
                                }
                            }
                            addItem(currentItem, number);


                            $("#UIselector").hide();
                        })
                    }
                }

                for (var i = 0; i < icons.length; i++) {
                    var icon = icons[i];
                    var reg = /^(\d)-(\d{1,2})-(.*)+/;
                    var x = null;
                    if (reg.test(icon.name)) {
                        x = icon.name.match(reg);

                    } else if (icons_define[icon.name]) {
                        x = icons_define[icon.name];
                    }
                    if (x) {
                        jicons.find(">.iconrow:eq(" + (parseInt(x[1]) - 1) + ")")
                            .find(">.icon:eq(" + (parseInt(x[2]) - 1) + ")")
                            .html("").append("<img src='data:image/png;base64," + icon.value + "' />").attr("data-name", x[3]).attr("title", x[3]);
                    }
                }
            }
        }
