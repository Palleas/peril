import { message, danger } from "danger"

export default async () => {
    const issue = danger.github.issue;
    console.log('Dealing with an issue here', { issue });
    message("Hi!");
}