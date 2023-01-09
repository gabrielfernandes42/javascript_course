//Javascript errors and Error Handling
"use stritics";

const makeError = () => {
  let i = 1;
  while (i < 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("odd number!");
      }
      console.log("Even number!");
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("...finaly");
      i++;
    }
  }
};

makeError();
