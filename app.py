from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "12x12の掛け算表APIへようこそ！"

@app.route('/api/times-table')
def times_table():
    grid = [[i * j for j in range(1, 13)] for i in range(1, 13)]
    return jsonify(grid)

if __name__ == '__main__':
    app.run(debug=True)
