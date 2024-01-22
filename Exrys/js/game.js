var Invasion = {
    musica:null,
    laserAud:null
};

Invasion.Menu = function(){}

Invasion.Menu.prototype = {
    preload:function(){
        this.load.audio('raioA', [ 'assets/audio/raio.mp3', 'assets/audio/raio.ogg' ]);
        this.load.audio('menu', [ 'assets/audio/Menu.mp3', 'assets/audio/Menu.ogg' ]);
        this.load.audio('fase1', [ 'assets/audio/fase1.mp3', 'assets/audio/fase1.ogg' ]);
        this.load.audio('fase2', [ 'assets/audio/fase2.mp3', 'assets/audio/fase2.ogg' ]);
        this.load.audio('fase3', [ 'assets/audio/fase1.mp3', 'assets/audio/fase1.ogg' ]);

        //BOSS
        this.load.audio('atqboss', [ 'assets/audio/ataqueboss.mp3', 'assets/audio/ataqueboss.ogg' ]);
        this.load.audio('atqB', [ 'assets/audio/atqB.mp3', 'assets/audio/atqB.ogg' ]);

        //ELISE
        this.load.audio('atqE', [ 'assets/audio/atqE.mp3', 'assets/audio/atqE.ogg' ]);
        this.load.audio('defE', [ 'assets/audio/defE.mp3', 'assets/audio/defE.ogg' ]);
        this.load.audio('deadE', [ 'assets/audio/deadE.mp3', 'assets/audio/deadE.ogg' ]);

        //TROPA
        this.load.audio('atqT', [ 'assets/audio/atqT.mp3', 'assets/audio/atqT.ogg' ]);


        this.load.image('cenario1', 'assets/images/CenarioE.jpg');
        this.load.image('END', 'assets/images/CenarioV.jpg');
        //this.load.spritesheet('alerta', 'assets/images/elise.png', 200, 200);
        this.load.spritesheet('A','assets/images/alerta.png', 1920, 1080);
        //this.load.image('inimigo', 'assets/images/atacando3.png');
        this.load.image('plataforma', 'assets/images/plataforma.png');
        this.load.image('sala', 'assets/images/Sala.jpg');
        this.load.image('exrys', 'assets/images/exrys.png');
        this.load.image('pressione', 'assets/images/pressione.png');
        this.load.image('final', 'assets/images/final.png');
        this.load.image('raio', 'assets/images/raiofinal.png');
        this.load.image('raiofundo', 'assets/images/raiofundo.png');
        this.load.image('texto1', 'assets/images/texto1.png');
        this.load.image('texto2', 'assets/images/texto2.png');
        this.load.image('texto3', 'assets/images/texto3.png');
        this.load.image('texto4', 'assets/images/texto4.png');
        
        

        //this.load.image('nome', 'assets/images/nome.png');
        //this.load.image('bala', 'assets/images/bala.png');

        this.load.spritesheet('elise', 'assets/images/Elise2.png', 250, 250);
        this.load.spritesheet('inimigo', 'assets/images/inimigo1.png', 619, 500);
        this.load.spritesheet('BOSS', 'assets/images/BOSS.png', 654, 522);
        
    },
    create: function(){

        this.fundo1 = this.add.sprite(0, 0, 'END');
        this.pressione = this.add.sprite(0, 0, 'pressione');
        
        this.exrys = this.add.sprite(0,0, 'exrys');
        vidas = 2;
        
                
        var space = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.addOnce(this.start, this);
        
        //Invasion.musica.loop = true;
        //Invasion.musica.play();
        //Invasion.laserAud.volume = .05;
                
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.musica = this.add.audio('menu');
        this.musica.volume = .5;
        this.musica.loop = true;
        this.musica.play();

    },

    update:function(){

        if(this.fundo1.alpha == 1){
            this.add.tween(this.fundo1).to( {alpha: 0.25}, 3000, Phaser.Easing.Linear.Nome, true);
        }
        else if(this.fundo1.alpha == 0.25){
            this.add.tween(this.fundo1).to( {alpha: 1}, 3000, Phaser.Easing.Linear.Nome, true);
        }

        if(this.pressione.alpha == 1){
            this.add.tween(this.pressione).to( {alpha: 0}, 1000, Phaser.Easing.Linear.Nome, true);
        }
        else if(this.pressione.alpha == 0){
            this.add.tween(this.pressione).to( {alpha: 1}, 1000, Phaser.Easing.Linear.Nome, true);
        }

    },

    start: function(){
        //Invasion.laserAud.play();
        this.musica.stop();
        this.state.start('Play'); 
    },
    
   
}



Invasion.Play = function(){}

