import React from 'react';

import { LaterArticles } from './LatestArticles';
import { UserImage } from './UserImage';


import styled from 'styled-components'

const DescriptionContainer = styled.div`
    line-height: 25px;
    border: 3px solid #000;
    padding: .5em;

`

export const Description = () => {
    return (
        <DescriptionContainer>
            <section>
                <h1>Hi 👋, I'm Ahmed Taweel. Call me Taweel.</h1>
                <h3>A product-driven software engineer with more than 5 years of experience working with national and international remote and in-office agile teams building B2C/B2B products.</h3>

                <p>- 🔭 I’m currently working as a backend Software Engineer at <a href="https://www.deliveryhero.com" target="_blank" rel="noreferrer">Delivery Hero</a></p>

                <p>- 🌱 I’m currently learning <b>React</b>. Also I am reading about <b>Product Management, Psychology, History and self-development</b>.</p>

                <p>- 📝 I casually write articles in <a href="https://dev.to/ahmedeltaweel" target="_blank" rel="noreferrer">dev.to</a></p>

                <p>- 📷 Sometimes, I share my thoughts using videos on <a href="https://www.youtube.com/c/ahmedeltaweel2" target="_blank" rel="noreferrer">youtube</a></p>

                <p>- 💬 Ask me about anything backend especially in <b>Python, Django, Flask, Bash, PostgresSql, Docker, gRPC, REST, ElasticSearch, Celery, Pub/Sub, CI/CD.</b></p>

                <p>- 📫 How to reach me: <b>ahmed.m.eltaweel@outlook.com</b></p>

                <p>- 📄 Know about my experiences on <a href="https://www.linkedin.com/in/ahmedeltaweel/" target="_blank" rel="noreferrer">LinkedIn</a></p>

                <p>- 🤝 Work with me guide can be found <a href='https://github.com/ahmedeltaweel/work-with-me-guide' target="_blank" rel="noreferrer">here</a></p>

                <p>- ⚡ Fun fact <b>"I do not drink anything sugary yet, I am a big desserts fan."</b></p>
            </section>

            <UserImage />
            <LaterArticles />
        </DescriptionContainer>
    );
}
