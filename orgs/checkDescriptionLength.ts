import { warn, schedule, danger } from 'danger';

export const checkDescriptionLength = async () => {
    if (danger.github.pr.body.length < 10) {
        warn('The description is very short.');
    }
}
