import { message, warn, danger, markdown } from "danger"

export default async () => {
    const gh = danger.github as any;
    const repo = gh.repository;
    const issue = gh.issue;

    console.log('Dealing with an issue here', { issue });
    message("Hi!");
    warn('Uh-oh, that is not good');
    markdown('# This does not work, does it?');

    await danger.github.api.issues.addLabels({
        owner: repo.owner.login,
        repo: repo.name,
        number: issue.number,
        labels: ["good first issue"]
    });
}