Invasion.Play.prototype = {
    create:function(){

        this.fundo = this.add.sprite(0, 0, 'cenario1');
        this.fundo.alpha = .25;

        kill = 0;
        kill1 =0;
        exis = 0;
        exis1 = 0;
        containi =0;
        

        this.plataforma = this.add.group();
        this.plataforma.create(114,1030,'plataforma');
        this.plataforma.create(344,1030,'plataforma');
        this.plataforma.create(894,1030,'plataforma');
        this.plataforma.create(1122,1030,'plataforma');
        this.plataforma.create(1350,1030,'plataforma');
        this.plataforma.create(1578,1030,'plataforma');
        this.plataforma.create(1806,1030,'plataforma');

        this.plataforma.create(1122,800,'plataforma');
        this.plataforma.create(1350,800,'plataforma');
        this.plataforma.create(1578,800,'plataforma');
        this.plataforma.create(1806,800,'plataforma');

        this.plataforma.create(114,500,'plataforma');
        this.plataforma.create(342,500,'plataforma');
        this.plataforma.create(570,500,'plataforma');
        this.plataforma.create(798,500,'plataforma');
        this.plataforma.create(1026,500,'plataforma');
        this.plataforma.create(1254,500,'plataforma');
        this.plataforma.create(1482,500,'plataforma');
        
        this.plataforma.setAll('anchor.x', .5);
        this.plataforma.setAll('anchor.y', .5);
        /*plataforma.setAll('scale.x', .25);
        plataforma.setAll('scale.y', .25);*/

        /*this.inimigo = this.add.group();
        this.inimigo.enableBody = true;
        this.inimigo.create(1122,660,'inimigo',8);
        this.inimigo.create(114,891,'inimigo',8);

        this.inimigo.setAll('anchor.x', .5);
        this.inimigo.setAll('anchor.y', .5);
        this.inimigo.setAll('scale.x', .5);
        this.inimigo.setAll('scale.y', .5);
        this.inimigo.setAll('body.', true);*/

        this.inimigo = this.add.sprite(1122,660,'inimigo',8);
        this.inimigo.anchor.setTo(.5);
        this.inimigo.scale.setTo(.5);
        this.inimigo.animations.add('vira',[10,11,12,13,8],10,false);

        this.inimigo1 = this.add.sprite(255,891,'inimigo',8);
        this.inimigo1.anchor.setTo(.5);
        this.inimigo1.scale.setTo(.5);
        this.inimigo1.animations.add('vira',[10,11,12,13,8],10,false);


        this.bala = this.add.sprite(1022,660,'inimigo',15);
        this.bala.anchor.setTo(.5);
        this.bala.scale.setTo(.5);
        this.bala.exists = false;
        //this.bala.alpha = 0;

        this.bala1 = this.add.sprite(155,891,'inimigo',15);
        this.bala1.anchor.setTo(.5);
        this.bala1.scale.setTo(.5);
        this.bala1.exists = false;
        //this.bala.alpha = 0;

        this.physics.enable(this.plataforma);
        this.physics.enable(this.inimigo);
        this.physics.enable(this.inimigo1);

        this.physics.enable(this.bala);
        this.physics.enable(this.bala1);

        this.bala.checkWorldBounds = true;
        this.bala.outOfBoundsKill = true;

        this.bala1.checkWorldBounds = true;
        this.bala1.outOfBoundsKill = true;

        
        this.elise = this.add.sprite(50, 0, 'elise',11);
        this.elise.anchor.setTo(0.5);
        this.elise.scale.setTo(.75);
        
        this.physics.enable(this.elise);
        this.elise.body.setSize(110, 250,80,0);
                
        // animação elise
        this.elise.animations.add('walk',[0,1,2,3,4,5,6,7],10,false);
        this.elise.animations.add('baixo',[13,14],10,false);
        this.elise.animations.add('pulo',[8,9],10,false);

        this.elise.animations.add('atq1',[16,17,18,11],10,false);
        this.elise.animations.add('atq2',[19,20,11],10,false);
    
        
        //this.vidas = 2;
        
        this.cenario = 0;
        this.ref = 0;
        containi = 0;

        
        this.elise.body.gravity.y = 1400;
        
        this.elise.body.collideWorldBounds = true;
        this.elise.body.onWorldBounds = new Phaser.Signal();
        this.elise.body.onWorldBounds.add(this.retorno, this);

        this.bala.body.collideWorldBounds = true;
        this.bala.body.onWorldBounds = new Phaser.Signal();
        this.bala.body.onWorldBounds.add(this.retornobala, this);

        this.bala1.body.collideWorldBounds = true;
        this.bala1.body.onWorldBounds = new Phaser.Signal();
        this.bala1.body.onWorldBounds.add(this.retornobala1, this);


        this.plataforma.setAll('body.immovable', true);

        this.inimigo.body.immovable = true;
        this.inimigo.body.setSize(150,250,234,0);

        this.inimigo1.body.immovable = true;
        this.inimigo1.body.setSize(150,250,234,0);

        this.bala.body.setSize(405,50,50,225);
        this.bala1.body.setSize(405,50,50,225);
        /*this.inimigo.setAll('body.immovable', true);
    
        this.inimigo.forEach(
            function(inimigo){
                    inimigo.body.setSize(150,250,234,0)
        });*/

        //this.inimigo.setAll('body.gravity.y', 1400);
        
        this.criaUi();
        
        // criar grupos
        //this.criaGrupoInimigos();
            
                
        // teclado
        this.cursors = game.input.keyboard.createCursorKeys(); 
        this.atq1 = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        this.atq2 = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.atq3 = game.input.keyboard.addKey(Phaser.Keyboard.E);

        this.fase1 = game.input.keyboard.addKey(Phaser.Keyboard.U);
        this.fase2 = game.input.keyboard.addKey(Phaser.Keyboard.I);
        this.fase3 = game.input.keyboard.addKey(Phaser.Keyboard.O);
        this.fase4 = game.input.keyboard.addKey(Phaser.Keyboard.P);

        
        this.time.events.loop(4000, this.inverte, this);

        this.musica = this.add.audio('fase1');
        this.musica.volume = .5;
        this.musica.loop = true;
        this.musica.play();

        //TROPA
        this.atqT = this.add.audio('atqT');

        //ELISE
        this.atqE = this.add.audio('atqE');
        this.defE = this.add.audio('defE');
        this.deadE = this.add.audio('deadE');
        
    },
    criaUi:function(){
        var estilo = { font: '50px Arial', fill: '#ffffff' };
        this.vidasTxt = this.add.text(190, 5, 'Vidas: ' + vidas, estilo);
        this.vidasTxt.anchor.setTo(1, 0);
        
    },

    /*criaGrupoInimigos:function(){
        this.inimigos = this.add.group();
        this.inimigos.createMultiple(10, 'bala', 0);
        this.physics.enable(this.inimigos);
        this.inimigos.callAll('anchor.setTo', 'anchor', .5, .5);
        this.inimigos.setAll('checkWorldBounds', true);
        this.inimigos.setAll('outOfBoundsKill', true);

        this.inimigos.setAll('scale.x', .08);
        this.inimigos.setAll('scale.y', .08);
        
        //this.inimigos.callAll('animations.add','animations','anim', [0,1], 10, true);
        //this.inimigos.callAll('animations.play','animations','anim');
    },*/
    
    inverte:function(){

        
        this.ref++;
        if(this.ref===1){
            if(!kill == 1){
                this.inimigo.scale.x = -.5;
                this.inimigo.animations.play('vira');
                this.bala.scale.x = -.5;
                exis = 1;
                this.atqT.play();
                this.bala.body.velocity.x = -1000;
                
            }
            if(!kill1 == 1){
                this.inimigo1.scale.x = -.5;
                this.inimigo1.animations.play('vira');
                exis1 = 1;
                this.atqT.play();
                this.bala1.scale.x = -.5;
                this.bala1.body.velocity.x = -1000;
            }
        }

        if(this.ref===2){
            if(!kill == 1){
                this.inimigo.scale.x = .5;
                this.inimigo.animations.play('vira');
                this.bala.scale.x = .5;
                exis = 1;
                this.atqT.play();
                this.bala.body.velocity.x = 1000;
                
                this.ref = 0;
            }
            if(!kill1 == 1){
                this.inimigo1.scale.x = .5;
                this.inimigo1.animations.play('vira');
                exis1 = 1;
                this.atqT.play();
                this.bala1.scale.x = .5;
                this.bala1.body.velocity.x = 1000;
                this.ref = 0;
            }
        }
    },

        
    retorno:function(sprite, up, down, left, right){
        /*if(right)
            this.bounceAud.play();*/
        if(down){
            this.deadE.play();
            vidas--;
            this.elise.position.setTo(250, 100);
            
        }
        if(right && this.cenario === 1 && this.elise.y > 900){
            this.musica.stop();
            this.state.start('Play2'); 
            
        }
    },

    retornobala:function(sprite, up, down, left, right){
        if(right){
            this.bala.position.setTo(1022,660);
            this.bala.exists = false;
            this.bala.body.velocity.x = 0;
        }
        if(left){
            this.bala.position.setTo(1222,660);
            this.bala.exists = false;
            this.bala.body.velocity.x = 0;
        }
       
    },

    retornobala1:function(sprite, up, down, left, right){
        if(right){
            this.bala1.position.setTo(155,891);
            this.bala1.exists = false;
            this.bala1.body.velocity.x = 0;
            
        }

        if(left){
            this.bala1.position.setTo(355,891);
            this.bala1.exists = false;
            this.bala1.body.velocity.x = 0;
            
        }
       
    },

    update:function(){
        //this.magali.animations.play('correndo');

        //this.elise.animations.stop('atq1');
        //this.elise.animations.stop('atq2');
        

        this.atualizaUi();

        this.physics.arcade.collide(this.elise, this.plataforma);
        this.physics.arcade.collide(this.plataforma, this.inimigo);
        this.physics.arcade.collide(this.elise, this.inimigo, this.mata, null, this);
        this.physics.arcade.collide(this.elise, this.inimigo1, this.mata11, null, this);
        this.physics.arcade.overlap(this.elise, this.bala, this.mata1, null, this);
        this.physics.arcade.overlap(this.elise, this.bala1, this.mata2, null, this);

        if(this.fase1.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play');            
        }
        else if(this.fase2.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play2');            
        }
        else if(this.fase3.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play3');            
        }
        else if(this.fase4.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play4');            
        }
    
    
        if(!this.elise.inWorld){
            this.elise.position.setTo(250, 100);
        }

        if(exis == 1){
            this.bala.exists = true;
            exis = 0;
        }

        if(exis1 == 1){
            this.bala1.exists = true;
            exis1 = 0;
        }

        // Joystick up button:
        socket.on("move_up", function(){
            mvJoystickUp = true;
        });
        socket.on("stop_up", function(){
            mvJoystickUp = false;
        });        

        // Joystick down button:
        socket.on("move_down", function(){
            mvJoystickDown = true;
        });
        socket.on("stop_down", function(){
            mvJoystickDown = false;
        });        

        // Joystick Left button:
        socket.on("move_left", function(){
            mvJoystickLeft = true;
        });
        socket.on("stop_left", function(){
            mvJoystickLeft = false;
        });        

        // Joystick Right button:
        socket.on("move_right", function(){
            mvJoystickRight = true;
        });
        socket.on("stop_right", function(){
            mvJoystickRight = false;
        });

        // Joystick A button:
        socket.on("press_A", function(){
            mvJoystickA = true;
        });
        socket.on("stop_A", function(){
            mvJoystickA = false;
        });

        // Joystick B button:
        socket.on("press_B", function(){
            mvJoystickB = true;
        });
        socket.on("stop_B", function(){
            mvJoystickB = false;
        });

       
    //ataque
        if(this.atq1.downDuration(100) || mvJoystickA == true) {   
            this.elise.animations.play('atq1');
            this.atqE.play();
        }
        else if(this.atq2.downDuration(100) || mvJoystickB == true) {
            this.elise.animations.play('atq2');
            this.atqE.play();
        }
    //Movimento
        if((this.cursors.left.isDown || mvJoystickLeft == true) && this.elise.frame != 14 && this.elise.frame != 13) {
            this.elise.body.velocity.x = -400; 
            this.elise.scale.x= -.75;
            if(this.elise.frame < 16 || this.elise.frame > 20){
                this.elise.animations.play('walk');
            }
        }

    
        else if((this.cursors.right.isDown || mvJoystickRight == true) && this.elise.frame != 14 && this.elise.frame != 13) {
            this.elise.body.velocity.x = 400;
            this.elise.scale.x= .75;
            if(this.elise.frame < 16 || this.elise.frame > 20){
                this.elise.animations.play('walk');
            }
        }

    //parada   
        else{        
            this.elise.body.velocity.x = 0;
            if (this.elise.frame < 16 || this.elise.frame > 20){
                this.elise.frame=11;
            }
        }
    //Pulo
        if((this.cursors.up.isDown || mvJoystickUp == true) && this.elise.body.touching.down){
            this.elise.frame = 8;
            this.elise.body.velocity.y = -1000;        
        }
    //Agachado
        if((this.cursors.down.isDown || mvJoystickDown == true)) {
            this.elise.body.velocity.x = 0;
            this.elise.frame = 13;    
        }

        if((this.cursors.down.isDown || mvJoystickDown == true) && this.elise.body.touching.down){
            this.elise.frame = 14;
            //this.elise.animations.play('baixo');        
        }
    //Pulo no alto
        if(!this.elise.body.touching.down){
            this.elise.frame = 9;
        }

        if(vidas<0){
            this.musica.stop();
            this.state.start('Menu');
        }
       
    },
    atualizaUi:function(){
        this.vidasTxt.text = 'Vidas: ' + (vidas >= 0?vidas:0);
        
    },
    mata:function(elise,inimigo){
        if(elise.frame == 16 || elise.frame == 17 || elise.frame == 18){
            inimigo.kill();
            kill = 1;
            containi++;
        }
               
    },

    mata11:function(elise,inimigo){
        if(elise.frame == 16 || elise.frame == 17 || elise.frame == 18){
            inimigo.kill();
            kill1 = 1;
            containi++;
        }
        if(containi == 2){
            
            vidas++;
            this.cenario = 1;
        }
       
    },

    mata1:function(elise,bala){
        if(elise.frame == 19 || elise.frame == 20){
            this.defE.play();
            if(bala.scale.x == .5){
                bala.position.setTo(1022,660);
            }
            else if(bala.scale.x == -.5){
                bala.position.setTo(1222,660);
            }
            bala.exists = false;
            bala.body.velocity.x = 0;
        }
        else{
            if((bala.body.touching.right && bala.scale.x == .5) || (bala.body.touching.left && bala.scale.x == -.5)){
                elise.kill();
                this.deadE.play();
                vidas--;
                this.time.events.add(Phaser.Timer.SECOND * 2, this.inicializa, this);
            }
        }
       
    },
    mata2:function(elise,bala){
        if(elise.frame == 19 ||  elise.frame == 20){
            this.defE.play();
            if(bala.scale.x == .5){
                bala.position.setTo(155,891);
            }
            if(bala.scale.x == -.5){
                bala.position.setTo(355,891);
            }
            bala.exists = false;
            bala.body.velocity.x = 0;
        }
        else{            
            if((bala.body.touching.right && bala.scale.x == .5) || (bala.body.touching.left && bala.scale.x == -.5)){
                elise.kill();
                this.deadE.play();
                vidas--;
                this.time.events.add(Phaser.Timer.SECOND * 2, this.inicializa, this);
            }
        }
       
    },
    /*eliminaInimigo: function(magali, inimigos){
        this.nivel--;
        magali.kill();

        
    },*/

    inicializa:function(){
        if(vidas>=0){
            this.elise.reset(250, 100);
        }
        else{
            //this.state.start('Menu');
        }
    },
    
    
}

