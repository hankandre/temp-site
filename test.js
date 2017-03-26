import {Selector} from 'testcafe';

fixture `Homepage`
  .page `https://hankandre.com`;

  test('Menu links are clickable', async function (t) {
    const menuLink = Selector('#sidebar li').nth(2)

    await t
      .click('#menuButton')
      .wait(1000)
      .click(menuLink)
  });