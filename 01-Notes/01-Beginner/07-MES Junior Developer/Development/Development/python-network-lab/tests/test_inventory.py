helper_module = __import__("05-Errors")
has_hostname = getattr(helper_module, "has_hostname")


def test_hostname_with_text_is_valid():
    assert has_hostname("SW-LAB-01") is True

def test_empty_hostname_is_invalid():
    assert has_hostname("") is False

def test_whitespace_hostname_is_invalid():
    assert has_hostname("     ") is False
