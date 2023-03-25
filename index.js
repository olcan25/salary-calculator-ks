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

const netSalaryFunc = (netSalary, isPrimary = true) => {
  if (isPrimary) {
    return PrimaryNetSalaryCalculation(netSalary);
  } else {
    return SecondaryNetSalary(netSalary);
  }
};

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

const grossSalaryFunc = (grossSalary, isPrimary = true) => {
  if (isPrimary) {
    return PrimaryGrossSalaryCalculation(grossSalary);
  } else {
    return SecondaryGrossSalary(grossSalary);
  }
};

module.exports = { grossSalaryFunc, netSalaryFunc };
