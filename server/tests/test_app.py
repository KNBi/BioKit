import json

def test_example_server_response(app, client):
    res = client.get('/')
    assert res.status_code == 200
    expected = {'response': 'Hello World!'}
    assert expected == json.loads(res.get_data(as_text=True))