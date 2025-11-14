import * as React from "react"
import styled from "styled-components"
import { FaEnvelope, FaGlobe, FaGraduationCap, FaGithub } from "react-icons/fa"
import { SiOrcid, SiResearchgate, SiX } from "react-icons/si"

const TeamItem = ({
  name,
  email,
  role,
  position,
  academia,
  researchGate,
  website,
  orcid,
  image,
  github,
  x
}) => {
  return (
    <Card>
      {image && (
        <ImageContainer>
          <ProfileImage src={image} alt={name} />
        </ImageContainer>
      )}
      <CardBody>
        {role && <Role>{role}</Role>}
        <Name>{name}</Name>
        {position && <Position>{position}</Position>}

        <Links>
          {email && (
            <Link
              href={`mailto:${email}`}
              title="Email"
              aria-label={`Email ${name}`}
            >
              <FaEnvelope />
            </Link>
          )}
          {website && (
            <Link
              href={website}
              target="_blank"
              rel="noreferrer"
              title="Website"
              aria-label={`${name}'s website`}
            >
              <FaGlobe />
            </Link>
          )}
          {academia && (
            <Link
              href={academia}
              target="_blank"
              rel="noreferrer"
              title="Academia.edu"
              aria-label={`${name} on Academia.edu`}
            >
              <FaGraduationCap />
            </Link>
          )}
          {researchGate && (
            <Link
              href={researchGate}
              target="_blank"
              rel="noreferrer"
              title="ResearchGate"
              aria-label={`${name} on ResearchGate`}
            >
              <SiResearchgate />
            </Link>
          )}
          {orcid && (
            <Link
              href={orcid}
              target="_blank"
              rel="noreferrer"
              title="ORCID"
              aria-label={`${name} on ORCID`}
            >
              <SiOrcid />
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label={`${name} on GitHub`}
            >
              <FaGithub />
            </Link>
          )}
          {x && (
            <Link
              href={x}
              target="_blank"
              rel="noreferrer"
              title="X (Twitter)"
              aria-label={`${name} on X`}
            >
              <SiX />
            </Link>
          )}
        </Links>
      </CardBody>
    </Card>
  )
}

const Card = styled.div`
  background: #ffffff;
  border-radius: 1rem;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`

const Role = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 0.25rem;
  align-self: flex-start;
`

const Name = styled.h3`
  font-family: "Jost", "Futura", "Century Gothic", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.01em;
`

const Position = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
  font-weight: 500;
`

const Links = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid #e2e8f0;
`

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  background-color: #f1f5f9;
  color: #2563eb;
  font-size: 1.1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2563eb;
    color: #ffffff;
    transform: scale(1.1);
    opacity: 1;
  }
`

export default TeamItem
