import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

beforeEach(() => {
  fetch.resetMocks()
});

test('renders github snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
});

test('Populates the user profile', async () =>{
  const EXPECTED_NAME = null
  const EXPECTED_LOGIN = "TheBackupDrive"
  const EXPECTED_AVATAR = "My avatar url"
  const EXPECTED_REPOS = 35

  fetch.mockResponseOnce(JSON.stringify({
    name: "",
    avatar_url: "",
    login: "",
    public_repos: ""
    }));

  
  render (<App />)
  
  const name = screen.getByTitle("Git Hub Name")
  const avatar = screen.getByTitle("Avatar")
  const repos = screen.getByTitle("Repos")
  
  expect(name).toBeInTheDocument();
  expect(avatar).toBeInTheDocument()
  expect(repos).toBeInTheDocument()
})