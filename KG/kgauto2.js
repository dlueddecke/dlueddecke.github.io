setInterval(
  function(){

      // Adding a comment
    
		var catnip = gamePage.resPool.get('catnip');
		var wood = gamePage.resPool.get('wood');
		var minerals = gamePage.resPool.get('minerals');
		var coal = gamePage.resPool.get('coal');
		var iron = gamePage.resPool.get('iron');
		var titanium = gamePage.resPool.get('titanium');
		var gold = gamePage.resPool.get('gold');
		var oil = gamePage.resPool.get('oil');
		var uranium = gamePage.resPool.get('uranium');
		var unobtainium = gamePage.resPool.get('unobtainium');
		var antimatter = gamePage.resPool.get('antimatter');
		var catpower = gamePage.resPool.get('manpower');
		var science = gamePage.resPool.get('science');
		var culture = gamePage.resPool.get('culture');
		var faith = gamePage.resPool.get('faith');
		var starchart = gamePage.resPool.get('starchart');

		if (catnip.unlocked && wood.unlocked) {
				if (catnip.value / catnip.maxValue > 0.95) {gamePage.craft('wood', 1)}
		}    
        
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
