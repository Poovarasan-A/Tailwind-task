//async always returns a promise

let train = new Promise((resolve, reject) => {
  const arrived = true;

  if (arrived) {
    setTimeout(resolve, 5000, "Train arrived");
  } else {
    reject("Train not arrived");
  }
});

async function trainStatus() {
  try {
    console.log("Fetching.....");
    const res = await train;
    console.log(res);
    console.log("Thankyou");
  } catch (error) {
    console.log(error);
  }
}

trainStatus();
