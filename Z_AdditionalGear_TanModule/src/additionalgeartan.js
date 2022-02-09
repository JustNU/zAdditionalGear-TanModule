"use strict";

class AdditionalGearTan
{
	
	static onLoadMod() 
	{
		// Constants
		const db = `user/mods/Z_AdditionalGear_TanModule/db/`;
		const config = require("../config/config.json");
		
		// add retexture 	   	   (db,		"original item id",			"new item id",							"bundle path");
		// Armored Vests //
		JustNUCore.AddItemRetexture(db, 	"5b44cd8b86f774503d30cba2", "AddGearTan_gen4_tan_full",				"AddGearTan/ArmoredVests/gen4_tan_full.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b44cf1486f77431723e3d05", "AddGearTan_gen4_tan_assault",			"AddGearTan/ArmoredVests/gen4_tan_assault.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b44d0de86f774503d30cba8", "AddGearTan_gen4_tan_mobility",			"AddGearTan/ArmoredVests/gen4_tan_mobility.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e51be86f774598e797894", "AddGearTan_6b13_tan",					"AddGearTan/ArmoredVests/6b13_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5fd4c474dd870108a754b241", "AddGearTan_hgrid_tan",					"AddGearTan/ArmoredVests/hgrid_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ab8e4ed86f7742d8e50c7fa", "AddGearTan_untarvest_tan",				"AddGearTan/ArmoredVests/untarvest_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e655586f774045612eeb2", "AddGearTan_trooper_tan",				"AddGearTan/ArmoredVests/trooper_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e655586f774045612eeb2", "AddGearTan_trooper_tan_clean",			"AddGearTan/ArmoredVests/trooper_tan_clean.bundle");
		JustNUCore.AddItemRetexture(db, 	"5648a7494bdc2d9d488b4583", "AddGearTan_paca_tan",					"AddGearTan/ArmoredVests/paca_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5648a7494bdc2d9d488b4583", "AddGearTan_6B2",						"AddGearTan/ArmoredVests/6B2.bundle");
		
		// Backpacks //
		JustNUCore.AddItemRetexture(db, 	"5f5e46b96bdad616ad46d613", "AddGearTan_f4terminator_tan", 			"AddGearTan/Backpacks/f4terminator_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e774286f77468413cc5b2", "AddGearTan_blackjack50_tan", 			"AddGearTan/Backpacks/blackjack50_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b44c6ae86f7742d1627baea", "AddGearTan_beta2_tan", 				"AddGearTan/Backpacks/beta2_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5e4abc6786f77406812bd572", "AddGearTan_medpack_tan", 				"AddGearTan/Backpacks/medpack_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"544a5cde4bdc2d39388b456b", "AddGearTan_mbss_tan", 					"AddGearTan/Backpacks/mbss_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5e9dcf5986f7746c417435b3", "AddGearTan_daypack_tan", 				"AddGearTan/Backpacks/daypack_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ca20d5986f774331e7c9602", "AddGearTan_berkut_tan", 				"AddGearTan/Backpacks/berkut_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ca20d5986f774331e7c9602", "AddGearTan_HAZARD_PILLBOX", 			"AddGearTan/Backpacks/PILLBOX.bundle");
		
		// Misc Gear //
		JustNUCore.AddItemRetexture(db, 	"5a16ba61fcdbcb098008728a", "AddGearTan_ops_core_mandible_tan",	 	"AddGearTan/MiscGear/ops_core_mandible_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ea058e01dbce517f324b3e2", "AddGearTan_tk_heavy_trooper_tan", 		"AddGearTan/MiscGear/tk_heavy_trooper_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5f60b85bbdb8e27dee3dc985", "AddGearTan_caiman_applique_tan", 		"AddGearTan/MiscGear/caiman_applique_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5f60bf4558eff926626a60f2", "AddGearTan_caiman_visor_tan", 			"AddGearTan/MiscGear/caiman_visor_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5a16b7e1fcdbcb00165aa6c9", "AddGearTan_ops_core_visor_tan", 		"AddGearTan/MiscGear/ops_core_visor_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5a16badafcdbcb001865f72d", "AddGearTan_ops_core_side_armor_tan", 	"AddGearTan/MiscGear/ops_core_side_armor_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5f60c076f2bcbb675b00dac2", "AddGearTan_caiman_mandible_tan", 		"AddGearTan/MiscGear/caiman_mandible_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5a16b672fcdbcb001912fa83", "AddGearTan_ops_core_fast_visor_tan", 	"AddGearTan/MiscGear/ops_core_fast_visor_tan.bundle");
		
		// Facecovers //
		JustNUCore.AddItemRetexture(db, 	"5ab8f39486f7745cd93a1cca", "AddGearTan_CFbalaclava_tan", 			"AddGearTan/Facecover/CFbalaclava_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"572b7fa524597762b747ce82", "AddGearTan_halfmask_tan", 				"AddGearTan/Facecover/halfmask_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b432f3d5acfc4704b4a1dfb", "AddGearTan_momex_tan", 				"AddGearTan/Facecover/momex_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ab8f85d86f7745cd93a1cf5", "AddGearTan_shemaghV1_tan", 			"AddGearTan/Facecover/shemaghV1_tan.bundle");
		
		// Headgear //
		JustNUCore.AddItemRetexture(db, 	"5a7c4850e899ef00150be885", "AddGearTan_6b47_tan", 					"AddGearTan/Headgear/6b47_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5f60b34a41e30a4ab12a6947", "AddGearTan_caiman_tan", 				"AddGearTan/Headgear/caiman_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5d5e7d28a4b936645d161203", "AddGearTan_mich2001_tan", 				"AddGearTan/Headgear/mich2001_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5d5e9c74a4b9364855191c40", "AddGearTan_mich2002_tan", 				"AddGearTan/Headgear/mich2002_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5e4bfc1586f774264f7582d3", "AddGearTan_tc800_tan", 				"AddGearTan/Headgear/tc800_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b40e3f35acfc40016388218", "AddGearTan_achhc_tan", 				"AddGearTan/Headgear/achhc_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5d96141523f0ea1b7f2aacab", "AddGearTan_doorkicker_tan", 			"AddGearTan/Headgear/doorkicker_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b43271c5acfc432ff4dce65", "AddGearTan_head_bandana_tan",	 		"AddGearTan/Headgear/head_bandana_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5aa2a7e8e5b5b00016327c16", "AddGearTan_bear_cap_tan", 				"AddGearTan/Headgear/bear_cap_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5aa2a7e8e5b5b00016327c16", "AddGearTan_cap_tan", 					"AddGearTan/Headgear/cap_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5f60e6403b85f6263c14558c", "AddGearTan_beret_tan", 				"AddGearTan/Headgear/beret_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5aa2ba46e5b5b000137b758d", "AddGearTan_uxpro_tan", 				"AddGearTan/Headgear/uxpro_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"572b7fa124597762b472f9d2", "AddGearTan_beanie_tan", 				"AddGearTan/Headgear/beanie_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"60a7acf20c5cb24b01346648", "AddGearTan_CAP_BACKWARDS", 			"AddGearTan/Headgear/cap_backwards.bundle");
		JustNUCore.AddItemRetexture(db, 	"5aa7d03ae5b5b00016327db5", "AddGearTan_M92", 						"AddGearTan/Headgear/untarhelmet.bundle");
		
		// Tactical/Armored Rigs //
		JustNUCore.AddItemRetexture(db, 	"5b44cad286f77402a54ae7e5", "AddGearTan_tacteccarrier_tan",			"AddGearTan/Rigs/tacteccarrier_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"592c2d1a86f7746dbe2af32a", "AddGearTan_anaalpha_tan", 				"AddGearTan/Rigs/anaalpha_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e722886f7740458316a57", "AddGearTan_anam1_tan", 				"AddGearTan/Rigs/anam1_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ab8dced86f774646209ec87", "AddGearTan_anam2_tan", 				"AddGearTan/Rigs/anam2_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5e4ac41886f77406a511c9a8", "AddGearTan_arscpc_tan", 				"AddGearTan/Rigs/arscpc_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5df8a42886f77412640e2e75", "AddGearTan_mppv_tan", 					"AddGearTan/Rigs/mppv_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"544a5caa4bdc2d1a388b4568", "AddGearTan_cryeavs_tan", 				"AddGearTan/Rigs/cryeavs_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5648a69d4bdc2ded0b8b457b", "AddGearTan_blackrock_tan", 			"AddGearTan/Rigs/blackrock_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5d5d85c586f774279a21cbdb", "AddGearTan_d3crx_tan", 				"AddGearTan/Rigs/d3crx_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5e9db13186f7742f845ee9d3", "AddGearTan_lbt1961a_tan", 				"AddGearTan/Rigs/lbt1961a_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"5f5f41f56760b4138443b352", "AddGearTan_thunderbolt_tan", 			"AddGearTan/Rigs/thunderbolt_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"59e7643b86f7742cbf2c109a", "AddGearTan_tv109_tan", 				"AddGearTan/Rigs/tv109_tan.bundle");
		JustNUCore.AddItemRetexture(db, 	"59e7643b86f7742cbf2c109a", "AddGearTan_AZIMUT", 					"AddGearTan/Rigs/AZIMUT.bundle");
		AdditionalGearTan.addAvsMbav(db, 	"609e860ebd219504d8507525", "AddGearTan_AVS_MBAV", 					"AddGearTan/Rigs/avs_mbav.bundle");
		
		// Trade Offers
		if (config.EnableTradeOffers) {
			JustNUCore.CopyTradeOffers("5b44cd8b86f774503d30cba2", "AddGearTan_gen4_tan_full");
			JustNUCore.CopyTradeOffers("5b44cf1486f77431723e3d05", "AddGearTan_gen4_tan_assault");
			JustNUCore.CopyTradeOffers("5b44d0de86f774503d30cba8", "AddGearTan_gen4_tan_mobility");
			JustNUCore.CopyTradeOffers("5c0e51be86f774598e797894", "AddGearTan_6b13_tan");
			JustNUCore.CopyTradeOffers("5fd4c474dd870108a754b241", "AddGearTan_hgrid_tan");
			JustNUCore.CopyTradeOffers("5ab8e4ed86f7742d8e50c7fa", "AddGearTan_untarvest_tan");
			JustNUCore.CopyTradeOffers("5c0e655586f774045612eeb2", "AddGearTan_trooper_tan");
			JustNUCore.CopyTradeOffers("5c0e655586f774045612eeb2", "AddGearTan_trooper_tan_clean");
			JustNUCore.CopyTradeOffers("5648a7494bdc2d9d488b4583", "AddGearTan_paca_tan");
			JustNUCore.CopyTradeOffers("5f5e46b96bdad616ad46d613", "AddGearTan_f4terminator_tan");
			JustNUCore.CopyTradeOffers("5c0e774286f77468413cc5b2", "AddGearTan_blackjack50_tan");
			JustNUCore.CopyTradeOffers("5b44c6ae86f7742d1627baea", "AddGearTan_beta2_tan");
			JustNUCore.CopyTradeOffers("5e4abc6786f77406812bd572", "AddGearTan_medpack_tan");
			JustNUCore.CopyTradeOffers("544a5cde4bdc2d39388b456b", "AddGearTan_mbss_tan");
			JustNUCore.CopyTradeOffers("5e9dcf5986f7746c417435b3", "AddGearTan_daypack_tan");
			JustNUCore.CopyTradeOffers("5ca20d5986f774331e7c9602", "AddGearTan_berkut_tan");
			JustNUCore.CopyTradeOffers("5a16ba61fcdbcb098008728a", "AddGearTan_ops_core_mandible_tan");
			JustNUCore.CopyTradeOffers("5ea058e01dbce517f324b3e2", "AddGearTan_tk_heavy_trooper_tan");
			JustNUCore.CopyTradeOffers("5f60b85bbdb8e27dee3dc985", "AddGearTan_caiman_applique_tan");
			JustNUCore.CopyTradeOffers("5f60bf4558eff926626a60f2", "AddGearTan_caiman_visor_tan");
			JustNUCore.CopyTradeOffers("5a16b7e1fcdbcb00165aa6c9", "AddGearTan_ops_core_visor_tan");
			JustNUCore.CopyTradeOffers("5a16badafcdbcb001865f72d", "AddGearTan_ops_core_side_armor_tan");
			JustNUCore.CopyTradeOffers("5f60c076f2bcbb675b00dac2", "AddGearTan_caiman_mandible_tan");
			JustNUCore.CopyTradeOffers("5a16b672fcdbcb001912fa83", "AddGearTan_ops_core_fast_visor_tan");
			JustNUCore.CopyTradeOffers("5ab8f39486f7745cd93a1cca", "AddGearTan_CFbalaclava_tan");
			JustNUCore.CopyTradeOffers("572b7fa524597762b747ce82", "AddGearTan_halfmask_tan");
			JustNUCore.CopyTradeOffers("5b432f3d5acfc4704b4a1dfb", "AddGearTan_momex_tan");
			JustNUCore.CopyTradeOffers("5ab8f85d86f7745cd93a1cf5", "AddGearTan_shemaghV1_tan");
			JustNUCore.CopyTradeOffers("5a7c4850e899ef00150be885", "AddGearTan_6b47_tan");
			JustNUCore.CopyTradeOffers("5f60b34a41e30a4ab12a6947", "AddGearTan_caiman_tan");
			JustNUCore.CopyTradeOffers("5d5e7d28a4b936645d161203", "AddGearTan_mich2001_tan");
			JustNUCore.CopyTradeOffers("5d5e9c74a4b9364855191c40", "AddGearTan_mich2002_tan");
			JustNUCore.CopyTradeOffers("5e4bfc1586f774264f7582d3", "AddGearTan_tc800_tan");
			JustNUCore.CopyTradeOffers("5b40e3f35acfc40016388218", "AddGearTan_achhc_tan");
			JustNUCore.CopyTradeOffers("5d96141523f0ea1b7f2aacab", "AddGearTan_doorkicker_tan");
			JustNUCore.CopyTradeOffers("5b43271c5acfc432ff4dce65", "AddGearTan_head_bandana_tan");
			JustNUCore.CopyTradeOffers("5aa2a7e8e5b5b00016327c16", "AddGearTan_bear_cap_tan");
			JustNUCore.CopyTradeOffers("5aa2a7e8e5b5b00016327c16", "AddGearTan_cap_tan");
			JustNUCore.CopyTradeOffers("5f60e6403b85f6263c14558c", "AddGearTan_beret_tan");
			JustNUCore.CopyTradeOffers("5aa2ba46e5b5b000137b758d", "AddGearTan_uxpro_tan");
			JustNUCore.CopyTradeOffers("572b7fa124597762b472f9d2", "AddGearTan_beanie_tan");
			JustNUCore.CopyTradeOffers("5b44cad286f77402a54ae7e5", "AddGearTan_tacteccarrier_tan");
			JustNUCore.CopyTradeOffers("592c2d1a86f7746dbe2af32a", "AddGearTan_anaalpha_tan");
			JustNUCore.CopyTradeOffers("5c0e722886f7740458316a57", "AddGearTan_anam1_tan");
			JustNUCore.CopyTradeOffers("5ab8dced86f774646209ec87", "AddGearTan_anam2_tan");
			JustNUCore.CopyTradeOffers("5e4ac41886f77406a511c9a8", "AddGearTan_arscpc_tan");
			JustNUCore.CopyTradeOffers("5df8a42886f77412640e2e75", "AddGearTan_mppv_tan");
			JustNUCore.CopyTradeOffers("544a5caa4bdc2d1a388b4568", "AddGearTan_cryeavs_tan");
			JustNUCore.CopyTradeOffers("5648a69d4bdc2ded0b8b457b", "AddGearTan_blackrock_tan");
			JustNUCore.CopyTradeOffers("5d5d85c586f774279a21cbdb", "AddGearTan_d3crx_tan");
			JustNUCore.CopyTradeOffers("5e9db13186f7742f845ee9d3", "AddGearTan_lbt1961a_tan");
			JustNUCore.CopyTradeOffers("5f5f41f56760b4138443b352", "AddGearTan_thunderbolt_tan");
			JustNUCore.CopyTradeOffers("59e7643b86f7742cbf2c109a", "AddGearTan_tv109_tan");
		}
		
		// Modify quests
		/*
		const armoredVests = [
			[
				"AddGearTan_gen4_tan_full"
			],
			[
				"AddGearTan_gen4_tan_assault"
			],
			[
				"AddGearTan_gen4_tan_mobility"
			],
			[
				"AddGearTan_6b13_tan"
			],
			[
				"AddGearTan_hgrid_tan"
			],
			[
				"AddGearTan_untarvest_tan"
			],
			[
				"AddGearTan_trooper_tan"
			],
			[
				"AddGearTan_trooper_tan_clean"
			],
			[
				"AddGearTan_paca_tan"
			],
			[
				"AddGearTan_tacteccarrier_tan"
			],
			[
				"AddGearTan_anam1_tan"
			],
			[
				"AddGearTan_anam2_tan"
			],
			[
				"AddGearTan_arscpc_tan"
			],
			[
				"AddGearTan_cryeavs_tan"
			]
		];
		const punisher5Gear = [
			[
				"AddGearTan_paca_tan",
				"5aa7cfc0e5b5b00015693143"
			],
			[
				"AddGearTan_paca_tan",
				"5a7c4850e899ef00150be885"
			],
			[
				"AddGearTan_paca_tan",
				"AddGearBlack_6b47covered_black"
			],
			[
				"AddGearTan_paca_tan",
				"AddGearTan_6b47_tan"
			]
		];
		const punisher4Gear = [
			[
				"572b7adb24597762ae139821",
				"AddGearTan_CFbalaclava_tan"
			],
			[
				"572b7adb24597762ae139821",
				"AddGearTan_momex_tan"
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
		JustNUCore.createTraderOffer("AddGearTan_mich2001_tan", 				"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 440.28, 	2);
		JustNUCore.createTraderOffer("AddGearTan_untarvest_tan", 				"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 381.44, 	2);
		JustNUCore.createTraderOffer("AddGearTan_ops_core_mandible_tan", 		"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 203.37, 	3);
		JustNUCore.createTraderOffer("AddGearTan_mich2002_tan", 				"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 467.91, 	3);
		JustNUCore.createTraderOffer("AddGearTan_ops_core_side_armor_tan", 	"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 328.48, 	3);
		JustNUCore.createTraderOffer("AddGearTan_ops_core_fast_visor_tan", 	"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 111.48, 	3);
		JustNUCore.createTraderOffer("AddGearTan_ops_core_visor_tan", 		"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 342.74, 	4);
		// Ragman
		JustNUCore.createTraderOffer("AddGearTan_paca_tan", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 20383.81,	1);
		JustNUCore.createTraderOffer("AddGearTan_berkut_tan", 				"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 20160, 		1);
		JustNUCore.createTraderOffer("AddGearTan_bear_cap_tan", 				"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 1724.1, 	1);
		JustNUCore.createTraderOffer("AddGearTan_cap_tan", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 1724.1, 	1);
		JustNUCore.createTraderOffer("AddGearTan_d3crx_tan", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 27373.5, 	2);
		JustNUCore.createTraderOffer("AddGearTan_tv109_tan", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 17760.75, 	2);
		JustNUCore.createTraderOffer("AddGearTan_ops_core_fast_visor_tan",	"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 12282.9, 	2);
		JustNUCore.createTraderOffer("AddGearTan_CFbalaclava_tan", 			"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 3626.7, 	2);
		JustNUCore.createTraderOffer("AddGearTan_6b47_tan", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 32112.15, 	2);
		JustNUCore.createTraderOffer("AddGearTan_head_bandana_tan", 			"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 2094.75, 	2);
		JustNUCore.createTraderOffer("AddGearTan_uxpro_tan", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 2145.15, 	2);
		JustNUCore.createTraderOffer("AddGearTan_6b13_tan", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 64155, 		3);
		JustNUCore.createTraderOffer("AddGearTan_anaalpha_tan", 				"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 48414.45, 	3);
		JustNUCore.createTraderOffer("AddGearTan_momex_tan", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 3371.55, 	3);
		JustNUCore.createTraderOffer("AddGearTan_shemaghV1_tan", 				"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 4470.9, 	3);
		JustNUCore.createTraderOffer("AddGearTan_achhc_tan", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 57928.5, 	3);
		JustNUCore.createTraderOffer("AddGearTan_blackrock_tan", 				"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 38535, 		3);
		JustNUCore.createTraderOffer("AddGearTan_beta2_tan", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 49020.3, 	4);
		JustNUCore.createTraderOffer("AddGearTan_mppv_tan", 					"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 51660, 		4);
		
		// add items to bots
		// ArmorVest //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.ArmorVest.push(
			"AddGearTan_untarvest_tan",
			"AddGearTan_paca_tan"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.ArmorVest.push(
			"AddGearTan_untarvest_tan",
			"AddGearTan_paca_tan"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.ArmorVest.push(
			"AddGearTan_untarvest_tan",
			"AddGearTan_paca_tan"
		);
		DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.ArmorVest.push(
			"AddGearTan_untarvest_tan",
			"AddGearTan_paca_tan"
		);
		DatabaseServer.tables.bots.types["followergluharassault"].inventory.equipment.ArmorVest.push(
			"AddGearTan_gen4_tan_full",
			"AddGearTan_gen4_tan_mobility",
			"AddGearTan_6b13_tan"
		);
		DatabaseServer.tables.bots.types["followergluharscout"].inventory.equipment.ArmorVest.push(
			"AddGearTan_paca_tan"
		);
		DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.ArmorVest.push(
			"AddGearTan_gen4_tan_full",
			"AddGearTan_6b13_tan"
		);
		DatabaseServer.tables.bots.types["marksman"].inventory.equipment.ArmorVest.push(
			"AddGearTan_paca_tan"
		);
		DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.ArmorVest.push(
			"AddGearTan_gen4_tan_full",
			"AddGearTan_gen4_tan_mobility",
			"AddGearTan_hgrid_tan",
			"AddGearTan_trooper_tan",
			"AddGearTan_trooper_tan_clean",
			"AddGearTan_paca_tan"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.ArmorVest.push(
			"AddGearTan_gen4_tan_full",
			"AddGearTan_gen4_tan_assault",
			"AddGearTan_gen4_tan_mobility",
			"AddGearTan_untarvest_tan",
			"AddGearTan_hgrid_tan",
			"AddGearTan_trooper_tan",
			"AddGearTan_trooper_tan_clean",
			"AddGearTan_paca_tan"
		);
		DatabaseServer.tables.bots.types["bear"].inventory.equipment.ArmorVest.push(
			"AddGearTan_6b13_tan",
			"AddGearTan_paca_tan"
		);
		// Backpack //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.Backpack.push(
			"AddGearTan_mbss_tan"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.Backpack.push(
			"AddGearTan_mbss_tan"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.Backpack.push(
			"AddGearTan_mbss_tan"
		);
		DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.Backpack.push(
			"AddGearTan_mbss_tan"
		);
		DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.Backpack.push(
			"AddGearTan_medpack_tan",
			"AddGearTan_mbss_tan",
			"AddGearTan_daypack_tan",
			"AddGearTan_berkut_tan"
		);
		DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.Backpack.push(
			"AddGearTan_berkut_tan"
		);
		DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.Backpack.push(
			"AddGearTan_beta2_tan",
			"AddGearTan_medpack_tan",
			"AddGearTan_berkut_tan"
		);
		DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.Backpack.push(
			"AddGearTan_beta2_tan",
			"AddGearTan_mbss_tan",
			"AddGearTan_daypack_tan",
			"AddGearTan_berkut_tan"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.Backpack.push(
			"AddGearTan_f4terminator_tan",
			"AddGearTan_blackjack50_tan",
			"AddGearTan_medpack_tan",
			"AddGearTan_mbss_tan",
			"AddGearTan_daypack_tan"
		);
		DatabaseServer.tables.bots.types["bear"].inventory.equipment.Backpack.push(
			"AddGearTan_beta2_tan",
			"AddGearTan_berkut_tan"
		);
		// FaceCover //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.FaceCover.push(
			"AddGearTan_halfmask_tan"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.FaceCover.push(
			"AddGearTan_halfmask_tan"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.FaceCover.push(
			"AddGearTan_halfmask_tan"
		);
		DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.FaceCover.push(
			"AddGearTan_momex_tan"
		);
		DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.FaceCover.push(
			"AddGearTan_momex_tan",
			"AddGearTan_shemaghV1_tan"
		);
		DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.FaceCover.push(
			"AddGearTan_momex_tan"
		);
		DatabaseServer.tables.bots.types["marksman"].inventory.equipment.FaceCover.push(
			"AddGearTan_momex_tan"
		);
		DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.FaceCover.push(
			"AddGearTan_CFbalaclava_tan",
			"AddGearTan_halfmask_tan",
			"AddGearTan_momex_tan",
			"AddGearTan_shemaghV1_tan"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.FaceCover.push(
			"AddGearTan_CFbalaclava_tan",
			"AddGearTan_halfmask_tan",
			"AddGearTan_momex_tan",
			"AddGearTan_shemaghV1_tan"
		);
		DatabaseServer.tables.bots.types["bear"].inventory.equipment.FaceCover.push(
			"AddGearTan_momex_tan",
			"AddGearTan_shemaghV1_tan"
		);
		// Headwear //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47_tan",
			"AddGearTan_head_bandana_tan",
			"AddGearTan_bear_cap_tan",
			"AddGearTan_cap_tan",
			"AddGearTan_beret_tan",
			"AddGearTan_uxpro_tan",
			"AddGearTan_beanie_tan"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47_tan",
			"AddGearTan_head_bandana_tan",
			"AddGearTan_bear_cap_tan",
			"AddGearTan_cap_tan",
			"AddGearTan_beret_tan",
			"AddGearTan_uxpro_tan",
			"AddGearTan_beanie_tan"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47_tan",
			"AddGearTan_head_bandana_tan",
			"AddGearTan_bear_cap_tan",
			"AddGearTan_cap_tan",
			"AddGearTan_beret_tan",
			"AddGearTan_uxpro_tan",
			"AddGearTan_beanie_tan"
		);
		DatabaseServer.tables.bots.types["bossgluhar"].inventory.equipment.Headwear.push(
			"AddGearTan_caiman_tan"
		);
		DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47_tan"
		);
		DatabaseServer.tables.bots.types["followergluharassault"].inventory.equipment.Headwear.push(
			"AddGearTan_beanie_tan"
		);
		DatabaseServer.tables.bots.types["followergluharscout"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47_tan"
		);
		DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.Headwear.push(
			"AddGearTan_mich2002_tan",
			"AddGearTan_tc800_tan"
		);
		DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.Headwear.push(
			"AddGearTan_doorkicker_tan"
		);
		DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.Headwear.push(
			"AddGearTan_caiman_tan",
			"AddGearTan_mich2001_tan",
			"AddGearTan_tc800_tan",
			"AddGearTan_achhc_tan",
			"AddGearTan_bear_cap_tan",
			"AddGearTan_cap_tan",
			"AddGearTan_uxpro_tan"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.Headwear.push(
			"AddGearTan_caiman_tan",
			"AddGearTan_mich2001_tan",
			"AddGearTan_mich2002_tan",
			"AddGearTan_tc800_tan",
			"AddGearTan_achhc_tan",
			"AddGearTan_doorkicker_tan",
			"AddGearTan_head_bandana_tan",
			"AddGearTan_cap_tan",
			"AddGearTan_beret_tan",
			"AddGearTan_uxpro_tan",
			"AddGearTan_beanie_tan"
		);
		DatabaseServer.tables.bots.types["bear"].inventory.equipment.Headwear.push(
			"AddGearTan_6b47_tan",
			"AddGearTan_head_bandana_tan",
			"AddGearTan_bear_cap_tan",
			"AddGearTan_cap_tan",
			"AddGearTan_uxpro_tan",
			"AddGearTan_beanie_tan"
		);
		// TacticalVest //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tv109_tan"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tv109_tan"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tv109_tan"
		);
		DatabaseServer.tables.bots.types["bossgluhar"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tacteccarrier_tan",
			"AddGearTan_anam1_tan",
			"AddGearTan_anam2_tan",
			"AddGearTan_cryeavs_tan",
			"AddGearTan_d3crx_tan",
			"AddGearTan_thunderbolt_tan"
		);
		DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tv109_tan"
		);
		DatabaseServer.tables.bots.types["followergluharassault"].inventory.equipment.TacticalVest.push(
			"AddGearTan_anaalpha_tan",
			"AddGearTan_cryeavs_tan",
			"AddGearTan_d3crx_tan",
			"AddGearTan_tv109_tan"
		);
		DatabaseServer.tables.bots.types["followergluharscout"].inventory.equipment.TacticalVest.push(
			"AddGearTan_d3crx_tan",
			"AddGearTan_tv109_tan"
		);
		DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.TacticalVest.push(
			"AddGearTan_anaalpha_tan",
			"AddGearTan_anam1_tan",
			"AddGearTan_anam2_tan",
			"AddGearTan_d3crx_tan",
			"AddGearTan_tv109_tan"
		);
		DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.TacticalVest.push(
			"AddGearTan_anaalpha_tan",
			"AddGearTan_tv109_tan"
		);
		DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tv109_tan"
		);
		DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tacteccarrier_tan",
			"AddGearTan_anaalpha_tan",
			"AddGearTan_anam2_tan",
			"AddGearTan_mppv_tan",
			"AddGearTan_cryeavs_tan",
			"AddGearTan_lbt1961a_tan",
			"AddGearTan_thunderbolt_tan"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.TacticalVest.push(
			"AddGearTan_tacteccarrier_tan",
			"AddGearTan_mppv_tan",
			"AddGearTan_cryeavs_tan",
			"AddGearTan_d3crx_tan",
			"AddGearTan_lbt1961a_tan",
			"AddGearTan_thunderbolt_tan"
		);
		DatabaseServer.tables.bots.types["bear"].inventory.equipment.TacticalVest.push(
			"AddGearTan_anaalpha_tan",
			"AddGearTan_anam1_tan",
			"AddGearTan_anam2_tan",
			"AddGearTan_arscpc_tan",
			"AddGearTan_blackrock_tan",
			"AddGearTan_tv109_tan"
		);
		
		// MoreVariety support
		if (VFS.exists(`user/mods/MoreVariety/package.json`)) {
			//remnantciv
			DatabaseServer.tables.bots.types["remnantciv"].inventory.equipment.ArmorVest.push(
				"AddGearTan_paca_tan"
			);
			DatabaseServer.tables.bots.types["remnantciv"].inventory.equipment.FaceCover.push(
				"AddGearTan_halfmask_tan",
				"AddGearTan_shemaghV1_tan"
			);
			DatabaseServer.tables.bots.types["remnantciv"].inventory.equipment.Headwear.push(
				"AddGearTan_doorkicker_tan",
				"AddGearTan_head_bandana_tan",
				"AddGearTan_cap_tan",
				"AddGearTan_uxpro_tan",
				"AddGearTan_beanie_tan"
			);
			// remnantspecopsgorka
			DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.ArmorVest.push(
				"AddGearTan_6b13_tan"
			);
			DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.Backpack.push(
				"AddGearTan_beta2_tan",
				"AddGearTan_berkut_tan"
			);
			DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.FaceCover.push(
				"AddGearTan_CFbalaclava_tan",
				"AddGearTan_momex_tan",
				"AddGearTan_shemaghV1_tan"
			);
			DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.Headwear.push(
				"AddGearTan_6b47_tan",
				"AddGearTan_beret_tan"
			);
			DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.TacticalVest.push(
				"AddGearTan_tv109_tan"
			);
			// untareng
			DatabaseServer.tables.bots.types["untareng"].inventory.equipment.Backpack.push(
				"AddGearTan_mbss_tan",
				"AddGearTan_daypack_tan"
			);
			DatabaseServer.tables.bots.types["untareng"].inventory.equipment.FaceCover.push(
				"AddGearTan_halfmask_tan"
			);
			DatabaseServer.tables.bots.types["untareng"].inventory.equipment.TacticalVest.push(
				"AddGearTan_mppv_tan",
				"AddGearTan_d3crx_tan",
				"AddGearTan_lbt1961a_tan",
				"AddGearTan_thunderbolt_tan"
			);
		};
		
		*/
	}
	
	static addAvsMbav(db, ItemBase, NewItemID, BundlePath)
    {
        // create item
		let NewItem = JsonUtil.clone(DatabaseServer.tables.templates.items[ItemBase]);

        NewItem._id = NewItemID;
        NewItem._name = NewItemID;
        NewItem._props.Prefab.path = BundlePath;
		NewItem._props.CreditsPrice = 139000;
		NewItem._props.armorClass = 5;
		NewItem._props.speedPenaltyPercent = -4;
		NewItem._props.mousePenalty = -5;
		NewItem._props.weaponErgonomicPenalty = -6;
		NewItem._props.ArmorMaterial = "ArmoredSteel";
        DatabaseServer.tables.templates.items[NewItemID] = NewItem;
		
        // handbook
        let ItemHandbook = JsonUtil.clone(DatabaseServer.tables.templates.handbook.Items.find((item) =>
        {
            return item.Id === ItemBase;
        }));

        ItemHandbook.Id = NewItem._id;
		ItemHandbook.Price = 139000;
        DatabaseServer.tables.templates.handbook.Items.push(ItemHandbook);
		
		// locale
		for (const localeID in DatabaseServer.tables.locales.global)
        {
			// en placeholder
			DatabaseServer.tables.locales.global[localeID].templates[NewItemID] = JsonUtil.deserialize(VFS.readFile(`${db}locales/en.json`))[NewItemID];
			
			// actual locale
			if (VFS.exists(`${db}locales/${localeID}.json`)) {
				DatabaseServer.tables.locales.global[localeID].templates[NewItemID] = JsonUtil.deserialize(VFS.readFile(`${db}locales/${localeID}.json`))[NewItemID];
			}
        }
		
		// add item to the ragfair
        DatabaseServer.tables.traders["ragfair"].assort.items.push({
            "_id": `${NewItemID}_ragfairOffer`,
            "_tpl": NewItemID,
            "parentId": "hideout",
            "slotId": "hideout",
            "upd": {
                "UnlimitedCount": true,
                "StackObjectsCount": 999999999
            }
        });
		
		// add purchase cost
        DatabaseServer.tables.traders["ragfair"].assort.barter_scheme[`${NewItemID}_ragfairOffer`] = [
            [
            {
                "count": NewItem._props.CreditsPrice,
                "_tpl": "5449016a4bdc2d6f028b456f"
            }]
        ]
		
		// add trader standing requirement
        DatabaseServer.tables.traders.ragfair.assort.loyal_level_items[`${NewItemID}_ragfairOffer`] = 1;
		
		// update filters/conflicts
		let dbItems = DatabaseServer.tables.templates.items;
		
		for (const item in dbItems) {
			const itemConflictId = dbItems[item]._props.ConflictingItems;
			
			for (const itemInConflicts in itemConflictId) {
				let itemInConflictsFiltersId = itemConflictId[itemInConflicts];
					
				if (itemInConflictsFiltersId === ItemBase) {
					itemConflictId.push(NewItemID);
				}
			}
			
			for (const slots in dbItems[item]._props.Slots) {
				const slotsId = dbItems[item]._props.Slots[slots]._props.filters[0].Filter;
				
				for (const itemInFilters in slotsId) {
					let itemInFiltersId = slotsId[itemInFilters]
					
					if (itemInFiltersId === ItemBase) {
						slotsId.push(NewItemID);
					}
				}
			}
		}
    }
}

module.exports = AdditionalGearTan;