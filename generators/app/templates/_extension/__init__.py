import os
from notebook.utils import url_path_join
from .nbextension.handlers import HelloWorldHandler


def _jupyter_server_extension_paths():
    return [dict(module="<%= parameterized %>")]


def _jupyter_nbextension_paths():
    return [
        dict(
            section="notebook",
            src=os.path.join("static"),
            dest="<%= parameterized %>",
            require="<%= parameterized %>/main"),
        dict(
            section="tree",
            src=os.path.join("static"),
            dest="<%= parameterized %>",
            require="<%= parameterized %>/tree"),
        dict(
            section="edit",
            src=os.path.join("static"),
            dest="<%= parameterized %>",
            require="<%= parameterized %>/edit")
    ]


def load_jupyter_server_extension(nb_app):
    """Load the <%= parameterized %> client extension"""
    web_app = nb_app.web_app
    host_pattern = '.*$'
    route_pattern = url_path_join(web_app.settings['base_url'], '/hello')
    web_app.add_handlers(host_pattern, [(route_pattern, HelloWorldHandler)])
