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

        var beam = gamePage.resPool.get('beam');
        var slab = gamePage.resPool.get('slab');
        var plate = gamePage.resPool.get('plate');
        var steel = gamePage.resPool.get('steel');
        // var concrete = gamePage.res.get('concrate');
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
        // var concreteC = gamePage.workshop.getCraft('concrate');
        var gearC = gamePage.workshop.getCraft('gear');
        var alloyC = gamePage.workshop.getCraft('alloy');
        var scaffoldC = gamePage.workshop.getCraft('scaffold');
        // var thoriumC = gamePage.workshop.getCraft('thorium');
        var parchmentC = gamePage.workshop.getCraft('parchment');
        var manuscriptC = gamePage.workshop.getCraft('manuscript');
        var compendiumC = gamePage.workshop.getCraft('compedium');
        var blueprintC = gamePage.workshop.getCraft('blueprint');

        var res1 = [
            [woodC, catnip, wood, 'wood'],
            [beamC, wood, beam, 'beam'],
            [slabC, minerals, slab, 'slab'],
            [plateC, iron, plate, 'plate'],
        ]

        for (var i = 0; i < res1.length; i++) {
            if (res1[i][0].unlocked) {
                if (res1[i][1].value / res1[i][1].maxValue > 0.99) {
                    gamePage.craft(res1[i][3], 1);
                }
            }
        }

        var res2 = [
            [gearC, steel, gear, 'gear'],
            [scaffoldC, beam, scaffold, 'scaffold'],
            [compendiumC, manuscript, compendium, 'compedium'],
            [blueprintC, compendium, blueprint, 'blueprint']

            // [concrete, steel, 'concrate'],
            // [thorium, 'thorium']
        ]

        for (var i = 0; i < res2.length; i++) {
            if (res2[i][0].unlocked) {
                if (res2[i][1].value > res2[i][2].value) {
                    gamePage.craft(res2[i][3], 1);
                }
            }
        }
        var res3 = [
            [steelC, coal, iron, steel, 'steel'],
            [alloyC, titanium, steel, alloy, 'alloy']
        ]

        for (var i = 0; i < res3.length; i++) {
            if (res3[i][0].unlocked) { // <<-
                if(res3[i][1].value > res3[i][3].value && res3[i][2].value > res[i][3].value) {
                    gamePage.craft(res3[i][4], 1);
                }
            }
        }
        // console.log(gamePage.resPool.get('alloy').value)
        // console.log(gamePage.workshop.getCraft('alloy').value)
        // console.log(gamePage.resPool.get('alloy').unlocked)
        // console.log(gamePage.workshop.getCraft('alloy').unlocked)

// [gamePage.resPool.get('alloy').value,
// gamePage.workshop.getCraft('alloy').value,
// gamePage.resPool.get('alloy').unlocked,
// gamePage.workshop.getCraft('alloy').unlocked]
// gamePage.craft('steel', 1);
// gamePage.craft('alloy', 1);

        // // var gear = gamePage.workshop.getCraft('gear');

        // var gear1 = gamePage.resPool.get('gear');
        // console.log(['gear value', gear.unlocked, gear1.value]);
        //
        // var alloy1 = gamePage.resPool.get('alloy');
        // var alloy = gamePage.workshop.getCraft('alloy');
        // console.log(['alloy value', alloy.unlocked, alloy1.value]);
        //
        // console.log(['scaffold value', scaffold.unlocked, scaffold.value]);

        if (catpower.value / catpower.maxValue > 0.99) {
            gamePage.village.huntAll();
            if(parchmentC.unlocked) {
                gamePage.craftAll('parchment');
            }
        }

        if (culture.value / culture.maxValue > 0.99) {
            if(manuscriptC.unlocked && manuscript.value < parchment.value) {
                gamePage.craft('manuscript', 1);
            }
        }

    game.tick()

    },5)
