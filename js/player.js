class Player {
    constructor() {
        this.index = 0
        this.name = null
        this.posX = 0
        this.posY = 0
        this.isAlive = true;
        this.color = null;
    }

    getPlayerCount() {
database.ref("PlayerCount").on("value",(data)=>{
    playerCnt=data.val()
})
    }


    updateCount(count) {
        database.ref('/').update({
            PlayerCount: count
        })
    }

    update(tnkColor) {
        database.ref("Players/" + tnkColor + "/").update({
            name: this.name,
            'position/x': this.posX,
           'position/y': this.posY,
            isAlive: this.isAlive
        })
    }

    getDeathCount(){
        database.ref("DeathCount").on("value",(data)=>{
            deathCnt=data.val()
        })
    }

    updateDeathCount(count) {
        database.ref('/').update({
            DeathCount: count
        })
    }

static getPlayersInfo() {
var playersInfoRef = database.ref("players")
playersInfoRef.on("value",(data)=>{
    allPlayers=data.val()
})
    }


}