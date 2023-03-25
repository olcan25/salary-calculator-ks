import { netSalaryFunc, grossSalaryFunc } from 'salary-calculator-ks';

    const {  employeeContribute, employerContribute, grossSalary, taxSalary, isPrimary } = netSalaryFunc(netSalary,isPrimary=true)

    OR

    const { netSalary, employeeContribute, employerContribute, taxSalary, isPrimary } = grossSalaryFunc(grossSalary,isPrimary=true)
