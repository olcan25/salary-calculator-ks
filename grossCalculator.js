const { round } = require("mathjs");

const PrimaryGrossSalaryCalculation = (grossSalary) => {
    let netSalary = 0;
    let taxSalary = 0;
    let contribute = 0;
    let isPrimary = true;
  
    if (grossSalary > 0 && grossSalary <= 84.21) {
      taxSalary = 0;
      contribute = (grossSalary * 5) / 100;
      contribute = round(contribute, 2);
      netSalary = grossSalary - contribute;
    } else if (grossSalary > 84.21 && grossSalary <= 263.16) {
      contribute = (grossSalary * 5) / 100;
      contribute = round(contribute, 2);
      taxSalary = ((grossSalary - contribute - 80) * 4) / 100;
      taxSalary = round(taxSalary, 2);
      netSalary = grossSalary - contribute - taxSalary;
    } else if (grossSalary > 263.16 && grossSalary <= 473.68) {
      contribute = (grossSalary * 5) / 100;
      contribute = round(contribute, 2);
      taxSalary = ((grossSalary - contribute - 250) * 8) / 100;
      taxSalary = round(taxSalary, 2);
      taxSalary += 6.8;
      netSalary = grossSalary - contribute - taxSalary;
    } else if (grossSalary > 473.68) {
      contribute = (grossSalary * 5) / 100;
      contribute = round(contribute, 2);
      taxSalary = ((grossSalary - contribute - 450) * 10) / 100;
      taxSalary = round(taxSalary, 2);
      taxSalary += 22.8;
      netSalary = grossSalary - contribute - taxSalary;
    }
    netSalary = round(netSalary, 2);
  
    return {
      netSalary,
      taxSalary,
      employeeContribute: contribute,
      employerContribute: contribute,
      isPrimary,
    };
  };
  
  const SecondaryGrossSalary = (grossSalary) => {
    let taxSalary = 0;
    let contribute = 0;
    let netSalary = 0;
    let isPrimary = false;
    contribute = (grossSalary * 5) / 100;
    contribute = round(contribute, 2);
    taxSalary = ((grossSalary - contribute) * 10) / 100;
    taxSalary = round(taxSalary, 2);
    netSalary = grossSalary - contribute - taxSalary;
    return {
      netSalary,
      taxSalary,
      employeeContribute: contribute,
      employerContribute: contribute,
      isPrimary,
    };
  };

  //PrimaryGrossSalaryCalculation(1000) promise structure create

  const PrimaryGrossSalaryCalculationPromise = (grossSalary) => {
    return new Promise((resolve, reject) => {
      let netSalary = 0;
      let taxSalary = 0;
      let contribute = 0;
      let isPrimary = true;

      if (grossSalary > 0 && grossSalary <= 84.21) {
        taxSalary = 0;
        contribute = (grossSalary * 5) / 100;
        contribute = round(contribute, 2);
        netSalary = grossSalary - contribute;
      } else if (grossSalary > 84.21 && grossSalary <= 263.16) {
        contribute = (grossSalary * 5) / 100;
        contribute = round(contribute, 2);
        taxSalary = ((grossSalary - contribute - 80) * 4) / 100;
        taxSalary = round(taxSalary, 2);
        netSalary = grossSalary - contribute - taxSalary;
      } else if (grossSalary > 263.16 && grossSalary <= 473.68) {
        contribute = (grossSalary * 5) / 100;
        contribute = round(contribute, 2);
        taxSalary = ((grossSalary - contribute - 250) * 8) / 100;
        taxSalary = round(taxSalary, 2);
        taxSalary += 6.8;
        netSalary = grossSalary - contribute - taxSalary;
      } else if (grossSalary > 473.68) {
        contribute = (grossSalary * 5) / 100;
        contribute = round(contribute, 2);
        taxSalary = ((grossSalary - contribute - 450) * 10) / 100;
        taxSalary = round(taxSalary, 2);
        taxSalary += 22.8;
        netSalary = grossSalary - contribute - taxSalary;
      }
      netSalary = round(netSalary, 2);


      resolve({
        netSalary,
        taxSalary,
        employeeContribute: contribute,
        employerContribute: contribute,
        isPrimary,
      });

    });
  };

  //SecondaryGrossSalaryPromise(1000) promise structure create

  const SecondaryGrossSalaryPromise = (grossSalary) => {
    return new Promise((resolve, reject) => {
      let taxSalary = 0;
      let contribute = 0;
      let netSalary = 0;
      let isPrimary = false;
      contribute = (grossSalary * 5) / 100;
      contribute = round(contribute, 2);
      taxSalary = ((grossSalary - contribute) * 10) / 100;
      taxSalary = round(taxSalary, 2);
      netSalary = grossSalary - contribute - taxSalary;
      resolve({
        netSalary,
        taxSalary,
        employeeContribute: contribute,
        employerContribute: contribute,
        isPrimary,
      });
    });
  };


module.exports = { PrimaryGrossSalaryCalculation, SecondaryGrossSalary, PrimaryGrossSalaryCalculationPromise, SecondaryGrossSalaryPromise };