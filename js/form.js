class Form {
    constructor() {
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.reset = createButton('Reset');
    }

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display() {
        this.title.html("Tank Battle");
        this.title.position(displayWidth / 2 - 50, 0);

        this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
        this.button.position(displayWidth / 2 + 30, displayHeight / 2);

        this.reset.position(displayWidth - 100, 20);


        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value()
            playerCnt += 1;
            player.index = playerCnt
            player.isAlive = false

            console.log(playerCnt)
            if (playerCnt === 1) {
                player.posX = 100
                player.posY = 100
                player.update("red")
            }
            else if (playerCnt === 2) {
                player.posX = width - 100
                player.posY = 100
                player.update("blue")
            }
            else if (playerCnt === 3) {
                player.posX = 100
                player.posY = height - 100
                player.update("green")
            }
            else if (playerCnt === 4) {
                player.posX = width - 100
                player.posY = height - 100
                player.update("yellow")
            }
            player.updateCount(playerCnt)
            this.greeting.html("HI " + player.name)
            this.greeting.position(displayWidth / 2 - 90, displayHeight / 4)


        })

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);

        });


    }
}