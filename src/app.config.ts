export default defineAppConfig({
  pages: [
        'pages/index/index',
        'pages/characterPage/index',
        'pages/backgroundInfo/index',
        'pages/menu/index',
        'pages/chapterSelect/index',
        'pages/gameChapters/chapter0/Chapter0packed',
        'pages/gameChapters/chapter1/Chapter1packed',
        'pages/gameChapters/chapter2/Chapter2packed',
        'pages/gameChapters/chapter3/Chapter3packed',
        'pages/gameChapters/chapter4/Chapter4packed',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '',
    navigationBarTextStyle: 'black',
    navigationStyle:"custom",
    pageOrientation:'landscape'
  }
})
