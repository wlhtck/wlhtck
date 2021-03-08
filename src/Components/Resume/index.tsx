import React, { FC } from 'react';
import styled from 'styled-components';
import Experience from './Experience';
import { Resume, H1, HeaderCol, MainCol, SkillHeader } from './styles.css';
import { Row, Column } from '../styles.css';
import { ExperienceType } from '../../../types/experience';
import { SkillType } from '../../../types/skill';

const Image = styled.img`
  width: 100%;
`;

interface ResumeContainerProps {
  skills: SkillType[];
  skillmessage: string;
  experience: {
    header: string;
    items: ExperienceType[];
  }[];
}

const ResumeContainer: FC<ResumeContainerProps> = ({ skills, skillmessage, experience }) => (
  <Resume id="resume">
    {experience.map(({ header, items }) => (
      <Experience
        key={header}
        header={header}
        items={items}
      />
    ))}

    <Row>
      <HeaderCol width={3 / 12}>
        <H1>Skills</H1>
      </HeaderCol>

      <MainCol width={9 / 12}>
        <p>{skillmessage}</p>
        <Row>
          {skills.map(({ name, image }) => (
            <Column key={name} width={3 / 12} justify="flex-end">
              <Image src={`images/${image}`} alt={name} />
              <SkillHeader>{name}</SkillHeader>
            </Column>
          ))}
        </Row>
      </MainCol>
    </Row>
  </Resume>
);

export default ResumeContainer;
