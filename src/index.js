const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        const token = core.getInput('github-token');
        const comment = core.getInput('comment');
        
        const octokit = github.getOctokit(token);
        const context = github.context;

        if (!context.payload.pull_request) {
            core.setFailed('This action can only be run on pull requests.');
            return;
        }

        const { owner, repo } = context.repo;
        const issue_number = context.payload.pull_request.number;

        await octokit.rest.issues.createComment({
            owner,
            repo,
            issue_number,
            body: comment
        });

        console.log('Comment added successfully');
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
