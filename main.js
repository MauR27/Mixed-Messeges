const randomNumber = () => {
  return Math.floor(Math.random() * 5);
};

const leblancChampionSelect = () => {
  let championSelect = "The Black Rose shall bloom once more.";
  return championSelect;
};

const leblancBan = () => {
  let champBan = "Are you certain?";
  return champBan;
};

const leblancAttack = () => {
  let attacks = [
    "Time to make an appearance.",
    "There's no escape.",
    "Watch closely.",
    "What a treat.",
    "Right where I want them.",
  ];

  return attacks[randomNumber()];
};

const leblancJokes = () => {
  let jokes = [
    "For my next trick I'll make their life bar disappear.",
    "Lying is, like, ninety five percent of what I do.",
  ];

  return jokes[Math.floor(Math.random() * 2)];
};

console.log(leblancJokes());
