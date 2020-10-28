from dotenv import load_dotenv
load_dotenv()

import sys, os
sys.path.append(os.getenv("MODULE_PATH"))

import pytest
from app import app as flask_app

@pytest.fixture
def app():
    yield flask_app


@pytest.fixture
def client(app):
    return app.test_client()