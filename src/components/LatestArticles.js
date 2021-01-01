import React, { useEffect, useState } from 'react';

import styled from 'styled-components'

const LaterArticlesContainer = styled.div`
    line-height: 25px;
    padding: .25em;
`

const ArticleLink = styled.a`
    margin-left: 15px;
    font-size: large;
   
`
const ArticleContainer = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap:  nowrap;
  justify-content: space-between;
  margin: auto;
   
`

export const LaterArticles = () => {
    const RSS_URL = 'https://dev.to/feed/ahmedeltaweel';

    const [articles, setArticles] = useState(0);

    useEffect(() => {
        fetch(RSS_URL)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
                const items = data.querySelectorAll("item");
                const articles = [];
                items.forEach(el => {
                    articles.push({
                        title: el.querySelector("title").innerHTML,
                        pubDate: new Date(el.querySelector("pubDate").innerHTML),
                        link: el.querySelector("link").innerHTML,
                    })
                });
                setArticles(articles);
            });
    }, []);

    return (
        <LaterArticlesContainer>
            <h3>Latest Articles:</h3>
            {
                !articles ? 'loading ...' :
                    articles.map((item) => {
                        return (
                            <ArticleContainer>
                                <h4>
                                    <b>{item.pubDate.toISOString().substr(0, 10)}</b>
                                    <ArticleLink href={item.link} target="_blank" rel="noreferrer">{item.title}</ArticleLink>
                                </h4>
                            </ArticleContainer>
                        )
                    })
            }
        </LaterArticlesContainer>
    );
}
