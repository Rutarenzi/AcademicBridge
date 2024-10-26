# AcademicBridge


Distinct Triggers: Define distinct triggers for each workflow. For example, you might want CircleCI to run on every push to a certain branch while GitHub Actions runs on pull requests.

Example Use Case
Here’s a simple example scenario:

CircleCI could handle building and deploying a Node.js application whenever changes are pushed to the main branch.
GitHub Actions could run tests and linting on every pull request to ensure code quality before merging


"test:staged": "CI=true react-scripts test --o",