import workforceDashboard from "../assets/dataAnalytics/workforce.png";
import employeePerformanceOverview from "../assets/dataAnalytics/performance.png";
export type Project = {
  title: string;
  description: string;
  description2?: string;
  imageUrl: string;
};

export const dataAnalyticsProjects: Project[] = [
  {
    title: "Workforce Engagement & Performance Analysis",
    imageUrl: workforceDashboard,
    description: `This workforce analytics dashboard evaluates employee engagement, remote work distribution, 
    salary trends, and performance outcomes across departments. The analysis uncovered a critical insight:
     HR, despite leading in remote work participation (~52%) and earning among the highest salaries, recorded 
     the lowest satisfaction and performance score (~2.68).`,
    description2: `The findings suggest that compensation 
     and flexibility alone do not drive engagement, highlighting a disconnect between benefits provided 
     and employee sentiment. HR emerges as the primary engagement risk area, emphasizing the need for deeper 
     cultural and organizational intervention strategies.`,
  },
  {
    title: "Employee Performance Overview",
    imageUrl: employeePerformanceOverview,
    description: `The Employee Performance Overview Dashboard presents a clear summary of employee performance, 
      salary distribution, and compensation adjustments within the organization. It highlights key metrics 
      such as the monthly budget, salary expenses, average salary, total salary increase, and workforce distribution 
      across job titles.`,

    description2: `The dashboard tracks monthly performance trends, identifies top-performing employees, 
    and compares performance and salary increases by role to ensure transparency and data-driven decision-making. 
    In conclusion, the dashboard shows that salary increases are aligned with performance results, 
    rewarding high-performing employees while maintaining budget control. It supports fair compensation, 
    strategic planning, and informed decisions for stakeholders`,
  },
];
