import { message, warn, danger, markdown } from "danger"

export default async () => {
    const issue = danger.github.issue;
    console.log('Dealing with an issue here', { issue });
    message("Hi!");
    warn('Uh-oh, that is not good');
    markdown('# This does not work, does it?');
}
