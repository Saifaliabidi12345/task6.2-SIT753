pipeline {
    agent any 

    stages {
        stage('Build') {
            steps {
                sh 'mvn clean install'
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Code Analysis') {
            steps {
                sh 'mvn sonar:sonar'
            }
        }
        stage('Security Scan') {
            steps {
                sh 'dependency-check.sh --project MyProject --scan ./src'
            }
        }
        stage('Deploy to Staging') {
            steps {
                sh 'ssh saifaliabidi@127.0.0.1 "cd /path/to/app && git pull && ./deploy.sh"'
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                sh 'ssh saifaliabidi@127.0.0.1 "./run_integration_tests.sh"'
            }
        }
        stage('Deploy to Production') {
            steps {
                sh 'ssh user@production-server "cd /path/to/app && git pull && ./deploy.sh"'
            }
        }
    }

    post {
        failure {
            emailext body: 'Pipeline failed. Please check.', to: 'saifaliabidi@gmail.com', subject: 'Pipeline Failure'
        }
    }
}
