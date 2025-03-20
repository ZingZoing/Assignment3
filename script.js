document.getElementById("Heron-form").addEventListener('submit', (event) => {
    event.preventDefault();
    const SideA = document.getElementById("SideA").value;
    const SideB = document.getElementById("SideB").value;
    const SideC = document.getElementById("SideC").value;
    const Area = Math.sqrt(SideA);

    //square root does not work
    // const Area = 4 / Math.sqrt(4 * SideA * SideB - ((SideA * SideA + SideB * SideB - SideC * SideC) * (SideA * SideA + SideB * SideB - SideC * SideC)));
    document.getElementById("Hresult").value = Area;
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