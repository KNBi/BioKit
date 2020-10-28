from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/', methods=["GET"])
def example_server_response():
    response = jsonify(response="Hello World!")
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__ == "__main__":
    app.run(debug=True)