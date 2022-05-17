setInterval(
  function(){

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

        // var wood2 = gamePage.workshop.getCraft('wood');
        var beam = gamePage.workshop.getCraft('beam');
        var slab = gamePage.workshop.getCraft('slab');
        var plate = gamePage.workshop.getCraft('plate');
        var steel = gamePage.workshop.getCraft('steel');
        var concrete = gamePage.workshop.getCraft('concrate');
        var gear = gamePage.workshop.getCraft('gear');
        var alloy = gamePage.workshop.getCraft('alloy');
        var scaffold = gamePage.workshop.getCraft('scaffold');
        var thorium = gamePage.workshop.getCraft('thorium');

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

        // [concrete, steel, 'concrate'],

        // var res2 = [
        //     [concrete, 'concrate'],
        //     // [gear, 'gear'],
        //     // [alloy, 'alloy']
        //     [scaffold, 'scaffold']
        //     // [thorium, 'thorium']
        // ]
        //
        // for (var i = 0; i < res2.length; i++) {
        //     if (res2[i][0].unlocked) {
        //         gamePage.craft(res2[i][1], 1);
        //     }
        // }

        // if (wood.unlocked) {
        //     if (catnip.value / catnip.maxValue > 0.95) {gamePage.craft('wood', 1)}
        // }


        // if (wood.unlocked) {
        //     if (catnip.value / catnip.maxValue > 0.95) {gamePage.craft('wood', 1)}
        // }
        //
        // if (beam.unlocked) {
        //     if (wood.value / wood.maxValue > 0.95) {gamePage.craft('beam', 1)}
        // }
        //
        // if (slab.unlocked) {
        //     if (minerals.value / minerals.maxValue > 0.95) {gamePage.craft('slab', 1)}
        // }
        //
        // if (plate.unlocked) {
        //     if (iron.value / iron.maxValue > 0.95) {gamePage.craft('plate', 1)}
        // }
        //
        // if (steel.unlocked) {
        //     if (iron.value / iron.maxValue > 0.95) {gamePage.craft('plate', 1)}
        // }


        if (catpower.value/catpower.maxValue>0.95) {
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

        if (culture.value / culture.maxValue > 0.99) {
            if(gamePage.workshop.getCraft('manuscript').unlocked) {
                gamePage.craft('manuscript', 1);
            }
        }

game.tick()

    },5)
