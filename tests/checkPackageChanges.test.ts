jest.mock("danger", () => jest.fn());
import * as danger from "danger";
const dm = danger as any;

import { checkPackageChanges } from "../orgs/checkPackageChanges";

it("fails when the packages.json changed but not the yarn.lock", () => {
  dm.danger = { git: { modified_files: ["package.json"] } };
  dm.fail = jest.fn();

  checkPackageChanges();

  expect(dm.fail).toHaveBeenCalledWith(
    'The "package.json" file was modified but not the "yarn.lock"!'
  );
});

it("does not fail when the packages.json and the yarn.lock changed", () => {
  dm.danger = { git: { modified_files: ["package.json", "yarn.lock"] } };
  dm.fail = jest.fn();

  checkPackageChanges();

  expect(dm.fail).not.toHaveBeenCalled();
});
