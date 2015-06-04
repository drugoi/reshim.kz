module.exports = {
  prod: {
    files: [{
      expand: true,
      cwd: 'app/',
      src: ['fonts/**', 'bower/**'],
      dest: 'dist/'
    }]
  }
};