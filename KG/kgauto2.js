setInterval(
    function() {

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
        var unicorns = gamePage.resPool.get('unicorns');
        var alicorns = gamePage.resPool.get('alicorn');

        var beam = gamePage.resPool.get('beam');
        var slab = gamePage.resPool.get('slab');
        var plate = gamePage.resPool.get('plate');
        var steel = gamePage.resPool.get('steel');
        var concrete = gamePage.resPool.get('concrate');
        var gear = gamePage.resPool.get('gear');
        var alloy = gamePage.resPool.get('alloy');
        var eludium = gamePage.resPool.get('eludium');
        var scaffold = gamePage.resPool.get('scaffold');
        var ship = gamePage.resPool.get('ship');
        var tanker = gamePage.resPool.get('tanker');
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
            [steel, coal, 'steel'],
            [kerosene, oil, 'kerosene'],
            [thorium, uranium, 'thorium']
        ]

        function resOne(parameter) {
            for (var i = 0; i < res1.length; i++) {
                if (res1[i][0].unlocked && res1[i][1].value > 0.95 * res1[i][1].maxValue) {
                    if (parameter == 1) {
                        gamePage.craft(res1[i][2], 1);
                    }
                    if (parameter == 'all') {
                        gamePage.craftAll(res1[i][2]);
                    }
                }
            }
        } // end of resOne function

        // Res2 Crafting
        var res2 = [
            [alloy, titanium, steel, 'alloy'],
            [eludium, unobtainium, alloy, 'eludium']
        ]

        function resTwo(parameter) {
            for (var j = 0; j < res2.length; j++) {
                if (res2[j][0].unlocked && res2[j][1].value > 0.95 * res2[j][1].maxValue && res2[j][2].value > 2 * res2[j][0].value) {
                    if (parameter == 1) {
                        gamePage.craft(res2[j][3], 1);
                    }
                    if (parameter == 'all') {
                        gamePage.craftAll(res2[j][3]);
                    }
                }
            }
        } // end of resTwo function

        // Res3 Crafting
        var res3 = [
            [gear, steel, 'gear'],
            [scaffold, beam, 'scaffold']
        ]

        function resThree(parameter) {
            for (var k = 0; k < res3.length; k++) {
                if (res3[k][0].unlocked && res3[k][1].value > 2 * res3[k][0].value) {
                    if (parameter == 1) {
                        gamePage.craft(res3[k][2], 1);
                    }
                    if (parameter == 'all') {
                        gamePage.craftAll(res3[k][2]);
                    }
                }
            }
        } // end of resThree function

        // Res4 Crafting
        function resFour(parameter) {
            if (concrete.unlocked && slab.value > 2 * concrete.value && steel.value > 2 * concrete.value) {
                if (parameter == 1) {
                    gamePage.craft('concrate', 1);
                }
                if (parameter == 'all') {
                    gamePage.craftAll('concrate');
                }
            }
        } // end of resFour function

        // Res5 Crafting
        var res5 = [
            [ship, starchart, plate, scaffold, 'ship'],
            [tanker, alloy, ship, blueprint, 'tanker'],
            [megalith, beam, slab, plate, 'megalith']
        ]

        function resFive(parameter) {
            for (var m = 0; m < res5.length; m++) {
                if (res5[m][0].unlocked && res5[m][1].value > 2 * res5[m][0].value && res5[m][2].value > 2 * res5[m][0].value && res5[m][3].value > 2 * res5[m][0].value) {
                    if (parameter == 1) {
                        gamePage.craft(res5[m][4], 1);
                    }
                    if (parameter == 'all') {
                        gamePage.craftAll(res5[m][4], 1);
                    }
                }
            }
        } // end of resFive function

        // autoHunt Crafting
        function autoHunt() {
            if (catpower.unlocked && catpower.value > 0.95 * catpower.maxValue) {
                gamePage.village.huntAll();
                if (parchment.unlocked) {
                    gamePage.craftAll('parchment');
                }
                if (manuscript.unlocked && culture.unlocked && culture.value > 0.95 * culture.maxValue && parchment.value > 2 * manuscript.value) {
                    gamePage.craft('manuscript', Math.floor(culture.value / (2 * 300)));
                }
                if (compendium.unlocked) {
                    if (manuscript.value > 2 * compendium.value && science.value > 0.95 * science.maxValue) {
                        gamePage.craft('compedium', Math.floor(science.value / (2 * 10000)));
                        if (blueprint.unlocked && compendium.value > 2 * blueprint.value) {
                            gamePage.craft('blueprint', Math.floor(science.value / (2 * 25000)));
                        }
                    }
                }
            }
        } // end of autoHunt function

        // autoPray
        function autoPray() {
            if (faith.unlocked && faith.value > 0.95 * faith.maxValue) {
                gamePage.religion.praise();
            }
        } // end of autoPray function

        // autoPromote & autoManage
        function autoPromoteManage() {
            if (gamePage.science.get('civil').researched && !gamePage.ironWill && gold.value / gold.maxValue > 0.95) {
                if (gamePage.calendar.season == 0 && gamePage.calendar.day == 0) {
                    gamePage.village.promoteKittens();
                    gamePage.village.optimizeJobs();
                }
            }
        } // end of autoPromoteManage function

        // autoSacrifice Unicorns
        function autoSacrificeUnicorns() {
            if (unicorns.unlocked) {
                var threshold = gamePage.getResourcePerTick('unicorns', true) * gamePage.getTicksPerSecondUI() * 300;
                if (unicorns.value < threshold) {
                    var unicornPasture = gamePage.bldTab.children.filter(res => res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == 'unicornPasture')[0];
                    try {
                        unicornPasture.controller.buyItem(unicornPasture.model, {}, function () {
                        });
                    } catch (err) {
                        console.log(err);
                    }
                } else if (unicorns.value > threshold) {
                    if (gamePage.religionTab.sacrificeBtn) {
                        if (gamePage.religionTab.sacrificeBtn.model.allLink.visible) {
                            gamePage.religionTab.sacrificeBtn.controller.transform(gamePage.religionTab.sacrificeBtn.model, 1, {}, function () {
                            });
                        }
                    }
                }
            }
        }  // end of autoSacrificeUnicorns function

        // autoSacrifice Alicorns
        function autoSacrificeAlicorns() {
            if (gamePage.religionTab.sacrificeAlicornsBtn) {
                if (gamePage.religionTab.sacrificeAlicornsBtn.model.allLink.visible) {
                    gamePage.religionTab.sacrificeAlicornsBtn.controller.transform(gamePage.religionTab.sacrificeAlicornsBtn.model, 1, {}, function () {
                    });
                }
            }
        } // end of autoSacrificeAlicorns function

        // autoParty
	    if (gamePage.science.get("drama").researched) {
		    var tclvl = Math.max(gamePage.religion.transcendenceTier,1);
    		if (catpower.value > 1500 && culture.value > 5000 && parchment.value > 2500) {
		        if (gamePage.prestige.getPerk("carnivals").researched){
                    if (gamePage.calendar.festivalDays < 400*30) {
                        if(catpower.value > 1500 * tclvl && culture.value > 5000 * tclvl && parchment.value > 2500 * tclvl){
                            gamePage.village.holdFestival(tclvl);
                        }
                        else{
                            gamePage.village.holdFestival(1);
                        }
                    }
			    }
			    else if (gamePage.calendar.festivalDays == 0) {
			        gamePage.village.holdFestival(1);
			    }
		    }
	    }

        // autoTrade with Leviathans
        function autoLeviTrade() {
            if (gamePage.diplomacy.get('leviathans').unlocked && gamePage.diplomacy.get('leviathans').duration != 0 && gamePage.resPool.get('unobtainium').value > 5000) {
                gamePage.diplomacy.tradeAll(game.diplomacy.get("leviathans"));
            }
        } // end of autoLeviTrade function

        // Feed elders - not in list at bottom
        // if (gamePage.resPool.get("necrocorn").value >= 1 &&  gamePage.diplomacy.get("leviathans").energy < (gamePage.religion.getZU("marker").val * 5 + 5) && gamePage.diplomacy.get("leviathans").energy < gamePage.religion.getZU("marker").val + gamePage.resPool.get("necrocorn").value){
            // gamePage.diplomacy.feedElders();
        // }

        // autoBuilds
	    var priorityBuilds = ['field', 'pasture', 'aqueduct', // Food Production
            'hut', 'logHouse', 'mansion', // Population
            'library', 'academy', 'observatory', 'biolab', // Science
            'barn', 'warehouse', 'harbor', // Storage
            'mine', 'quarry', 'lumberMill', 'oilWell', 'accelerator', // Resources
            'steamworks', 'magneto', 'smelter', 'calciner', 'factory', 'reactor', // Industry
            'amphitheatre', 'chapel', 'temple', // Culture
            'workshop', 'tradepost', 'mint', 'unicornPasture', 'brewery', // Other
            'ziggurat', 'chronosphere', // Mega Structures
        ];

        function autoBuild() {
            for (var bld = 0; bld < priorityBuilds.length; bld++) {
                if (gamePage.bld.getBuildingExt(priorityBuilds[bld]).meta.unlocked && gamePage.bld.getBuildingExt(priorityBuilds[bld]).meta.val < gamePage.village.getKittens() / 1) {
                    btn = gamePage.bldTab.children.filter(res => res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == priorityBuilds[bld])[0];
                    btn.controller.buyItem(btn.model, {}, function (result) {
                        if (result) {
                            btn.update();
                            gamePage.msg('Build: ' + btn.model.name);
                            return;
                        }
                    });
                }
            }
        } // end of autoBuild function

        // Auto Assign Jobs
        function autoAssign() {
            var farmer = gamePage.village.getJob('farmer');
            if (farmer.unlocked) {
                if (farmer.value < 5 && game.village.getFreeKittens() != 0) {
                    gamePage.village.assignJob(farmer, 1);
                }
            }
            var jobs = ['woodcutter', 'scholar', 'hunter', 'miner', 'priest', 'geologist'];
            var unlockedJobs = [];
            for (i = 0; i < jobs.length; i++) {
                var job = gamePage.village.getJob(jobs[i]);
                if (job.unlocked) {
                    unlockedJobs.push(job.value);
                }
            }
            var minJob = Math.min(...unlockedJobs);
            var engJob = gamePage.village.getJob('engineer');
            var factory = gamePage.bld.getBuildingExt('factory').meta;
            if (factory.unlocked && engJob.unlocked) {
                if (factory.val > engJob.value && minJob / engJob.value > 2 && game.village.getFreeKittens() != 0) {
                    gamePage.village.assignJob(engJob, 1);
                    gamePage.villageTab.update();
                }
            }
            for (i = 0; i < jobs.length; i++) {
                var job2 = gamePage.village.getJob(jobs[i]);
                if (job2.value == minJob && game.village.getFreeKittens() != 0) {
                    gamePage.village.assignJob(job2, 1);
                    gamePage.villageTab.update();
                }
            }
        } // end of autoAssign function

        priSpaceBuilds = [
            // Rorchach
            'spaceElevator', 'sattelite', // Cath
            'spaceStation', // Cath
            'moonOutpost', // Redmoon
            'moonBase', // Redmoon
            'planetCracker', 'hydrofracturer', 'spiceRefinery', // Dune
            'researchVessel', // Piscine
            'orbitalArray', // Piscine
            'sunlifter', 'heatsink', // 'containmentChamber', 'sunforge', // Helios
            'cryostation', // T-Minus
            'spaceBeacon', // Kairo
            'terraformingStation', 'hydroponics', // Yarn
            'hrHarvester', // Umbra
            'entanglementStation', // Charon
            'tectonic', 'moltenCore', // Centaurus System
            // Furthest Ring
            ];

        function autoSpaceBuild() {
            if (gamePage.science.get('rocketry').researched) {
                for (var z = 0; z < gamePage.spaceTab.planetPanels.length; z++) {
                    var spBuild = gamePage.spaceTab.planetPanels[z].children;
                    try {
                        for (var sp = 0; sp < spBuild.length; sp++) {
                            if (spBuild[sp].model.metadata.unlocked) {
                                if (priSpaceBuilds.includes(spBuild[sp].model.metadata.name)) {
                                    spBuild[sp].controller.buyItem(spBuild[sp].model, {}, function (result) {
                                        if (result) {
                                            spBuild[sp].update();
                                            gamePage.msg('Build in Space: ' + spBuild[sp].model.name);
                                            return;
                                        }
                                    });
                                }
                            }
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        } // end of autoSpaceBuild function

        function autoShatter() {
            if (gamePage.workshop.get("chronoforge").researched && gamePage.resPool.get("timeCrystal").value > 500 && gamePage.calendar.cycle != 5) {
                var chronoforge = gamePage.timeTab.cfPanel.children[0].children;
                chronoforge[0].controller.doShatterAmt(chronoforge[0].model, 1);
                chronoforge[0].update();
            }
        }

        // Buy All
        function buyAll(place) {
            if (gamePage.bld.getBuildingExt(place).meta.unlocked) {
                btn = gamePage.bldTab.children.filter(res => res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == place)[0];
                btn.controller.buyItem(btn.model, {}, function (result) {
                    if (result) {
                        btn.update();
                        gamePage.msg('Build: ' + btn.model.name );
                        return;
                    }
                });
            }
        } // end of buyAll function

        var parameter = 1;
        // var parameter = 'all';
        resOne(parameter);
        resTwo(parameter);
        resThree(parameter);
        resFour(parameter);
        resFive(parameter);
        autoHunt();
        autoPray();
        autoPromoteManage();
        autoSacrificeUnicorns();
        autoSacrificeAlicorns();
        autoBuild();
        autoAssign();
        // autoSpaceBuild();
        // autoLeviTrade();
        // autoShatter();
        // buyAll('field');
        // buyAll('ziggurat');

    game.tick();

    },5)
