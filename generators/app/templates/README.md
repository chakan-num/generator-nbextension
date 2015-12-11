# <%= name %>

## Develop

```
conda install notebook nbsetuptools -c anaconda-notebook
python setup.py develop
cd <%= name %>
python setup.py install --prefix $CONDA_ENV_PATH --enable --symlink
```

Now you are ready to start testing with:

```
JUPYTER_CONFIG_DIR=$CONDA_ENV_PATH/etc/jupyter jupyter notebook
```

## Distribution

Once you are happy with your extension you can run:

```
conda build conda.recipe -c anaconda-notebbok
```

And upload your package to [Anaconda-Cloud](http://anaconda.org). So everybody can
have access to your brand new extension.

> Generated with [generator-nbextension](http://anaconda.org).
