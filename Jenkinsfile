pipeline {
    agent any
    environment {
        DIGITALOCEAN_ACCESS_TOKEN = credentials('do-api-token')
    }
    stages {
        stage('Install') {
            steps {
                bat 'doctl.exe sls install'
            }
        }
        stage('Connect') {
            steps {
                bat 'doctl.exe sls connect'
            }
        }
        stage('Deploy') {
            steps {
                bat 'doctl.exe sls deploy .'
            }
        }
        stage('Get URL for hello') {
            steps {
                script {
                    def url = bat(script: 'doctl.exe sls fn get sample/hello --url', returnStatus: true).trim()
                    bat "curl $url?name=Jenkins"
                }
            }
        }
        stage('Get URL for goodbye') {
            steps {
                script {
                    def url = bat(script: 'doctl.exe sls fn get sample/goodbye --url', returnStatus: true).trim()
                    bat "curl $url?name=Jenkins"
                }
            }
        }
    }
    post {
        always {
            bat 'doctl.exe sls uninstall'
        }
    }
}
