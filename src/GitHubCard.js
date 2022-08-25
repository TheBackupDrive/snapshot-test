import React, { useEffect, useState } from 'react';
import './App.css'

export default function GitHubCard() {
    const [gitHubName, setGitHubName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [repos, setRepos] = useState('')
    
    useEffect(() => {
        
        fetch('https://api.github.com/users/TheBackupDrive')
        .then (res => res.json())
        .then(data => {
            setGitHubName(data?.name || data?.login)
            setAvatar(data?.avatar_url)
            setRepos(data?.public_repos)
        })
    }, [])
    
    return (
        <div className="App">
        <h1>Github Profile Info:</h1>
        <h2 title = "Git Hub Name">{gitHubName}</h2>
        <img src={avatar} title = "Avatar" alt = {`${gitHubName}'s Avatar`} />
        <h3 title = "Repos">Number of Repos {gitHubName} has made: {repos}</h3>
        </div>
    );

}