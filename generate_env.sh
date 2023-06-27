#!/bin/bash

# Get the absolute path of the current directory
CURRENT_DIR=$(cd "$(dirname "$0")" && pwd)

# Set the value of GITLAB_HOME to the absolute current directory path
GITLAB_HOME="$CURRENT_DIR/gitlab"

# Set the value of GITLAB_HOSTNAME
GITLAB_HOSTNAME=""gitlab.example.com

# Generate the .env file
cat <<EOF > .env
GITLAB_HOME=$GITLAB_HOME
GITLAB_HOSTNAME=$GITLAB_HOSTNAME
EOF

