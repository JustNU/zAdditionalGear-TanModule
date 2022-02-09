"use strict";

class AdditionalGearBlack
{
	
	static onLoadMod() 
	{
		// Constants
		const db = `user/mods/Z_AdditionalGear_BlackModule/db/`;
		const Config = JsonUtil.deserialize(VFS.readFile(`user/mods/Z_AdditionalGear_BlackModule/config/config.json`));
		
		// add retexture (db,	"original item id",			"new item id",							"bundle path");
		// Armored Vests //
		JustNUCore.AddItemRetexture(db, 	"5c0e541586f7747fa54205c9", "AddGearBlack_6B13M_KILLA",				"AddGearBlack/ArmoredVests/6b13m_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e53c886f7747fa54205c7", "AddGearBlack_6B13", 					"AddGearBlack/ArmoredVests/6b13_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ab8e79e86f7742d8b372e78", "AddGearBlack_GJEL", 					"AddGearBlack/ArmoredVests/gjel_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5e9dacf986f774054d6b89f4", "AddGearBlack_DEFENDER_2", 				"AddGearBlack/ArmoredVests/def2_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ca2151486f774244a3b8d30", "AddGearBlack_REDUT_M", 				"AddGearBlack/ArmoredVests/redutm_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ca21c6986f77479963115a7", "AddGearBlack_REDUT_T5", 				"AddGearBlack/ArmoredVests/redutt5_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e655586f774045612eeb2", "AddGearBlack_TROOPER", 				"AddGearBlack/ArmoredVests/trooper_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e655586f774045612eeb2", "AddGearBlack_TROOPER_NO_SIGN", 		"AddGearBlack/ArmoredVests/trooper_black_clean.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e5bab86f77461f55ed1f3", "AddGearBlack_6B23_1", 					"AddGearBlack/ArmoredVests/6b23_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e57ba86f7747fa141986d", "AddGearBlack_6B23_2", 					"AddGearBlack/ArmoredVests/6b23_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b44cd8b86f774503d30cba2", "AddGearBlack_GEN4_FULL", 				"AddGearBlack/ArmoredVests/gen4_black_mesh_1.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b44cf1486f77431723e3d05", "AddGearBlack_GEN4_ASSAULT", 			"AddGearBlack/ArmoredVests/gen4_black_mesh_2.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b44d0de86f774503d30cba8", "AddGearBlack_GEN4_MOBILITY", 			"AddGearBlack/ArmoredVests/gen4_black_mesh_3.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ab8e4ed86f7742d8e50c7fa", "AddGearBlack_UNTAR_VEST", 				"AddGearBlack/ArmoredVests/untarvest_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"60a283193cb70855c43a381d", "AddGearBlack_THOR_FULL", 				"AddGearBlack/ArmoredVests/thor_carrier_full.bundle");
		
		// Backpacks //
		JustNUCore.AddItemRetexture(db, 	"5c0e805e86f774683f3dd637", "AddGearBlack_PARATUS", 				"AddGearBlack/Backpacks/paratus_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b44c6ae86f7742d1627baea", "AddGearBlack_BETA2", 					"AddGearBlack/Backpacks/beta2_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"545cdae64bdc2d39198b4568", "AddGearBlack_TRIZIP", 					"AddGearBlack/Backpacks/trizip_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5f5e46b96bdad616ad46d613", "AddGearBlack_F4_TERMINATOR", 			"AddGearBlack/Backpacks/f4terminator_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5f5e467b0bc58666c37e7821", "AddGearBlack_F5_SWITCHBLADE", 			"AddGearBlack/Backpacks/f5switchblade_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"544a5cde4bdc2d39388b456b", "AddGearBlack_MBBS", 					"AddGearBlack/Backpacks/mbss_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5e9dcf5986f7746c417435b3", "AddGearBlack_DAYPACK", 				"AddGearBlack/Backpacks/daypack_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"6034d2d697633951dc245ea6", "AddGearBlack_G2_GUNSLINGER", 			"AddGearBlack/Backpacks/g2gunslinger_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ab8ebf186f7742d8b372e80", "AddGearBlack_ATTACK2", 				"AddGearBlack/Backpacks/attack2_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ca20d5986f774331e7c9602", "AddGearBlack_BERKUT", 					"AddGearBlack/Backpacks/berkut_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ab8f04f86f774585f4237d8", "AddGearBlack_SLING_BAG", 				"AddGearBlack/Backpacks/sling_bag.bundle");
		JustNUCore.AddItemRetexture(db, 	"60a272cc93ef783291411d8e", "AddGearBlack_HAZARD4_DRAWBRIDGE", 		"AddGearBlack/Backpacks/hazard4_drawbridge.bundle");
		
		// Misc Gear //
		JustNUCore.AddItemRetexture(db, 	"5aa7e373e5b5b000137b76f0", "AddGearBlack_ALTYN_FACE_SHIELD", 		"AddGearBlack/MiscGear/altyn_shield_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0919b50db834001b7ce3b9", "AddGearBlack_MASKA_1SH_FACE_SHIELD",	"AddGearBlack/MiscGear/maska_1sh_black_shield.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c178a942e22164bef5ceca3", "AddGearBlack_AIFRAME_CHOPS", 			"AddGearBlack/MiscGear/airframe_chops_mesh_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c1793902e221602b21d3de2", "AddGearBlack_AIFRAME_EARS", 			"AddGearBlack/MiscGear/airframe_ears_mesh_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5a16ba61fcdbcb098008728a", "AddGearBlack_OPS_CORE_MANDIBLE",		"AddGearBlack/MiscGear/ops_core_mandible_mesh_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e66e2d174af02a96252f4", "AddGearBlack_SLAAP", 					"AddGearBlack/MiscGear/slaap_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ea058e01dbce517f324b3e2", "AddGearBlack_TK_HEAVY_TROOPER", 		"AddGearBlack/MiscGear/tk_heavy_trooper_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0558060db834001b735271", "AddGearBlack_GPNVG18", 				"AddGearBlack/MiscGear/gpnvg18_black.bundle");
		
		// Facecover //
		JustNUCore.AddItemRetexture(db, 	"5ab8f85d86f7745cd93a1cf5", "AddGearBlack_SHEMAGH_V1", 				"AddGearBlack/Facecover/shemaghV1_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b4325355acfc40019478126", "AddGearBlack_SHEMAGH_V2", 				"AddGearBlack/Facecover/shemaghV2_black.bundle");
		AdditionalGearBlack.addWeldMask(db, "60a7ad2a2198820d95707a2e", "AddGearBlack_WELDING_MASK", 			"AddGearBlack/Facecover/welding_mask.bundle");
		
		// Headgear //
		JustNUCore.AddItemRetexture(db, 	"5aa7cfc0e5b5b00015693143", "AddGearBlack_6B47_COVERED", 			"AddGearBlack/Headgear/6b47covered_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5aa7e276e5b5b000171d0647", "AddGearBlack_ALTYN", 					"AddGearBlack/Headgear/altyn_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b43271c5acfc432ff4dce65", "AddGearBlack_HEAD_BANDANA", 			"AddGearBlack/Headgear/head_bandana_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c17a7ed2e2216152142459c", "AddGearBlack_AIFRAME", 				"AddGearBlack/Headgear/airframe_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5d5e7d28a4b936645d161203", "AddGearBlack_MICH2001", 				"AddGearBlack/Headgear/mich2001_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5d5e9c74a4b9364855191c40", "AddGearBlack_MICH2002", 				"AddGearBlack/Headgear/mich2002_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c091a4e0db834001d5addc8", "AddGearBlack_MASKA_1SH", 				"AddGearBlack/Headgear/maska_1sh_black_mesh.bundle");
		JustNUCore.AddItemRetexture(db, 	"5aa7d03ae5b5b00016327db5", "AddGearBlack_UNTAR_HELMET", 			"AddGearBlack/Headgear/untarhelmet_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b4327aa5acfc400175496e0", "AddGearBlack_PANAMA", 					"AddGearBlack/Headgear/panama_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5d96141523f0ea1b7f2aacab", "AddGearBlack_DOORKICKER", 				"AddGearBlack/Headgear/doorkicker_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5aa2ba46e5b5b000137b758d", "AddGearBlack_UXPRO", 					"AddGearBlack/Headgear/uxpro_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5aa2a7e8e5b5b00016327c16", "AddGearBlack_CAP", 					"AddGearBlack/Headgear/cap_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5aa2ba19e5b5b00014028f4e", "AddGearBlack_FLEECE", 					"AddGearBlack/Headgear/fleece_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"60a7acf20c5cb24b01346648", "AddGearBlack_CAP_BACKWARDS", 			"AddGearBlack/Headgear/cap_backwards.bundle");
		
		// Tactical/Armored Rigs //
		JustNUCore.AddItemRetexture(db, 	"5b44cad286f77402a54ae7e5", "AddGearBlack_TACTEC_CARRIER", 			"AddGearBlack/Rigs/tacteccarrier_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"592c2d1a86f7746dbe2af32a", "AddGearBlack_ANA_ALPHA", 				"AddGearBlack/Rigs/anaalpha_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e722886f7740458316a57", "AddGearBlack_ANA_M1", 					"AddGearBlack/Rigs/anam1_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5d5d87f786f77427997cfaef", "AddGearBlack_A18", 					"AddGearBlack/Rigs/a18_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5e4ac41886f77406a511c9a8", "AddGearBlack_ARS_CPC", 				"AddGearBlack/Rigs/arscpc_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5ab8dced86f774646209ec87", "AddGearBlack_ANA_M2", 					"AddGearBlack/Rigs/anam2_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"544a5caa4bdc2d1a388b4568", "AddGearBlack_CRYE_AVS", 				"AddGearBlack/Rigs/cryeavs_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5d5d85c586f774279a21cbdb", "AddGearBlack_D3CRX", 					"AddGearBlack/Rigs/d3crx_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5e9db13186f7742f845ee9d3", "AddGearBlack_LBT1961A", 				"AddGearBlack/Rigs/lbt1961a_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"5c0e746986f7741453628fe5", "AddGearBlack_TV110", 					"AddGearBlack/Rigs/tv110_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"59e7643b86f7742cbf2c109a", "AddGearBlack_TV109", 					"AddGearBlack/Rigs/tv109_black.bundle");
		JustNUCore.AddItemRetexture(db, 	"6034cf5fffd42c541047f72e", "AddGearBlack_UMKA", 					"AddGearBlack/Rigs/umka_black.bundle");
		AdditionalGearBlack.addAvsMbav(db, 	"609e860ebd219504d8507525", "AddGearBlack_AVS_MBAV", 				"AddGearBlack/Rigs/avs_mbav.bundle");
		
		// Trade Offers
		if (Config.EnableTradeOffers) {
			JustNUCore.CopyTradeOffers("5c0e53c886f7747fa54205c7", "AddGearBlack_6B13");
			JustNUCore.CopyTradeOffers("5ab8e79e86f7742d8b372e78", "AddGearBlack_GJEL");
			JustNUCore.CopyTradeOffers("5e9dacf986f774054d6b89f4", "AddGearBlack_DEFENDER_2");
			JustNUCore.CopyTradeOffers("5ca2151486f774244a3b8d30", "AddGearBlack_REDUT_M");
			JustNUCore.CopyTradeOffers("5ca21c6986f77479963115a7", "AddGearBlack_REDUT_T5");
			JustNUCore.CopyTradeOffers("5c0e655586f774045612eeb2", "AddGearBlack_TROOPER");
			JustNUCore.CopyTradeOffers("5c0e655586f774045612eeb2", "AddGearBlack_TROOPER_NO_SIGN");
			JustNUCore.CopyTradeOffers("5c0e5bab86f77461f55ed1f3", "AddGearBlack_6B23_1");
			JustNUCore.CopyTradeOffers("5c0e57ba86f7747fa141986d", "AddGearBlack_6B23_2");
			JustNUCore.CopyTradeOffers("5b44cd8b86f774503d30cba2", "AddGearBlack_GEN4_FULL");
			JustNUCore.CopyTradeOffers("5b44cf1486f77431723e3d05", "AddGearBlack_GEN4_ASSAULT");
			JustNUCore.CopyTradeOffers("5b44d0de86f774503d30cba8", "AddGearBlack_GEN4_MOBILITY");
			JustNUCore.CopyTradeOffers("5ab8e4ed86f7742d8e50c7fa", "AddGearBlack_UNTAR_VEST");
			JustNUCore.CopyTradeOffers("60a283193cb70855c43a381d", "AddGearBlack_THOR_FULL");
			JustNUCore.CopyTradeOffers("5c0e805e86f774683f3dd637", "AddGearBlack_PARATUS");
			JustNUCore.CopyTradeOffers("5b44c6ae86f7742d1627baea", "AddGearBlack_BETA2");
			JustNUCore.CopyTradeOffers("545cdae64bdc2d39198b4568", "AddGearBlack_TRIZIP");
			JustNUCore.CopyTradeOffers("5f5e46b96bdad616ad46d613", "AddGearBlack_F4_TERMINATOR");
			JustNUCore.CopyTradeOffers("5f5e467b0bc58666c37e7821", "AddGearBlack_F5_SWITCHBLADE");
			JustNUCore.CopyTradeOffers("544a5cde4bdc2d39388b456b", "AddGearBlack_MBBS");
			JustNUCore.CopyTradeOffers("5e9dcf5986f7746c417435b3", "AddGearBlack_DAYPACK");
			JustNUCore.CopyTradeOffers("6034d2d697633951dc245ea6", "AddGearBlack_G2_GUNSLINGER");
			JustNUCore.CopyTradeOffers("5ab8ebf186f7742d8b372e80", "AddGearBlack_ATTACK2");
			JustNUCore.CopyTradeOffers("5ca20d5986f774331e7c9602", "AddGearBlack_BERKUT");
			JustNUCore.CopyTradeOffers("5ab8f04f86f774585f4237d8", "AddGearBlack_SLING_BAG");
			JustNUCore.CopyTradeOffers("60a272cc93ef783291411d8e", "AddGearBlack_HAZARD4_DRAWBRIDGE");
			JustNUCore.CopyTradeOffers("5aa7e373e5b5b000137b76f0", "AddGearBlack_ALTYN_FACE_SHIELD");
			JustNUCore.CopyTradeOffers("5c0919b50db834001b7ce3b9", "AddGearBlack_MASKA_1SH_FACE_SHIELD");
			JustNUCore.CopyTradeOffers("5c178a942e22164bef5ceca3", "AddGearBlack_AIFRAME_CHOPS");
			JustNUCore.CopyTradeOffers("5c1793902e221602b21d3de2", "AddGearBlack_AIFRAME_EARS");
			JustNUCore.CopyTradeOffers("5a16ba61fcdbcb098008728a", "AddGearBlack_OPS_CORE_MANDIBLE");
			JustNUCore.CopyTradeOffers("5c0e66e2d174af02a96252f4", "AddGearBlack_SLAAP");
			JustNUCore.CopyTradeOffers("5ea058e01dbce517f324b3e2", "AddGearBlack_TK_HEAVY_TROOPER");
			JustNUCore.CopyTradeOffers("5c0558060db834001b735271", "AddGearBlack_GPNVG18");
			JustNUCore.CopyTradeOffers("5ab8f85d86f7745cd93a1cf5", "AddGearBlack_SHEMAGH_V1");
			JustNUCore.CopyTradeOffers("5b4325355acfc40019478126", "AddGearBlack_SHEMAGH_V2");
			JustNUCore.CopyTradeOffers("60a7ad2a2198820d95707a2e", "AddGearBlack_WELDING_MASK");
			JustNUCore.CopyTradeOffers("5aa7cfc0e5b5b00015693143", "AddGearBlack_6B47_COVERED");
			JustNUCore.CopyTradeOffers("5aa7e276e5b5b000171d0647", "AddGearBlack_ALTYN");
			JustNUCore.CopyTradeOffers("5b43271c5acfc432ff4dce65", "AddGearBlack_HEAD_BANDANA");
			JustNUCore.CopyTradeOffers("5c17a7ed2e2216152142459c", "AddGearBlack_AIFRAME");
			JustNUCore.CopyTradeOffers("5d5e7d28a4b936645d161203", "AddGearBlack_MICH2001");
			JustNUCore.CopyTradeOffers("5d5e9c74a4b9364855191c40", "AddGearBlack_MICH2002");
			JustNUCore.CopyTradeOffers("5c091a4e0db834001d5addc8", "AddGearBlack_MASKA_1SH");
			JustNUCore.CopyTradeOffers("5aa7d03ae5b5b00016327db5", "AddGearBlack_UNTAR_HELMET");
			JustNUCore.CopyTradeOffers("5b4327aa5acfc400175496e0", "AddGearBlack_PANAMA");
			JustNUCore.CopyTradeOffers("5d96141523f0ea1b7f2aacab", "AddGearBlack_DOORKICKER");
			JustNUCore.CopyTradeOffers("5aa2ba46e5b5b000137b758d", "AddGearBlack_UXPRO");
			JustNUCore.CopyTradeOffers("5aa2a7e8e5b5b00016327c16", "AddGearBlack_CAP");
			JustNUCore.CopyTradeOffers("5aa2ba19e5b5b00014028f4e", "AddGearBlack_FLEECE");
			JustNUCore.CopyTradeOffers("5b44cad286f77402a54ae7e5", "AddGearBlack_TACTEC_CARRIER");
			JustNUCore.CopyTradeOffers("592c2d1a86f7746dbe2af32a", "AddGearBlack_ANA_ALPHA");
			JustNUCore.CopyTradeOffers("5c0e722886f7740458316a57", "AddGearBlack_ANA_M1");
			JustNUCore.CopyTradeOffers("5d5d87f786f77427997cfaef", "AddGearBlack_A18");
			JustNUCore.CopyTradeOffers("5e4ac41886f77406a511c9a8", "AddGearBlack_ARS_CPC");
			JustNUCore.CopyTradeOffers("5ab8dced86f774646209ec87", "AddGearBlack_ANA_M2");
			JustNUCore.CopyTradeOffers("544a5caa4bdc2d1a388b4568", "AddGearBlack_CRYE_AVS");
			JustNUCore.CopyTradeOffers("5d5d85c586f774279a21cbdb", "AddGearBlack_D3CRX");
			JustNUCore.CopyTradeOffers("5e9db13186f7742f845ee9d3", "AddGearBlack_LBT1961A");
			JustNUCore.CopyTradeOffers("5c0e746986f7741453628fe5", "AddGearBlack_TV110");
			JustNUCore.CopyTradeOffers("59e7643b86f7742cbf2c109a", "AddGearBlack_TV109");
			JustNUCore.CopyTradeOffers("6034cf5fffd42c541047f72e", "AddGearBlack_UMKA");
			
			JustNUCore.createTraderOffer("AddGearBlack_CAP_BACKWARDS", 	"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 5435, 	2);
			JustNUCore.createTraderOffer("AddGearBlack_AVS_MBAV", 		"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 141346, 4);
			JustNUCore.createTraderOffer("AddGearBlack_WELDING_MASK", 	"5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", 32443, 	4);
		}
		
		
		// Modify Quests
		if (Config.EnableQuestChanges) {
			const armoredVests = [
				[
					"AddGearBlack_6B13M_KILLA"
				],
				[
					"AddGearBlack_6B13"
				],
				[
					"AddGearBlack_GJEL"
				],
				[
					"AddGearBlack_DEFENDER_2"
				],
				[
					"AddGearBlack_REDUT_M"
				],
				[
					"AddGearBlack_REDUT_T5"
				],
				[
					"AddGearBlack_TROOPER"
				],
				[
					"AddGearBlack_TROOPER_NO_SIGN"
				],
				[
					"AddGearBlack_6B23_1"
				],
				[
					"AddGearBlack_6B23_2"
				],
				[
					"AddGearBlack_GEN4_FULL"
				],
				[
					"AddGearBlack_GEN4_ASSAULT"
				],
				[
					"AddGearBlack_GEN4_MOBILITY"
				],
				[
					"AddGearBlack_UNTAR_VEST"
				],
				[
					"AddGearBlack_TACTEC_CARRIER"
				],
				[
					"AddGearBlack_ANA_M1"
				],
				[
					"AddGearBlack_A18"
				],
				[
					"AddGearBlack_ARS_CPC"
				],
				[
					"AddGearBlack_ANA_M2"
				],
				[
					"AddGearBlack_CRYE_AVS"
				],
				[
					"AddGearBlack_TV110"
				],
				[
					"AddGearBlack_THOR_FULL"
				],
				[
					"AddGearBlack_AVS_MBAV"
				]
			];
			const armoredGear = [
				[
					"AddGearBlack_6B13M_KILLA"
				],
				[
					"AddGearBlack_6B13"
				],
				[
					"AddGearBlack_GJEL"
				],
				[
					"AddGearBlack_DEFENDER_2"
				],
				[
					"AddGearBlack_REDUT_M"
				],
				[
					"AddGearBlack_REDUT_T5"
				],
				[
					"AddGearBlack_TROOPER"
				],
				[
					"AddGearBlack_TROOPER_NO_SIGN"
				],
				[
					"AddGearBlack_6B23_1"
				],
				[
					"AddGearBlack_6B23_2"
				],
				[
					"AddGearBlack_GEN4_FULL"
				],
				[
					"AddGearBlack_GEN4_ASSAULT"
				],
				[
					"AddGearBlack_GEN4_MOBILITY"
				],
				[
					"AddGearBlack_UNTAR_VEST"
				],
				[
					"AddGearBlack_TACTEC_CARRIER"
				],
				[
					"AddGearBlack_ANA_M1"
				],
				[
					"AddGearBlack_A18"
				],
				[
					"AddGearBlack_ARS_CPC"
				],
				[
					"AddGearBlack_ANA_M2"
				],
				[
					"AddGearBlack_CRYE_AVS"
				],
				[
					"AddGearBlack_TV110"
				],
				[
					"AddGearBlack_THOR_FULL"
				],
				[
					"AddGearBlack_AVS_MBAV"
				],
				[
					"AddGearBlack_6B47_COVERED"
				],
				[
					"AddGearBlack_ALTYN"
				],
				[
					"AddGearBlack_AIFRAME"
				],
				[
					"AddGearBlack_MICH2001"
				],
				[
					"AddGearBlack_MICH2002"
				],
				[
					"AddGearBlack_MASKA_1SH"
				],
				[
					"AddGearBlack_UNTAR_HELMET"
				]
			];
			const nvgs = [
				[
					"AddGearBlack_GPNVG18"
				]
			];
			const punisher5Gear = [
				[
				"5648a7494bdc2d9d488b4583",
				"AddGearBlack_6B47_COVERED"
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
			
			// The survivalist path. Eagle-owl
			if (DatabaseServer.tables.templates.quests["5d25e29d86f7740a22516326"]) {
				const eagleOwl = DatabaseServer.tables.templates.quests["5d25e29d86f7740a22516326"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				DatabaseServer.tables.templates.quests["5d25e29d86f7740a22516326"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...JsonUtil.clone(eagleOwl),
					...nvgs
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
			
			// Swift One
			if (DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"]) {
				const SwiftOne = DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...JsonUtil.clone(SwiftOne),
					...armoredGear
				];
			};
		};
		
		// add items to bots
		if (Config.AddToBots) {
			// ArmorVest //
			DatabaseServer.tables.bots.types["assault"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_UNTAR_VEST"
			);
			DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_UNTAR_VEST"
			);
			DatabaseServer.tables.bots.types["bosskilla"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_6B13M_KILLA"
			);
			DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_6B23_1",
				"AddGearBlack_UNTAR_VEST",
			);
			DatabaseServer.tables.bots.types["followergluharassault"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_6B13",
				"AddGearBlack_GJEL",
				"AddGearBlack_REDUT_M",
				"AddGearBlack_REDUT_T5",
				"AddGearBlack_6B23_1",
				"AddGearBlack_6B23_2"
			);
			DatabaseServer.tables.bots.types["followergluharscout"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_6B13",
				"AddGearBlack_6B23_1",
				"AddGearBlack_6B23_2"
			);
			DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_GJEL",
				"AddGearBlack_REDUT_M",
				"AddGearBlack_REDUT_T5",
				"AddGearBlack_GEN4_FULL",
				"AddGearBlack_THOR_FULL"
			);
			DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_REDUT_M",
				"AddGearBlack_6B23_1",
				"AddGearBlack_6B23_2"
			);
			DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_GJEL",
				"AddGearBlack_DEFENDER_2",
				"AddGearBlack_REDUT_M"
			);
			DatabaseServer.tables.bots.types["sectantwarrior"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_DEFENDER_2",
				"AddGearBlack_REDUT_M",
			);
			DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_GJEL",
				"AddGearBlack_REDUT_M",
				"AddGearBlack_TROOPER",
				"AddGearBlack_TROOPER_NO_SIGN",
				"AddGearBlack_GEN4_ASSAULT",
				"AddGearBlack_GEN4_MOBILITY"
			);
			DatabaseServer.tables.bots.types["usec"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_TROOPER_NO_SIGN",
				"AddGearBlack_TROOPER_NO_SIGN",
				"AddGearBlack_GEN4_FULL",
				"AddGearBlack_GEN4_ASSAULT",
				"AddGearBlack_GEN4_MOBILITY",
				"AddGearBlack_UNTAR_VEST",
				"AddGearBlack_THOR_FULL"
			);
			DatabaseServer.tables.bots.types["bear"].inventory.equipment.ArmorVest.push(
				"AddGearBlack_6B13",
				"AddGearBlack_GJEL",
				"AddGearBlack_DEFENDER_2",
				"AddGearBlack_REDUT_M",
				"AddGearBlack_REDUT_T5",
				"AddGearBlack_6B23_1",
				"AddGearBlack_6B23_2"
			);
			// FaceCover //
			DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.FaceCover.push(
				"AddGearBlack_SHEMAGH_V1",
				"AddGearBlack_SHEMAGH_V2"
			);
			DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.FaceCover.push(
				"AddGearBlack_SHEMAGH_V1"
			);
			DatabaseServer.tables.bots.types["usec"].inventory.equipment.FaceCover.push(
				"AddGearBlack_SHEMAGH_V1",
				"AddGearBlack_SHEMAGH_V2"
			);
			DatabaseServer.tables.bots.types["bear"].inventory.equipment.FaceCover.push(
				"AddGearBlack_SHEMAGH_V1",
				"AddGearBlack_SHEMAGH_V2"
			);
			// Headwear //
			DatabaseServer.tables.bots.types["assault"].inventory.equipment.Headwear.push(
				"AddGearBlack_UNTAR_HELMET",
				"AddGearBlack_6B47_COVERED",
				"AddGearBlack_HEAD_BANDANA",
				"AddGearBlack_CAP",
				"AddGearBlack_UXPRO",
				"AddGearBlack_FLEECE",
				"AddGearBlack_CAP_BACKWARDS"
			);
			DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.Headwear.push(
				"AddGearBlack_UNTAR_HELMET",
				"AddGearBlack_6B47_COVERED",
				"AddGearBlack_HEAD_BANDANA",
				"AddGearBlack_CAP",
				"AddGearBlack_UXPRO",
				"AddGearBlack_FLEECE",
				"AddGearBlack_CAP_BACKWARDS"
			);
			DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.Headwear.push(
				"AddGearBlack_ALTYN"
			);
			DatabaseServer.tables.bots.types["followergluharassault"].inventory.equipment.Headwear.push(
				"AddGearBlack_ALTYN"
			);
			DatabaseServer.tables.bots.types["followergluharscout"].inventory.equipment.Headwear.push(
				"AddGearBlack_6B47_COVERED"
			);
			DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.Headwear.push(
				"AddGearBlack_ALTYN",
				"AddGearBlack_MICH2002"
			);
			DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.Headwear.push(
				"AddGearBlack_DOORKICKER"
			);
			DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.Headwear.push(
				"AddGearBlack_ALTYN"
			);
			DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.Headwear.push(
				"AddGearBlack_MICH2001",
				"AddGearBlack_UNTAR_HELMET",
				"AddGearBlack_PANAMA",
				"AddGearBlack_CAP",
				"AddGearBlack_UXPRO",
				"AddGearBlack_FLEECE",
				"AddGearBlack_CAP_BACKWARDS"
			);
			DatabaseServer.tables.bots.types["usec"].inventory.equipment.Headwear.push(
				"AddGearBlack_HEAD_BANDANA",
				"AddGearBlack_AIFRAME",
				"AddGearBlack_MICH2001",
				"AddGearBlack_MICH2002",
				"AddGearBlack_UNTAR_HELMET",
				"AddGearBlack_PANAMA",
				"AddGearBlack_DOORKICKER",
				"AddGearBlack_CAP",
				"AddGearBlack_UXPRO",
				"AddGearBlack_FLEECE",
				"AddGearBlack_CAP_BACKWARDS"
			);
			DatabaseServer.tables.bots.types["bear"].inventory.equipment.Headwear.push(
				"AddGearBlack_6B47_COVERED",
				"AddGearBlack_ALTYN",
				"AddGearBlack_HEAD_BANDANA",
				"AddGearBlack_MASKA_1SH",
				"AddGearBlack_CAP",
				"AddGearBlack_UXPRO",
				"AddGearBlack_FLEECE",
				"AddGearBlack_CAP_BACKWARDS"
			);
			// Backpack //
			DatabaseServer.tables.bots.types["assault"].inventory.equipment.Backpack.push(
				"AddGearBlack_MBBS",
				"AddGearBlack_SLING_BAG"
			);
			DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.Backpack.push(
				"AddGearBlack_MBBS",
				"AddGearBlack_SLING_BAG"
			);
			DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.Backpack.push(
				"AddGearBlack_MBBS"
			);
			DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.Backpack.push(
				"AddGearBlack_MBBS",
				"AddGearBlack_DAYPACK",
				"AddGearBlack_BERKUT"
			);
			DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.Backpack.push(
				"AddGearBlack_BERKUT"
			);
			DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.Backpack.push(
				"AddGearBlack_BETA2",
				"AddGearBlack_ATTACK2",
				"AddGearBlack_BERKUT"
			);
			DatabaseServer.tables.bots.types["sectantwarrior"].inventory.equipment.Backpack.push(
				"AddGearBlack_DAYPACK",
				"AddGearBlack_BERKUT"
			);
			DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.Backpack.push(
				"AddGearBlack_PARATUS",
				"AddGearBlack_BETA2",
				"AddGearBlack_F5_SWITCHBLADE",
				"AddGearBlack_MBBS",
				"AddGearBlack_DAYPACK",
				"AddGearBlack_ATTACK2",
				"AddGearBlack_HAZARD4_DRAWBRIDGE"
			);
			DatabaseServer.tables.bots.types["usec"].inventory.equipment.Backpack.push(
				"AddGearBlack_PARATUS",
				"AddGearBlack_TRIZIP",
				"AddGearBlack_F4_TERMINATOR",
				"AddGearBlack_F5_SWITCHBLADE",
				"AddGearBlack_MBBS",
				"AddGearBlack_DAYPACK",
				"AddGearBlack_G2_GUNSLINGER",
				"AddGearBlack_HAZARD4_DRAWBRIDGE"
			);
			DatabaseServer.tables.bots.types["bear"].inventory.equipment.Backpack.push(
				"AddGearBlack_BETA2",
				"AddGearBlack_ATTACK2",
				"AddGearBlack_BERKUT"
			);
			// TacticalVest //
			DatabaseServer.tables.bots.types["assault"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_TV109",
				"AddGearBlack_UMKA"
			);
			DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_TV109",
				"AddGearBlack_UMKA"
			);
			DatabaseServer.tables.bots.types["bossgluhar"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_TACTEC_CARRIER",
				"AddGearBlack_ANA_M1",
				"AddGearBlack_A18",
				"AddGearBlack_ANA_M2",
				"AddGearBlack_CRYE_AVS",
				"AddGearBlack_D3CRX",
				"AddGearBlack_TV110"
			);
			DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_ANA_M2",
				"AddGearBlack_CRYE_AVS",
				"AddGearBlack_TV110"
			);
			DatabaseServer.tables.bots.types["followergluharassault"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_ANA_ALPHA",
				"AddGearBlack_CRYE_AVS",
				"AddGearBlack_D3CRX",
				"AddGearBlack_TV109"
			);
			DatabaseServer.tables.bots.types["followergluharscout"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_D3CRX",
				"AddGearBlack_TV109"
			);
			DatabaseServer.tables.bots.types["followergluharsecurity"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_ANA_ALPHA",
				"AddGearBlack_ANA_M1",
				"AddGearBlack_ANA_M2",
				"AddGearBlack_D3CRX",
				"AddGearBlack_TV109",
				"AddGearBlack_AVS_MBAV"
			);
			DatabaseServer.tables.bots.types["followerkojaniy"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_ANA_ALPHA",
				"AddGearBlack_TV109"
			);
			DatabaseServer.tables.bots.types["followersanitar"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_TV109"
			);
			DatabaseServer.tables.bots.types["sectantwarrior"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_D3CRX",
				"AddGearBlack_LBT1961A"
			);
			DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_TACTEC_CARRIER",
				"AddGearBlack_ANA_ALPHA",
				"AddGearBlack_ANA_M2",
				"AddGearBlack_CRYE_AVS",
				"AddGearBlack_LBT1961A",
				"AddGearBlack_TV110",
				"AddGearBlack_AVS_MBAV"
			);
			DatabaseServer.tables.bots.types["usec"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_TACTEC_CARRIER",
				"AddGearBlack_CRYE_AVS",
				"AddGearBlack_D3CRX",
				"AddGearBlack_LBT1961A",
				"AddGearBlack_AVS_MBAV"
			);
			DatabaseServer.tables.bots.types["bear"].inventory.equipment.TacticalVest.push(
				"AddGearBlack_ANA_ALPHA",
				"AddGearBlack_ANA_M1",
				"AddGearBlack_A18",
				"AddGearBlack_ARS_CPC",
				"AddGearBlack_ANA_M2",
				"AddGearBlack_TV110",
				"AddGearBlack_TV109",
				"AddGearBlack_UMKA",
				"AddGearBlack_AVS_MBAV"
			);
			
			// MoreVariety support
			if (VFS.exists(`user/mods/MoreVariety/package.json`)) {
				// followerkilla
				DatabaseServer.tables.bots.types["followerkilla"].inventory.equipment.Headwear.push(
					"AddGearBlack_6B47_COVERED",
					"AddGearBlack_ALTYN",
					"AddGearBlack_HEAD_BANDANA",
					"AddGearBlack_MICH2001",
					"AddGearBlack_MICH2002",
					"AddGearBlack_AIFRAME",
					"AddGearBlack_MASKA_1SH",
					"AddGearBlack_UNTAR_HELMET",
					"AddGearBlack_PANAMA",
					"AddGearBlack_DOORKICKER",
					"AddGearBlack_UXPRO",
					"AddGearBlack_FLEECE",
					"AddGearBlack_CAP",
					"AddGearBlack_CAP_BACKWARDS"
				);
				DatabaseServer.tables.bots.types["followerkilla"].inventory.equipment.FaceCover.push(
					"AddGearBlack_SHEMAGH_V1",
					"AddGearBlack_SHEMAGH_V2"
				);
				DatabaseServer.tables.bots.types["followerkilla"].inventory.equipment.ArmorVest.push(
					"AddGearBlack_6B13",
					"AddGearBlack_GJEL",
					"AddGearBlack_DEFENDER_2",
					"AddGearBlack_REDUT_M",
					"AddGearBlack_TROOPER_NO_SIGN",
					"AddGearBlack_6B23_1",
					"AddGearBlack_6B23_2",
					"AddGearBlack_GEN4_MOBILITY",
					"AddGearBlack_UNTAR_VEST"
				);
				DatabaseServer.tables.bots.types["followerkilla"].inventory.equipment.TacticalVest.push(
					"AddGearBlack_TACTEC_CARRIER",
					"AddGearBlack_ANA_ALPHA",
					"AddGearBlack_ANA_M1",
					"AddGearBlack_ANA_M2",
					"AddGearBlack_CRYE_AVS",
					"AddGearBlack_D3CRX",
					"AddGearBlack_LBT1961A",
					"AddGearBlack_TV110",
					"AddGearBlack_TV109",
					"AddGearBlack_UMKA"
				);
				DatabaseServer.tables.bots.types["followerkilla"].inventory.equipment.Backpack.push(
					"AddGearBlack_TRIZIP",
					"AddGearBlack_MBBS",
					"AddGearBlack_DAYPACK",
					"AddGearBlack_BERKUT"
				);
				
				// remnantciv
				DatabaseServer.tables.bots.types["remnantciv"].inventory.equipment.Headwear.push(
					"AddGearBlack_HEAD_BANDANA",
					"AddGearBlack_PANAMA",
					"AddGearBlack_DOORKICKER",
					"AddGearBlack_UXPRO",
					"AddGearBlack_FLEECE",
					"AddGearBlack_CAP",
					"AddGearBlack_CAP_BACKWARDS"
				);
				DatabaseServer.tables.bots.types["remnantciv"].inventory.equipment.FaceCover.push(
					"AddGearBlack_SHEMAGH_V1",
					"AddGearBlack_SHEMAGH_V2"
				);
				DatabaseServer.tables.bots.types["remnantciv"].inventory.equipment.TacticalVest.push(
					"AddGearBlack_UMKA"
				);
				DatabaseServer.tables.bots.types["remnantciv"].inventory.equipment.Backpack.push(
					"AddGearBlack_SLING_BAG"
				);
				
				// remnantpolice
				DatabaseServer.tables.bots.types["remnantpolice"].inventory.equipment.Headwear.push(
					"AddGearBlack_6B47_COVERED"
				);
				DatabaseServer.tables.bots.types["remnantpolice"].inventory.equipment.ArmorVest.push(
					"AddGearBlack_6B13",
					"AddGearBlack_6B23_1",
					"AddGearBlack_6B23_2"
				);
				DatabaseServer.tables.bots.types["remnantpolice"].inventory.equipment.TacticalVest.push(
					"AddGearBlack_TV109"
				);
				DatabaseServer.tables.bots.types["remnantpolice"].inventory.equipment.Backpack.push(
					"AddGearBlack_MBBS",
					"AddGearBlack_BERKUT"
				);
				
				// remnantspecopsgorka
				DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.Headwear.push(
					"AddGearBlack_ALTYN",
					"AddGearBlack_MASKA_1SH"
				);
				DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.ArmorVest.push(
					"AddGearBlack_6B13",
					"AddGearBlack_GJEL",
					"AddGearBlack_DEFENDER_2",
					"AddGearBlack_REDUT_M",
					"AddGearBlack_REDUT_T5",
					"AddGearBlack_6B23_2"
				);
				DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.TacticalVest.push(
					"AddGearBlack_TV109"
				);
				DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.equipment.Backpack.push(
					"AddGearBlack_BETA2",
					"AddGearBlack_ATTACK2",
					"AddGearBlack_BERKUT"
				);
				DatabaseServer.tables.bots.types["remnantspecopsgorka"].inventory.mods.AddGearBlack_MASKA_1SH = {
					"mod_equipment": [
						"AddGearBlack_MASKA_1SH_FACE_SHIELD"
					]
				};
				
				// remnantspecopsomon
				DatabaseServer.tables.bots.types["remnantspecopsomon"].inventory.equipment.Headwear.push(
					"AddGearBlack_ALTYN",
					"AddGearBlack_MASKA_1SH"
				);
				DatabaseServer.tables.bots.types["remnantspecopsomon"].inventory.equipment.ArmorVest.push(
					"AddGearBlack_6B13",
					"AddGearBlack_GJEL",
					"AddGearBlack_DEFENDER_2",
					"AddGearBlack_REDUT_M",
					"AddGearBlack_REDUT_T5",
					"AddGearBlack_6B23_2"
				);
				DatabaseServer.tables.bots.types["remnantspecopsomon"].inventory.equipment.TacticalVest.push(
					"AddGearBlack_TV109"
				);
				DatabaseServer.tables.bots.types["remnantspecopsomon"].inventory.equipment.Backpack.push(
					"AddGearBlack_BETA2",
					"AddGearBlack_ATTACK2",
					"AddGearBlack_BERKUT"
				);
				DatabaseServer.tables.bots.types["remnantspecopsomon"].inventory.mods.AddGearBlack_MASKA_1SH = {
					"mod_equipment": [
						"AddGearBlack_MASKA_1SH_FACE_SHIELD"
					]
				};
				
				// untareng
				DatabaseServer.tables.bots.types["untareng"].inventory.equipment.TacticalVest.push(
					"AddGearBlack_D3CRX",
					"AddGearBlack_LBT1961A"
				);
				DatabaseServer.tables.bots.types["untareng"].inventory.equipment.Backpack.push(
					"AddGearBlack_MBBS",
					"AddGearBlack_DAYPACK"
				);
				
				// untarger
				DatabaseServer.tables.bots.types["untarger"].inventory.equipment.TacticalVest.push(
					"AddGearBlack_D3CRX",
					"AddGearBlack_LBT1961A"
				);
				DatabaseServer.tables.bots.types["untarger"].inventory.equipment.Backpack.push(
					"AddGearBlack_MBBS",
					"AddGearBlack_DAYPACK"
				);
				
				// untarfra
				DatabaseServer.tables.bots.types["untarfra"].inventory.equipment.TacticalVest.push(
					"AddGearBlack_D3CRX",
					"AddGearBlack_LBT1961A"
				);
				DatabaseServer.tables.bots.types["untarfra"].inventory.equipment.Backpack.push(
					"AddGearBlack_MBBS",
					"AddGearBlack_DAYPACK"
				);
				
				// untarpol
				DatabaseServer.tables.bots.types["untarpol"].inventory.equipment.TacticalVest.push(
					"AddGearBlack_D3CRX",
					"AddGearBlack_LBT1961A"
				);
				DatabaseServer.tables.bots.types["untarpol"].inventory.equipment.Backpack.push(
					"AddGearBlack_MBBS",
					"AddGearBlack_DAYPACK"
				);
			};
		};
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
	
	static addWeldMask(db, ItemBase, NewItemID, BundlePath)
    {
        // create item
		let NewItem = JsonUtil.clone(DatabaseServer.tables.templates.items[ItemBase]);

        NewItem._id = NewItemID;
        NewItem._name = NewItemID;
        NewItem._props.Prefab.path = BundlePath;
		NewItem._props.CreditsPrice = 94500;
		NewItem._props.armorClass = 4;
        DatabaseServer.tables.templates.items[NewItemID] = NewItem;
		
        // handbook
        let ItemHandbook = JsonUtil.clone(DatabaseServer.tables.templates.handbook.Items.find((item) =>
        {
            return item.Id === ItemBase;
        }));

        ItemHandbook.Id = NewItem._id;
		ItemHandbook.Price = 94500;
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

module.exports = AdditionalGearBlack;