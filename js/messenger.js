const githubUrlRegex = /https:\/\/github\.com/;
// const githubUrlRegex = /https:\/\/github\.com\/.*\/pull\/.*\/files/;
const gitlabUrlRegex = /https:\/\/gitlab\.com/;
// const gitlabUrlRegex = /https:\/\/gitlab\.com\/.*\/merge_requests\/.*\/diffs/;

if (githubUrlRegex.test(window.location.href)) {
    console.log('send github message');
    chrome.runtime.sendMessage({ onGithub: true });
}

if (gitlabUrlRegex.test(window.location.href)) {
    chrome.runtime.sendMessage({ onGitlab: true });
}