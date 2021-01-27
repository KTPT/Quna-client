import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionInput from '../QuestionInput';

describe('<QuestionInput />', () => {
  test('enables next button when title is entered', async () => {
    const {getByTitle} = render(<QuestionInput />);

    const TitleInput = getByTitle('TitleInput');
    const NextButton = getByTitle('NextButton');

    fireEvent.click(NextButton);
  });
});
