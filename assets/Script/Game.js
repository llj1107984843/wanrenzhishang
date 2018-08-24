cc.Class({
    extends: cc.Component,

    properties: {
        mao:cc.RigidBody,
        direnPrefab:cc.Prefab,
        score:cc.Label,
    },

    // use this for initialization
    onLoad: function () {
        window.defen=this.score;
        this.initialHeight=305;
        this.time=3;

        console.log("开始游戏");
        cc.director.getPhysicsManager().enabled = true;
    },

    anewGame(){
        cc.director.loadScene("game");
        cc.director.resume();
    },
    returnHome(){
        cc.director.loadScene("helloworld");
    },

    // called every frame
    update: function (dt) {
        this.time -= 1*dt;
        if(this.time<=0){
            var diren=cc.instantiate(this.direnPrefab);
            diren.parent=this.node.parent;
            diren.y = this.initialHeight;
            this.initialHeight+=100;
            this.time=5;
        }

        // console.log(this.mao.linearVelocity.y);
    },

});
