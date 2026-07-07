# Repository Guidelines

## Project Structure & Module Organization
This repository is a small Django project. `manage.py` is the main entry point. Project configuration lives in `project/`, including `settings.py`, root URL routing, ASGI, and WSGI files. The `posts/` app contains the current model, views, URLs, admin registration, migrations, and tests. Shared templates are in `templates/`; the active homepage template is `templates/post_list.html`. Existing image assets are stored in `img/`. If a standalone frontend prototype is added, keep it isolated under `frontend/` with assets in `frontend/assets/`.

## Build, Test, and Development Commands
Use the local virtual environment when available:

```bash
source .venv/bin/activate
python manage.py runserver
python manage.py test
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

`runserver` starts the local Django development server. `test` runs Django tests. `makemigrations` creates migration files after model changes, and `migrate` applies them to SQLite.

## Coding Style & Naming Conventions
Follow standard Django conventions. Use `snake_case` for functions, variables, template names, and URL names. Use `PascalCase` for class-based views and models, such as `PostList` and `Post`. Keep Django app code inside its app directory unless it is shared project configuration. Prefer 4-space indentation for Python; existing files contain tabs in a few places, so normalize touched Python code to spaces when editing nearby lines. Keep templates readable with clear block structure and lowercase file names.

## Testing Guidelines
Tests use Django's built-in `TestCase` framework and live in `posts/tests.py`. Add tests for every model, view, URL, or template behavior change. Name test methods with `test_` and describe the behavior, for example `test_homepage_uses_post_list_template`. Run `python manage.py test` before submitting changes.

## Commit & Pull Request Guidelines
The current Git history uses short imperative messages such as `Create Project 5` and `update build awal Django`; no strict convention is enforced. Keep new commit messages concise and action-based, for example `Add frontend prototype structure` or `Update post list tests`.

Pull requests should include a short summary, test results, and screenshots for UI/template changes. Link related issues when available. Do not commit local databases, virtual environments, generated caches, or secrets; `.gitignore` already excludes common Django and Python artifacts.

## Security & Configuration Tips
Keep secrets in environment files, not in source. `DEBUG=True` is acceptable for local development only. Treat `db.sqlite3` and uploaded media as local artifacts unless explicitly needed for a fixture or documented sample.
