from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import random
import pandas as pd
from difflib import SequenceMatcher

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load the CSV file
  # Update the path to your CSV file
qa_data = pd.read_csv('credit_score_info_full.csv')

# Convert the data into a dictionary for quick lookup
patterns_responses = dict(zip(qa_data['questions'], qa_data['answers']))

fallback_responses = [
    "I'm sorry, I didn't understand that. How can I assist you?",
    "I'm not sure I understand. Can you please rephrase that?"
]

def similar(a, b):
    return SequenceMatcher(None, a, b).ratio()

def respond(input_text):
    input_text = input_text.lower()
    max_similarity = 0
    best_match_response = random.choice(fallback_responses)
    for pattern, responses in patterns_responses.items():
        similarity = similar(input_text, pattern.lower())
        if similarity > max_similarity:
            max_similarity = similarity
            best_match_response = responses
    return best_match_response

# @app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data.get('message')
    response = respond(user_input)
    return jsonify({'response': response})

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     if request.method == 'POST':
#         question = request.form.get('question')
#         answer = respond(question)
#         return render_template('credit_bot_index.html', question=question, answer=answer)
#     return render_template('credit_bot_index.html')

# if __name__ == "__main__":
#     app.run(debug=True)
