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

        for (var i = 0; i < res1.length; i++) {
            if (res1[i][0].unlocked && res1[i][1].value / res1[i][1].maxValue > 0.95) {
                gamePage.craft(res1[i][2], 1);
            }
        }

        // Res2 Crafting
        // if (steel.unlocked && coal.value / coal.maxValue > 0.95 && iron.value / iron.maxValue > 0.95) {
        //     gamePage.craft('steel', 1);
        // }

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
            if (res4[k][0].unlocked && res4[k][1].value / res4[k][0].value > 2) {
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
                gamePage.craft(res6[m][4], 1);
            }
        }

        // autoHunt Crafting
        if (catpower.unlocked && catpower.value / catpower.maxValue > 0.95) {
            gamePage.village.huntAll();
            if (parchment.unlocked) {
                gamePage.craftAll('parchment');
            }
            if (manuscript.unlocked && culture.unlocked && culture.value / culture.maxValue > 0.95 && parchment.value > 2 * manuscript.value) {
                gamePage.craft('manuscript', Math.floor(culture.value / (2 * 300)));
            }
            if (compendium.unlocked) {
                if (manuscript.value > 2 * compendium.value && science.value / science.maxValue > 0.95) {
                    gamePage.craft('compedium', Math.floor(science.value/(2 * 10000)));
                    if (blueprint.unlocked && compendium.value > 2 * blueprint.value) {
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
                if (gamePage.calendar.season == 0 && gamePage.calendar.day == 0) {
            gamePage.village.promoteKittens();
            gamePage.village.optimizeJobs();
                }
        }

        // // autoSacrifice Unicorns
        // if (unicorns.unlocked) {
        //     if (unicorns.value < 1000000) {
        //         var unicornPasture = gamePage.bldTab.children.filter(res => res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == 'unicornPasture')[0];
        //         if (unicorns.value > unicornPasture.)
        //             unicornPasture.controller.buyItem(unicornPasture.model, {}, function () {});
        //     } else if (unicorns.value > 1000000) {
        //         if (gamePage.religionTab.sacrificeBtn) {
        //             if (gamePage.religionTab.sacrificeBtn.model.allLink.visible) {
        //                 gamePage.religionTab.sacrificeBtn.controller.transform(gamePage.religionTab.sacrificeBtn.model, 1, {}, function () {});
        //             }
        //         }
        //     }
        // }

      // autoSacrifice Unicorns - TESTING
        if (unicorns.unlocked) {
            if (unicorns.value < 1000000) {
                var unicornPasture = gamePage.bldTab.children.filter(res => res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == 'unicornPasture')[0];
	              try {
                    unicornPasture.controller.buyItem(unicornPasture.model, {}, function () {});
				  } catch (err) {
					  console.log(err);
				  }
            } else if (unicorns.value > 1000000) {
                if (gamePage.religionTab.sacrificeBtn) {
                    if (gamePage.religionTab.sacrificeBtn.model.allLink.visible) {
                        gamePage.religionTab.sacrificeBtn.controller.transform(gamePage.religionTab.sacrificeBtn.model, 1, {}, function () {});
                    }
                }
            }
        }

        // autoSacrifice Alicorns
        if (gamePage.religionTab.sacrificeAlicornsBtn) {
          if (gamePage.religionTab.sacrificeAlicornsBtn.model.allLink.visible) {
            gamePage.religionTab.sacrificeAlicornsBtn.controller.transform(gamePage.religionTab.sacrificeAlicornsBtn.model, 1, {}, function(){});
            }
        }

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
        if (gamePage.diplomacy.get('leviathans').unlocked && gamePage.diplomacy.get('leviathans').duration != 0 && gamePage.resPool.get('unobtainium').value > 5000) {
            // gamePage.diplomacy.tradeMultiple(game.diplomacy.get("leviathans"),1);
            gamePage.diplomacy.tradeAll(game.diplomacy.get("leviathans"));
        }

        // autoBuy Fields
        // if (gamePage.bld.getBuildingExt('field').meta.unlocked) {
        //     var fieldBtn = gamePage.bldTab.children.filter(res => res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == 'field')[0];
        //     fieldBtn.controller.buyItem(fieldBtn.model, {}, function () {});
        // }

        // autoBuilds
	    var priorityBuilds = ['field', 'pasture', 'aqueduct',
            'mine', 'smelter', 'lumberMill', 'quarry',
            'workshop',
            'hut', 'logHouse',
            'mansion',
            'library', 'academy', 'observatory',
            'steamworks',
            'calciner',
            'factory',
            'tradepost', 'amphitheatre', 'temple', 'chapel',
            // 'magneto', 'oilWell',
            'barn', 'warehouse', 'harbor',
            'ziggurat',
            'chronosphere',
        ];

        for (var bld = 0; bld < priorityBuilds.length; bld++) {
            if (gamePage.bld.getBuildingExt(priorityBuilds[bld]).meta.unlocked) {
                btn = gamePage.bldTab.children.filter(res => res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == priorityBuilds[bld])[0];
                // btn.controller.buyItem(btn.model, {}, function () {});
                btn.controller.buyItem(btn.model, {}, function(result) {
                    if (result) {
                        btn.update();
                        gamePage.msg('Build: ' + btn.model.name );
                        return;
                    }
                });
            }
        }

	  // console.log(gamePage.bld.getBuildingExt('field').meta.unlocked);
	  // var fieldBtn = gamePage.bldTab.children.filter(res => res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == 'field')[0];
	  // console.log(fieldBtn);
	  // fieldBtn.controller.buyItem(fieldBtn.model, {}, function() {});

	  if (uranium.unlocked) {
          if (gamePage.bld.getBuildingExt('reactor').meta.unlocked) {
              btn = gamePage.bldTab.children.filter(res => res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == 'reactor')[0];
              btn.controller.buyItem(btn.model, {}, function(result) {
                  if (result) {
                      btn.update();
                      gamePage.msg('Build: ' + btn.model.name );
                      return;
                  }
              });
          }
	  }

      var kittens = gamePage.village.getKittens();
      var secondTierBuilds = ['accelerator', 'biolab'];
      for (var bld2 = 0; bld2 < secondTierBuilds.length; bld2++) {
          if (gamePage.bld.getBuildingExt(secondTierBuilds[bld2]).meta.unlocked) {
              if (gamePage.bld.getBuildingExt(secondTierBuilds[bld2]).meta.val < kittens / 4) {
                  btn = gamePage.bldTab.children.filter(res => res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == secondTierBuilds[bld2])[0];
                  // btn.controller.buyItem(btn.model, {}, function() {});
                  btn.controller.buyItem(btn.model, {}, function(result) {
                      if (result) {
                          btn.update();
                          gamePage.msg('Build: ' + btn.model.name );
                          return;
                      }
                  });
              }
          }
      }

      var farmer = gamePage.village.getJob('farmer');
	  if (farmer.unlocked) {
		  if (farmer.value < 10 && game.village.getFreeKittens() != 0) {
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
      for (i = 0; i < jobs.length; i++) {
          var job2 = gamePage.village.getJob(jobs[i]);
          if (job2.value == minJob && game.village.getFreeKittens() != 0) {
              gamePage.village.assignJob(job2, 1);
              gamePage.villageTab.update();
          }
      }

      priSpaceBuilds = [
          // Rorchach
          'spaceElevator', 'sattelite', 'spaceStation', // Cath
          'moonOutpost', 'moonBase', // Redmoon
          'planetCracker', 'hydrofracturer', 'spaceRefinery', // Dune
          'researchVessel', // 'orbitalArray', // Piscine
          'sunlifter', 'heatsink', // 'containmentChamber', 'sunforge', // Helios
          'cryostation', // T-Minus
          'spaceBeacon', // Kairo
          'terraformingStation', 'hydroponics', // Yarn
          'hrHarvester', // Umbra
          // Charon
          'tectonic',  // Centaurus System
          // Furthest Ring
          ];

      // for (var p = 0; p < priSpaceBuilds.length; p++) {
		  // console.log(priSpaceBuilds[p]);
      // if (gamePage.spaceTab.visible) {
      if (gamePage.science.get('rocketry').unlocked) {
          for (var z = 0; z < gamePage.spaceTab.planetPanels.length; z++) {
              var spBuild = gamePage.spaceTab.planetPanels[z].children;
              try {
                  for (var sp = 0; sp < spBuild.length; sp++) {
                      if (spBuild[sp].model.metadata.unlocked) {
                          if (priSpaceBuilds.includes(spBuild[sp].model.metadata.name)) {
                              spBuild[sp].controller.buyItem(spBuild[sp].model, {}, function(result) {
                                  if (result) {
                                      spBuild[sp].update();
                                      gamePage.msg('Build in Space: ' + spBuild[sp].model.name);
                                      return;
                                  }
                              });
                          }
                      }
                  }
              } catch(err) {
                  console.log(err);
              }
          }
      }
	  	// }

    game.tick();

    },5)
