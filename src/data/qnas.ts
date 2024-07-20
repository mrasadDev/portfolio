export interface QnA {
  question?: string;
  answer?: string;
}

const q1: QnA = {
  question: "Can we help you?",
  answer:
    "Viewing our portfolio on our website will allow you to see examples of our work and read reviews from past clients. Additionally, you can learn about our project process and get an understanding of our design and development abilities. This will give you an idea of how we can apply these skills to your project.",
};

const q2: QnA = {
  question: "What's the price of a project?",
  answer:
    "The cost of a project is based on various factors such as the number of pages, design complexity, and custom coding requirements. In general, our website design and development projects, as well as UI/UX projects, typically cost between $40,000 and $80,000. More intricate projects may have a higher price range.",
};

const q3: QnA = {
  question: "How long does it take to build my project?",
  answer:
    "The timeline for a project can vary significantly depending on its scope. On average, our website design and development projects take 3-5 months to complete, UI/UX projects take 2-4 months, and application development projects take 5-12 months.",
};

const q4: QnA = {
  question: "What’s a typical client-and-agency relationship like?",
  answer:
    "The size of the project will determine the team members assigned to it. Your project may include a project manager, UI/UX designer, full stack developer, and QA engineer. We will communicate with you through Slack, Figma comments, email, and regularly scheduled video meetings.",
};

const q5: QnA = {
  question: "Will you be there for me after the website is complete?",
  answer:
    "Yes, we will be available for two weeks after the project is handed off and approved to offer any necessary assistance. If you need additional support beyond this time, our team is available for additional work at an additional cost.",
};

const q6: QnA = {
  question: "What size and type of companies do you work with?",
  answer:
    "We have worked with a wide range of companies, including start-ups, small businesses, non-profits, and enterprise clients across various industries. To see examples of the web design projects we have completed, please visit our portfolio.",
};

export const qnas = [q1, q2, q3, q4, q5, q6];
