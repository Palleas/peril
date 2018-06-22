jest.mock("danger", () => jest.fn());
import * as danger from "danger";
const dm = danger as any;

import {checkDescriptionLength} from '../orgs/checkDescriptionLength'

test('checks for the length of the pull-request\'s description', () => {
    dm.warn = jest.fn();
    dm.danger = {
        github: {
        pr: {
            body: 'boop'
        }
    }
    };

    return checkDescriptionLength().then(() => {
        expect(dm.warn).toHaveBeenCalledWith('The description is very short.')
    })
});
