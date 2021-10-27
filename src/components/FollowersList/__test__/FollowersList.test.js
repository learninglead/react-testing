import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

/*
  Mock does not work as expected so I made change in : node_modules\react-scripts\scripts\utils\createJestConfig.js
  I changed in config variable I set {resetMocks: false} because it reset mocks every time and I do not want that 
  because it causes test fail.
*/

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('FollowersList', () => {
  it('should fetch and render input element', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId(`follower-item-0`);
    expect(followerDivElement).toBeInTheDocument();
  });
  // it('should fetch and render input element', async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElement = await screen.findByTestId(`follower-item-0`);
  //   expect(followerDivElement).toBeInTheDocument();
  // });
});
