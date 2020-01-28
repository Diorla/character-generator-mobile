import oddCalculator from "./oddCalculator";

// Angry, neutral, angel, confused, funny, others

const getRestingface = () => {
  return oddCalculator(
    [
      "Blank", // I don't care attitude
      "Tired", // I'm fed up
      "Happy", // Note, this maybe deceptful and deliberate
      "Confounded", // Looks like they need help
      "Faraway", // Zones out with active imagination
      "Satisfied", // Super proud of themselves. like the world revolves around them
      "Nice" // Always energetic
    ],
    [64, 32, 16, 2, 8, 1, 4]
  );
};

export default getRestingface;
