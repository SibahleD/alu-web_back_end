#!/usr/bin/env python3
"""
Main Flask application module.

This module serves HTML pages to users using Flask routes.
"""

from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    """
    Render the home page.

    Returns:
        str: Rendered HTML template for the home page.
    """
    # Serves the html to user
    return render_template('0-index.html')


if __name__ == '__main__':
    app.run(debug=True)