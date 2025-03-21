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