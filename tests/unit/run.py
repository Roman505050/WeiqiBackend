import unittest


loader = unittest.TestLoader()
suite = loader.discover(start_dir="tests/unit/user", pattern="test_*.py")

runner = unittest.TextTestRunner()
runner.run(suite)
