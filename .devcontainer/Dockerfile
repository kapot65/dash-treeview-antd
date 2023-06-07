# syntax=docker/dockerfile:1

# Build from official VSC Docker image:
FROM mcr.microsoft.com/devcontainers/python:3.9

# Install Node:
RUN su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install 11 2>&1"

# Keep Python from generating .pyc files in the container:
ENV PYTHONDONTWRITEBYTECODE=1

# Turn off buffering for easier container logging:
ENV PYTHONUNBUFFERED=1

# Make Poetry create virtual environments in the project directory:
ENV POETRY_VIRTUALENVS_IN_PROJECT=true

# Update system dependencies:
RUN apt-get update

# Set working directory:
WORKDIR /workspaces/code

# Install pipx:
RUN python -m pip install pipx

# Install Poetry:
RUN pipx install poetry
