'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var parameterize = require('parameterize');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
        'Welcome to the ' + chalk.red('generator-nbextension') + ' generator!'
    ));

    var prompts = [{
        name: 'extensionName',
        message: 'What is your extension\'s name ?'
    },{
        name: 'extensionLicense',
        message: 'What is your extension\'s license ?',
        default: 'TBD'
    }];

    this.prompt(prompts, function (props) {
      this.extensionName = props.extensionName;
      this.extensionParameterized = parameterize(props.extensionName);
      this.extensionLicense = props.extensionLicense;
      this.context = {
        name: this.extensionName,
        parameterized: this.extensionParameterized,
        license: this.extensionLicense
      }

      done();
    }.bind(this));
  },
  extension: function() {
    this.fs.copyTpl(
      this.templatePath('_extension'),
      this.destinationPath(this.context.parameterized),
      this.context
    );
  },
  condaRecipe: function() {
    this.fs.copyTpl(
      this.templatePath('conda.recipe'),
      this.destinationPath('conda.recipe/'),
      this.context
    );
  },
  binstar: function() {
    this.fs.copyTpl(
      this.templatePath('_binstar.yml'),
      this.destinationPath('.binstar.yml'),
      this.context
    );
  },
  gitignore: function() {
    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'),
      this.context
    );
  },
  environment: function() {
    this.fs.copyTpl(
      this.templatePath('environment.yml'),
      this.destinationPath('environment.yml'),
      this.context
    );
  },
  readme: function() {
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.context
    );
  },
  setup: function() {
    this.fs.copyTpl(
      this.templatePath('setup.py'),
      this.destinationPath('setup.py'),
      this.context
    );
  },
});
