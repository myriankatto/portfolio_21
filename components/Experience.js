import React, { useState, useEffect } from 'react';
import ExperienceStyles from '../styles/Experience.module.scss';
import { experiencesList } from '../utils/experience';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState('Newton');
  const [experienceDetail, setExperienceDetail] = useState({});

  const handleSelect = (e) => {
    setSelectedExperience(e.target.value);
  };

  useEffect(() => {
    const filtered = experiencesList.filter(
      (experience) => experience.title === selectedExperience
    );
    setExperienceDetail(filtered);
  }, [selectedExperience]);

  return (
    <div className={ExperienceStyles.container}>
      <h2>Experience</h2>
      <span>Work & Study</span>
      <div className={ExperienceStyles.content}>
        <div className={ExperienceStyles.list}>
          {experiencesList.map((experience) => {
            return (
              <button
                className={`${
                  selectedExperience === experience.title ? ExperienceStyles.active : ''
                }`}
                key={experience.id}
                value={experience.title}
                onClick={handleSelect}
              >
                {experience.title}
              </button>
            );
          })}
        </div>
        {experienceDetail.length > 0 && (
          <div className={ExperienceStyles.experience}>
            <span>
              {experienceDetail[0].jobtitle} @ {experienceDetail[0].title}
            </span>
            <p>{experienceDetail[0].date}</p>
            <ul>
              {experienceDetail[0].role.map((x) => {
                return <li key={x}>{x}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
