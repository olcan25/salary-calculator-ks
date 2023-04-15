const {
  PrimaryGrossSalaryCalculation,
  SecondaryGrossSalary,
  PrimaryGrossSalaryCalculationPromise,
  SecondaryGrossSalaryPromise,
} = require("./grossCalculator");
const {
  PrimaryNetSalaryCalculation,
  SecondaryNetSalary,
  PrimaryNetSalaryCalculationPromise,
  SecondaryNetSalaryPromise,
} = require("./netCalculator");

const netSalaryFunc = (netSalary, isPrimary = true) => {
  if (isPrimary) {
    return PrimaryNetSalaryCalculation(netSalary);
  } else {
    return SecondaryNetSalary(netSalary);
  }
};

// netSalaryFuncPromise structure
const netSalaryFuncPromise = (netSalary, isPrimary = true) => {
  if (isPrimary) {
    return PrimaryNetSalaryCalculationPromise(netSalary);
  } else {
    return SecondaryNetSalaryPromise(netSalary);
  }
};



const grossSalaryFunc = (grossSalary, isPrimary = true) => {
  if (isPrimary) {
    return PrimaryGrossSalaryCalculation(grossSalary);
  } else {
    return SecondaryGrossSalary(grossSalary);
  }
};

// grossSalaryFuncPromise structure

const grossSalaryFuncPromise = (grossSalary, isPrimary = true) => {
  if (isPrimary) {
    return PrimaryGrossSalaryCalculationPromise(grossSalary);
  } else {
    return SecondaryGrossSalaryPromise(grossSalary);
  }
};

module.exports = { grossSalaryFunc, netSalaryFunc, grossSalaryFuncPromise, netSalaryFuncPromise };
