export interface QuestionEntry {
  text: string;
  factual?: boolean;
}

export class QuestionsData {
  public static SHARED_QUESTIONS: QuestionEntry[] = [
    { text: 'How does your product work in more detail?' },
    { text: 'How is your product different?' },
    { text: "What's new about what you make?" },
    {
      text: 'What, exactly, makes you different from existing options?',
    },
  ];

  public static INVESTOR_QUESTIONS: QuestionEntry[] = [
    ...QuestionsData.SHARED_QUESTIONS,
    { text: "What do you understand that others don't?" },
    { text: 'Why will you succeed?' },
    { text: 'How big an opportunity is there?' },
    {
      text: 'What obstacles will you face and how will you overcome them?',
    },
    { text: 'Who would use your product?' },
    { text: 'How much does customer acquisition cost?', factual: true },
    { text: 'How will you make money?' },
    {
      text: 'How much money could you make per year?',
      factual: true,
    },
    { text: 'How many users do you have?', factual: true },
    { text: 'How are you meeting customers?' },
    { text: 'How are you understanding customer needs?' },
    { text: 'How will you get users?' },
    {
      text: 'Who would you hire or how would you add to your team?',
    },
    { text: 'So what are you working on?' },
    { text: 'What are you going to do next?' },
    {
      text: 'How do you know customers need what you\'re making?',
    },
    { text: "Why isn't someone already doing this?" },
    {
      text: 'How will customers and/or users find out about you?',
    },
    {
      text: 'What resistance will customers have to trying you and how will you overcome it?',
    },
    {
      text: "What are the key things about your field that outsiders don't understand?",
    },
    {
      text: 'Who is going to be your first paying customer?',
    },
    {
      text: 'If your startup succeeds, what additional areas might you be able to expand into?',
    },
    {
      text: 'What have you learned so far from working on your product?',
    },
    {
      text: "Six months from now, what's going to be your biggest problem?",
    },
    { text: 'What is your growth like?', factual: true },
    { text: "What's the conversion rate?", factual: true },
    { text: 'What makes new users try you?' },
    { text: 'Why do the reluctant users hold back?' },
    { text: 'What are the top things users want?' },
    {
      text: 'What has surprised you about user behaviour?',
    },
    { text: "What's an impressive thing you have done?" },
    { text: 'What do you understand about your users?' },
    { text: 'Why did you pick this idea to work on?' },
    { text: 'What domain expertise do you have?' },
    { text: 'Who are your competitors?' },
    { text: 'Who might become competitors?' },
    { text: 'What competition do you fear most?' },
    { text: 'What is your distribution strategy?' },
    { text: "What will you do if we don't fund you?" },
    { text: 'Are you open to changing your idea?' },
    { text: 'Tell us about a tough problem you solved?' },
    { text: 'In what ways are you resourceful?' },
    { text: "What's the worst thing that has happened?" },
    { text: "What's the biggest mistake you have made?" },
    { text: 'What is your burn rate?', factual: true },
    { text: 'How long can you go before funding?', factual: true },
    {
      text: 'What is the next step with the product evolution?',
    },
    { text: 'Who would be your next hire?' },
    {
      text: 'What will prevent others from becoming fast followers?',
    },
    {
      text: 'What barriers to entry are there for your business?',
    },
    { text: 'When will I get my money back?', factual: true },
    {
      text: 'How long does customer acquisition take?',
      factual: true,
    },
    {
      text: 'What is your customer retention strategy?',
    },
    { text: 'What is your key personnel risk?' },
    {
      text: 'What are the key drivers of business performance?',
    },
    {
      text: 'What change will you make to improve your business performance?',
    },
    {
      text: 'Why am I the right investor for your business?',
    },
    {
      text: 'How much are you raising, at what valuation, and what is the use of funds?',
      factual: true,
    },
  ];

  public static INVESTOR_TIPS = [
    'Try to answer using new language each time you answer the question.',
    'Try to have quick and concise answers.',
    'Try to answer in 2 to 3 sentences.',
    'Answer like you would in a conversation, this is not a presentation.',
    'When talking to a potential investor, be substantive, and get straight to the point.',
  ];

  public static INVESTOR_FACTUAL_TIPS = [
    'Know your numbers cold — hesitation signals uncertainty.',
    'Lead with the number, then give one sentence of context.',
    'Be precise and specific rather than vague or aspirational.',
    'When talking to a potential investor, be substantive, and get straight to the point.',
  ];

  public static CUSTOMER_QUESTIONS: QuestionEntry[] = [
    ...QuestionsData.SHARED_QUESTIONS,
    {
      text: 'What are the benefits that users are most excited about?',
    },
    {
      text: 'Have you attracted other customers in my industry?',
    },
    { text: 'How is your product reliable?' },
    { text: 'How do you keep my data secure?' },
    {
      text: 'Does your product integrate with other systems that customers use?',
    },
    { text: 'Does the product require user training?' },
    {
      text: 'How is pricing structured? Are there fees for support or upgrades?',
      factual: true,
    },
    {
      text: "Who is your main competitor and why shouldn't we go with their offer?",
    },
    { text: 'What have you learned from POCs?' },
    { text: 'What challenges/obstacles do you face?' },
    {
      text: 'Are there any challenges for customers to switch to your product?',
    },
    {
      text: 'What are the response times for customer issues or bug fixes?',
      factual: true,
    },
    { text: 'What new features will you build next?' },
    { text: 'How soon can we sign up?', factual: true },
    { text: 'Why should I buy your product/service?' },
    { text: 'Why do I need your product?' },
    {
      text: 'What changes to my current systems are required to accommodate your APIs and new business processes?',
    },
    {
      text: 'I need to simplify my business, what systems or processes will your product/service replace?',
    },
    {
      text: 'Why did you choose this specific technology?',
    },
    { text: 'What is the problem you are trying to solve?' },
    {
      text: 'Which of my current priorities do you think your product/service addresses?',
    },
    {
      text: 'Why do you think your product/service will work for a customer like me?',
    },
    {
      text: 'What does it cost me in internal time/resources to bring your product onstream?',
      factual: true,
    },
    {
      text: 'What sort of training and onboarding is required for my team before they can use your product?',
    },
  ];

  public static CUSTOMER_TIPS = [
    'Try to answer using new language each time you answer the question.',
    'Try to have quick and concise answers.',
    'Try to answer in 2 to 3 sentences.',
    'Answer like you would in a conversation, this is not a presentation.',
  ];

  public static CUSTOMER_FACTUAL_TIPS = [
    'Know your numbers cold — hesitation signals uncertainty.',
    'Lead with the number, then give one sentence of context.',
    'Be precise and specific rather than vague or aspirational.',
    'Answer like you would in a conversation, this is not a presentation.',
  ];
}
