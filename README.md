# PR Commenter GitHub Action

This GitHub Action automatically adds a comment to a pull request.

## 🚀 Usage

To use this action in your workflow, add the following step to your `.github/workflows/workflow.yml` file:

```yaml
- name: Add PR Comment
  uses: your-github-username/pr-comment-action@v1
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    comment: 'Hello, this is an automated comment!'
```

---

## 📥 Inputs

| Name          | Description                      | Required |
|--------------|----------------------------------|----------|
| `github-token` | GitHub token for authentication | ✅ Yes |
| `comment`    | The comment to add to the PR    | ✅ Yes |

---

## 📤 Outputs

This action does not produce any outputs. It simply adds a comment to a pull request.

---

## 🔧 Example Workflow

Here’s an example of a full GitHub Actions workflow file:

```yaml
name: PR Commenter

on:
  pull_request:
    types: [opened]

jobs:
  comment:
    runs-on: ubuntu-latest
    steps:
      - name: Add PR Comment
        uses: fadinassri/pr-comment-action@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          comment: 'Thanks for opening this PR! 🎉'
```

---

## 🛠 Setup & Development

1. Clone the repository:
   ```sh
   git clone https://github.com/your-github-username/pr-comment-action.git
   cd pr-comment-action
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Build the project:
   ```sh
   npm run build
   ```

4. Push changes:
   ```sh
   git add .
   git commit -m "Your message"
   git push origin main
   ```

---

## 📦 Publishing to GitHub Marketplace

To publish this action to the GitHub Marketplace:

1. **Tag a new release**  
   ```sh
   git tag -a v1.0.0 -m "First release"
   git push origin v1.0.0
   ```
2. **Go to GitHub and create a release**  
   - Navigate to your repository.
   - Click **Releases** > **Draft a new release**.
   - Use `v1.0.0` as the tag name.
   - Click **Publish Release**.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## ⭐ Acknowledgments

- Built using [GitHub Actions](https://github.com/features/actions).
- Uses [`@actions/core`](https://www.npmjs.com/package/@actions/core) and [`@actions/github`](https://www.npmjs.com/package/@actions/github).

