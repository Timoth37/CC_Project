const historyModel = require("./history.model");

exports.create = async(data)=>{
    const history = new historyModel(data);
    return history.save();
};

exports.findByUser = async(username)=>{
  return historyModel.find({usernameUser: username});
};