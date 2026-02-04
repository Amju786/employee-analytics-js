// ==============================
// Employee Analytics Mini Project
// ==============================

const employees = [
    { empId: "E001", name: "Ali", department: "Engineering", division: "Product", salary: 75000 },
    { empId: "E002", name: "Rahul", department: "Engineering", division: "Platform", salary: 68000 },
    { empId: "E003", name: "Ahmed", department: "QA", division: "Product", salary: 52000 },
    { empId: "E004", name: "Sohail", department: "QA", division: "Platform", salary: 50000 },
    { empId: "E005", name: "Karthik", department: "HR", division: "Operations", salary: 45000 },
    { empId: "E006", name: "Amjad", department: "Engineering", division: "Product", salary: 82000 },
    { empId: "E007", name: "Raj", department: "HR", division: "Operations", salary: 47000 },
    { empId: "E008", name: "Arjun", department: "DevOps", division: "Platform", salary: 90000 }
  ];
  
  // --------------------------------
  // 1️⃣ API SUMMARY
  // --------------------------------
  const totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);
  
  const apiSummary = {
    totalEmployees: employees.length,
    totalDepartments: new Set(employees.map(e => e.department)).size,
    totalDivisions: new Set(employees.map(e => e.division)).size,
    totalSalary
  };
  
  console.log("API SUMMARY:", apiSummary);
  
  // --------------------------------
  // 2️⃣ DEPARTMENT ANALYTICS
  // --------------------------------
  const departmentAnalytics = {};
  
  employees.forEach(emp => {
    const dept = emp.department;
  
    if (!departmentAnalytics[dept]) {
      departmentAnalytics[dept] = {
        employeeCount: 1,
        totalSalary: emp.salary,
        highestPaidEmployee: {
          name: emp.name,
          salary: emp.salary
        }
      };
    } else {
      departmentAnalytics[dept].employeeCount += 1;
      departmentAnalytics[dept].totalSalary += emp.salary;
  
      if (emp.salary > departmentAnalytics[dept].highestPaidEmployee.salary) {
        departmentAnalytics[dept].highestPaidEmployee = {
          name: emp.name,
          salary: emp.salary
        };
      }
    }
  });
  
  // Add average salary
  for (const dept in departmentAnalytics) {
    departmentAnalytics[dept].averageSalary =
      departmentAnalytics[dept].totalSalary /
      departmentAnalytics[dept].employeeCount;
  }
  
  console.log("DEPARTMENT ANALYTICS:", departmentAnalytics);
  
  // --------------------------------
  // 3️⃣ DIVISION ANALYTICS
  // --------------------------------
  const divisionAnalytics = {};
  
  employees.forEach(emp => {
    const div = emp.division;
  
    if (!divisionAnalytics[div]) {
      divisionAnalytics[div] = {
        employeeCount: 1,
        totalSalary: emp.salary,
        highestPaidEmployee: {
          name: emp.name,
          salary: emp.salary
        }
      };
    } else {
      divisionAnalytics[div].employeeCount += 1;
      divisionAnalytics[div].totalSalary += emp.salary;
  
      if (emp.salary > divisionAnalytics[div].highestPaidEmployee.salary) {
        divisionAnalytics[div].highestPaidEmployee = {
          name: emp.name,
          salary: emp.salary
        };
      }
    }
  });
  
  // Add average salary
  for (const div in divisionAnalytics) {
    divisionAnalytics[div].averageSalary =
      divisionAnalytics[div].totalSalary /
      divisionAnalytics[div].employeeCount;
  }
  
  console.log("DIVISION ANALYTICS:", divisionAnalytics);
  