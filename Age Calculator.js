let selectedDate = null;

flatpickr("#date", {
  dateFormat: "d-m-y",
  maxDate: "today",
  onChange: function(selectedDates) {
    selectedDate = selectedDates[0]; 
  }
});

function calculate_age() {
  const result = document.getElementById('result');

  if (!selectedDate) {
    result.textContent = 'Please Select Your Date Of Birth.';
    return;
  }

  const today = new Date();

  let years = today.getFullYear() - selectedDate.getFullYear();
  let months = today.getMonth() - selectedDate.getMonth();
  let days = today.getDate() - selectedDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `You are <strong> ${years} </strong> Years - <strong> ${months} </strong> Months - And <strong> ${days} </strong> Days Old.`;
}
