import random
import re
from difflib import SequenceMatcher

# Define patterns and responses for the cake ordering chatbot
patterns_responses = {
    "hi":["Hello, How can I help you?"],
    "What is a credit score?": ["A credit score is a numerical representation of your creditworthiness, based on your credit history."],
    "How is a credit score calculated?":["A credit score is calculated based on factors such as payment history, amounts owed, length of credit history, new credit, and types of credit used."],
    "What is a good credit score?":["A good credit score typically ranges from 670 to 739, but this can vary depending on the scoring model."],
    "Why is my credit score important?":["Your credit score affects your ability to get loans, credit cards, and can influence the interest rates you receive."],
    "How can I improve my credit score?":["Pay your bills on time, reduce your debt, avoid opening too many new accounts, and check your credit report for errors."],
    "How long does it take to improve a credit score?":["The time it takes to improve a credit score can vary, but significant improvements typically take several months of consistent positive credit behavior."],
    "Does checking my credit score hurt it?":["Checking your own credit score is considered a soft inquiry and does not hurt your score."],
    "What information is on a credit report?":["A credit report includes personal information, credit accounts, credit inquiries, and public records such as bankruptcies."],
}

# Fallback response for unmatched input
fallback_responses = [
    "I'm sorry, I didn't understand that. How can I assist you?",
    "I'm not sure I understand. Can you please rephrase that?"
]

# Function to calculate similarity between two strings using SequenceMatcher
def similar(a, b):
    return SequenceMatcher(None, a, b).ratio()

# Function to generate response
def respond(input_text):
    input_text = input_text.lower()
    max_similarity = 0
    best_match_response = random.choice(fallback_responses)
    for pattern, responses in patterns_responses.items():
        similarity = similar(input_text, pattern)
        if similarity > max_similarity:
            max_similarity = similarity
            best_match_response = random.choice(responses)
    return best_match_response

# Main function for interacting with the cake ordering chatbot
def chat():
    print("How can I help you?")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "quit":
            print("Thank you!")
            break
        response = respond(user_input)
        print("Bot :", response)

# Run the chatbot
if __name__ == "__main__":
    chat()
