pipeline {
  agent any

  environment {
    DOCKER_HOST = "unix:///var/run/docker.sock"
  }

  stages {
    stage('Build & Deploy') {
      steps {
        // Assumes docker-compose.yml is at project root
        sh 'docker compose up --build -d'
      }
    }

    stage('Verify Containers') {
      steps {
        sh 'docker ps'
      }
    }
  }

  post {
    always {
      echo "✅ Frontend: http://localhost:8081"
      echo "✅ Backend:  http://localhost:3000"
      echo "✅ Database: Running on postgres:5432 inside the container"
    }
  }
}
