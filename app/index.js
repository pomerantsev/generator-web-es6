var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  prompting: {
    promptName: function () {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'projectName',
        message: 'Your project name'
      }, function (answers) {
        this.projectName = answers.projectName;
        done();
      }.bind(this));
    }
  },
  configuring: {
    copyFiles: function () {
      this.template('_package.json', 'package.json', {
        projectName: this.projectName
      });
      this.template('_bower.json', 'bower.json', {
        projectName: this.projectName
      });
      this.copy('_gulpfile.js', 'gulpfile.js');
      this.copy('_.gitignore', '.gitignore');
      this.copy('_.jshintrc', '.jshintrc');

      this.mkdir('src');
      this.template('src/_index.html', 'src/index.html', {
        projectName: this.projectName
      });
      this.mkdir('src/styles');
      this.copy('src/styles/_main.scss', 'src/styles/main.scss');
      this.copy('src/styles/__common.scss', 'src/styles/_common.scss');
      this.mkdir('src/scripts');
      this.copy('src/scripts/_script.js', 'src/scripts/script.js');
    }
  },
  install: function () {
    this.installDependencies();
  }
});
