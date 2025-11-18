import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ResearchItemWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.imagePosition === 'right' ? 'row-reverse' : 'row'};
  gap: 2rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  align-items: flex-start;
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  flex: 0 0 300px;
  
  @media (max-width: 768px) {
    flex: 1 1 100%;
    width: 100%;
  }

  .gatsby-image-wrapper,
  img {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

const ContentWrapper = styled.div`
  flex: 1;
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
`

const Period = styled.p`
  font-style: italic;
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`

const Content = styled.div`
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`

export default function ActivityItem({ title, period, image, imagePosition = 'left', children }) {
  // Try to get GatsbyImage if image is an object
  const gatsbyImage = image && typeof image === 'object' ? getImage(image) : null
  
  return (
    <ResearchItemWrapper imagePosition={imagePosition}>
      {image && (
        <ImageWrapper>
          {gatsbyImage ? (
            <GatsbyImage image={gatsbyImage} alt={title} />
          ) : typeof image === 'string' ? (
            <img src={image} alt={title} />
          ) : null}
        </ImageWrapper>
      )}
      <ContentWrapper>
        <Title>{title}</Title>
        {period && <Period>🗓️ {period}</Period>}
        <Content>{children}</Content>
      </ContentWrapper>
    </ResearchItemWrapper>
  )
}
