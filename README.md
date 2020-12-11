# UO Supermileage Static Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/2f7abf6d-e538-41cc-87eb-9c00b00e09be/deploy-status)](https://app.netlify.com/sites/uoe/deploys)

Static site for UO Supermileage, assembled with Hugo. Deployed at <https://beta.uosupermileage.ca/>, and now also at <https://uosupermileage.ca>

## Usage

Generate new content like so:

```
hugo new posts/post-name.md
hugo new profiles/firstname-lastname.md
hugo new events/event-name.md
```

...or using the shared Forestry.io account.

## Developer Instructions

### Installing Hugo on Your Machine

In most cases, the Hugo executable can simply be downloaded and added to your path.

If your OS has a package manager installed (brew on OSX, chocolatey on Windows, apt/dnf/yum on GNU/Linux)
you will be able to install a recent version of hugo with `<pkg> install hugo`. For example, here's what
installation could look like on Windows 10:

```
PS C:\WINDOWS\system32> choco install hugo
Chocolatey v0.10.15
Installing the following packages:
hugo
By installing you accept licenses for the packages.
Progress: Downloading hugo 0.76.4... 100%

...install logs are printed...

Chocolatey installed 1/1 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).
```

### Delivering Work

When adding new features, please use the semantic commit style with these labels:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
