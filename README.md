# PR Commenter GitHub Action

This GitHub Action adds a comment to a pull request.

## 🚀 Usage

To use this action, add the following step in your GitHub workflow:

```yaml
- name: Add PR Comment
  uses: fadinassri/pr-comment-action@v2.0.0
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    comment: 'Hello, this is an automated comment!'
```

## 🔧 Inputs

| Name            | Description                      | Required |
|-----------------|----------------------------------|----------|
| `github-token`  | GitHub token for authentication  | ✅ Yes   |
| `comment`       | The comment to add to the PR     | ✅ Yes   |

---

## 🔥 Working Example

Here is a fully working minimal setup you can use:

```yaml
name: CI

on:
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write  # ✅ Required to add comments to PRs
      contents: read         # ✅ Allows reading repository contents
      issues: write          # ✅ (Optional) Helps if PRs are linked to issues

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4  # ✅ Ensures the workflow has the latest code

      - name: PR Simple Commenter
        uses: fadinassri/pr-comment-action@v2.0.0
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          comment: 'My first PR Test 🚀'
```

**📝 Note:** Ensure that the `permissions` section is correctly set in your workflow file. The action requires `pull-requests: write` and `contents: read` to function properly. Without these permissions, the action may fail to add a comment to the PR.

---

## 🛠 Troubleshooting

### ❌ Error: Resource not accessible by integration

This happens when using `GITHUB_TOKEN` in a PR from a **forked repo**.

### ✅ Solutions:

#### ✅ Option 1: Use a Personal Access Token (PAT)

If you receive the error above, use a **PAT** instead of `GITHUB_TOKEN`.

1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens**.
2. Generate a classic token with scopes:
   - `repo` (or `public_repo`)
   - `workflow`
3. Go to your repo → **Settings** → **Secrets and variables** → **Actions**.
4. Add a secret named: `PAT_TOKEN`

Then modify your workflow:

```yaml
- name: PR Simple Commenter
  uses: fadinassri/pr-comment-action@v2.0.0
  with:
    github-token: ${{ secrets.PAT_TOKEN }}
    comment: 'Hello from a secure token!'
```

#### ✅ Option 2: Enable Write Permissions for GITHUB_TOKEN

Go to your repo → **Settings** → **Actions** → **General**  
→ **Workflow permissions** → Select **Read and write permissions**

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

