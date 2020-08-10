pipeline {
  agent { label 'master' }
  options {
    buildDiscarder(logRotator(numToKeepStr: '1', artifactNumToKeepStr: '1', daysToKeepStr: '5'))
  }
  stages {
    stage ('build') {
      agent {
        docker {
          image 'node:14.7.0-alpine3.12'
        }
      }
      when { branch 'master' }
      steps {
        echo "hola mundo"
      }
    }
  }
}