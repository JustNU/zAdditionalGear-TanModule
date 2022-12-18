"use strict";

class Mod
{
	
	postDBLoad(container) 
	{
		// Constants
		const logger = container.resolve("WinstonLogger");
		const database = container.resolve("DatabaseServer").getTables();
		const jsonUtil = container.resolve("JsonUtil");
		const core = container.resolve("JustNUCore");
		const modDb = `user/mods/zAdditionalGear-TanModule/db/`;
		const config = require("../config/config.json");
		const itemConfig = require("../config/itemConfig.json");
		const itemData = require("../db/items/itemData.json");
		
		//add retextures
		for (const categoryId in itemConfig) {
			if (config.EnableLogging) { logger.info(`Add. Gear - Tan: Loading ${categoryId}`) }
			
			for (const itemId in itemConfig[categoryId]) {
				if (itemConfig[categoryId][itemId]) {
					if (config.EnableLogging) { logger.info(`Add. Gear - Tan: Loading ${itemId}`) }
					core.addItemRetexture(modDb, itemId, itemData[itemId].BaseItemID, itemData[itemId].BundlePath, config.EnableTradeOffers, config.AddToBots);
				}
			}
		}
		
		// Modify quests
		if (config.EnableQuestChanges) {
			const armoredVests = [
				["AddGearTan_GEN4_Full"],
				["AddGearTan_GEN4_Assault"],
				["AddGearTan_GEN4_Mobility"],
				["AddGearTan_6B13"],
				["AddGearTan_Hexgrid"],
				["AddGearTan_UntarVest"],
				["AddGearTan_Trooper"],
				["AddGearTan_Trooper_Clean"],
				["AddGearTan_PACA"],
				["AddGearTan_6B2"],
				["AddGearTan_tacteccarrier"],
				["AddGearTan_anam1"],
				["AddGearTan_anam2"],
				["AddGearTan_arscpc"],
				["AddGearTan_cryeavs"]
			];
			
			const armoredGear = [
				["AddGearTan_GEN4_Full"],
				["AddGearTan_GEN4_Assault"],
				["AddGearTan_GEN4_Mobility"],
				["AddGearTan_6B13"],
				["AddGearTan_Hexgrid"],
				["AddGearTan_UntarVest"],
				["AddGearTan_Trooper"],
				["AddGearTan_Trooper_Clean"],
				["AddGearTan_PACA"],
				["AddGearTan_6B2"]
			];
				
			const punisher5Gear = [
				["AddGearTan_PACA", "5aa7cfc0e5b5b00015693143"],
				["AddGearTan_PACA", "5a7c4850e899ef00150be885"],
				["AddGearTan_PACA", "AddGearBlack_6b47covered_black"],
				["AddGearTan_PACA", "AddGearTan_6b47"]
			];
		
			const punisher4Gear = [
				["572b7adb24597762ae139821", "AddGearTan_CFbalaclava"],
				["572b7adb24597762ae139821", "AddGearTan_momex"]
			];
			
			// The survivalist path. Unprotected, but dangerous
			if (database.templates.quests["5d25aed386f77442734d25d2"]) {
				const unprotectedButDangerousGear = database.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				database.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...jsonUtil.clone(unprotectedButDangerousGear),
					...armoredVests
				];
			}
			
			// The Punisher - Part 5
			if (database.templates.quests["59ca29fb86f77445ab465c87"]) {
				const thePunisher5Gear = database.templates.quests["59ca29fb86f77445ab465c87"].conditions.AvailableForFinish[6]._props.counter.conditions[1]._props.equipmentInclusive;
				
				database.templates.quests["59ca29fb86f77445ab465c87"].conditions.AvailableForFinish[6]._props.counter.conditions[1]._props.equipmentInclusive = [
					...jsonUtil.clone(thePunisher5Gear),
					...punisher5Gear
				];
			}
			
			// The Punisher - Part 4
			if (database.templates.quests["59ca264786f77445a80ed044"]) {
				const thePunisher4Gear = database.templates.quests["59ca264786f77445a80ed044"].conditions.AvailableForFinish[1]._props.counter.conditions[2]._props.equipmentInclusive;
				
				database.templates.quests["59ca264786f77445a80ed044"].conditions.AvailableForFinish[1]._props.counter.conditions[2]._props.equipmentInclusive = [
					...jsonUtil.clone(thePunisher4Gear),
					...punisher5Gear
				];
			}
			
			// Swift one
			if (database.templates.quests["60e729cf5698ee7b05057439"]) {
				const swiftOneGear = database.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				database.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...jsonUtil.clone(swiftOneGear),
					...armoredGear
				];
			}
		}
		
		/*
		// Misc Gear //
		core.AddItemRetexture(db, 	"5a16ba61fcdbcb098008728a", "AddGearTan_ops_core_mandible",	 	"AddGearTan/MiscGear/ops_core_mandible.bundle");
		core.AddItemRetexture(db, 	"5ea058e01dbce517f324b3e2", "AddGearTan_tk_heavy_trooper", 		"AddGearTan/MiscGear/tk_heavy_trooper.bundle");
		core.AddItemRetexture(db, 	"5f60b85bbdb8e27dee3dc985", "AddGearTan_caiman_applique", 		"AddGearTan/MiscGear/caiman_applique.bundle");
		core.AddItemRetexture(db, 	"5f60bf4558eff926626a60f2", "AddGearTan_caiman_visor", 			"AddGearTan/MiscGear/caiman_visor.bundle");
		core.AddItemRetexture(db, 	"5a16b7e1fcdbcb00165aa6c9", "AddGearTan_ops_core_visor", 		"AddGearTan/MiscGear/ops_core_visor.bundle");
		core.AddItemRetexture(db, 	"5a16badafcdbcb001865f72d", "AddGearTan_ops_core_side_armor", 	"AddGearTan/MiscGear/ops_core_side_armor.bundle");
		core.AddItemRetexture(db, 	"5f60c076f2bcbb675b00dac2", "AddGearTan_caiman_mandible", 		"AddGearTan/MiscGear/caiman_mandible.bundle");
		core.AddItemRetexture(db, 	"5a16b672fcdbcb001912fa83", "AddGearTan_ops_core_fast_visor", 	"AddGearTan/MiscGear/ops_core_fast_visor.bundle");
		
		// Facecovers //
		core.AddItemRetexture(db, 	"5ab8f39486f7745cd93a1cca", "AddGearTan_CFbalaclava", 			"AddGearTan/Facecover/CFbalaclava.bundle");
		core.AddItemRetexture(db, 	"572b7fa524597762b747ce82", "AddGearTan_halfmask", 				"AddGearTan/Facecover/halfmask.bundle");
		core.AddItemRetexture(db, 	"5b432f3d5acfc4704b4a1dfb", "AddGearTan_momex", 				"AddGearTan/Facecover/momex.bundle");
		core.AddItemRetexture(db, 	"5ab8f85d86f7745cd93a1cf5", "AddGearTan_shemaghV1", 			"AddGearTan/Facecover/shemaghV1.bundle");
		
		// Headgear //
		core.AddItemRetexture(db, 	"5a7c4850e899ef00150be885", "AddGearTan_6b47", 					"AddGearTan/Headgear/6b47.bundle");
		core.AddItemRetexture(db, 	"5f60b34a41e30a4ab12a6947", "AddGearTan_caiman", 				"AddGearTan/Headgear/caiman.bundle");
		core.AddItemRetexture(db, 	"5d5e7d28a4b936645d161203", "AddGearTan_mich2001", 				"AddGearTan/Headgear/mich2001.bundle");
		core.AddItemRetexture(db, 	"5d5e9c74a4b9364855191c40", "AddGearTan_mich2002", 				"AddGearTan/Headgear/mich2002.bundle");
		core.AddItemRetexture(db, 	"5e4bfc1586f774264f7582d3", "AddGearTan_tc800", 				"AddGearTan/Headgear/tc800.bundle");
		core.AddItemRetexture(db, 	"5b40e3f35acfc40016388218", "AddGearTan_achhc", 				"AddGearTan/Headgear/achhc.bundle");
		core.AddItemRetexture(db, 	"5d96141523f0ea1b7f2aacab", "AddGearTan_doorkicker", 			"AddGearTan/Headgear/doorkicker.bundle");
		core.AddItemRetexture(db, 	"5b43271c5acfc432ff4dce65", "AddGearTan_head_bandana",	 		"AddGearTan/Headgear/head_bandana.bundle");
		core.AddItemRetexture(db, 	"5aa2a7e8e5b5b00016327c16", "AddGearTan_bear_cap", 				"AddGearTan/Headgear/bear_cap.bundle");
		core.AddItemRetexture(db, 	"5aa2a7e8e5b5b00016327c16", "AddGearTan_cap", 					"AddGearTan/Headgear/cap.bundle");
		core.AddItemRetexture(db, 	"5f60e6403b85f6263c14558c", "AddGearTan_beret", 				"AddGearTan/Headgear/beret.bundle");
		core.AddItemRetexture(db, 	"5aa2ba46e5b5b000137b758d", "AddGearTan_uxpro", 				"AddGearTan/Headgear/uxpro.bundle");
		core.AddItemRetexture(db, 	"572b7fa124597762b472f9d2", "AddGearTan_beanie", 				"AddGearTan/Headgear/beanie.bundle");
		core.AddItemRetexture(db, 	"60a7acf20c5cb24b01346648", "AddGearTan_CAP_BACKWARDS", 			"AddGearTan/Headgear/cap_backwards.bundle");
		core.AddItemRetexture(db, 	"5aa7d03ae5b5b00016327db5", "AddGearTan_M92", 						"AddGearTan/Headgear/untarhelmet.bundle");
		
		// Tactical/Armored Rigs //
		core.AddItemRetexture(db, 	"5b44cad286f77402a54ae7e5", "AddGearTan_tacteccarrier",			"AddGearTan/Rigs/tacteccarrier.bundle");
		core.AddItemRetexture(db, 	"592c2d1a86f7746dbe2af32a", "AddGearTan_anaalpha", 				"AddGearTan/Rigs/anaalpha.bundle");
		core.AddItemRetexture(db, 	"5c0e722886f7740458316a57", "AddGearTan_anam1", 				"AddGearTan/Rigs/anam1.bundle");
		core.AddItemRetexture(db, 	"5ab8dced86f774646209ec87", "AddGearTan_anam2", 				"AddGearTan/Rigs/anam2.bundle");
		core.AddItemRetexture(db, 	"5e4ac41886f77406a511c9a8", "AddGearTan_arscpc", 				"AddGearTan/Rigs/arscpc.bundle");
		core.AddItemRetexture(db, 	"5df8a42886f77412640e2e75", "AddGearTan_mppv", 					"AddGearTan/Rigs/mppv.bundle");
		core.AddItemRetexture(db, 	"544a5caa4bdc2d1a388b4568", "AddGearTan_cryeavs", 				"AddGearTan/Rigs/cryeavs.bundle");
		core.AddItemRetexture(db, 	"5648a69d4bdc2ded0b8b457b", "AddGearTan_blackrock", 			"AddGearTan/Rigs/blackrock.bundle");
		core.AddItemRetexture(db, 	"5d5d85c586f774279a21cbdb", "AddGearTan_d3crx", 				"AddGearTan/Rigs/d3crx.bundle");
		core.AddItemRetexture(db, 	"5e9db13186f7742f845ee9d3", "AddGearTan_lbt1961a", 				"AddGearTan/Rigs/lbt1961a.bundle");
		core.AddItemRetexture(db, 	"5f5f41f56760b4138443b352", "AddGearTan_thunderbolt", 			"AddGearTan/Rigs/thunderbolt.bundle");
		core.AddItemRetexture(db, 	"59e7643b86f7742cbf2c109a", "AddGearTan_tv109", 				"AddGearTan/Rigs/tv109.bundle");
		core.AddItemRetexture(db, 	"59e7643b86f7742cbf2c109a", "AddGearTan_AZIMUT", 					"AddGearTan/Rigs/AZIMUT.bundle");
		core.AddItemRetexture(db, 	"609e860ebd219504d8507525", "AddGearTan_AVS_MBAV", 					"AddGearTan/Rigs/avs_mbav.bundle");
		
		// add trade offers   ("item id",								"trader id",				"money id",					"price",	"trader lvl");
		// Peacekeeper
		core.createTraderOffer("AddGearTan_mich2001", 				"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 440.28, 	2);
		core.createTraderOffer("AddGearTan_untarvest", 				"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 381.44, 	2);
		core.createTraderOffer("AddGearTan_ops_core_mandible", 		"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 203.37, 	3);
		core.createTraderOffer("AddGearTan_mich2002", 				"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 467.91, 	3);
		core.createTraderOffer("AddGearTan_ops_core_side_armor", 	"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 328.48, 	3);
		core.createTraderOffer("AddGearTan_ops_core_fast_visor", 	"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 111.48, 	3);
		core.createTraderOffer("AddGearTan_ops_core_visor", 		"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 342.74, 	4);
		// Ragman
		core.createTraderOffer("AddGearTan_paca", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 20383.81,	1);
		core.createTraderOffer("AddGearTan_berkut", 				"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 20160, 		1);
		core.createTraderOffer("AddGearTan_bear_cap", 				"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 1724.1, 	1);
		core.createTraderOffer("AddGearTan_cap", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 1724.1, 	1);
		core.createTraderOffer("AddGearTan_d3crx", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 27373.5, 	2);
		core.createTraderOffer("AddGearTan_tv109", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 17760.75, 	2);
		core.createTraderOffer("AddGearTan_ops_core_fast_visor",	"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 12282.9, 	2);
		core.createTraderOffer("AddGearTan_CFbalaclava", 			"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 3626.7, 	2);
		core.createTraderOffer("AddGearTan_6b47", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 32112.15, 	2);
		core.createTraderOffer("AddGearTan_head_bandana", 			"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 2094.75, 	2);
		core.createTraderOffer("AddGearTan_uxpro", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 2145.15, 	2);
		core.createTraderOffer("AddGearTan_6b13", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 64155, 		3);
		core.createTraderOffer("AddGearTan_anaalpha", 				"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 48414.45, 	3);
		core.createTraderOffer("AddGearTan_momex", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 3371.55, 	3);
		core.createTraderOffer("AddGearTan_shemaghV1", 				"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 4470.9, 	3);
		core.createTraderOffer("AddGearTan_achhc", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 57928.5, 	3);
		core.createTraderOffer("AddGearTan_blackrock", 				"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 38535, 		3);
		core.createTraderOffer("AddGearTan_beta2", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 49020.3, 	4);
		core.createTraderOffer("AddGearTan_mppv", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 51660, 		4);
		*/
	}
}

module.exports = { mod: new Mod() }