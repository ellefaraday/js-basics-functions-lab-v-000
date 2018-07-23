// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  const distance = Math.abs(42 - location);
  return distance;
}

function distanceFromHqInFeet(location) {
  const feet = distanceFromHqInBlocks(location)*264;
  return feet;
}

function distanceTravelledInFeet(start, end) {
  const distance = Math.abs(start - end) * 264
  return distance;
}

function calculatesFarePrice(start, destination) {
  let price;
  const distance = distanceTravelledInFeet(start, destination);

  if (distance > 2500) {
    console.log();
  }
}
