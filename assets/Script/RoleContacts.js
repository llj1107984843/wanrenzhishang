cc.Class({
    extends: cc.Component,


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //能否跳跃
        this.isCanJump=false;
    },

    start () {

    },
    update (dt) {

    },

    jump(){
        if(this.isCanJump==true){
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.p(0,800);
            this.isCanJump=false;
        }
    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        this.isCanJump=true;

        if(otherCollider.node.name=="xia" ){
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
