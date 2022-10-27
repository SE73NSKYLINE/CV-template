import { useState } from 'react';
import { useCV, useCVDispatch } from '../../contexts/CVContext';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import InputFieldsWrapper from '../UI/InputFieldsWrapper';
import Icon from '../UI/Icon';
import Award from './Award';

const Awards = () => {
  const { awards } = useCV();
  const dispatch = useCVDispatch();
  const [isShown, setIsShown] = useState(false);

  const awardsList = awards.map((award) => (
    <Award award={award} key={award.id} />
  ));

  const handleAddNewAward = () => {
    dispatch({
      type: 'ADD_AWARD',
    });
  };

  const handleToggleSection = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

  return (
    <div>
      <SectionHeader
        text="Awards"
        onToggleSection={handleToggleSection}
        isShown={isShown}
      />
      {isShown && (
        <SectionWrapper>
          <Icon
            iconName="plus"
            onClick={handleAddNewAward}
            size="lg"
            className="dark"
            link={true}
          />
          <InputFieldsWrapper>{awardsList}</InputFieldsWrapper>
        </SectionWrapper>
      )}
    </div>
  );
};

export default Awards;
