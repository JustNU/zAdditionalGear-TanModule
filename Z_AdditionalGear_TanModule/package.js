class Mod
{
    constructor()
    {
		Logger.info("Loading: AdditionalGear - Tan Module");
		
		ModLoader.onLoad["AdditionalGearTanModule"] = require("./src/additionalgeartan.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();