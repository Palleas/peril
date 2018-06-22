jest.mock("danger", () => jest.fn());
import * as danger from "danger";
const dm = danger as any;

import { checkIssueURL } from "../orgs/checkIssueURL";

it("emits a warning when there is no Github Issue", () => {
  dm.warn = jest.fn();

  dm.danger = {
    github: {
      pr: {
        body: "boop"
      }
    }
  };

  checkIssueURL();
  expect(dm.warn).toHaveBeenCalledWith(
    "There is no issue url. Consider providing a link to a Github issue."
  );
});

it("emits a warning when there is no Github Issue number", () => {
  dm.warn = jest.fn();

  dm.danger = {
    github: {
      pr: {
        body: "boop"
      }
    }
  };

  checkIssueURL();
  expect(dm.warn).toHaveBeenCalledWith(
    "There is no issue url. Consider providing a link to a Github issue."
  );
});

it("does not emit a warning when there is a Github Issue number", () => {
  dm.warn = jest.fn();

  dm.danger = {
    github: {
      pr: {
        body: "closes https://github.com/acme/repo#44"
      }
    }
  };

  checkIssueURL();
  expect(dm.warn).not.toHaveBeenCalled();
});

it("does not emit a warning when there is a Github Issue url", () => {
  dm.warn = jest.fn();

  dm.danger = {
    github: {
      pr: {
        body: "Closes #44."
      }
    }
  };

  checkIssueURL();
  expect(dm.warn).not.toHaveBeenCalled();
});
