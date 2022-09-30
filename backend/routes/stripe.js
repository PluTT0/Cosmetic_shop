const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post('/payment', async (req, res) => {
  stripe.changes.create({
    sourese: req.body.tokenId,
    amount: req.body.amount,
    currency: "usd"
  },(strypeError, strypeRes) =>{
    if(strypeError){
      res.status(500).json(strypeError)
    } else {
      res.status(200).json(strypeRes)
    }
  })
});

module.exports = router;