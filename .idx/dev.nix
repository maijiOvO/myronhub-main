
{ pkgs, ... }: {
  # NixOS channel to use.
  channel = "stable-24.05";

  # Packages to make available in the environment.
  packages = [
    pkgs.nodejs_20  # Provides Node.js and npm
  ];

  # Environment variables to set.
  env = {};

  # VS Code extensions to install.
  idx = {
    extensions = [
      "dbaeumer.vscode-eslint"
      "esbenp.prettier-vscode"
      "tailwindcss.vscode-tailwind-intellisense"
    ];

    # Workspace lifecycle hooks.
    workspace = {
      # Runs when a workspace is first created.
      onCreate = {
        npm-install = "npm install";
      };
      # Runs when the workspace is (re)started.
      onStart = {
        dev-server = "npm run dev";
      };
    };

    # Web preview configuration.
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT"];
          manager = "web";
        };
      };
    };
  };
}