Invasion.Play2 = function(){}

Invasion.Play2.prototype = {
    create:function(){

        this.fundo = this.add.sprite(0, 0, 'sala');
        this.fundo.alpha = .20;

        this.plataforma = this.add.group();
        this.plataforma.create(96,1030,'plataforma');
        this.plataforma.create(288,1030,'plataforma');
        this.plataforma.create(480,1030,'plataforma');
        this.plataforma.create(672,1030,'plataforma');
        this.plataforma.create(864,1030,'plataforma');
        this.plataforma.create(1056,1030,'plataforma');
        this.plataforma.create(1248,1030,'plataforma');
        this.plataforma.create(1440,1030,'plataforma');
        this.plataforma.create(1632,1030,'plataforma');
        this.plataforma.create(1824,1030,'plataforma');
        
        this.plataforma.setAll('anchor.x', .5);
        this.plataforma.setAll('anchor.y', .5);
        this.plataforma.setAll('scale.x', .84);
        this.plataforma.setAll('scale.y', .84);

        /*this.inimigo = this.add.group();
        this.inimigo.create(1670,780,'inimigo');
        this.inimigo.setAll('anchor.x', .5);
        this.inimigo.setAll('anchor.y', .5);

        this.physics.enable(this.plataforma);
        this.physics.enable(this.inimigo);*/
        this.physics.enable(this.plataforma);

        this.inimigo = this.add.sprite(1670,780,'BOSS',13);
        this.inimigo.anchor.setTo(.5);
        this.inimigo.scale.setTo(.75);
        

        this.inimigo.animations.add('BOSSATQ',[0,1,2,3,4,5,6,7,8,9],10,false);
        this.inimigo.animations.add('BOSSTIRO',[10,11,12,13,9],7,false);
        this.physics.enable(this.inimigo);
        this.inimigo.body.setSize(378, 300,200,221);

        this.bala = this.add.sprite(0,0,'BOSS',15);
        this.bala.scale.setTo(.75);
        this.bala.anchor.setTo(.5);
        this.bala.exists = false;
        this.physics.enable(this.bala);
        this.bala.body.setSize(142, 34,251,307);

        
        this.elise = this.add.sprite(100, 890, 'elise');
        this.elise.anchor.setTo(0.5);
        this.elise.scale.setTo(.75);
        this.physics.enable(this.elise);
        this.elise.body.setSize(110, 250,80,0);
                
        // animação elise
        this.elise.animations.add('walk',[0,1,2,3,4,5,6,7],10,false);
        this.elise.animations.add('baixo',[13,14],10,false);
        this.elise.animations.add('pulo',[8,9],10,false);

        this.elise.animations.add('atq1',[16,17,18,11],10,false);
        this.elise.animations.add('atq2',[19,20,11],10,false);



        this.ref = 0;

        
        this.elise.body.gravity.y = 1400;
        this.elise.body.collideWorldBounds = true;
        this.elise.body.onWorldBounds = new Phaser.Signal();
        this.elise.body.onWorldBounds.add(this.retorno, this);

        this.bala.body.collideWorldBounds = true;
        this.bala.body.onWorldBounds = new Phaser.Signal();
        this.bala.body.onWorldBounds.add(this.retornobala, this);


        this.plataforma.setAll('body.immovable', true);
        //this.inimigo.setAll('body.gravity.y', 1400);
        //this.elise.body.collideWorldBounds = true;
        //this.inimigo.setAll('body.collideWorldBounds', true);
        this.inimigo.body.gravity.y = 1400;
        this.inimigo.body.collideWorldBounds = true;
        this.inimigo.body.checkCollision.up = false;
               
        this.criaUi();
        
        // criar grupos
        //this.criaGrupoInimigos();
            
                
        // teclado
        this.cursors = game.input.keyboard.createCursorKeys(); 
        this.atq1 = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        this.atq2 = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.atq3 = game.input.keyboard.addKey(Phaser.Keyboard.E);

        this.fase1 = game.input.keyboard.addKey(Phaser.Keyboard.U);
        this.fase2 = game.input.keyboard.addKey(Phaser.Keyboard.I);
        this.fase3 = game.input.keyboard.addKey(Phaser.Keyboard.O);
        this.fase4 = game.input.keyboard.addKey(Phaser.Keyboard.P);
        
        this.time.events.loop(5000, this.inverte, this);

        this.atqboss = this.add.audio('atqboss');
        this.atqB = this.add.audio('atqB');

        this.musica = this.add.audio('fase2');
        this.musica.volume = 0.3; 
        this.musica.loop = true;
        this.musica.play();

        this.atqE = this.add.audio('atqE');
        this.defE = this.add.audio('defE');
        this.deadE = this.add.audio('deadE');
        
    },
    criaUi:function(){
        var estilo = { font: '50px Arial', fill: '#ffffff' };
        this.vidasTxt = this.add.text(190, 5, 'Vidas: ' + vidas, estilo);
        this.vidasTxt.anchor.setTo(1, 0);
        
    },
    /*criaGrupoInimigos:function(){
        this.inimigos = this.add.group();
        this.inimigos.createMultiple(10, 'bala', 0);
        this.physics.enable(this.inimigos);
        this.inimigos.callAll('anchor.setTo', 'anchor', .5, .5);
        this.inimigos.setAll('checkWorldBounds', true);
        this.inimigos.setAll('outOfBoundsKill', true);

        this.inimigos.setAll('scale.x', .08);
        this.inimigos.setAll('scale.y', .08);
        
        //this.inimigos.callAll('animations.add','animations','anim', [0,1], 10, true);
        //this.inimigos.callAll('animations.play','animations','anim');
    },*/
    
    inverte:function(){
        //this.inimigo.setAll('scale.x', -1);
        this.ref++;
        if(this.ref== 1){
            if(!killboss == 1){
                this.inimigo.scale.x = -.75;
                this.inimigo.animations.play('BOSSTIRO');
                this.bala.position.setTo(this.inimigo.x,this.inimigo.y);
                exis = 1;
                this.atqB.play();
                this.bala.scale.x = -.75;
                this.bala.body.velocity.x = -2000;
                this.time.events.add(Phaser.Timer.SECOND * 2, this.avanca, this);
            }

        }

        if(this.ref== 2){
            if(!killboss == 1){
                this.inimigo.scale.x = .75;
                this.inimigo.animations.play('BOSSTIRO');
                this.bala.position.setTo(this.inimigo.x,this.inimigo.y);
                exis = 1;
                this.atqB.play();
                this.bala.scale.x = .75;
                this.bala.body.velocity.x = 3000;
                this.time.events.add(Phaser.Timer.SECOND * 1, this.avanca, this);
            }
            
            
        }
    },

    avanca:function(){
        if(this.ref ===1){
            this.inimigo.animations.play('BOSSATQ');
            this.inimigo.body.velocity.x = -3000;
            this.atqboss.play();
        }
        if(this.ref === 2){
            this.inimigo.animations.play('BOSSATQ');
            this.inimigo.body.velocity.x = 3000;
            this.atqboss.play();
            this.ref = 0;
        }
    },

    
    
    retorno:function(sprite, up, down, left, right){
        /*if(right)
            this.bounceAud.play();*/
        if(left || right){
            if(killboss == 0){
                this.deadE.play();
                vidas--;
                if(vidas>=0){
                this.elise.position.setTo(960, 890);
                }
            }
        }

        if(left && killboss == 1){
            this.musica.stop();
            this.state.start('Play3');

        }
    },

    retornobala:function(sprite, up, down, left, right){
        if(right || left){
            this.bala.position.setTo(this.inimigo.x,this.inimigo.y);
            this.bala.exists = false;
            this.bala.body.velocity.x = 0;
        }
       
    },

    update:function(){
        //this.magali.animations.play('correndo');
        

        this.atualizaUi();

        this.physics.arcade.collide(this.elise, this.plataforma);
        //this.physics.arcade.collide(this.elise, this.bala);
        this.physics.arcade.collide(this.inimigo, this.plataforma);
        this.physics.arcade.collide(this.elise, this.inimigo, this.mata, null, this);
        this.physics.arcade.overlap(this.elise, this.bala, this.mata1, null, this);

        if(this.fase1.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play');            
        }
        else if(this.fase2.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play2');            
        }
        else if(this.fase3.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play3');            
        }
        else if(this.fase4.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play4');            
        }
    
        if(!this.elise.inWorld){
            this.elise.position.setTo(250, 100);
        }

        if(exis == 1){
            this.bala.exists = true;
            exis =0;
        }

        // Joystick up button:
        socket.on("move_up", function(){
            mvJoystickUp = true;
        });
        socket.on("stop_up", function(){
            mvJoystickUp = false;
        });        

        // Joystick down button:
        socket.on("move_down", function(){
            mvJoystickDown = true;
        });
        socket.on("stop_down", function(){
            mvJoystickDown = false;
        });        

        // Joystick Left button:
        socket.on("move_left", function(){
            mvJoystickLeft = true;
        });
        socket.on("stop_left", function(){
            mvJoystickLeft = false;
        });        

        // Joystick Right button:
        socket.on("move_right", function(){
            mvJoystickRight = true;
        });
        socket.on("stop_right", function(){
            mvJoystickRight = false;
        });

        // Joystick A button:
        socket.on("press_A", function(){
            mvJoystickA = true;
        });
        socket.on("stop_A", function(){
            mvJoystickA = false;
        });

        // Joystick B button:
        socket.on("press_B", function(){
            mvJoystickB = true;
        });
        socket.on("stop_B", function(){
            mvJoystickB = false;
        });

        
       
    //ataque
        if(this.atq1.downDuration(100) || mvJoystickA == true) {   
            this.elise.animations.play('atq1');
            this.atqE.play();
        }
        else if(this.atq2.downDuration(100) || mvJoystickB == true) {
            this.elise.animations.play('atq2');
            this.atqE.play();
        }
    //Movimento
        if((this.cursors.left.isDown || mvJoystickLeft == true) && this.elise.frame != 14 && this.elise.frame != 13) {
            this.elise.body.velocity.x = -400; 
            this.elise.scale.x= -.75;
            if(this.elise.frame < 16 || this.elise.frame > 20){
                this.elise.animations.play('walk');
            }
        }
    
        
        else if((this.cursors.right.isDown || mvJoystickRight == true) && this.elise.frame != 14 && this.elise.frame != 13) {
            this.elise.body.velocity.x = 400;
            this.elise.scale.x= .75;
            if(this.elise.frame < 16 || this.elise.frame > 20){
                this.elise.animations.play('walk');
            }
        }
    
    //parada   
        else{        
            this.elise.body.velocity.x = 0;
            if (this.elise.frame < 16 || this.elise.frame > 20){
            this.elise.frame=11;
            }
        }
    //Pulo
        if((this.cursors.up.isDown || mvJoystickUp == true) && this.elise.body.touching.down){
            this.elise.frame = 8;
            this.elise.body.velocity.y = -1000;        
        }
    //Agachado
        if((this.cursors.down.isDown || mvJoystickDown == true)) {
            this.elise.body.velocity.x = 0;
            this.elise.frame = 13;
        }

        if((this.cursors.down.isDown || mvJoystickDown == true) && this.elise.body.touching.down){
            this.elise.frame = 14;
            //this.elise.animations.play('baixo');        
        }
    //Pulo no alto
        if(!this.elise.body.touching.down){
            this.elise.frame = 9;
        }

       
    },
    atualizaUi:function(){
        this.vidasTxt.text = 'Vidas: ' + (vidas >= 0?vidas:0);
        
    },
    mata:function(elise,inimigo){
        if((elise.frame == 16 || elise.frame == 17 || elise.frame == 18) && (inimigo.scale.x == .75 && inimigo.body.touching.left) || (inimigo.scale.x == -.75 && inimigo.body.touching.right)){
            inimigo.kill();
            atqA++;
            if(atqA <= 1){
                if(elise.x <960){
                    inimigo.reset(1670,780);
                    this.ref = 0;
                }
                if(elise.x >960){
                    inimigo.reset(250,780);
                    this.ref = 1;
                }
            }
            if(atqA >= 2){
                killboss = 1;
            }
        }

        if((inimigo.scale.x == .75 && inimigo.body.touching.right) || (inimigo.scale.x == -.75 && inimigo.body.touching.left)){
            elise.kill();
            this.deadE.play();
            vidas--;
            
            this.time.events.add(Phaser.Timer.SECOND * 1, this.inicializa, this);



        }

        /*if(this.inimigo.countLiving()==0){
            
            this.vida++;
            this.state.start('Play2');
        }*/
       
    },

    mata1:function(elise,inimigo){
        if(elise.frame == 19 ||  elise.frame == 20){
            this.defE.play();
            inimigo.kill();
        }
        else if(elise.frame != 14){
                elise.kill();
                this.deadE.play();
                vidas--;
                this.time.events.add(Phaser.Timer.SECOND * 2, this.inicializa, this);
            
        }

    },
    
    inicializa:function(){
        if(vidas>=0){
            this.elise.reset(this.world.centerX, 890);
        }
        else{
            //vidas = 10;
            // Invasion.musica.stop();
            this.musica.stop();
            this.state.start('Menu');
        }
    },
    /*eliminaInimigo: function(magali, inimigos){
        this.nivel--;
        magali.kill();

        
    },*/
    
    
}

