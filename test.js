testCheckForWin([
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],

], false);

testCheckForWin([
    ['0', '0', '0', '0', '0', '0', '1'],
    ['0', '0', '0', '0', '0', '1', '0'],
    ['0', '0', '0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],

], true);

testCheckForWin([
    ['1', '0', '0', '0', '0', '0', '0'],
    ['0', '1', '0', '0', '0', '0', '0'],
    ['0', '0', '1', '0', '0', '0', '0'],
    ['0', '0', '0', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],

], true);

testCheckForWin([
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],

], false);

testCheckForWin([
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '1', '0', '0'],
    ['0', '0', '0', '0', '0', '1', '0'],
    ['0', '0', '0', '0', '0', '0', '1'],

], true);

testCheckForWin([
    ['0', '0', '0', '1', '1', '1', '1'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],

], true);

testCheckForWin([
    ['1', '1', '1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],

], true);

testCheckForWin([
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '1', '1', '1', '1'],

], true);

testCheckForWin([
    ['0', '0', '0', '1', '1', '1', '1'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],

], true);