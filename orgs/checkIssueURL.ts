import { warn, danger } from "danger";

export const checkIssueURL = () => {
  const containsGithubURL = /https:\/\/github.com\/\S+/gi;
  const containsGithubIssue = /#\d+/gi;
  const body = danger.github.pr.body;

  if (!containsGithubURL.test(body) && !containsGithubIssue.test(body)) {
    warn("There is no issue url. Consider providing a link to a Github issue.");
  }
};
