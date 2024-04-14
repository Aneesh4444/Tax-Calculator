document.addEventListener("DOMContentLoaded", function () {
    const taxForm = document.getElementById("taxForm");
    const errorIcons = document.getElementById("errorIcons");
    const taxModal = document.getElementById("taxModal");
    const closeBtn = document.querySelector(".close");
  
    // Event listener for form submission
    taxForm.addEventListener("submit", function (event) {
      event.preventDefault();
      validateForm();
    });
  
    // Validate form inputs
    function validateForm() {
      const income = parseFloat(document.getElementById("income").value);
      const extraIncome = parseFloat(document.getElementById("extraIncome").value) || 0;
      const deductions = parseFloat(document.getElementById("deductions").value) || 0;
      const age = document.getElementById("age").value;
      const errorFields = [];
  
      // Clear previous error icons
      errorIcons.innerHTML = "";
  
      if (isNaN(income)) {
        errorFields.push("income");
      }
      // Validate other fields similarly
  
      if (errorFields.length > 0) {
        errorFields.forEach((field) => {
          addErrorIcon(field);
        });
      } else {
        calculateTax(income, extraIncome, deductions, age);
      }
    }
  
    // Add error icon for invalid fields
    function addErrorIcon(field) {
      const icon = document.createElement("div");
      icon.classList.add("error");
      icon.innerHTML = "&#9888;"; // Exclamation mark icon
      icon.title = "Invalid input";
      errorIcons.appendChild(icon);
    }
  
    // Calculate tax based on inputs
    function calculateTax(income, extraIncome, deductions, age) {
      let taxableIncome = income + extraIncome - deductions;
      let taxRate = 0;
      if (taxableIncome > 800000) {
        switch (age) {
          case "<40":
            taxRate = 0.3;
            break;
          case ">=40&<60":
            taxRate = 0.4;
            break;
          case ">=60":
            taxRate = 0.1;
            break;
        }
      }
  
      let taxAmount = taxableIncome > 800000 ? (taxableIncome - 800000) * taxRate : 0;
      displayTaxResult(taxAmount.toFixed(2));
    }
  
    // Display tax result in modal
    function displayTaxResult(taxAmount) {
      const taxResult = document.getElementById("taxResult");
      taxResult.textContent = `Tax Amount: ₹ ${taxAmount}`;
      taxModal.style.display = "block";
    }
  
    // Close modal
    closeBtn.onclick = function () {
      taxModal.style.display = "none";
    };
  
    // Close modal when clicking outside modal
    window.onclick = function (event) {
      if (event.target === taxModal) {
        taxModal.style.display = "none";
      }
    };
  });
  