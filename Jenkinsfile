pipeline {
  agent any
    
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/InBinaryWorld/TWWO_Jenkins'
      }
    }
     
    stage('Build database Image') {
      steps {
         sh 'docker build -t database-image ./diploma-project/db'
      }
    }  
     
    stage('Build backend image') {
      steps {
         sh 'docker build -t backend-image ./diploma-project/backend'
      }
    }  
     
    stage('Build frontend image') {
      steps {
         sh 'docker build -t frontend-image ./diploma-project/frontend'
      }
    }  
  }
}