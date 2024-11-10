const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  export const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;

  console.log(apiKey)
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const modelPromise = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  // Function to initialize a chat session
  export const initializeAiChatSession = async () => {
    const model = await modelPromise;
    return model.startChat({
      generationConfig,
      history: [],
    });
  };



