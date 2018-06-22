import { fail, danger } from "danger";

export const checkPackageChanges = () => {
  const hasPackageChanges = danger.git.modified_files.includes("package.json");
  const hasLockfileChanges = danger.git.modified_files.includes("yarn.lock");

  if (hasPackageChanges && !hasLockfileChanges) {
    fail('The "package.json" file was modified but not the "yarn.lock"!');
  }
};