Invasion.Play3 = function(){}

Invasion.Play3.prototype = {
    create:function(){

        this.fundo = this.add.sprite(0, 0, 'A');
        this.fundo.alpha = .35;
        this.fundo.animations.add('alerta',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],10,false);
        
        kill = 0;
        kill1 = 0;
        exis = 0;
        exis1 = 0;
        containi = 0;

        this.plataforma = this.add.group();
        this.plataforma.create(114,1030,'plataforma');
        this.plataforma.create(344,1030,'plataforma');
        this.plataforma.create(894,1030,'plataforma');
        this.plataforma.create(1122,1030,'plataforma');
        this.plataforma.create(1350,1030,'plataforma');
        this.plataforma.create(1578,1030,'plataforma');
        this.plataforma.create(1806,1030,'plataforma');

        this.plataforma.create(1122,800,'plataforma');
        this.plataforma.create(1350,800,'plataforma');
        this.plataforma.create(1578,800,'plataforma');
        this.plataforma.create(1806,800,'plataforma');

        this.plataforma.create(114,500,'plataforma');
        this.plataforma.create(342,500,'plataforma');
        this.plataforma.create(570,500,'plataforma');
        this.plataforma.create(798,500,'plataforma');
        this.plataforma.create(1026,500,'plataforma');
        this.plataforma.create(1254,500,'plataforma');
        this.plataforma.create(1482,500,'plataforma');
        
        this.plataforma.setAll('anchor.x', .5);
        this.plataforma.setAll('anchor.y', .5);

        this.inimigo = this.add.sprite(1122,660,'inimigo',8);
        this.inimigo.anchor.setTo(.5);
        this.inimigo.scale.setTo(.5);
        this.inimigo.animations.add('vira',[10,11,12,13,8],10,false);

        this.inimigo1 = this.add.sprite(255,891,'inimigo',8);
        this.inimigo1.anchor.setTo(.5);
        this.inimigo1.scale.setTo(.5);
        this.inimigo1.animations.add('vira',[10,11,12,13,8],10,false);


        this.bala = this.add.sprite(1022,660,'inimigo',15);
        this.bala.anchor.setTo(.5);
        this.bala.scale.setTo(.5);
        this.bala.exists = false;
        //this.bala.alpha = 0;

        this.bala1 = this.add.sprite(155,891,'inimigo',15);
        this.bala1.anchor.setTo(.5);
        this.bala1.scale.setTo(.5);
        this.bala1.exists = false;
        //this.bala.alpha = 0;

        this.physics.enable(this.plataforma);
        this.physics.enable(this.inimigo);
        this.physics.enable(this.inimigo1);

        this.physics.enable(this.bala);
        this.physics.enable(this.bala1);

        this.bala.checkWorldBounds = true;
        this.bala.outOfBoundsKill = true;

        this.bala1.checkWorldBounds = true;
        this.bala1.outOfBoundsKill = true;

        

        
        this.elise = this.add.sprite(1806,890, 'elise',11);
        this.elise.anchor.setTo(0.5);
        this.elise.scale.setTo(.75);
        
        this.physics.enable(this.elise);
        this.elise.body.setSize(110, 250,80,0);
                
        // animação elise
        this.elise.animations.add('walk',[0,1,2,3,4,5,6,7],10,false);
        this.elise.animations.add('baixo',[13,14],10,false);
        this.elise.animations.add('pulo',[8,9],10,false);

        this.elise.animations.add('atq1',[16,17,18,11],10,false);
        this.elise.animations.add('atq2',[19,20,11],10,false);
    
        
        //this.vidas = 2;
        
        this.cenario = 0;
        this.ref = 0;
        this.finalC = 0;

        
        this.elise.body.gravity.y = 1400;
        
        this.elise.body.collideWorldBounds = true;
        this.elise.body.onWorldBounds = new Phaser.Signal();
        this.elise.body.onWorldBounds.add(this.retorno, this);

        this.bala.body.collideWorldBounds = true;
        this.bala.body.onWorldBounds = new Phaser.Signal();
        this.bala.body.onWorldBounds.add(this.retornobala, this);

        this.bala1.body.collideWorldBounds = true;
        this.bala1.body.onWorldBounds = new Phaser.Signal();
        this.bala1.body.onWorldBounds.add(this.retornobala1, this);


        this.plataforma.setAll('body.immovable', true);

        this.inimigo.body.immovable = true;
        this.inimigo.body.setSize(150,250,234,0);

        this.inimigo1.body.immovable = true;
        this.inimigo1.body.setSize(150,250,234,0);

        this.bala.body.setSize(405,50,50,225);
        this.bala1.body.setSize(405,50,50,225);
        
        
        this.criaUi();
        
        // criar grupos
        //this.criaGrupoInimigos();
            
                
        // teclado
        this.cursors = game.input.keyboard.createCursorKeys(); 
        this.atq1 = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        this.atq2 = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.atq3 = game.input.keyboard.addKey(Phaser.Keyboard.E);

        this.fase1 = game.input.keyboard.addKey(Phaser.Keyboard.U);
        this.fase2 = game.input.keyboard.addKey(Phaser.Keyboard.I);
        this.fase3 = game.input.keyboard.addKey(Phaser.Keyboard.O);
        this.fase4 = game.input.keyboard.addKey(Phaser.Keyboard.P);
        
        this.time.events.loop(4000, this.inverte, this);

        this.final = this.add.sprite(0,0,'final');
        this.final.alpha = 0;

        this.musica = this.add.audio('fase3');
        this.musica.volume = .5;
        this.musica.loop = true;
        this.musica.play();

        //TROPAS
        this.atqT = this.add.audio('atqT');

        //ELISE
        this.atqE = this.add.audio('atqE');
        this.defE = this.add.audio('defE');
        this.deadE = this.add.audio('deadE');
        
    },
    criaUi:function(){
        var estilo = { font: '50px Arial', fill: '#ffffff' };
        this.vidasTxt = this.add.text(190, 5, 'Vidas: ' + vidas, estilo);
        this.vidasTxt.anchor.setTo(1, 0);
        
    },
    
    inverte:function(){

        
        this.ref++;
        if(this.ref===1){
            if(!kill == 1){
                this.inimigo.scale.x = -.5;
                this.inimigo.animations.play('vira');
                exis = 1;
                this.atqT.play();
                this.bala.body.velocity.x = -1000;
                this.bala.scale.x = -.5;
            }
            if(!kill1 == 1){
                this.inimigo1.scale.x = -.5;
                this.inimigo1.animations.play('vira');
                exis1 = 1;
                this.atqT.play();
                this.bala1.scale.x = -.5;
                this.bala1.body.velocity.x = -1000;
            }
        }

        if(this.ref===2){
            if(!kill == 1){
                this.inimigo.scale.x = .5;
                this.inimigo.animations.play('vira');
                exis = 1;
                this.atqT.play();
                this.bala.body.velocity.x = 1000;
                this.bala.scale.x = .5;
                this.ref = 0;
            }
            if(!kill1 == 1){
                this.inimigo1.scale.x = .5;
                this.inimigo1.animations.play('vira');
                exis1 = 1;
                this.atqT.play();
                this.bala1.scale.x = .5;
                this.bala1.body.velocity.x = 1000;
                this.ref = 0;
            }
        }
    },

        
    retorno:function(sprite, up, down, left, right){
        
        if(down && this.cenario == 0){
            this.deadE.play();
            vidas--;
            this.elise.position.setTo(1806,890);
            
        }
        if(down && this.cenario == 1 && this.elise.x < 540){
            this.elise.body.collideWorldBounds = false;
            this.finalC = 1;
            
            
        }
    },

    retornobala:function(sprite, up, down, left, right){
        if(right){
            this.bala.position.setTo(1022,660);
            this.bala.exists = false;
            this.bala.body.velocity.x = 0;
        }
        if(left){
            this.bala.position.setTo(1222,660);
            this.bala.exists = false;
            this.bala.body.velocity.x = 0;
        }
       
    },

    retornobala1:function(sprite, up, down, left, right){
        if(right){
            this.bala1.position.setTo(155,891);
            this.bala1.exists = false;
            this.bala1.body.velocity.x = 0;
            
        }

        if(left){
            this.bala1.position.setTo(355,891);
            this.bala1.exists = false;
            this.bala1.body.velocity.x = 0;
            
        }
       
    },

    

    update:function(){
        this.fundo.animations.play('alerta');

        

        if(this.finalC == 1){
            if(this.final.alpha == 0){
                this.add.tween(this.final).to( {alpha: 1}, 1000, Phaser.Easing.Linear.Nome, true);
                this.time.events.add(Phaser.Timer.SECOND * 2, this.final1, this);

            }
        }
        else if(this.finalC == 2){
            this.musica.stop();
            this.state.start('Play4');
        }
       
        
        //this.elise.animations.stop('atq2');
        

        this.atualizaUi();

        this.physics.arcade.collide(this.elise, this.plataforma);
        this.physics.arcade.collide(this.plataforma, this.inimigo);
        this.physics.arcade.collide(this.elise, this.inimigo, this.mata, null, this);
        this.physics.arcade.collide(this.elise, this.inimigo1, this.mata11, null, this);
        this.physics.arcade.overlap(this.elise, this.bala, this.mata1, null, this);
        this.physics.arcade.overlap(this.elise, this.bala1, this.mata2, null, this);


        if(this.fase1.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play');            
        }
        else if(this.fase2.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play2');            
        }
        else if(this.fase3.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play3');            
        }
        else if(this.fase4.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play4');            
        }
    
    
        

        if(exis == 1){
            this.bala.exists = true;
            exis = 0;
        }

        if(exis1 == 1){
            this.bala1.exists = true;
            exis1 = 0;
        }

        // Joystick up button:
        socket.on("move_up", function(){
            mvJoystickUp = true;
        });
        socket.on("stop_up", function(){
            mvJoystickUp = false;
        });        

        // Joystick down button:
        socket.on("move_down", function(){
            mvJoystickDown = true;
        });
        socket.on("stop_down", function(){
            mvJoystickDown = false;
        });        

        // Joystick Left button:
        socket.on("move_left", function(){
            mvJoystickLeft = true;
        });
        socket.on("stop_left", function(){
            mvJoystickLeft = false;
        });        

        // Joystick Right button:
        socket.on("move_right", function(){
            mvJoystickRight = true;
        });
        socket.on("stop_right", function(){
            mvJoystickRight = false;
        });

        // Joystick A button:
        socket.on("press_A", function(){
            mvJoystickA = true;
        });
        socket.on("stop_A", function(){
            mvJoystickA = false;
        });

        // Joystick B button:
        socket.on("press_B", function(){
            mvJoystickB = true;
        });
        socket.on("stop_B", function(){
            mvJoystickB = false;
        });

       
    //ataque
        if(this.atq1.downDuration(100) || mvJoystickA == true) {   
            this.elise.animations.play('atq1');
            this.atqE.play();
        }
        else if(this.atq2.downDuration(100) || mvJoystickB == true) {
            this.elise.animations.play('atq2');
            this.atqE.play();
        }
    //Movimento
        if((this.cursors.left.isDown || mvJoystickLeft == true) && this.elise.frame != 14 && this.elise.frame != 13) {
            this.elise.body.velocity.x = -400; 
            this.elise.scale.x= -.75;
            if(this.elise.frame < 16 || this.elise.frame > 20){
                this.elise.animations.play('walk');
            }
        }

    
        else if((this.cursors.right.isDown || mvJoystickRight == true) && this.elise.frame != 14 && this.elise.frame != 13) {
            this.elise.body.velocity.x = 400;
            this.elise.scale.x= .75;
            if(this.elise.frame < 16 || this.elise.frame > 20){
                this.elise.animations.play('walk');
            }
        }

    //parada   
        else{        
            this.elise.body.velocity.x = 0;
            if (this.elise.frame < 16 || this.elise.frame > 20){
                this.elise.frame=11;
            }
        }
    //Pulo
        if((this.cursors.up.isDown || mvJoystickUp == true) && this.elise.body.touching.down){
            this.elise.frame = 8;
            this.elise.body.velocity.y = -1000;        
        }
    //Agachado
        if((this.cursors.down.isDown || mvJoystickDown == true)) {
            this.elise.body.velocity.x = 0;
            this.elise.frame = 13;    
        }

        if((this.cursors.down.isDown || mvJoystickDown == true) && this.elise.body.touching.down){
            this.elise.frame = 14;
            //this.elise.animations.play('baixo');        
        }
    //Pulo no alto
        if(!this.elise.body.touching.down){
            this.elise.frame = 9;
        }

        if(vidas<0){
            this.musica.stop();
            this.state.start('Menu');
        }
       
    },
    atualizaUi:function(){
        this.vidasTxt.text = 'Vidas: ' + (vidas >= 0?vidas:0);
        
    },
    mata:function(elise,inimigo){
        if(elise.frame == 16 || elise.frame == 17 || elise.frame == 18){
            inimigo.kill();
            kill = 1;
            containi++;
        }
               
    },

    mata11:function(elise,inimigo){
        if(elise.frame == 16 || elise.frame == 17 || elise.frame == 18){
            inimigo.kill();
            kill1 = 1;
            containi++;
        }
        if(containi == 2){
            
            vidas++;
            this.cenario = 1;
            
        }
       
    },

    mata1:function(elise,bala){
        if(elise.frame == 19 || elise.frame == 20){
            this.defE.play();
            if(bala.scale.x == .5){
                bala.position.setTo(1022,660);
            }
            else if(bala.scale.x == -.5){
                bala.position.setTo(1222,660);
            }
            bala.exists = false;
            bala.body.velocity.x = 0;
        }
        else{
            if((bala.body.touching.right && bala.scale.x == .5) || (bala.body.touching.left && bala.scale.x == -.5)){
                elise.kill();
                this.deadE.play();
                vidas--;
                this.time.events.add(Phaser.Timer.SECOND * 2, this.inicializa, this);
            }
        }
       
    },
    mata2:function(elise,bala){
        if(elise.frame == 19 ||  elise.frame == 20){
            this.defE.play();
            if(bala.scale.x == .5){
                bala.position.setTo(155,891);
            }
            if(bala.scale.x == -.5){
                bala.position.setTo(355,891);
            }
            bala.exists = false;
            bala.body.velocity.x = 0;
        }
        else{            
            if((bala.body.touching.right && bala.scale.x == .5) || (bala.body.touching.left && bala.scale.x == -.5)){
                elise.kill();
                this.deadE.play();
                vidas--;
                this.time.events.add(Phaser.Timer.SECOND * 2, this.inicializa, this);
            }
        }
       
    },
    

    inicializa:function(){
        if(vidas>=0){
            this.elise.reset(1806,890);
        }
        else{
            //this.state.start('Menu');
        }
    },


    final1:function(){
        this.finalC = 2;
    },
    
    
}

