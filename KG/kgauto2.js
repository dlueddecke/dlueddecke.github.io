setInterval(
  function(){
    var catpower=gamePage.resPool.get('manpower');
    if(catpower.value/catpower.maxValue>0.95) {
        gamePage.village.huntAll();
        if(gamePage.workshop.getCraft('parchment').unlocked) {
            gamePage.craftAll('parchment');
        }
        if(gamePage.workshop.getCraft('manuscript').unlocked) {
            gamePage.craft('manuscript', 1);
        }
        if(gamePage.workshop.getCraft('compedium').unlocked) {
            gamePage.craft('compedium', 1);
        }
        if(gamePage.workshop.getCraft('blueprint').unlocked) {
            gamePage.craft('blueprint', 1);
        }
        if(gamePage.workshop.getCraft('steel').unlocked) {
            gamePage.craft('steel', 1);
        }
    }
    game.tick()
  },5)
