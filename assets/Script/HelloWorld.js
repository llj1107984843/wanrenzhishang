cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {
        wx.login({
            success: function () {
                wx.getUserInfo(
                    {
                        success: function(res) {
                            console.log(res)
                        }
                    }
                )
            }
        })

    },

    //设置用户云存储
    setUserCloudStorage(){
        // var KVDataList = [{key:"money",value:"500"},{key:"战绩",value:"第八关"}];
        wx.setUserCloudStorage({
            KVDataList : [{key:"money",value:"500"},{key:"战绩",value:"第八关"}] ,
            success:function(){
                console.log("成功11");
            },
            fail:function(){
                console.log("失败11");
            }
        });

    },

    showziyu(){
        cc.director.loadScene("rankingList");
    },

    //移除用户云存储
    removeUserCloudStorage(){
        wx.removeUserCloudStorage({
            keyList:["money","战绩"],
            success:function(){
                console.log("移除成功11");
            },
            fail:function(){
                console.log("移除失败11");
            }
        });

    },

    //向子域发送信息
    postMessage(){
        var openDataContext = wx.getOpenDataContext();
        openDataContext.postMessage({
            text: 'hello',
            year: "2018"
        })
    },

    startGame(){
        cc.director.loadScene("game");
        cc.director.resume();
    },

    // update (dt) {},
});
