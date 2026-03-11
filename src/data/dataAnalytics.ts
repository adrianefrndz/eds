import workforceDashboard from "../assets/dataAnalytics/workforce.png";
import employeePerformanceOverview from "../assets/dataAnalytics/performance.png";
import us1 from "../assets/dataAnalytics/us1.png";
import us2 from "../assets/dataAnalytics/us2.png";
import usDataCleaning from "../assets/dataAnalytics/us-dataCleaning.png";
import anxiety from "../assets/dataAnalytics/anxiety.png";
import anxietyDataCleaning from "../assets/dataAnalytics/anxiety-dataCleaning.png";

export type Project = {
  title: string;
  imageUrl: string;
  imageUrl2?: string;
  imageDataCleaning?: string;
  problem: string;
  tools: string[];
  dataset: string;
  insights: string[];
  impact: string;
  github?: string;
  demo?: string;
};

export const dataAnalyticsProjects: Project[] = [
  {
    title: "Anxiety Severity Among Young Adults",
    imageDataCleaning: anxietyDataCleaning,
    imageUrl: anxiety,

    problem:
      "Analyze anxiety levels among respondents and determine which demographic groups experience the highest anxiety severity, as well as examine how work and financial stress relate to anxiety scores.",
    dataset: "Anxiety and Depression Data.",

    tools: ["Python", "Jupyter Notebook", "Power BI"],

    insights: [
      "The overall anxiety severity in the full dataset (1200 respondents) is moderate, with an average anxiety score of 10.47/20 and 27.33% of respondents classified as having moderate to severe anxiety.",
      "The 18–24 age group and female respondents show the highest anxiety severity percentages, marking them as priority demographics for mental health interventions.",
      "Among the filtered sample (74 respondents), the majority fall into the Severe and Moderate anxiety categories, confirming the concentration of high anxiety in the selected demographic.",
      "Financial stress levels are consistently higher than work stress levels, suggesting that financial concerns may be a more significant driver of anxiety.",
      "The relationship between anxiety scores and stress factors (financial and work-related) shows some correlation but is generally weak, indicating that anxiety is influenced by multiple factors beyond these stressors alone.",
      "Weak correlations with other psychosocial factors (sleep, social support, loneliness, self-esteem) highlight the complexity of anxiety’s causes, suggesting a multifactorial approach to interventions.",
    ],

    impact: `The analysis identifies females aged 18–24 as the group with the highest anxiety severity, 
    highlighting the need for targeted mental health support. The findings also suggest financial stress 
    as a potential contributor to anxiety, which can guide organizations, universities, and policymakers 
    in developing focused mental health and financial support initiatives.`,

    github: "https://github.com/yourusername/workforce-engagement-analysis",

    demo: "https://your-dashboard-link.com",
  },
  {
    title: "US Accidents Analysis (2016–2023)",

    imageUrl: us1,
    imageUrl2: us2,
    imageDataCleaning: usDataCleaning,

    problem:
      "Analyze accident distribution across weather conditions, time (month/day/hour), severity levels, and geography to identify high-risk patterns and uncover misalignment between accident frequency and severity outcomes.",

    dataset:
      "US Accidents dataset (2016–2023) containing accident timestamps, weather conditions, severity levels (1–4), geographic coordinates, and 3M total recorded incidents across the United States.",

    tools: ["Python", "Jupyter Notebook", "Power BI"],

    insights: [
      "A total of 3M accidents were recorded, with 855K classified as severe, resulting in a severity rate of 32.99%.",
      "Fair weather accounted for the highest accident volume (~755K), indicating that exposure and traffic density drive incidents more than extreme weather.",
      "Commute hours (7–9 AM and 3–6 PM) showed the highest concentration of accidents, highlighting traffic congestion as a major risk factor.",
      "Night-time accidents reached 703K, suggesting increased risk linked to reduced visibility and driver fatigue.",
      "Accident volume fluctuated slightly by month, with peaks around October and November, but severity rates remained relatively stable.",
      "High-density urban states such as California, Texas, Florida, and the Northeast corridor exhibited the strongest accident clustering.",
    ],

    impact:
      "Identified commute congestion, urban density, and normal-weather exposure as primary risk drivers, supporting targeted traffic management strategies and infrastructure-based interventions rather than weather-focused prevention alone.",
    github: "https://github.com/yourusername/workforce-engagement-analysis",

    demo: "https://your-dashboard-link.com",
  },
  {
    title: "Workforce Engagement & Performance Analysis",

    imageUrl: workforceDashboard,

    problem:
      "Evaluate employee engagement, remote work distribution, salary trends, and performance outcomes to identify departments at risk and uncover misalignment between compensation, flexibility, and employee satisfaction.",

    dataset:
      "Workforce dataset containing department, remote work status, salary level, engagement score, and performance rating across multiple departments.",

    tools: ["Excel", "Power BI"],
    insights: [
      "HR recorded the highest remote work participation (~52%) and among the highest salary levels.",
      "Despite compensation and flexibility advantages, HR had the lowest satisfaction and performance score (~2.68).",
      "Compensation and remote flexibility alone did not positively correlate with engagement outcomes.",
      "HR emerged as the primary engagement risk area requiring deeper organizational analysis.",
    ],

    impact:
      "Highlighted structural and cultural misalignment within HR, supporting the need for targeted organizational interventions beyond financial incentives.",

    github: "https://github.com/yourusername/workforce-engagement-analysis",

    demo: "https://your-dashboard-link.com",
  },
  {
    title: "Employee Performance Overview",

    imageUrl: employeePerformanceOverview,

    problem:
      "Provide a transparent and data-driven overview of employee performance, salary distribution, and compensation adjustments to ensure fair rewards, budget control, and strategic workforce planning.",

    dataset:
      "Employee dataset containing performance scores, job titles, salary data, monthly budget allocation, and salary adjustment records.",

    tools: ["Excel", "Power BI"],

    insights: [
      "Monthly salary expenses remained within allocated budget limits.",
      "Salary increases were positively aligned with higher performance scores.",
      "Top-performing employees received proportionally higher compensation adjustments.",
      "Performance trends across job roles showed consistent evaluation standards.",
    ],

    impact:
      "Improved transparency in compensation decisions, reinforced performance-based rewards, and supported leadership in maintaining budget discipline while motivating high-performing employees.",

    github: "https://github.com/yourusername/employee-performance-overview",

    demo: "https://your-dashboard-link.com",
  },
];
