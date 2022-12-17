"use strict";

class Mod
{
	
	postDBLoad(container) 
	{
		// Constants
		const logger = container.resolve("WinstonLogger");
		const database = container.resolve("DatabaseServer").getTables();
		const core = container.resolve("JustNUCore");
		const db = `user/mods/zAdditionalGear-TanModule/db/`;
		const config = require("../config/config.json");
		const itemConfig = require("../config/itemConfig.json");
		const itemData = require("../db/items/itemData.json");
		
		//add retextures
		for (const categoryId in itemConfig) {
			if (config.EnableLogging) { logger.info(`Add. Gear - Tan: Loading ${categoryId}`) }
			
			for (const itemId in itemConfig[categoryId]) {
				if (itemConfig[categoryId][itemId]) {
					if (config.EnableLogging) { logger.info(`Add. Gear - Tan: Loading ${itemId}`) }
					core.addItemRetexture(itemId, db, config, itemConfig, itemData);
				}
			}
		}
		
		/*
		// Backpacks //
		core.AddItemRetexture(db, 	"5f5e46b96bdad616ad46d613", "AddGearTan_f4terminator", 			"AddGearTan/Backpacks/f4terminator.bundle");
		core.AddItemRetexture(db, 	"5c0e774286f77468413cc5b2", "AddGearTan_blackjack50", 			"AddGearTan/Backpacks/blackjack50.bundle");
		core.AddItemRetexture(db, 	"5b44c6ae86f7742d1627baea", "AddGearTan_beta2", 				"AddGearTan/Backpacks/beta2.bundle");
		core.AddItemRetexture(db, 	"5e4abc6786f77406812bd572", "AddGearTan_medpack", 				"AddGearTan/Backpacks/medpack.bundle");
		core.AddItemRetexture(db, 	"544a5cde4bdc2d39388b456b", "AddGearTan_mbss", 					"AddGearTan/Backpacks/mbss.bundle");
		core.AddItemRetexture(db, 	"5e9dcf5986f7746c417435b3", "AddGearTan_daypack", 				"AddGearTan/Backpacks/daypack.bundle");
		core.AddItemRetexture(db, 	"5ca20d5986f774331e7c9602", "AddGearTan_berkut", 				"AddGearTan/Backpacks/berkut.bundle");
		core.AddItemRetexture(db, 	"5ca20d5986f774331e7c9602", "AddGearTan_HAZARD_PILLBOX", 			"AddGearTan/Backpacks/PILLBOX.bundle");
		
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
		
		// Trade Offers
		if (config.EnableTradeOffers) {
			core.CopyTradeOffers("5b44cd8b86f774503d30cba2", "AddGearTan_gen4_full");
			core.CopyTradeOffers("5b44cf1486f77431723e3d05", "AddGearTan_gen4_assault");
			core.CopyTradeOffers("5b44d0de86f774503d30cba8", "AddGearTan_gen4_mobility");
			core.CopyTradeOffers("5c0e51be86f774598e797894", "AddGearTan_6b13");
			core.CopyTradeOffers("5fd4c474dd870108a754b241", "AddGearTan_hgrid");
			core.CopyTradeOffers("5ab8e4ed86f7742d8e50c7fa", "AddGearTan_untarvest");
			core.CopyTradeOffers("5c0e655586f774045612eeb2", "AddGearTan_trooper");
			core.CopyTradeOffers("5c0e655586f774045612eeb2", "AddGearTan_trooper_clean");
			core.CopyTradeOffers("5648a7494bdc2d9d488b4583", "AddGearTan_paca");
			core.CopyTradeOffers("5f5e46b96bdad616ad46d613", "AddGearTan_f4terminator");
			core.CopyTradeOffers("5c0e774286f77468413cc5b2", "AddGearTan_blackjack50");
			core.CopyTradeOffers("5b44c6ae86f7742d1627baea", "AddGearTan_beta2");
			core.CopyTradeOffers("5e4abc6786f77406812bd572", "AddGearTan_medpack");
			core.CopyTradeOffers("544a5cde4bdc2d39388b456b", "AddGearTan_mbss");
			core.CopyTradeOffers("5e9dcf5986f7746c417435b3", "AddGearTan_daypack");
			core.CopyTradeOffers("5ca20d5986f774331e7c9602", "AddGearTan_berkut");
			core.CopyTradeOffers("5a16ba61fcdbcb098008728a", "AddGearTan_ops_core_mandible");
			core.CopyTradeOffers("5ea058e01dbce517f324b3e2", "AddGearTan_tk_heavy_trooper");
			core.CopyTradeOffers("5f60b85bbdb8e27dee3dc985", "AddGearTan_caiman_applique");
			core.CopyTradeOffers("5f60bf4558eff926626a60f2", "AddGearTan_caiman_visor");
			core.CopyTradeOffers("5a16b7e1fcdbcb00165aa6c9", "AddGearTan_ops_core_visor");
			core.CopyTradeOffers("5a16badafcdbcb001865f72d", "AddGearTan_ops_core_side_armor");
			core.CopyTradeOffers("5f60c076f2bcbb675b00dac2", "AddGearTan_caiman_mandible");
			core.CopyTradeOffers("5a16b672fcdbcb001912fa83", "AddGearTan_ops_core_fast_visor");
			core.CopyTradeOffers("5ab8f39486f7745cd93a1cca", "AddGearTan_CFbalaclava");
			core.CopyTradeOffers("572b7fa524597762b747ce82", "AddGearTan_halfmask");
			core.CopyTradeOffers("5b432f3d5acfc4704b4a1dfb", "AddGearTan_momex");
			core.CopyTradeOffers("5ab8f85d86f7745cd93a1cf5", "AddGearTan_shemaghV1");
			core.CopyTradeOffers("5a7c4850e899ef00150be885", "AddGearTan_6b47");
			core.CopyTradeOffers("5f60b34a41e30a4ab12a6947", "AddGearTan_caiman");
			core.CopyTradeOffers("5d5e7d28a4b936645d161203", "AddGearTan_mich2001");
			core.CopyTradeOffers("5d5e9c74a4b9364855191c40", "AddGearTan_mich2002");
			core.CopyTradeOffers("5e4bfc1586f774264f7582d3", "AddGearTan_tc800");
			core.CopyTradeOffers("5b40e3f35acfc40016388218", "AddGearTan_achhc");
			core.CopyTradeOffers("5d96141523f0ea1b7f2aacab", "AddGearTan_doorkicker");
			core.CopyTradeOffers("5b43271c5acfc432ff4dce65", "AddGearTan_head_bandana");
			core.CopyTradeOffers("5aa2a7e8e5b5b00016327c16", "AddGearTan_bear_cap");
			core.CopyTradeOffers("5aa2a7e8e5b5b00016327c16", "AddGearTan_cap");
			core.CopyTradeOffers("5f60e6403b85f6263c14558c", "AddGearTan_beret");
			core.CopyTradeOffers("5aa2ba46e5b5b000137b758d", "AddGearTan_uxpro");
			core.CopyTradeOffers("572b7fa124597762b472f9d2", "AddGearTan_beanie");
			core.CopyTradeOffers("5b44cad286f77402a54ae7e5", "AddGearTan_tacteccarrier");
			core.CopyTradeOffers("592c2d1a86f7746dbe2af32a", "AddGearTan_anaalpha");
			core.CopyTradeOffers("5c0e722886f7740458316a57", "AddGearTan_anam1");
			core.CopyTradeOffers("5ab8dced86f774646209ec87", "AddGearTan_anam2");
			core.CopyTradeOffers("5e4ac41886f77406a511c9a8", "AddGearTan_arscpc");
			core.CopyTradeOffers("5df8a42886f77412640e2e75", "AddGearTan_mppv");
			core.CopyTradeOffers("544a5caa4bdc2d1a388b4568", "AddGearTan_cryeavs");
			core.CopyTradeOffers("5648a69d4bdc2ded0b8b457b", "AddGearTan_blackrock");
			core.CopyTradeOffers("5d5d85c586f774279a21cbdb", "AddGearTan_d3crx");
			core.CopyTradeOffers("5e9db13186f7742f845ee9d3", "AddGearTan_lbt1961a");
			core.CopyTradeOffers("5f5f41f56760b4138443b352", "AddGearTan_thunderbolt");
			core.CopyTradeOffers("59e7643b86f7742cbf2c109a", "AddGearTan_tv109");
		}
		*/
		
		// Modify quests
		/*
		const armoredVests = [
			[
				"AddGearTan_gen4_full"
			],
			[
				"AddGearTan_gen4_assault"
			],
			[
				"AddGearTan_gen4_mobility"
			],
			[
				"AddGearTan_6b13"
			],
			[
				"AddGearTan_hgrid"
			],
			[
				"AddGearTan_untarvest"
			],
			[
				"AddGearTan_trooper"
			],
			[
				"AddGearTan_trooper_clean"
			],
			[
				"AddGearTan_paca"
			],
			[
				"AddGearTan_tacteccarrier"
			],
			[
				"AddGearTan_anam1"
			],
			[
				"AddGearTan_anam2"
			],
			[
				"AddGearTan_arscpc"
			],
			[
				"AddGearTan_cryeavs"
			]
		];
		const punisher5Gear = [
			[
				"AddGearTan_paca",
				"5aa7cfc0e5b5b00015693143"
			],
			[
				"AddGearTan_paca",
				"5a7c4850e899ef00150be885"
			],
			[
				"AddGearTan_paca",
				"AddGearBlack_6b47covered_black"
			],
			[
				"AddGearTan_paca",
				"AddGearTan_6b47"
			]
		];
		const punisher4Gear = [
			[
				"572b7adb24597762ae139821",
				"AddGearTan_CFbalaclava"
			],
			[
				"572b7adb24597762ae139821",
				"AddGearTan_momex"
			]
		];
		// The survivalist path. Unprotected, but dangerous
		if (DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"]) {
			const UnprotectedButDangerous = DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
			
			DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
				...JsonUtil.clone(UnprotectedButDangerous),
				...armoredVests
			];
		};
		// The Punisher - Part 5
		if (DatabaseServer.tables.templates.quests["59ca29fb86f77445ab465c87"]) {
			const thePunisher5 = DatabaseServer.tables.templates.quests["59ca29fb86f77445ab465c87"].conditions.AvailableForFinish[6]._props.counter.conditions[1]._props.equipmentInclusive;
			
			DatabaseServer.tables.templates.quests["59ca29fb86f77445ab465c87"].conditions.AvailableForFinish[6]._props.counter.conditions[1]._props.equipmentInclusive = [
				...JsonUtil.clone(thePunisher5),
				...punisher5Gear
			];
		};
		// The Punisher - Part 4
		if (DatabaseServer.tables.templates.quests["59ca264786f77445a80ed044"]) {
			const thePunisher4 = DatabaseServer.tables.templates.quests["59ca264786f77445a80ed044"].conditions.AvailableForFinish[1]._props.counter.conditions[2]._props.equipmentInclusive;
			
			DatabaseServer.tables.templates.quests["59ca264786f77445a80ed044"].conditions.AvailableForFinish[1]._props.counter.conditions[2]._props.equipmentInclusive = [
				...JsonUtil.clone(thePunisher4),
				...punisher5Gear
			];
		};
		
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
		
		// add items to bots
		// ArmorVest //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.ArmorVest.push(
			"AddGearTan_untarvest",
			"AddGearTan_paca"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.ArmorVest.push(
			"AddGearTan_untarvest",
			"AddGearTan_paca"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.ArmorVest.push(
			"AddGearTan_untarvest",
			"AddGearTan_paca"
		);
		DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.ArmorVest.push(
			"AddGearTan_untarvest",
			"AddGearTan_paca"
		);
		DatabaseServer.tables.bots.types["followergluharassault"].inventory.equipment.ArmorVest.push(
			"AddGearTan_gen4_full",
			"AddGearTan_gen4_mobility",
			"AddGearTan_6b13"
		);
		DatabaseServer.tables.bots.types["followergluharscout"].inventory.equipment.ArmorVest.push(
			"AddGearTan_paca"
		);
		DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.ArmorVest.push(
			"AddGearTan_gen4_full",
			"AddGearTan_6b13"
		);
		DatabaseServer.tables.bots.types["marksman"].inventory.equipment.ArmorVest.push(
			"AddGearTan_paca"
		);
		DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.ArmorVest.push(
			"AddGearTan_gen4_full",
			"AddGearTan_gen4_mobility",
			"AddGearTan_hgrid",
			"AddGearTan_trooper",
			"AddGearTan_trooper_clean",
			"AddGearTan_paca"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.ArmorVest.push(
			"AddGearTan_gen4_full",
			"AddGearTan_gen4_assault",
			"AddGearTan_gen4_mobility",
			"AddGearTan_untarvest",
			"AddGearTan_hgrid",
			"AddGearTan_trooper",
			"AddGearTan_trooper_clean",
			"AddGearTan_paca"
		);
		DatabaseServer.tables.bots.types["bear"].inventory.equipment.ArmorVest.push(
			"AddGearTan_6b13",
			"AddGearTan_paca"
		);
		// Backpack //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.Backpack.push(
			"AddGearTan_mbss"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.Backpack.push(
			"AddGearTan_mbss"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.Backpack.push(
			"AddGearTan_mbss"
		);
		DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.Backpack.push(
			"AddGearTan_mbss"
		);
		DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.Backpack.push(
			"AddGearTan_medpack",
			"AddGearTan_mbss",
			"AddGearTan_daypack",
			"AddGearTan_berkut"
		);
		DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.Backpack.push(
			"AddGearTan_berkut"
		);
		DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.Backpack.push(
			"AddGearTan_beta2",
			"AddGearTan_medpack",
			"AddGearTan_berkut"
		);
		DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.Backpack.push(
			"AddGearTan_beta2",
			"AddGearTan_mbss",
			"AddGearTan_daypack",
			"AddGearTan_berkut"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.Backpack.push(
			"AddGearTan_f4terminator",
			"AddGearTan_blackjack50",
			"AddGearTan_medpack",
			"AddGearTan_mbss",
			"AddGearTan_daypack"
		);
		DatabaseServer.tables.bots.types["bear"].inventory.equipment.Backpack.push(
			"AddGearTan_beta2",
			"AddGearTan_berkut"
		);
		// FaceCover //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.FaceCover.push(
			"AddGearTan_halfmask"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.FaceCover.push(
			"AddGearTan_halfmask"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.FaceCover.push(
			"AddGearTan_halfmask"
		);
		DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.FaceCover.push(
			"AddGearTan_momex"
		);
		DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.FaceCover.push(
			"AddGearTan_momex",
			"AddGearTan_shemaghV1"
		);
		DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.FaceCover.push(
			"AddGearTan_momex"
		);
		DatabaseServer.tables.bots.types["marksman"].inventory.equipment.FaceCover.push(
			"AddGearTan_momex"
		);
		DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.FaceCover.push(
			"AddGearTan_CFbalaclava",
			"AddGearTan_halfmask",
			"AddGearTan_momex",
			"AddGearTan_shemaghV1"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.FaceCover.push(
			"AddGearTan_CFbalaclava",
			"AddGearTan_halfmask",
			"AddGearTan_momex",
			"AddGearTan_shemaghV1"
		);
		DatabaseServer.tables.bots.types["bear"].inventory.equipment.FaceCover.push(
			"AddGearTan_momex",
			"AddGearTan_shemaghV1"
		);
		// Headwear //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47",
			"AddGearTan_head_bandana",
			"AddGearTan_bear_cap",
			"AddGearTan_cap",
			"AddGearTan_beret",
			"AddGearTan_uxpro",
			"AddGearTan_beanie"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47",
			"AddGearTan_head_bandana",
			"AddGearTan_bear_cap",
			"AddGearTan_cap",
			"AddGearTan_beret",
			"AddGearTan_uxpro",
			"AddGearTan_beanie"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47",
			"AddGearTan_head_bandana",
			"AddGearTan_bear_cap",
			"AddGearTan_cap",
			"AddGearTan_beret",
			"AddGearTan_uxpro",
			"AddGearTan_beanie"
		);
		DatabaseServer.tables.bots.types["bossgluhar"].inventory.equipment.Headwear.push(
			"AddGearTan_caiman"
		);
		DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47"
		);
		DatabaseServer.tables.bots.types["followergluharassault"].inventory.equipment.Headwear.push(
			"AddGearTan_beanie"
		);
		DatabaseServer.tables.bots.types["followergluharscout"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47"
		);
		DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.Headwear.push(
			"AddGearTan_mich2002",
			"AddGearTan_tc800"
		);
		DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.Headwear.push(
			"AddGearTan_doorkicker"
		);
		DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.Headwear.push(
			"AddGearTan_caiman",
			"AddGearTan_mich2001",
			"AddGearTan_tc800",
			"AddGearTan_achhc",
			"AddGearTan_bear_cap",
			"AddGearTan_cap",
			"AddGearTan_uxpro"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.Headwear.push(
			"AddGearTan_caiman",
			"AddGearTan_mich2001",
			"AddGearTan_mich2002",
			"AddGearTan_tc800",
			"AddGearTan_achhc",
			"AddGearTan_doorkicker",
			"AddGearTan_head_bandana",
			"AddGearTan_cap",
			"AddGearTan_beret",
			"AddGearTan_uxpro",
			"AddGearTan_beanie"
		);
		DatabaseServer.tables.bots.types["bear"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47",
			"AddGearTan_head_bandana",
			"AddGearTan_bear_cap",
			"AddGearTan_cap",
			"AddGearTan_uxpro",
			"AddGearTan_beanie"
		);
		// TacticalVest //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tv109"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tv109"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tv109"
		);
		DatabaseServer.tables.bots.types["bossgluhar"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tacteccarrier",
			"AddGearTan_anam1",
			"AddGearTan_anam2",
			"AddGearTan_cryeavs",
			"AddGearTan_d3crx",
			"AddGearTan_thunderbolt"
		);
		DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tv109"
		);
		DatabaseServer.tables.bots.types["followergluharassault"].inventory.equipment.TacticalVest.push(
			"AddGearTan_anaalpha",
			"AddGearTan_cryeavs",
			"AddGearTan_d3crx",
			"AddGearTan_tv109"
		);
		DatabaseServer.tables.bots.types["followergluharscout"].inventory.equipment.TacticalVest.push(
			"AddGearTan_d3crx",
			"AddGearTan_tv109"
		);
		DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.TacticalVest.push(
			"AddGearTan_anaalpha",
			"AddGearTan_anam1",
			"AddGearTan_anam2",
			"AddGearTan_d3crx",
			"AddGearTan_tv109"
		);
		DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.TacticalVest.push(
			"AddGearTan_anaalpha",
			"AddGearTan_tv109"
		);
		DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tv109"
		);
		DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tacteccarrier",
			"AddGearTan_anaalpha",
			"AddGearTan_anam2",
			"AddGearTan_mppv",
			"AddGearTan_cryeavs",
			"AddGearTan_lbt1961a",
			"AddGearTan_thunderbolt"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tacteccarrier",
			"AddGearTan_mppv",
			"AddGearTan_cryeavs",
			"AddGearTan_d3crx",
			"AddGearTan_lbt1961a",
			"AddGearTan_thunderbolt"
		);
		DatabaseServer.tables.bots.types["bear"].inventory.equipment.TacticalVest.push(
			"AddGearTan_anaalpha",
			"AddGearTan_anam1",
			"AddGearTan_anam2",
			"AddGearTan_arscpc",
			"AddGearTan_blackrock",
			"AddGearTan_tv109"
		);
		
		// MoreVariety support
		if (VFS.exists(`user/mods/MoreVariety/package.json`)) {
			//remnantciv
			DatabaseServer.tables.bots.types["remnantciv"].inventory.equipment.ArmorVest.push(
				"AddGearTan_paca"
			);
			DatabaseServer.tables.bots.types["remnantciv"].inventory.equipment.FaceCover.push(
				"AddGearTan_halfmask",
				"AddGearTan_shemaghV1"
			);
			DatabaseServer.tables.bots.types["remnantciv"].inventory.equipment.Headwear.push(
				"AddGearTan_doorkicker",
				"AddGearTan_head_bandana",
				"AddGearTan_cap",
				"AddGearTan_uxpro",
				"AddGearTan_beanie"
			);
			// remnantspecopsgorka
			DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.ArmorVest.push(
				"AddGearTan_6b13"
			);
			DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.Backpack.push(
				"AddGearTan_beta2",
				"AddGearTan_berkut"
			);
			DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.FaceCover.push(
				"AddGearTan_CFbalaclava",
				"AddGearTan_momex",
				"AddGearTan_shemaghV1"
			);
			DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.Headwear.push(
				"AddGearTan_6b47",
				"AddGearTan_beret"
			);
			DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.TacticalVest.push(
				"AddGearTan_tv109"
			);
			// untareng
			DatabaseServer.tables.bots.types["untareng"].inventory.equipment.Backpack.push(
				"AddGearTan_mbss",
				"AddGearTan_daypack"
			);
			DatabaseServer.tables.bots.types["untareng"].inventory.equipment.FaceCover.push(
				"AddGearTan_halfmask"
			);
			DatabaseServer.tables.bots.types["untareng"].inventory.equipment.TacticalVest.push(
				"AddGearTan_mppv",
				"AddGearTan_d3crx",
				"AddGearTan_lbt1961a",
				"AddGearTan_thunderbolt"
			);
		};
		
		*/
	}
}

module.exports = { mod: new Mod() }