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
        // var faith = gamePage.resPool.get('faith');
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
                    if (scaffoldC.unlocked) {
                        if (beam.value > 4 * scaffold.value) {
                            gamePage.craft('scaffold', 1);
                        }
                    }
                }
            }
        }

        // autoHunt and Parchment Crafting Chain
        if (catpower.value / catpower.maxValue > 0.99) {
            gamePage.village.huntAll();
            if (parchmentC.unlocked) {
                gamePage.craftAll('parchment');
                if (culture.value / culture.maxValue > 0.99) {
                    if (manuscriptC.unlocked && parchment.value > 2 * manuscript.value) {
                        gamePage.craft('manuscript', 1);
                        if (compendiumC.unlocked && !blueprintC.unlocked) {
                            if (manuscript.value > 2 * compendium.value && science.value / science.maxValue > 0.99) {
                                gamePage.craft('compedium', 1);
                            }
                        }
                        if (compendiumC.unlocked && blueprintC.unlocked && science.value / science.maxValue > 0.99) {
                            if (manuscript.value > 2 * compendium.value || blueprint.value > compendium.value) {
                                gamePage.craft('compedium', 1);
                            }
                            if (compendium.value > 4 * blueprint.value) {
                                gamePage.craft('blueprint', 1);
                            }
                        }
                    }
                }
            }
        }

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
        if (gamePage.resPool.get("faith").value >= gamePage.resPool.get("faith").maxValue*0.99){
            gamePage.religion.praise();
        }

        // Auto assign new kittens to selected job
        function autoAssign() {
                var resourcesAssign = {
                    "catnip": ["catnip", "farmer", gamePage.resPool.get("catnip").value < gamePage.resPool.get("catnip").maxValue * 0.1 ? 9 : 999, (gamePage.resPool.get('paragon').value < 200 && gamePage.bld.getBuildingExt('temple').meta.val < 1) ? 0.1 : 1],
                    "wood, beam": ["wood","woodcutter",(gamePage.resPool.get("beam").value < gamePage.resPool.get("slab").value && gamePage.resPool.get("beam").value < gamePage.resPool.get("wood").value) ? gamePage.resPool.get("wood").value/gamePage.resPool.get("wood").maxValue : gamePage.resPool.get("beam").value > gamePage.resPool.get("wood").maxValue ? gamePage.resPool.get("beam").value/gamePage.resPool.get("wood").maxValue / ((gamePage.resPool.get("wood").maxValue / ((gamePage.getResourcePerTick("wood", 0) * 5) / gamePage.village.getJob('woodcutter').value)) / gamePage.village.getJob('woodcutter').value / gamePage.village.getJob('woodcutter').value)  : 1 , 2],
                    "minerals, slab": ["minerals","miner",(gamePage.resPool.get("slab").value < gamePage.resPool.get("beam").value && gamePage.resPool.get("slab").value < gamePage.resPool.get("minerals").value) ? gamePage.resPool.get("minerals").value/gamePage.resPool.get("minerals").maxValue :  gamePage.resPool.get("slab").value > gamePage.resPool.get("minerals").maxValue ? gamePage.resPool.get("slab").value/gamePage.resPool.get("minerals").maxValue / ((gamePage.resPool.get("minerals").maxValue / ((gamePage.getResourcePerTick("minerals", 0) * 5) / gamePage.village.getJob('miner').value)) / gamePage.village.getJob('miner').value / gamePage.village.getJob('miner').value) : 1 ,2],
                    "science": ["science", "scholar",(gamePage.resPool.get("science").value < gamePage.resPool.get("science").maxValue * 0.5) ? 0.5 : 1, gamePage.science.get('agriculture').researched  ? 1 : 0.1],
                    "manpower, parchment": ["manpower", "hunter", 0.1 , (gamePage.workshopTab.visible && gamePage.resPool.get("parchment").value == 0) ? 0.1 : 1],
                    "faith": ["faith", "priest", gamePage.tabs[5].rUpgradeButtons.filter(res => res.model.resourceIsLimited == false && (!(res.model.name.includes('(complete)'))) && (!(res.model.name.includes('(Transcend)')))).length  == 0 ?  (gamePage.religion.getSolarRevolutionRatio() <= Math.max(gamePage.religion.transcendenceTier * 0.05, gamePage.getEffect("solarRevolutionLimit")) ? 0.1 : 2) :  (gamePage.religion.getSolarRevolutionRatio() <= Math.max(gamePage.religion.transcendenceTier * 0.05, gamePage.getEffect("solarRevolutionLimit")) ? 1 : gamePage.resPool.get("faith").value/gamePage.resPool.get("faith").maxValue * 10 + 1 ) , (gamePage.resPool.get("faith").value < 750 && gamePage.resPool.get("gold").maxValue >= 500 ) ? 0.01 : 5],
                    "coal, gold": (gamePage.resPool.get("coal").value / gamePage.resPool.get("coal").maxValue  || 100) < (gamePage.workshop.get("geodesy").researched ? gamePage.resPool.get("gold").value / gamePage.resPool.get("gold").maxValue : 100) ? ["coal", "geologist",gamePage.resPool.get("coal").value < gamePage.resPool.get("coal").maxValue * 0.99 ? 1 : 15,15] : ["gold", "geologist",gamePage.resPool.get("gold").value < gamePage.resPool.get("gold").maxValue * 0.99 ? 1 : 15,15]
                        };

                if(Object.keys(craftPriority[0]).length > 0){
                    let tstres = ["wood", "minerals", "beam", "slab", "science", "faith", "gold", "coal", "manpower", "parchment"].filter(x => gamePage.bld.getPrices(craftPriority[0]).map(elem => elem.name).includes(x))
                    if (tstres.length > 0) {
                        tstres.forEach(function(entry) {
                            if (gamePage.resPool.get(entry).value < gamePage.bld.getPrices(craftPriority[0]).filter(el => el.name == entry)[0].val) {
                                 res_elem = Object.entries(resourcesAssign).map(([k,v]) => k).filter( k => k.indexOf(entry) > -1)[0];
                                 resourcesAssign[res_elem][2] = 0.1;
                                 resourcesAssign[res_elem][3] = 0.1;
                            }
                        });
                    }
                }

                resourcesAssign = Object.entries(resourcesAssign).map(([k,v]) => v);
                let restmp = resourcesAssign.filter(res => res[0] in gamePage.village.getJob(res[1]).modifiers &&  gamePage.village.getJob(res[1]).unlocked && ( !gamePage.challenges.isActive("atheism") || res[0] != 'faith'));
                restmpq = restmp.sort(function(a, b) {
                        if (gamePage.resPool.get(a[0]).value >= gamePage.resPool.get(a[0]).maxValue){
                            atick = gamePage.resPool.get(a[0]).maxValue * 10;
                            ajobs = (gamePage.religion.getRU('solarRevolution').val == 1 || gamePage.challenges.isActive("atheism")) ? a[2] : a[3];
                        }
                        else{
                            atick = gamePage.calcResourcePerTick(a[0]);
                            ajobs = gamePage.village.getJob(a[1]).value;
                        }
                        if (gamePage.resPool.get(b[0]).value >= gamePage.resPool.get(b[0]).maxValue){
                            btick = gamePage.resPool.get(b[0]).maxValue * 10;
                            bjobs = (gamePage.religion.getRU('solarRevolution').val == 1 || gamePage.challenges.isActive("atheism")) ? b[2] : b[3];
                        }
                        else{
                            btick = gamePage.calcResourcePerTick(b[0]);
                            bjobs = gamePage.village.getJob(b[1]).value;
                        }
                        kfa = (gamePage.religion.getRU('solarRevolution').val == 1 || gamePage.challenges.isActive("atheism")) ? a[2] : a[3];
                        kfb = (gamePage.religion.getRU('solarRevolution').val == 1 || gamePage.challenges.isActive("atheism")) ? b[2] : b[3];
                        return (((atick / gamePage.resPool.get(a[0]).maxValue) * (gamePage.resPool.get(a[0]).value / gamePage.resPool.get(a[0]).maxValue) * (kfa * ajobs) ) * kfa - ((btick / gamePage.resPool.get(b[0]).maxValue) * (gamePage.resPool.get(b[0]).value / gamePage.resPool.get(b[0]).maxValue) * (kfb * bjobs)) * kfb);

                });

                if (game.village.getFreeKittens() != 0 ) {
                    gamePage.village.assignJob(gamePage.village.getJob(restmpq[0][1]),1);
                }
                else if (gamePage.village.getKittens() > 0) {
                    restmpdel = restmpq.filter(res => gamePage.village.getJob(res[1]).value > (gamePage.village.getKittens() > 10 ? 1 : 0));
                    if (restmpdel.length > 0){
                        let cnt = gamePage.resPool.get(restmpdel[restmpdel.length - 1][0]).value >= gamePage.resPool.get(restmpdel[restmpdel.length - 1][0]).maxValue ? gamePage.village.getJob(restmpdel[restmpdel.length - 1][1]).value -1 : Math.max(Math.floor(gamePage.village.getJob(restmpdel[restmpdel.length - 1][1]).value * 0.1),1)
                        if (cnt > 0) {
                            gamePage.village.sim.removeJob(restmpdel[restmpdel.length - 1][1],cnt);
                            gamePage.village.assignJob(gamePage.village.getJob(restmpq[0][1]),cnt);
                        }

                    }
                }
                if (gamePage.science.get('civil').researched && !gamePage.ironWill && gamePage.resPool.get("gold").value > 600){
                    if (IincKAssign > 100) {
                          let prkitten = gamePage.village.sim.kittens.filter(kitten => kitten.job == restmpq[0][1]).sort(function(a, b) {return  b.skills[restmpq[0][1]] - a.skills[restmpq[0][1]];})[0]
                          if (prkitten){
                              gamePage.villageTab.censusPanel.census.makeLeader(prkitten);
                              if (gamePage.village.sim.expToPromote(prkitten.rank, prkitten.rank+1, prkitten.exp)[0] && gamePage.village.sim.goldToPromote(prkitten.rank, prkitten.rank+1, gamePage.resPool.get("gold").value)[1] < gamePage.resPool.get("gold").value * 0.3) {
                                 gamePage.village.sim.promote(prkitten);
                              }
                          }
                          IincKAssign = 0;
                    }
                    IincKAssign++;
                }
        }

        // autoAssign();

      if (gold.unlocked) {
          if (gold.value / gold.maxValue > 0.99) {
              // Auto Promote
              // Auto Manage
          }
      }

    game.tick();

    },5)
