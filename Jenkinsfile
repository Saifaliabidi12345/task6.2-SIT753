pipeline {
    agent any 

    stages {
        stage('Build') {
            steps {
                echo "Executing Build stage."
            }
        }
        
        stage('Unit and Integration Tests') {
            steps {
                echo "Executing Unit and Integration Tests. "
            }
            post {
                success {
                    emailext attachLog: true,
                    to: 'saifaliabidi@gmail.com',
                    subject: 'Unit and Integration Tests Status',
                    body: 'Tests completed successfully.'
                }
                failure {
                    emailext attachLog: true,
                    to: 'saifaliabidi@gmail.com',
                    subject: 'Unit and Integration Tests Status',
                    body: 'Unit and integration tests have failed.'
                }
            }
        }

        stage('Code Analysis') {
            steps {
                echo "Performing Code Analysis. "
            }
        }

        stage('Security Scan') {
            steps {
                echo "Executing Security Scan. "
            }
            post {
                success {
                    emailext attachLog: true,
                    to: 'saifaliabidi@gmail.com',
                    subject: 'Security Scan',
                    body: 'Security scan completed successfully.'
                }
                failure {
                    emailext attachLog: true,
                    to: 'saifaliabidi@gmail.com',
                    subject: 'Security Scan',
                    body: 'The security scan has failed.'
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo "Deploying to Staging Environment"
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo "Running Integration Tests on Staging. ."
            }
        }

        stage('Deploy to Production') {
            steps {
                echo "Deploying to Production Environment. ."
            }
        }
    }
}
