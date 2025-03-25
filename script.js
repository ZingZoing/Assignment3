document.getElementById("Heron-form").addEventListener('submit', (event) => {
  event.preventDefault();
  const SideA = parseFloat(document.getElementById("SideA").value);
  const SideB = parseFloat(document.getElementById("SideB").value);
  const SideC = parseFloat(document.getElementById("SideC").value);
  //const Area = Math.sqrt(4*SideA*SideA*SideB*SideB-(SideA*SideA+SideB*SideB-SideC*SideC))/4;
  const s = (SideA + SideB + SideC) / 2;
  const Area = Math.sqrt(s * (s - SideA) * (s - SideB) * (s - SideC));
  document.getElementById("Hresult").value = Area;

  
})

document.getElementById("Ambiguous-form").addEventListener('submit', (event) => {
  event.preventDefault();
  const AngleA = document.getElementById("AngleA").value;
  const SideA = document.getElementById("SideA2").value;
  const SideB = document.getElementById("SideB2").value;
  let TriangleType;
  const h = SideB * Math.sin(AngleA);
  if (SideA < h){
    TriangleType = "no triangle 1";
    } else if (SideA === h){
      TriangleType = "right triangle";
    } else if (SideA > SideB){
      TriangleType = "one triangle"
    } else if (h < SideA < SideB){
      TriangleType = "two triangle (ambiguous case)"
    } else if (SideA < SideB || SideA == SideB){
      TriangleType = "no triangle"
    } else if (SideA > SideB){
      TriangleType = "one triangle"
    } else {
      TriangleType = "error"
    }
    document.getElementById("Aresult").value = TriangleType;
})

document.getElementById("Newtons-form").addEventListener('submit', (event) => {
  event.preventDefault();
  const x = document.getElementById("x").value;
  const Function = 6*x*x*x*x - 13*x*x*x - 18*x*x - 7*x + 6;
  const Derivative = 24*x*x*x - 39*x*x - 36*x - 7;
  const RootApproximation = x - Function/Derivative;

  document.getElementById("Nresult").value = RootApproximation;
})

document.getElementById("Poly-form").addEventListener('submit', (event) => {
  event.preventDefault();
  const Coefficients = document.getElementById("Coefficients").value;
  const Exponents = document.getElementById("Exponents").value;
  const x2 = parseFloat(document.getElementById("x2").value);

  if (isNaN(x2)) {
    alert("x is invalid");
    return;
  }

  const Co = Coefficients.split(" ").map(Number);
  const Ex = Exponents.split(" ").map(Number);

  if (Co.some(isNaN) || Ex.some(isNaN)) {
    alert("either or both coefficients or exponents is invalid");
    return;
  }

  if (Co.length !== Ex.length) {
    alert("the number of coefficients and exponents is not equal");
    return;
  }

  let PolynomialFunction = "";
  let PolynomialEvaluation = 0;

  for (let i = 0; i < Co.length; i++) {
    if (i > 0 && Co[i] > 0) {
      PolynomialFunction += ` + ${Co[i]}x^${Ex[i]}`;
    } else if (Co[i] < 0) {
      PolynomialFunction += ` - ${Math.abs(Co[i])}x^${Ex[i]}`;
    } else if (Co[i] === 0) {
      continue;
    } else {
      PolynomialFunction += `${Co[i]}x^${Ex[i]}`;
    }
    PolynomialEvaluation += Co[i] * Math.pow(x2, Ex[i]);
  }

  document.getElementById("Presult1").value = PolynomialFunction.trim();
  document.getElementById("Presult2").value = PolynomialEvaluation;
});