setInterval(
  function(){

        var catnip = gamePage.resPool.get('catnip');
        var wood = gamePage.resPool.get('wood');
        var minerals = gamePage.resPool.get('minerals');
        var coal = gamePage.resPool.get('coal');
        var iron = gamePage.resPool.get('iron');
        var titanium = gamePage.resPool.get('titanium');
        // var gold = gamePage.resPool.get('gold');
        // var oil = gamePage.resPool.get('oil');
        // var uranium = gamePage.resPool.get('uranium');
        // var unobtainium = gamePage.resPool.get('unobtainium');
        // var antimatter = gamePage.resPool.get('antimatter');
        var catpower = gamePage.resPool.get('manpower');
        // var science = gamePage.resPool.get('science');
        var culture = gamePage.resPool.get('culture');
        // var faith = gamePage.resPool.get('faith');
        // var starchart = gamePage.resPool.get('starchart');

        // var wood2 = gamePage.workshop.getCraft('wood');
        var beam = gamePage.workshop.getCraft('beam');
        var slab = gamePage.workshop.getCraft('slab');
        var plate = gamePage.workshop.getCraft('plate');
        var steel = gamePage.workshop.getCraft('steel');
        // var concrete = gamePage.workshop.getCraft('concrate');
        var gear = gamePage.workshop.getCraft('gear');
        var alloy = gamePage.workshop.getCraft('alloy');
        var scaffold = gamePage.workshop.getCraft('scaffold');
        // var thorium = gamePage.workshop.getCraft('thorium');

        var parchment = gamePage.workshop.getCraft('parchment');
        var manuscript = gamePage.workshop.getCraft('manuscript');
        var compendium = gamePage.workshop.getCraft('compedium');
        var blueprint = gamePage.workshop.getCraft('blueprint');

        var res = [
            [wood, catnip, 'wood'],
            [beam, wood, 'beam'],
            [slab, minerals, 'slab'],
            [plate, iron, 'plate'],
            [steel, coal, 'steel'],
            [gear, steel, 'gear'],
            [alloy, titanium, 'alloy']

        ]

        for (var i = 0; i < res.length; i++) {
            if (res[i][0].unlocked) {
                if (res[i][1].value / res[i][1].maxValue > 0.99) {
                    gamePage.craft(res[i][2], 1);
                }
            }
        }

        var res2 = [
            // [concrete, steel, 'concrate'],
            [gear, steel, 'gear'],
            // [alloy, steel, 'alloy']
            [scaffold, beam, 'scaffold']
        //     // [thorium, 'thorium']
        ]

        for (var i = 0; i < res2.length; i++) {
            if (res2[i][0].unlocked) {
                if (res2[i][1].value < res2[i][0].value) {
                    gamePage.craft(res2[i][2], 1);
                }
            }
        }

        if (catpower.value / catpower.maxValue > 0.95) {
            gamePage.village.huntAll();
            if(parchment.unlocked) {
                gamePage.craftAll('parchment');
            }
        }
        if (culture.value / culture.maxValue > 0.99) {
            if(manuscript.unlocked && manuscript.value < parchment.value) {
                gamePage.craft('manuscript', 1);
            }
        }
        if(compendium.unlocked && compendium.value < manuscript.value) {
            gamePage.craft('compedium', 1);
        }
        if(blueprint.unlocked && blueprint.value < compendium.value) {
            gamePage.craft('blueprint', 1);
        }

    game.tick()

    },5)
