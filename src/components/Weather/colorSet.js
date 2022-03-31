const colorSet = (hour) => {

  let skyColorP;
  let skyColorS;

  if(hour >= 22 || hour < 3) {
    skyColorP = "0D043B";
    skyColorS = "300A56";
  } else if(hour >= 21){
    skyColorP = "300A56";
    skyColorS = "6B1BBD";
  } else if(hour >= 20){
    skyColorP = "6B1BBD";
    skyColorS = "9E3FFF";
  } else if(hour >= 19) {
    skyColorP = "9E3FFF";
    skyColorS = "D2A6FF";
  } else if(hour >= 18){
    skyColorP = "D2A6FF";
    skyColorS = "FF7D23";
  } else if(hour >= 17){
    skyColorP = "FF7D23";
    skyColorS = "8DBCCB";
  } else if(hour >= 8){
    skyColorP = "8DBCCB";
    skyColorS = "E8FAFF";
  } else if(hour >= 7){
    skyColorP = "8DBCCB";
    skyColorS = "FF7D23";
  } else if(hour >= 6){
    skyColorP = "D2A6FF";
    skyColorS = "FF7D23";
  } else if(hour >= 5){
    skyColorP = "9E3FFF";
    skyColorS = "6B1BBD";
  } else if(hour >= 4){
    skyColorP = "6B1BBD";
    skyColorS = "300A56";
  } else if(hour >= 3) {
    skyColorP = "300A56";
    skyColorS = "0D043B";
  }
  return [skyColorP, skyColorS];
}

export { colorSet };