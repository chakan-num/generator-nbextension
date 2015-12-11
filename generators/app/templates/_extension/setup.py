from nbsetuptools import setup
from os.path import abspath, dirname, join


setup(
    name="<%= parameterized %>",
    version="0.1.0",
    static=join(abspath(dirname(__file__)), 'static')
)
