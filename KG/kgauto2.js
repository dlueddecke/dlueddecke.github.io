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

        // var switches = {"Energy Control":true, "Iron Will":false, "CollectResBReset":false}

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
                // gamePage.craftAll(res1[i][2]);
            }
        }

        // Res3 Crafting
        var res3 = [
            [alloy, titanium, steel, 'alloy'],
            [eludium, unobtainium, alloy, 'eludium']
        ]

        for (var j = 0; j < res3.length; j++) {
            if (res3[j][0].unlocked && res3[j][1].value / res3[j][1].maxValue > 0.95 && res3[j][2].value / res3[j][0].value > 2) {
                gamePage.craft(res3[j][3], 1);
                // gamePage.craftAll(res3[j][3]);
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
                // gamePage.craftAll(res4[k][2]);
            }
        }

        // Res5 Crafting
        if (concrete.unlocked && slab.value / concrete.value > 2 && steel.value / concrete.value > 2) {
            gamePage.craft('concrate', 1);
            // gamePage.craftAll('concrate');
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
                // gamePage.craftAll(res6[m][4], 1);
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

      //Auto praise the sun
      //   function autoPraise(){
      //
      //       if (gamePage.religionTab.visible && !gamePage.challenges.isActive("atheism")) {
      //           gamePage.tabs[5].update();
      //           if (gamePage.religion.meta[1].meta[5].val == 1) {
      //
      //               //reset faith with voidResonance > 0
      //               if (gamePage.getEffect("voidResonance") > 0 && gamePage.religion.getRU("apocripha").on  && gamePage.religion.getRU("transcendence").on && (gamePage.religion.faith / gamePage.religion.getApocryphaBonus()) >  gamePage.resPool.get("faith").maxValue * Math.min(gamePage.religion.transcendenceTier, 10, Math.max(gamePage.religion.transcendenceTier * 0.05, gamePage.getEffect("solarRevolutionLimit")))){
      //                   gamePage.religion.resetFaith(1.01, false);
      //               }
      //
      //               if ( gamePage.religion.getRU("apocripha").on && gamePage.religion.getRU("transcendence").on && (gamePage.religion.faith / gamePage.religion.getApocryphaBonus()) >  gamePage.resPool.get("faith").maxValue * Math.min(gamePage.religion.transcendenceTier, 10, Math.max(gamePage.religion.transcendenceTier * 0.05, gamePage.getEffect("solarRevolutionLimit")))){
      //                   gamePage.religion.resetFaith(1.01, false);
      //               }
      //               else if (gamePage.religion.getSolarRevolutionRatio() <= Math.max(gamePage.religion.transcendenceTier * 0.05, gamePage.getEffect("solarRevolutionLimit"))){
      //                   gamePage.religion.praise();
      //               }
      //               else if (gamePage.resPool.get("faith").value >= gamePage.resPool.get("faith").maxValue*0.99){
      //                   gamePage.religion.praise();
      //               }
      //               else if (gamePage.tabs[5].rUpgradeButtons.filter(res => res.model.resourceIsLimited == false && (!(res.model.name.includes('(complete)')))).length > 0){
      //                   var btn = gamePage.tabs[5].rUpgradeButtons.filter(res => res.model.resourceIsLimited == false && (!(res.model.name.includes('(complete)'))));
      //                   for (var rl = 0; rl < btn.length; rl++) {
      //                       if (btn[rl].model.enabled && btn[rl].model.visible) {
      //                           try {
      //                               btn[rl].controller.buyItem(btn[rl].model, {}, function(result) {
      //                                   if (result) {
      //                                       btn[rl].update();
      //                                       gamePage.msg('Religion researched: ' + btn[rl].model.name);
      //                                   }
      //                                   });
      //                           } catch(err) {
      //                               console.log(err);
      //                           }
      //                       }
      //                   }
      //               }
      //
      //               if (gamePage.religion.getRU("transcendence").on){
      //                   var needNextLevel = gamePage.religion._getTranscendTotalPrice(gamePage.religion.transcendenceTier + 1) - gamePage.religion._getTranscendTotalPrice(gamePage.religion.transcendenceTier);
      //                   if (gamePage.religion.faithRatio > needNextLevel) {
      //
      //                       gamePage.religion.faithRatio -= needNextLevel;
      //                       gamePage.religion.tcratio += needNextLevel;
      //                       gamePage.religion.transcendenceTier += 1;
      //
      //                       self.game.msg($I("religion.transcend.msg.success", [gamePage.religion.transcendenceTier]));
      //                   }
      //               }
      //           } else if ((gamePage.resPool.get("faith").value >= gamePage.resPool.get("faith").maxValue*0.99) && gamePage.tabs[5].rUpgradeButtons.filter(res => res.model.resourceIsLimited == false && (!(res.model.name.includes('(complete)')))).length > 0){
      //                   var btn = gamePage.tabs[5].rUpgradeButtons.filter(res => res.model.resourceIsLimited == false && (!(res.model.name.includes('(complete)'))));
      //                   for (var rl = 0; rl < btn.length; rl++) {
      //                       if (btn[rl].model.enabled && btn[rl].model.visible) {
      //                           try {
      //                               btn[rl].controller.buyItem(btn[rl].model, {}, function(result) {
      //                                   if (result) {
      //                                       btn[rl].update();
      //                                       gamePage.msg('Religion researched: ' + btn[rl].model.name);
      //                                   }
      //                                   });
      //                           } catch(err) {
      //                               console.log(err);
      //                           }
      //                       }
      //                   }
      //                   if (gamePage.resPool.get("faith").value >= gamePage.resPool.get("faith").maxValue*0.99){
      //                       gamePage.religion.praise();
      //                   }
      //           } else if (gamePage.resPool.get("faith").value >= gamePage.resPool.get("faith").maxValue*0.99 || gamePage.tabs[5].rUpgradeButtons.filter(res => res.model.metadata.name == "solarRevolution")[0].model.visible == false){
      //                 gamePage.religion.praise();
      //           }
      //
      //           if (!switches['CollectResBReset']) {
      //               if (gamePage.science.get("cryptotheology").researched){
      //                   var btn = gamePage.tabs[5].ctPanel.children[0].children;
      //                   for (var cr = 0; cr < btn.length; cr++) {
      //                       if (btn[cr].model.enabled && btn[cr].model.visible) {
      //                           try {
      //                               btn[cr].controller.buyItem(btn[cr].model, {}, function(result) {
      //                                   if (result) {
      //                                       btn[cr].update();
      //                                       // gamePage.msg('Religion Cryptotheology researched: ' + btn[cr].model.name);
      //                                   }
      //                                   });
      //                           } catch(err) {
      //                               console.log(err);
      //                           }
      //                       }
      //                   }
      //               }
      //           }
      //       }
      //   }

        // function autozig() {
        //     if (gamePage.religionTab.visible) {
        //         if (gamePage.bld.getBuildingExt('ziggurat').meta.on > 0 && !gamePage.religionTab.sacrificeBtn) {
        //              gamePage.tabs[5].render();
        //         }
        //         gamePage.religionTab.update();
        //
        //
        //         if (gamePage.religionTab.sacrificeBtn && gamePage.resPool.get('unicorns').value > gamePage.resPool.get('tears').value ){
        //             var btn = gamePage.tabs[0].children.filter(res =>  res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == 'unicornPasture');
        //
        //             if (btn.length > 0 &&  ((btn[0].model.prices.filter(res => res.name == "unicorns")[0].val - gamePage.resPool.get('unicorns').value) / (gamePage.getResourcePerTick('unicorns', true) * gamePage.getTicksPerSecondUI()))/60 > 0.1){
        //                 if(gamePage.religionTab.sacrificeBtn.model.allLink.visible){
        //                     gamePage.religionTab.sacrificeBtn.controller.transform(gamePage.religionTab.sacrificeBtn.model, 1, {}, function(result) {
        //                                                 if (result) {
        //                                                 }})
        //                 }
        //             }
        //         }
        //
        //         if (gamePage.resPool.get('alicorn').value > 25 && (switches['CollectResBReset'] || gamePage.resPool.get('alicorn').value > gamePage.resPool.get("timeCrystal").value || (gamePage.time.meta[0].meta[5].unlocked && gamePage.resPool.get("timeCrystal").value > gamePage.timeTab.cfPanel.children[0].children[6].model.prices.filter(res => res.name == "timeCrystal")[0].val * (gamePage.timeTab.cfPanel.children[0].children[6].model.metadata.val > 2 ? 0.7 : 0.05)))) {
        //             if (gamePage.religionTab.sacrificeAlicornsBtn.model.allLink.visible){
        //                 gamePage.religionTab.sacrificeAlicornsBtn.controller.transform(gamePage.religionTab.sacrificeAlicornsBtn.model, 1, {}, function(result) {
        //                                                 if (result) {
        //                                                 }})
        //             }
        //         }
        //         if ((gamePage.resPool.get('relic').value  < (gamePage.challenges.isActive("energy") ? 25 : 5) && gamePage.resPool.get('timeCrystal').value > 50 && !gamePage.workshop.get("relicStation").researched) || (gamePage.resPool.get('relic').value < 1300 && gamePage.resPool.get('timeCrystal').value > 1000) ) {
        //             if (gamePage.religionTab.refineTCBtn && gamePage.religionTab.refineTCBtn.model.visible){
        //                 gamePage.religionTab.refineTCBtn.controller.buyItem(gamePage.religionTab.refineTCBtn.model, {}, function(result) {
        //                     if (result) {
        //                          gamePage.religionTab.refineTCBtn.update();
        //                     }
        //                     });
        //             }
        //
        //         }
        //
        //
        //         if(gamePage.religionTab.zgUpgradeButtons.filter(res => res.model.metadata.unlocked).length > 0){
        //             zig = gamePage.religionTab.zgUpgradeButtons.filter(res => res.model.visible).sort(function(a, b) {
        //                         a1 = a.model.metadata.effects.alicornPerTick;
        //                         a2 = a.model.metadata.effects.unicornsRatioReligion
        //                         b1 = b.model.metadata.effects.alicornPerTick;
        //                         b2 = b.model.metadata.effects.unicornsRatioReligion
        //                         if (!a1){a1 = 0};
        //                         if (!a2){a2 = 0};
        //                         if (!b1){b1 = 0};
        //                         if (!b2){b2 = 0};
        //
        //                         return ((a1 + a2) - (b1 + b2));
        //                      });
        //
        //             var btn = zig;
        //
        //              for (var zg = 0; zg < btn.length; zg++) {
        //                 btn[zg].controller.updateEnabled(btn[zg].model);
        //              }
        //
        //             if (btn.length < 2 || (btn.slice(btn.length - 2, btn.length ).filter(res => res.model.enabled).length > 0) || (gamePage.religionTab.zgUpgradeButtons[0].model.prices.filter(res => res.name == "tears")[0].val < gamePage.resPool.get('tears').value * 0.1) || (gamePage.religionTab.zgUpgradeButtons[6].model.prices.filter(res => res.name == "tears")[0].val < gamePage.resPool.get('tears').value * 0.1 && gamePage.religionTab.zgUpgradeButtons[6].model.prices.filter(res => res.name == "unobtainium")[0].val < gamePage.resPool.get('unobtainium').value) ) {
        //                 for (var zg = btn.length - 1; zg >= 0; zg--) {
        //                     if (btn[zg] && btn[zg].model.metadata.unlocked && (!btn[zg].model.prices.filter(res => res.name == "unobtainium")[0] || btn[zg].model.prices.filter(res => res.name == "unobtainium")[0].val < (gamePage.resPool.get('unobtainium').value - (gamePage.bld.getBuildingExt('chronosphere').meta.val < 10 ?  Chronosphere10SummPrices()["unobtainium"] : 0)) )) {
        //                         try {
        //                             btn[zg].controller.buyItem(btn[zg].model, {}, function(result) {
        //                                 if (result) {
        //                                         btn[zg].update();
        //                                         // gamePage.msg('Build in Ziggurats: ' + btn[zg].model.name );
        //                                         if (zg == btn.length - 1 && btn[btn.length - 1].model.enabled) {
        //                                             zg++
        //                                         }
        //                                     }
        //                                 });
        //                         } catch(err) {
        //                         console.log(err);
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //
        //         if ( gamePage.resPool.get('sorrow').value < gamePage.resPool.get('sorrow').maxValue &&  gamePage.resPool.get('sorrow').value * 10000 < gamePage.resPool.get('tears').value ){
        //             var btn = [gamePage.religionTab.refineBtn]
        //             for (var zg = 0; zg < btn.length; zg++) {
        //                 if (btn[zg] && btn[zg].model.visible == true) {
        //                     try {
        //                          btn[zg].controller.buyItem(btn[zg].model, {}, function(result) {
        //                             if (result) {
        //                                 // gamePage.msg('Refine tears: BLS(' + Math.trunc(gamePage.resPool.get('sorrow').value)  + ')');
        //                             }
        //                             });
        //                     } catch(err) {
        //                     console.log(err);
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }


        // autoPraise();
        // autozig();

        // autoPromote & autoManage
        if (gamePage.science.get('civil').researched && !gamePage.ironWill && gold.value / gold.maxValue > 0.95) {
            if (gamePage.calendar.season == 0 && gamePage.calendar.day == 0) {
                gamePage.village.promoteKittens();
                gamePage.village.optimizeJobs();
            }
        }

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
            // gamePage.diplomacy.tradeAll(game.diplomacy.get("leviathans"));
        }

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

        for (var bld = 0; bld < priorityBuilds.length; bld++) {
            if (gamePage.bld.getBuildingExt(priorityBuilds[bld]).meta.unlocked) {
                btn = gamePage.bldTab.children.filter(res => res.model.metadata && res.model.metadata.unlocked && res.model.metadata.name == priorityBuilds[bld])[0];
                // btn.controller.buyItem(btn.model, {}, function () {});
                btn.controller.buyItem(btn.model, {}, function(result) {
                    if (result) {
                        btn.update();
                        // gamePage.msg('Build: ' + btn.model.name );
                        return;
                    }
                });
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
          'spaceElevator', 'sattelite', // Cath
          // 'spaceStation', // Cath
          'moonOutpost', // Redmoon
          // 'moonBase', // Redmoon
          'planetCracker', 'hydrofracturer', 'spiceRefinery', // Dune
          'researchVessel', // Piscine
          // 'orbitalArray', // Piscine
          'sunlifter', 'heatsink', // 'containmentChamber', 'sunforge', // Helios
          'cryostation', // T-Minus
          'spaceBeacon', // Kairo
          'terraformingStation', 'hydroponics', // Yarn
          'hrHarvester', // Umbra
          // 'entanglementStation', // Charon
          'tectonic', 'moltenCore', // Centaurus System
          // Furthest Ring
          ];

      if (gamePage.science.get('rocketry').researched) {
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

       if (gamePage.workshop.get("chronoforge").researched && gamePage.resPool.get("timeCrystal").value > 500) {
           var chronoforge = gamePage.timeTab.cfPanel.children[0].children;
           chronoforge[0].controller.doShatterAmt(chronoforge[0].model, gamePage.calendar.yearsPerCycle)
           chronoforge[0].update();
	   }

    game.tick();

    },5)
