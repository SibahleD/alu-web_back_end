#!/usr/bin/env python3
"""
Main Flask application module.

This module serves HTML pages to users using Flask routes.
"""

from flask import Flask, render_template, request
from flask_babel import Babel


class Config(object):
    """
    Application configuration class
    """
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)

@babel.localeselector
def get_locale() -> str:
    """
    Gets locale from request object
    """
    return request.accept_languages.best_match(app.config['LANGUAGES'])

@app.route('/')
def index() -> str:
    """
    Renders a basic html template
    """
    return render_template('3-index.html')

if __name__ == '__main__':
    app.run()