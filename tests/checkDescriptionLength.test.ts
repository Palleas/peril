jest.mock("danger", () => jest.fn());
import * as danger from "danger";
const dm = danger as any;

import {checkDescriptionLength} from '../orgs/checkDescriptionLength'

it('emits a warning when the length of the pull-request is too small', () => {
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

it('does not say anything when the body of the pr is big enough', () => {
    dm.warn = jest.fn();

    dm.danger = {
        github: {
        pr: {
            body: 'This pull request fixes a bug that we had with the thing that does something important.'
        }
    }
    };

    return checkDescriptionLength().then(() => {
        expect(dm.warn).not.toHaveBeenCalled();
    })
});
