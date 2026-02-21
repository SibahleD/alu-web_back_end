#!/usr/bin/env python3
from flask import Flask, render_template
'''
Main script serving HTML pages to users
'''
app = Flask(__name__)

@app.route('/')
def index():
    # Serves the html to user
    return render_template('0-index.html')

if __name__ == '__main__':
    app.run(debug=True)
