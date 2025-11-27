import React, { useState } from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaRegCalendarCheck } from "react-icons/fa";

const ResearchItemWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.$imagePosition === 'right' ? 'row-reverse' : 'row'};
  gap: 2rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  align-items: flex-start;
  border-bottom: 1px solid #e2e8f0;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const CollapsibleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: 0.5rem 0;
`

const PlusButton = styled.button`
  background: none;
  border: none;
  font-size: 3rem;
  color: #3182ce;
  cursor: pointer;
  margin-left: 1rem;
  outline: none;
  transition: transform 0.2s;
  &:active {
    transform: scale(1.1);
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

const Title = styled.h4`
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

export default function ActivityItem({ title, period, image, imagePosition = 'left', children, opened = false }) {
  const [isOpen, setIsOpen] = useState(opened);
  const gatsbyImage = image && typeof image === 'object' ? getImage(image) : null;

  const handleToggle = () => setIsOpen(open => !open);

  return (
    <div>
      <CollapsibleHeader onClick={handleToggle}>
        <Title style={{ marginBottom: 0 }}>{title}</Title>
        <PlusButton
          aria-label={isOpen ? 'Collapse' : 'Expand'}
          onClick={e => { e.stopPropagation(); handleToggle(); }}
        >
          {isOpen ? '−' : '+'}
        </PlusButton>
      </CollapsibleHeader>
      {isOpen && (
        <ResearchItemWrapper $imagePosition={imagePosition}>
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
            {period && <Period><FaRegCalendarCheck /> {period}</Period>}
            <Content>{children}</Content>
          </ContentWrapper>
        </ResearchItemWrapper>
      )}
    </div>
  );
}
