export default {
  //简单访问
  categorys: (state) => state.category.categorys,
  themeType: (state) => state.theme.themeType,
  currentCategory: (state) => state.app.currentCategory,
  currentCategoryIndex: (state, getters) => {
    const res = getters.categorys.findIndex((item) => {
      return item.id === getters.currentCategory.id
    })
    return res
  },
  //搜索历史
  historys: (state) => state.search.historys,
  //搜索框内容
  searchText: (state) => state.app.searchText
}
