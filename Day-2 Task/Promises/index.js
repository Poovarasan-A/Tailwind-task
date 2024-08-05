//Pending
//Resolved
//Rejected

const tatkalBook = new Promise((resolve, reject) => {
  let bookingSuccess = true;

  if (bookingSuccess) {
    resolve();
  } else {
    reject();
  }
});

tatkalBook
  .then(() => {
    console.log("Thanks for booking! happy journey");
  })
  .catch(() => {
    console.log("Thanks for trying, Not booked");
  });

//Promise written in function

function tossCoin() {
  return new Promise((resolve, reject) => {
    const toss = Math.floor(Math.random() * 2);

    if (toss === 0) {
      resolve();
    } else {
      reject();
    }
  });
}

tossCoin()
  .then(() => {
    console.log("Its head, You won");
  })
  .catch(() => {
    console.log("Its tail, you lost");
  });

//Promise.all()
//Promise.allSettled()
//Promise.any()
//Promise.race()

//Using Promise methods

let reachA = new Promise((resolve, reject) => {
  const reached = true;

  if (reached) {
    setTimeout(resolve, 3000, "A Reached");
  } else {
    reject("A not Reached");
  }
});

let reachB = new Promise((resolve, reject) => {
  const reached = true;

  if (reached) {
    setTimeout(resolve, 2000, "B Reached");
  } else {
    reject("B not Reached");
  }
});

let reachC = new Promise((resolve, reject) => {
  const reached = true;

  if (reached) {
    setTimeout(resolve, 1000, "C Reached");
  } else {
    reject("C not Reached");
  }
});

Promise.race([reachA, reachB, reachC])
  .then((message) => console.log(message))
  .catch((message) => console.log(message));
