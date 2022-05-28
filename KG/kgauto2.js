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

        var beam = gamePage.resPool.get('beam');
        var slab = gamePage.resPool.get('slab');
        var plate = gamePage.resPool.get('plate');
        var steel = gamePage.resPool.get('steel');
        var concrete = gamePage.resPool.get('concrate');
        var gear = gamePage.resPool.get('gear');
        var alloy = gamePage.resPool.get('alloy');
        var eludium = gamePage.resPool.get('eludium');
        var scaffold = gamePage.resPool.get('scaffold');
        var ship = game.resPool.get('ship');
        var tanker = game.resPool.get('tanker');
        var kerosene = gamePage.resPool.get('kerosene');
        var parchment = gamePage.resPool.get('parchment');
        var manuscript = gamePage.resPool.get('manuscript');
        var compendium = gamePage.resPool.get('compedium');
        var blueprint = gamePage.resPool.get('blueprint');
        var thorium = gamePage.resPool.get('thorium');
        var megalith = gamePage.resPool.get('megalith');

        // Res1 Crafting
        var res1 = [
            [wood, catnip, 'wood'],
            [beam, wood, 'beam'],
            [slab, minerals, 'slab'],
            [plate, iron, 'plate'],
            [kerosene, oil, 'kerosene'],
            [thorium, uranium, 'thorium']
        ]

        for (var i = 0; i < res1.length; i++) {
            if (res1[i][0].unlocked && res1[i][1].value / res1[i][1].maxValue > 0.95) {
                gamePage.craft(res1[i][2], 1);
            }
        }

        // Res2 Crafting
        if (steel.unlocked && coal.value / coal.maxValue > 0.95 && iron.value / iron.maxValue > 0.95) {
            gamePage.craft('steel', 1);
        }

        // Res3 Crafting
        var res3 = [
            [alloy, titanium, steel, 'alloy'],
            [eludium, unobtainium, alloy, 'eludium']
        ]

        for (var j = 0; j < res3.length; j++) {
            if (res3[j][0].unlocked && res3[j][1].value / res3[j][1].maxValue > 0.95 && res3[j][2].value / res3[j][0].value > 2) {
                gamePage.craft(res3[j][3], 1);
            }
        }

        // Res4 Crafting
        var res4 = [
            [gear, steel, 'gear'],
            [scaffold, beam, 'scaffold']
        ]

        for (var k = 0; k < res4.length; k++) {
            if (res4[k][0].unlocked && res4[k][1].value / res4[k][0] > 2) {
                gamePage.craft(res4[k][2], 1);
            }
        }

        // Res5 Crafting
        if (concrete.unlocked && slab.value / concrete.value > 2 && steel.value / concrete.value > 2) {
            gamePage.craft('concrate', 1);
        }

        // Res6 Crafting
        var res6 = [
            [ship, starchart, plate, scaffold, 'ship'],
            [tanker, alloy, ship, blueprint, 'tanker'],
            [megalith, beam, slab, plate, 'megalith']
        ]

        for (var m = 0; m < res6.length; m++) {
            if (res6[m][0].unlocked && res6[m][1].value / res6[m][0].value > 2 && res6[m][2].value / res6[m][0].value > 2 && res6[m][3].value / res6[m][0].value > 2) {
                gamePage.workshop.craft(res6[m][0], 1);
            }
        }

        // autoHunt Crafting
        if (catpower.unlocked && catpower.value / catpower.maxValue > 0.95) {
            gamePage.village.huntAll();
            if (parchmentC.unlocked) {
                gamePage.craftAll('parchment');
            }
            if (manuscriptC.unlocked && culture.unlocked && culture.value / culture.maxValue > 0.95 && parchment.value > 2 * manuscript.value) {
                gamePage.craft('manuscript', Math.floor(culture.value / (2 * 300)));
            }
            if (compendiumC.unlocked) {
                if (manuscript.value > 2 * compendium.value && science.value / science.maxValue > 0.95) {
                    gamePage.craft('compedium', Math.floor(science.value/(2 * 10000)));
                    if (blueprintC.unlocked && compendium.value > 2 * blueprint.value) {
                        gamePage.craft('blueprint', Math.floor(science.value/(2 * 25000)));
                    }
                }
            }
        }

        // autoPray
        if (faith.unlocked && faith.value / faith.maxValue > 0.95){
            gamePage.religion.praise();
        }

        // autoPromote & autoManage
        if (gamePage.science.get('civil').researched && !gamePage.ironWill && gold.value / gold.maxValue > 0.95) {
            gamePage.village.promoteKittens();
            gamePage.village.optimizeJobs();
        }

    game.tick();

    },5)
