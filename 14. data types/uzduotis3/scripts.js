document.addEventListener("DOMContentLoaded", () => {
    // Step 1: Declare variables
    let age = 45; // Žmogaus amžius
    let bmi = 28; // Žmogaus KMI
    let smokes = true; // Ar žmogus rūko (true arba false)

    // Step 2: Determine health risk level and provide specific advice
    let riskLevel;
    let advice;

    // Reikalavimai kiekvienai sąlygai
    if (age < 30 && bmi < 25 && !smokes) {
        // Maža rizika: Amžius < 30, KMI < 25 ir nerūko
        riskLevel = "Low";
        advice = "You are in good health. Maintain a healthy lifestyle.";
    } else if ((age >= 30 && age <= 50) && (bmi >= 25 && bmi < 30) && !smokes) {
        // Vidutinė rizika: Amžius tarp 30 ir 50 (imtinai), KMI tarp 25 ir 30 (neimtinai) ir nerūko
        riskLevel = "Moderate";
        advice = "Your health is moderate. Consider improving your diet and exercise routine.";
    } else if ((age > 50 || bmi >= 30 || smokes) && !(age > 50 && bmi >= 30 && smokes)) {
        // Didelė rizika: Bet kuris iš šių veiksnių yra teisingas (bet ne visi trys):
        // - Amžius > 50
        // - KMI >= 30
        // - Rūko
        riskLevel = "High";
        advice = "Your health is at risk. Make significant lifestyle changes.";
    } else if (age > 50 && bmi >= 30 && smokes) {
        // Labai didelė rizika: Visi šie veiksniai yra teisingi:
        // - Amžius > 50
        // - KMI >= 30
        // - Rūko
        riskLevel = "Very High";
        advice = "You are at a very high risk. Seek medical advice immediately.";
    } else {
        // Neapibrėžta rizika: Bet kokia kita įvesčių kombinacija
        riskLevel = "Undefined";
        advice = "Please provide valid inputs.";
    }

    // Step 3: Print the results
    console.log("Age:", age);
    console.log("BMI:", bmi);
    console.log("Smokes:", smokes);
    console.log("Health Risk Level:", riskLevel);
    console.log("Advice:", advice);
});
  