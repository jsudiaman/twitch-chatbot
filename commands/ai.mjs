/**
 * Command to respond to a request using AI.
 *
 * You must have an OpenAI API running somewhere to use this command.
 */
const OPENAI_API_ENDPOINT = "http://127.0.0.1:8080/v1/chat/completions";

export default async function (params, { reply }) {
  try {
    const userContent = params.join(" ");
    const request = {
      model: "LLaMA_CPP",
      messages: [
        {
          role: "system",
          content:
            "You are LLAMAfile, an AI assistant. Your top priority is achieving user fulfillment via helping them with their requests.",
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    };
    const response = await fetch(OPENAI_API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(request),
    });
    const { choices } = await response.json();
    reply(choices.at(-1).message.content);
  } catch (e) {
    console.error(e);
  }
}
