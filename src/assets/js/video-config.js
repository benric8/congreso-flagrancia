var player = null;
function configVideo(){
    var options = {};

    if(player){
        player.dispose();
        console.log("eliminando");
    }

    player = videojs('cumbre-pj-video', options, function onPlayerReady() {
        videojs.log('Your player is ready!');
    
        // In this context, `this` is the player that was created by Video.js.
        this.play();
    
        // How about an event listener?
        this.on('ended', function() {
            videojs.log('Awww...over so soon?!');
        });
    });

    //console.log("config video 2");

}