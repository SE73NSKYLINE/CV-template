import { forwardRef } from 'react';
import { useCV } from '../../contexts/CVContext';

import Header from './Header';
import Education from './Education';
import Awards from './Awards';
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';


import classes from './CVPreview.module.css';

const CVPreview = forwardRef((props, ref) => {
  const { generalInfo, skills, education, experience, awards } = useCV();

  return (
    <section className={classes['cv-preview']} ref={ref}>
      <Header info={generalInfo} />
      <hr />
      <main className={classes.main}>
        <div className={classes['main-left']}>
          <Education education={education} />
          <Awards awards={awards} />
        </div>
        <div className={classes['main-right']}>
          <GeneralInfo generalInfo={generalInfo} />
          <Experience experience={experience} />
        </div>
      </main>
    </section>
  );
});

export default CVPreview;
