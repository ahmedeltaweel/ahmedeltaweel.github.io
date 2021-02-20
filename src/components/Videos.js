import React from 'react';

import styled from 'styled-components'



const LaterVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
`

const VideoContainer = styled.div`
  
`

const vidoeWidth = window.innerWidth > 420 ? 530 :  window.innerWidth - 50

export const LatestVideos = () => {
    const videos = [
        {
            title: 'DEVOPS',
            link: 'https://www.youtube.com/embed/uQOeKDBm0mU'
        },
        {
            title: 'CELERY',
            link: 'https://www.youtube.com/embed/dRSDEkByRd8'
        },
        {
            title: 'N-Queen',
            link: 'https://www.youtube.com/embed/wP3Jq8qffUs'
        },
        {
            title: 'FlOODFIll',
            link: 'https://www.youtube.com/embed/Gk0ldQBQY4w'
        },
    ]
    return (
        <>
            <h3>Latest Videos:</h3>
            <LaterVideosContainer>
                {
                    videos.map((item) => {
                        return (
                            <VideoContainer key={item.pubDate}>
                                <iframe title={item.title} width={vidoeWidth} height="300" src={item.link} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </VideoContainer>
                        )
                    })
                }
            </LaterVideosContainer>
        </>
    );
}
