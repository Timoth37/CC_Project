const currenciesModel = require("./currencies.model");
const historyService = require("../history/history.service");

exports.conversion = async(username,isoFrom,isoTo,valueIn) =>{
  try{
      const currencyFrom = await currenciesModel.findOne({iso: isoFrom}).exec();
      const currencyTo = await currenciesModel.findOne({iso: isoTo}).exec();
      const rate = currencyTo.rate/currencyFrom.rate;
      const valueOut = valueIn*rate;
      await historyService.create({
          "usernameUser":username,
          "isoFrom":isoFrom,
          "isoTo":isoTo,
          "rate":rate,
          "valueIn":valueIn,
          "valueOut":valueOut,
      });
      return {"result" :valueOut};
  }
  catch (e) {
      throw new Error(e.message);
  }
};

exports.create = async(data)=>{
    const currency = new currenciesModel (data);
    return currency.save();
}

exports.findAll = async ()=>{
return currenciesModel.find();
}