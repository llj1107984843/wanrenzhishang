cc.Class({
    extends: cc.Component,

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //分数
        this.fraction=1;

        //方向
        this.direction="";
        var a=Math.round(Math.random());
        if(a==0){
            this.node.x = -130;
            this.direction="zuo";
        }else {
            this.node.x = 850;
            this.direction="you";
        }
        // console.log("方向:"+ this.direction);

        //可否移动
        this.moving=true;
        //移动速度
        this.speed=Math.floor(Math.random()*(250-120+1)+120);


    },

    start () {

    },
    update (dt) {
        if(this.moving==true){
            if(this.direction=="zuo"){
                this.node.x += this.speed*dt;
            }else{
                this.node.x -= this.speed*dt;
            }
        }
    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {

        if(otherCollider.node.name=="mao" ){
            this.moving=false;
            selfCollider.body.gravityScale=1;
            if(this.fraction>0){
                defen.string = parseInt(defen.string)+this.fraction;//得分
                this.fraction=0;
            }

            this.node.getComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/diren_k.png"));
        }


        if(otherCollider.node.name=="you" || otherCollider.node.name=="xia"){
            cc.find("GG").active=true;
            cc.find("GG").zIndex=1;
            cc.director.pause();
        }
    },

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact: function (contact, selfCollider, otherCollider) {

    },

    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve: function (contact, selfCollider, otherCollider) {

    },

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve: function (contact, selfCollider, otherCollider) {
    },




});
