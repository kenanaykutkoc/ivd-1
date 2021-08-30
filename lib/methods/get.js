const {
  Base, MainPage, Token, Get,
} = require('../config');

const check = ({ connector }) => async ({
  ilNo, vdNo, vNo, tckNo,
}) => {
  if (
    !ilNo
    || !vdNo
    || !((vNo && vNo.length > 0) || (tckNo && tckNo.length > 0))
  ) {
    return {
      status: false,
      error: 'fill the required blanks',
    };
  }

  return connector(Base + MainPage, {
    body: {
      token: Token,
      cmd: Get.Command,
      pageName: Get.PageName,
      jp: JSON.stringify({
        dogrulama: {
          vkn1: vNo || '',
          tckn1: tckNo || '',
          iller: ilNo,
          vergidaireleri: vdNo,
        },
      }),
    },
  });
};

module.exports = check;
