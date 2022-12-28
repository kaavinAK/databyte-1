const mongoose = require("mongoose");

mongoose
  .connect("your db url", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`successful`);
  })
  .catch((e) => {
    console.log(`unsuccessful`);
  });
