import React, { FC } from 'react';
import { BulletSpan, Date, Section, HeaderCol, H1, MainCol } from './styles.css';
import { ExperienceType } from '../../../types/experience';

const Bullet = () => <BulletSpan>&bull;</BulletSpan>;


interface ExperienceProps {
  header: string;
  items: ExperienceType[];
}

const Experience: FC<ExperienceProps> = ({ header, items }) => (
  <Section>
    <HeaderCol width={3 / 12}>
      <H1>{header}</H1>
    </HeaderCol>
    <MainCol width={9 / 12}>
      {items.map(({ place, description, years, focus }) => (
        <div key={place}>
          <h3>{place}</h3>
          <p>{focus}<Bullet /><Date>{years}</Date></p>
          <p>{description}</p>
        </div>
      ))}
    </MainCol>
  </Section>
);

export default Experience;
