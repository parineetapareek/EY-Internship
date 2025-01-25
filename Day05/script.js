function calculate() {
    const resultDiv = document.getElementById("result");
    let text ="";
    let imageSrc ="";
    var weight = parseFloat(document.getElementById("w").value);
    var height = parseFloat(document.getElementById("h").value);

    console.log("weight: " + weight + "height: " + height);
    var bmi = weight / height ** 2;

    console.log("BMI: " + bmi);

    document.getElementById('res').innerText = "BMI is: "+bmi;

    if (bmi < 18.5) {
      console.log("Underweight");
        text ="Under Weight";
        imageSrc="under.jfif";
    } else if (bmi >= 18.5 || bmi < 25) {
      console.log("Normal Weight");
      text ="Normal Weight";
        imageSrc="normal.jfif";
    } else if (bmi >= 25 || bmi < 30) {
      console.log("Overweight");
      text ="Over Weight";
        imageSrc="overweight.jfif";
    } else {
      console.log("Obese");
      text ="Obese";
        imageSrc="obese.png";
    }

    resultDiv.innerHTML =`<h2>${text}</h2>`;
    resultDiv.innerHTML += `<img src="${imageSrc}" alt="${text}">`;
  }