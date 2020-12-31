import React from 'react';
import styled from 'styled-components'

const MyImageContainer = styled.div`
  padding: .25em;  
`;


export const UserImage = () => {
  return (
    <MyImageContainer>
      <h3 align="left">Languages and Tools:</h3>
      <p align="left">
        <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg" alt="python" width="40" height="40" /> </a>
        <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> <img src="https://devicons.github.io/devicon/devicon.git/icons/django/django-original.svg" alt="django" width="40" height="40" /> </a>
        <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40" /> </a>
        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /> </a>
        <a href="https://cloud.google.com" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width="40" height="40" /> </a>
        <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40" /> </a>
        <a href="https://kubernetes.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="40" height="40" /> </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a>
        <a href="https://golang.org" target="_blank" rel="noreferrer"> <img src="https://devicons.github.io/devicon/devicon.git/icons/go/go-original.svg" alt="go" width="40" height="40" /> </a>
        <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://devicons.github.io/devicon/devicon.git/icons/linux/linux-original.svg" alt="linux" width="40" height="40" /> </a>
      </p>
    </MyImageContainer>
  );
}
