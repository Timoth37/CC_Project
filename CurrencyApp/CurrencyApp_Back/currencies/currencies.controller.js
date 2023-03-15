const router = require("express").Router();
const currenciesService = require("./currencies.service");
const historyService = require("../history/history.service");

router.post("/currency",async(req,res)=>{
    try{
        return res.status(200).send(await currenciesService.conversion(req.user.username,req.body.isoFrom,req.body.isoTo,req.body.valueIn));
    }
    catch (e) {
        return res.status(404).send(e.message);
    }
});

router.post("/currency/create",async(req,res)=>{
    try{
        return res.status(200).send(await currenciesService.create(req.body));
    }
    catch (e) {
        return res.status(404).send(e.message);
    }
});

router.get("/currency/findAll",async(req,res)=>{
    try{
        return res.status(200).send(await currenciesService.findAll());
    }
    catch (e) {
        return res.status(404).send(e.message);
    }
});

router.get("/currency/history",async(req,res)=>{
    try{
        return res.status(200).send(await historyService.findByUser(req.user.username) );
    }
    catch (e) {
        return res.status(404).send(e.message);
    }
});

module.exports = router;