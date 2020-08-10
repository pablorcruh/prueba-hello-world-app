pipeline {
  agent { label 'master' }
  options {
    buildDiscarder(logRotator(numToKeepStr: '1', artifactNumToKeepStr: '1', daysToKeepStr: '5'))
  }
  stages {
    stage ('build') {
      when { branch 'master' }
      steps {
        echo "hola mundo"
      }
    }
  }
}