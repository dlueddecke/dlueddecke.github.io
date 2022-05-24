setInterval(
  function(){

        var catnip = gamePage.resPool.get('catnip');
        var wood = gamePage.resPool.get('wood');
        var minerals = gamePage.resPool.get('minerals');
        var coal = gamePage.resPool.get('coal');
        var iron = gamePage.resPool.get('iron');
        var titanium = gamePage.resPool.get('titanium');
        var gold = gamePage.resPool.get('gold');
        // var oil = gamePage.resPool.get('oil');
        // var uranium = gamePage.resPool.get('uranium');
        // var unobtainium = gamePage.resPool.get('unobtainium');
        // var antimatter = gamePage.resPool.get('antimatter');
        var catpower = gamePage.resPool.get('manpower');
        var science = gamePage.resPool.get('science');
        var culture = gamePage.resPool.get('culture');
        var faith = gamePage.resPool.get('faith');
        // var starchart = gamePage.resPool.get('starchart');

        var beam = gamePage.resPool.get('beam');
        var slab = gamePage.resPool.get('slab');
        var plate = gamePage.resPool.get('plate');
        var steel = gamePage.resPool.get('steel');
        var concrete = gamePage.resPool.get('concrate');
        var gear = gamePage.resPool.get('gear');
        var alloy = gamePage.resPool.get('alloy');
        var scaffold = gamePage.resPool.get('scaffold');
        // var thorium = gamePage.resPool.get('thorium');
        var parchment = gamePage.resPool.get('parchment');
        var manuscript = gamePage.resPool.get('manuscript');
        var compendium = gamePage.resPool.get('compedium');
        var blueprint = gamePage.resPool.get('blueprint');

        var woodC = gamePage.workshop.getCraft('wood');
        var beamC = gamePage.workshop.getCraft('beam');
        var slabC = gamePage.workshop.getCraft('slab');
        var plateC = gamePage.workshop.getCraft('plate');
        var steelC = gamePage.workshop.getCraft('steel');
        var concreteC = gamePage.workshop.getCraft('concrate');
        var gearC = gamePage.workshop.getCraft('gear');
        var alloyC = gamePage.workshop.getCraft('alloy');
        var scaffoldC = gamePage.workshop.getCraft('scaffold');
        // var thoriumC = gamePage.workshop.getCraft('thorium');
        var parchmentC = gamePage.workshop.getCraft('parchment');
        var manuscriptC = gamePage.workshop.getCraft('manuscript');
        var compendiumC = gamePage.workshop.getCraft('compedium');
        var blueprintC = gamePage.workshop.getCraft('blueprint');

        // Base Crafting
        var res1 = [
            [woodC, catnip, wood, 'wood'],
            [beamC, wood, beam, 'beam'],
            [slabC, minerals, slab, 'slab'],
            [plateC, iron, plate, 'plate'],
        ]

        for (var i = 0; i < res1.length; i++) {
            if (res1[i][0].unlocked) {
                if (res1[i][1].value / res1[i][1].maxValue > 0.94) {
                    gamePage.craft(res1[i][3], 1);
                    if (scaffoldC.unlocked && scaffold.value < 1000) {
                        gamePage.craftAll('scaffold');
                        // gamePage.craft('scaffold', 1);
                    }
                }
            }
        }

        // autoHunt and Parchment Crafting Chain
        if (catpower.unlocked && catpower.value / catpower.maxValue > 0.99) {
            gamePage.village.huntAll();
            if (parchmentC.unlocked) {
                gamePage.craftAll('parchment');
            }
            if (manuscriptC.unlocked && culture.unlocked && culture.value / culture.maxValue > 0.99 && parchment.value > 2 * manuscript.value) {
                gamePage.craft('manuscript', Math.floor(culture.value / (2 * 300)));
            }
            if (compendiumC.unlocked) {
                if (manuscript.value > 2 * compendium.value && science.value / science.maxValue > 0.99 && compedium.value < 100) {
                    gamePage.craft('compedium', Math.floor(science.value/(2 * 10000)));
                }
            }
            if (blueprintC.unlocked && blueprint.value < 100) {
                gamePage.craftAll('blueprint');
            }
        }

        // gamePage.craftAll('manuscript');
        // gamePage.craft('manuscript', 1);

        // Steel Chain Crafting
        if (steelC.unlocked) {
            if (coal.value / coal.maxValue > 0.90 && iron.value / iron.maxValue > 0.90) {
                gamePage.craft('steel', 1);
                if (concreteC.unlocked) {
                    if (slab.value > 10 * concrete.value && steel.value > 10 * concrete.value) {
                        gamePage.craft('concrate', 1);
                    }
                }
                if (gearC.unlocked) {
                    if (steel.value > 4 * gear.value) {
                        gamePage.craft('gear', 1);
                    }
                }
                if (alloyC.unlocked) {
                    if (titanium.value / titanium.maxValue > 0.99 && steel.value > 4 * alloy.value) {
                        gamePage.craft('alloy', 1);
                    }
                }
            }
        }

        // autoPray
        if (faith.unlocked && faith.value / faith.maxValue > 0.99){
            gamePage.religion.praise();
        }

        // autoPromote & autoManage
        if (gamePage.science.get('civil').researched && !gamePage.ironWill && gold.value / gold.maxValue > 0.99) {
            // gamePage.village.sim.promote();
            gamePage.village.promoteKittens();
            gamePage.village.optimizeJobs();
        }

    game.tick();

    },5)
