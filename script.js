document.getElementById("Heron-form").addEventListener('submit', (event) => {
  event.preventDefault();
  const SideA = document.getElementById("SideA").value;
  const SideB = document.getElementById("SideB").value;
  const SideC = document.getElementById("SideC").value;
  const discriminant = SideB * SideB - 4 * SideA * SideC;

  if (discriminant < 0) {
      document.getElementById("Hresult").value = "No Roots";
  } else if (discriminant > 0) {
      const rootOne = (-SideB + Math.sqrt(discriminant)) / (2 * SideA);
      const rootTwo = (-SideB - Math.sqrt(discriminant)) / (2 * SideA);
      document.getElementById("Hresult").value = `x1=${rootOne}, x2=${rootTwo}`;
  } else {
      const rootOne = (-Ab + Math.sqrt(discriminant)) / (2 * Aa);
      document.getElementById("Hresult").value = `x=${rootOne}`;
  }
})

document.getElementById("Ambiguous-form").addEventListener('submit', (event) => {
  event.preventDefault();
  const AngleA = document.getElementById("AngleA").value;
  const AngleB = document.getElementById("AngleB").value;
  const AngleC = document.getElementById("AngleC").value;
  const discriminant = AngleB * AngleB - 4 * AngleA * AngleC;

  if (discriminant < 0) {
      document.getElementById("Aresult").value = "No Roots";
  } else if (discriminant > 0) {
      const rootOne = (-AngleB + Math.sqrt(discriminant)) / (2 * AngleA);
      const rootTwo = (-AngleB - Math.sqrt(discriminant)) / (2 * AngleA);
      document.getElementById("Aresult").value = `x1=${rootOne}, x2=${rootTwo}`;
  } else {
      const rootOne = (-AngleB + Math.sqrt(discriminant)) / (2 * AngleA);
      document.getElementById("Aresult").value = `x=${rootOne}`;
  }
})