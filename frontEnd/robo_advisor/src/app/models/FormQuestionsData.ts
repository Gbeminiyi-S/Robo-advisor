import { FormQuestions } from "./interfaces/formQuestions";

export const FormQuestionsData: FormQuestions[] = [
    {
      id:1,
      text: "Now, to personalize your investment journey, tell me, what age group do you belong to?",
      options: [
        { label: "Under 25", value: "under25", name: 'age'},
      ]
    },
    {
      id:2,
      text: "What's your primary goal for this investment?",
      options: [
        { label: "Grow my capital over time (Capital Growth)", value: "Capital Growth" },
        { label: "Generate income to supplement my lifestyle (Income generation)", value: "Income Generation" },
        { label: "Protect my savings and minimize risk (Capital Preservation)", value: "Capital Preservation" },
      ]
    },
    {
      id:3,
      text: "How long do you plan to hold onto this investment?",
      options: [
        { label: "enter your investment horizon", value: "" },
      ]
    },
    {
      id:4,
      text: "How comfortable are you with investing?",
      options: [
        { label: '"Investing newbie" (Beginner)', value: "Beginner" },
        { label: '"I\'ve dabbled a bit" (Intermediate)', value: "Intermediate" },
        { label: '"Seasoned investor" (Advanced)', value: "Advanced" },
      ]
    },
    {
      id:5,
      text: "Imagine you're on a rollercoaster. How will you categorize your risk appetite?",
      options: [
        { label: "Thrill-seeker (High risk)", value: "High" },
        { label: "Moderate ride, please (Moderate risk)", value: "Moderate" },
        { label: "Safety first (Low risk)", value: "Low" },
      ]
    },
    {
      id:6,
      text: "To get started, how much are you considering investing?",
      options: [
        { label: "enter amount", value: "" },
        
      ]
    },
    {
      id:7,
      text: "What currency are you using?",
      options: [
        { label: "£ Pound", value: "Pound" },
        { label: "$ Dollar", value: "Dollar" },
        { label: "₦ Naira", value: "Naira" },
        { label: "€ Euro", value: "Euro" },
        { label: "₵ Cedi", value: "Cedi" },
      ]
    },
    {
      id:8,
      text: "Where are you located? This helps me tailor recommendations to local regulations",
      options: [
        { label: "enter location", value: "" },
      ]
    },
    
  ];