const Base = 'https://ivd.gib.gov.tr';
const MainPage = '/tvd_server/dispatch';
const Token = 'd1078f5e3dc646b78d5d4e5842f21e97feb48d366bc7617458b6679dec12675154a01fccc42292bb04d926bc259dbc75e39dd8e202535fd70a7098396c74a6f7';
const Get = {
  Command: 'vergiNoIslemleri_vergiNumarasiSorgulama',
  PageName: 'R_INTVRG_INTVD_VERGINO_DOGRULAMA',
};
const ErrorText = 'GİRDİĞİNİZ BİLGİLERDE HATA VARDIR. KONTROL EDEREK TEKRAR DENEYEBİLİRSİNİZ';
module.exports = {
  Base,
  Token,
  MainPage,
  Get,
  ErrorText,
};
