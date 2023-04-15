const { round } = require("mathjs");


const PrimaryNetSalaryCalculation = (netSalary) => {
    let grossSalary = 0;
    let taxSalary = 0;
    let contribute = 0;
    let isPrimary = true;
    if (netSalary > 0 && netSalary <= 80) {
      contribute = (netSalary * 5) / 95;
      contribute = round(contribute, 2);
      grossSalary = netSalary + contribute;
      taxSalary = 0;
    } else if (netSalary > 80 && netSalary <= 243.2) {
      taxSalary = ((netSalary - 80) * 4) / 96;
      taxSalary = round(taxSalary, 2);
      contribute = ((netSalary + taxSalary) * 5) / 95;
      contribute = round(contribute, 2);
      grossSalary = netSalary + contribute + taxSalary;
    } else if (netSalary > 243.2 && netSalary <= 427.2) {
      taxSalary = ((netSalary - 243.2) * 8) / 92;
      taxSalary += 6.8;
      taxSalary = round(taxSalary, 2);
      contribute = ((netSalary + taxSalary) * 5) / 95;
      contribute = round(contribute, 2);
      grossSalary = netSalary + contribute + taxSalary;
    } else if (netSalary > 427.2) {
      taxSalary = ((netSalary - 427.2) * 10) / 90;
      taxSalary += 22.8;
      taxSalary = round(taxSalary, 2);
      contribute = ((netSalary + taxSalary) * 5) / 95;
      contribute = round(contribute, 2);
      grossSalary = netSalary + contribute + taxSalary;
    }
  
    grossSalary = round(grossSalary, 2);
  
    return {
      grossSalary,
      taxSalary,
      employeeContribute: contribute,
      employerContribute: contribute,
      isPrimary,
    };
  };
  
  const SecondaryNetSalary = (netSalary) => {
    let taxSalary = 0;
    let contribute = 0;
    let grossSalary = 0;
    let isPrimary = false;
    taxSalary = (netSalary * 10) / 90;
    taxSalary = round(taxSalary, 2);
    contribute = ((netSalary + taxSalary) * 5) / 95;
    contribute = round(contribute, 2);
    grossSalary = netSalary + taxSalary + contribute;
  
    return {
      grossSalary,
      taxSalary,
      employeeContribute: contribute,
      employerContribute: contribute,
      isPrimary,
    };
  };

  //PrimaryNetSalaryCalculation promise structure

  const PrimaryNetSalaryCalculationPromise = (netSalary) => {
    return new Promise((resolve, reject) => {
      let grossSalary = 0;
      let taxSalary = 0;
      let contribute = 0;
      let isPrimary = true;
      if (netSalary > 0 && netSalary <= 80) {
        contribute = (netSalary * 5) / 95;
        contribute = round(contribute, 2);
        grossSalary = netSalary + contribute;
        taxSalary = 0;
      } else if (netSalary > 80 && netSalary <= 243.2) {
        taxSalary = ((netSalary - 80) * 4) / 96;
        taxSalary = round(taxSalary, 2);
        contribute = ((netSalary + taxSalary) * 5) / 95;
        contribute = round(contribute, 2);
        grossSalary = netSalary + contribute + taxSalary;
      } else if (netSalary > 243.2 && netSalary <= 427.2) {
        taxSalary = ((netSalary - 243.2) * 8) / 92;
        taxSalary += 6.8;
        taxSalary = round(taxSalary, 2);
        contribute = ((netSalary + taxSalary) * 5) / 95;
        contribute = round(contribute, 2);
        grossSalary = netSalary + contribute + taxSalary;
      } else if (netSalary > 427.2) {
        taxSalary = ((netSalary - 427.2) * 10) / 90;
        taxSalary += 22.8;
        taxSalary = round(taxSalary, 2);
        contribute = ((netSalary + taxSalary) * 5) / 95;
        contribute = round(contribute, 2);
        grossSalary = netSalary + contribute + taxSalary;
      }

      grossSalary = round(grossSalary, 2);

      resolve({
        grossSalary,
        taxSalary,
        employeeContribute: contribute,
        employerContribute: contribute,
        isPrimary,
      });
    });
  };

  //SecondaryNetSalary promise structure

  const SecondaryNetSalaryPromise = (netSalary) => {
    return new Promise((resolve, reject) => {
      let taxSalary = 0;
      let contribute = 0;
      let grossSalary = 0;
      let isPrimary = false;
      taxSalary = (netSalary * 10) / 90;
      taxSalary = round(taxSalary, 2);
      contribute = ((netSalary + taxSalary) * 5) / 95;
      contribute = round(contribute, 2);
      grossSalary = netSalary + taxSalary + contribute;


      resolve({
        grossSalary,
        taxSalary,
        employeeContribute: contribute,
        employerContribute: contribute,
        isPrimary,
      });

    });
  };

module.exports = {
  PrimaryNetSalaryCalculation,
  SecondaryNetSalary,
  PrimaryNetSalaryCalculationPromise,
  SecondaryNetSalaryPromise,
};