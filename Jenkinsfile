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
         sh 'docker build -t inbinaryworld/database:latest ./diploma-project/db'
      }
    }  
     
    stage('Build backend image') {
      steps {
         sh 'docker build -t inbinaryworld/backend-image:latest ./diploma-project/backend'
      }
    }  
     
    stage('Build frontend image') {
      steps {
         sh 'docker build -t inbinaryworld/frontend-image:latest ./diploma-project/frontend'
      }
    }
	
    stage('Push images') {
      steps {
         sh 'docker push inbinaryworld/database:latest'
         sh 'docker push inbinaryworld/backend-image:latest'
         sh 'docker push inbinaryworld/frontend-image:latest'
      }
    }  
  }
}