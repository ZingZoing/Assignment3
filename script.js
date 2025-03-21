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

  document.getElementById("quad-form").addEventListener('submit', (event) => {
    event.preventDefault();
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        document.getElementById("result").value = "No Roots";
    } else if (discriminant > 0) {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").value = `x1=${rootOne}, x2=${rootTwo}`;
    } else {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").value = `x=${rootOne}`;
    }
})