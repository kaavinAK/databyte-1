const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://kaaivn:gak5679v@tutorial.1omiw.mongodb.net/databyte?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`successful`);
  })
  .catch((e) => {
    console.log(`unsuccessful`);
  });