Invasion.Play4 = function(){}

Invasion.Play4.prototype = {
    create: function(){

        this.fundoraio = this.add.sprite(0,0,'raiofundo');
        this.fundo = this.add.sprite(0,0,'final');
        this.raios = this.add.sprite(0,0,'raio');
        this.raios.alpha =0;

        this.exrys = this.add.sprite(0,0,'exrys');
        this.exrys.alpha =0;

        this.texto1 = this.add.sprite(0, 0, 'texto1');
        this.texto1.alpha = 0;

        this.texto2 = this.add.sprite(0, 0, 'texto2');
        this.texto2.alpha = 0;

        this.texto3 = this.add.sprite(0, 0, 'texto3');
        this.texto3.alpha = 0;

        this.texto4 = this.add.sprite(0, 0, 'texto4');
        this.texto4.alpha = 0;

        this.raioA = this.add.audio('raioA');

        this.fase1 = game.input.keyboard.addKey(Phaser.Keyboard.U);
        this.fase2 = game.input.keyboard.addKey(Phaser.Keyboard.I);
        this.fase3 = game.input.keyboard.addKey(Phaser.Keyboard.O);
        this.fase4 = game.input.keyboard.addKey(Phaser.Keyboard.P);

        this.musica = this.add.audio('menu');
        this.musica.volume = 0.03;
        this.musica.loop = true;
        this.musica.play();
        

        this.time.events.add(Phaser.Timer.SECOND * 1, this.acendetexto1, this);
        


    },

    update: function(){

        if(this.fase1.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play');            
        }
        else if(this.fase2.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play2');            
        }
        else if(this.fase3.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play3');            
        }
        else if(this.fase4.isDown){
            vidas = 2;
            this.musica.stop();
            this.state.start('Play4');            
        }
    },

    //TEXTO1
    acendetexto1:function(){
        this.add.tween(this.texto1).to( {alpha: 1}, 3000, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * 3, this.apagatexto1, this);
    },
    apagatexto1:function(){
        this.add.tween(this.texto1).to( {alpha: 0}, 2000, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * 2, this.acendetexto2, this);
    },

    //TEXTO2
    acendetexto2:function(){
        this.add.tween(this.texto2).to( {alpha: 1}, 3000, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * 7, this.apagatexto2, this);
    },
    apagatexto2:function(){
        this.add.tween(this.texto2).to( {alpha: 0}, 2000, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * 3, this.acendetexto3, this);
    },

    //TEXTO3
    acendetexto3:function(){
        this.add.tween(this.texto3).to( {alpha: 1}, 3000, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * 8, this.apagatexto3, this);
    },
    apagatexto3:function(){
        this.add.tween(this.texto3).to( {alpha: 0}, 2000, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * 3, this.acendetexto4, this);
    },

    //TEXTO4 
    acendetexto4:function(){
        this.add.tween(this.texto4).to( {alpha: 1}, 3000, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * 3, this.raio, this);
    },
    raio:function(){
        this.add.tween(this.fundo).to( {alpha: 0}, 100, Phaser.Easing.Linear.Nome, true);
        this.add.tween(this.raios).to( {alpha: 1}, 200, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * .2, this.raio1, this);        
    },
    raio1:function(){
        this.raioA.play();
        this.musica.stop();
        this.add.tween(this.fundo).to( {alpha: 1}, 100, Phaser.Easing.Linear.Nome, true);
        this.add.tween(this.raios).to( {alpha: 0}, 200, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * .2, this.final1, this);        
    },
    final1:function(){
        this.add.tween(this.texto4).to( {alpha: 0}, 3000, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * .3, this.final2, this);            
    },

    final2:function(){
        this.add.tween(this.exrys).to( {alpha: 1}, 2000, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * 3, this.final3, this);            
    },

    final3:function(){
        this.add.tween(this.exrys).to( {alpha: 0}, 2000, Phaser.Easing.Linear.Nome, true);
        this.time.events.add(Phaser.Timer.SECOND * 3, this.final2, this);            
    },

    
   
   
}

var game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'game');

// Creating variables for the Arduino:
var io = require("socket.io-client");
var socket = io("http://localhost:8081");

var mvJoystickUp = false;
var mvJoystickDown = false;
var mvJoystickLeft = false;
var mvJoystickRight = false;

var mvJoystickA = false;
var mvJoystickB = false;

var vidas = 2;
var kill = 0;
var kill1 =0;
var exis = 0;
var exis1 = 0;
var killboss = 0;

var fundos = 0;
var apaga = 0;


var atqA = 0;
var containi = 0;

game.state.add('Menu', Invasion.Menu);
game.state.add('Play', Invasion.Play);
game.state.add('Play2', Invasion.Play2);
game.state.add('Play3', Invasion.Play3);
game.state.add('Play4', Invasion.Play4);

game.state.start('Menu');