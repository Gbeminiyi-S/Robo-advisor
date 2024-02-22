import { FormQuestions } from "./interfaces/formQuestions";

export const FormQuestionsData: FormQuestions[] = [
    {
      id:1,
      text: "What is your age range?",
      options: [
        { label: "Under 25", value: "under25" },
        { label: "25-35", value: "25-35" },
        { label: "35-45", value: "35-45" },
        { label: "45-55", value: "45-55" },
        { label: "55 and above", value: "55+" },
      ]
    },
    {
      id:2,
      text: "How would you describe your investment knowledge?",
      options: [
        { label: "Beginner", value: "Beginner" },
        { label: "Intermediate", value: "Intermediate" },
        { label: "Advanced", value: "Advanced" },
      ]
    },
    {
      id:3,
      text: "What is your primary investment goal?",
      options: [
        { label: "Capital preservation", value: "CapitalPreservation" },
        { label: "Capital growth", value: "CapitalGrowth" },
        { label: "Income generation", value: "IncomeGeneration" },
      ]
    },
    {
      id:4,
      text: "How would you react to a significant decline in the value of your investment portfolio?",
      options: [
        { label: "Sell all investments", value: "sellAll" },
        { label: "Sell some investments", value: "sellSome" },
        { label: "Hold onto investments", value: "holdOn" },
        { label: "Buy more investments", value: "buyMore" },
      ]
    },
    {
      id:5,
      text: "What is your time horizon for this investment?",
      options: [
        { label: "Less than 1 year", value: "LessThanOne" },
        { label: "1-3 years", value: "1-3Years" },
        { label: "3-5 years", value: "3-5Years" },
        { label: "5 -10 years", value: "5-10Years" },
        { label: "More Than 10 years", value: "MoreThan10Years" },
      ]
    },
    {
      id:6,
      text: "What percentage of your total investments are you comfortable allocating to high-risk assets (e.g., stocks)?",
      options: [
        { label: "0-20%", value: "0-20%" },
        { label: "20-40%", value: "20-40%" },
        { label: "40-60%", value: "40-60%" },
        { label: "60-80%", value: "60-80%" },
        { label: "80-100%", value: "80-100%" },
      ]
    },
    {
      id:7,
      text: "Do you have any specific preferences for types of investments? (e.g., stocks, bonds, Exchange-Traded Fund - ETFs)?",
      options: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ]
    },
    {
      id:8,
      text: "If answer to Question 7 is Yes, please specify",
      options: [
        { label: "Stocks", value: "Stocks" },
        { label: "Bonds", value: "Bonds" },
        { label: "ETFs", value: "ETFs" },
      ]
    },
    {
      id:9,
      text: "How do you feel about the possibility of losing some or all of your investment principal in exchange for potentially higher returns?",
      options: [
        { label: "Extremely uncomfortable", value: "ExtremelyUncomfortable" },
        { label: "Uncomfortable", value: "Uncomfortable" },
        { label: "Neutral", value: "Neutral" },
        { label: "Comfortable", value: "Comfortable" },
        { label: "Extremely comfortable", value: "ExtremelyComfortable" },
      ]
    },
    {
      id:10,
      text: "Have you experienced any major life events recently that could impact your financial goals or risk tolerance?",
      options: [
        { label: "Yes (e.g., marriage, divorce, birth of a child, job change)", value: "Yes" },
        { label: "No", value: "No" },
      ]
    },
  ];