function handleDate(event) {
  event.preventDefault();
  const dob = document.getElementById("dob").value;
  const standardDate = new Date(dob);
  const dateInMilliSeconds = standardDate.getTime(standardDate);
  const dateNow = Date.now();

  const ageInMilliSeconds = dateNow - dateInMilliSeconds;
  const newDate = new Date(ageInMilliSeconds);
  const calculatedYear = newDate.getUTCFullYear() - 1970;
  const calculatedMonth = newDate.getUTCMonth();
  const calculatedDay = newDate.getUTCDay();
  const calculatedHour = newDate.getUTCHours();
  const calculatedMinutes = newDate.getUTCMinutes();

  const showResult = document.getElementById("showResult");
  //   Show Result with HTML element:
  showResult.innerHTML = `${"<strong>"}Your Current Age: ${"</strong>"} 
  Year: ${calculatedYear} ${"<br/>"} 
  Month: ${calculatedMonth} ${"<br/>"} 
  Days: ${calculatedDay} ${"<br/>"} 
  Hours: ${calculatedHour} ${"<br/>"} 
  Minutes: ${calculatedMinutes}`;
}
