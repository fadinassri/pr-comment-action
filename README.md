# PR Commenter GitHub Action

This action adds a comment to a pull request.

## Usage

```yaml
- name: Add PR Comment
  uses: your-github-username/pr-comment-action@v1
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    comment: 'Hello, this is an automated comment!'
