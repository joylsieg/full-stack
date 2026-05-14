// Constants
const GITHUB_API = 'https://api.github.com';

// DOM Elements
const searchForm = document.getElementById('search-form');
const usernameInput = document.getElementById('username-input');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const profileEl = document.getElementById('profile');
const reposEl = document.getElementById('repos');
const reposList = document.getElementById('repos-list');

// State
let currentUser = null;

// Show/hide UI states
function showLoading() {
    loadingEl.classList.remove('hidden');
    errorEl.classList.add('hidden');
    profileEl.classList.add('hidden');
    reposEl.classList.add('hidden');
}

function showError(message) {
    loadingEl.classList.add('hidden');
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
}

function showProfile(user) {
    loadingEl.classList.add('hidden');
    errorEl.classList.add('hidden');
    profileEl.classList.remove('hidden');
    reposEl.classList.remove('hidden');
    
    // Build profile HTML
    profileEl.innerHTML = `
        <div class="profile-header">
            <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
            <div class="profile-info">
                <h2>${user.name || user.login}</h2>
                <a href="${user.html_url}" target="_blank" rel="noopener noreferrer">
                    @${user.login}
                </a>
                ${user.bio ? `<p>${user.bio}</p>` : ''}
            </div>
        </div>
        <div class="profile-stats">
            <div class="stat">
                <span class="stat-number">${user.public_repos}</span>
                <span class="stat-label">Repos</span>
            </div>
            <div class="stat">
                <span class="stat-number">${user.followers}</span>
                <span class="stat-label">Followers</span>
            </div>
            <div class="stat">
                <span class="stat-number">${user.following}</span>
                <span class="stat-label">Following</span>
            </div>
        </div>
        ${user.company ? `<p>🏢 ${user.company}</p>` : ''}
        ${user.location ? `<p>📍 ${user.location}</p>` : ''}
        ${user.blog ? `<p>🔗 <a href="${user.blog}" target="_blank">${user.blog}</a></p>` : ''}
    `;
}

function showRepos(repos) {
    reposList.innerHTML = repos.map(repo => `
        <div class="repo-card">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                <h3>${repo.name}</h3>
            </a>
            ${repo.description ? `<p>${repo.description}</p>` : ''}
            <div class="repo-meta">
                ${repo.language ? `<span class="language">● ${repo.language}</span>` : ''}
                <span>⭐ ${repo.stargazers_count}</span>
                <span>🍴 ${repo.forks_count}</span>
            </div>
        </div>
    `).join('');
}

// Fetch user data from GitHub API
async function fetchUser(username) {
    const response = await fetch(`${GITHUB_API}/users/${username}`);
    
    if (response.status === 404) {
        throw new Error('User not found');
    }
    
    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return response.json();
}

// Fetch user repos from GitHub API
async function fetchRepos(username) {
    const response = await fetch(
        `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=10`
    );
    
    if (!response.ok) {
        throw new Error(`Failed to fetch repos: ${response.status}`);
    }
    
    return response.json();
}

// Handle search
searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = usernameInput.value.trim();
    if (!username) return;
    
    showLoading();
    
    try {
        // Fetch user and repos IN PARALLEL (faster!)
        const [user, repos] = await Promise.all([
            fetchUser(username),
            fetchRepos(username)
        ]);
        
        currentUser = user;
        showProfile(user);
        showRepos(repos);
        
    } catch (error) {
        showError(error.message);
    }
});