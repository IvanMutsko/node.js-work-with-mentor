const router = require("express").Router();
const Frog = require("../../models/frog");

router.get("/", async (req, res) => {
  const { value1, value2 } = req.query;

  const frogs = await Frog.find({
    // довжина масиву
    habitat: {
      $size: value1,
    },

    // обидва значення в масивіі
    // habitat: {
    //   $all: [value1, value2],
    // },

    // фільтр сумарно по двом параметрам (і такі і такі)
    // $or: [
    //   {
    //     name: {
    //       $regex: value1,
    //       $options: "i",
    //     },
    //   },
    //   {
    //     quantity: {
    //       $gte: value2,
    //     },
    //   },
    // ],
  });
  // .skip(3)
  // .limit(3);

  res.send(frogs);
});

router.post("/", async (req, res) => {
  // res.json(frogs);
});

module.exports = router;
