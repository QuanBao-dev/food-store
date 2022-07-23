import createStore from "../util/createStore";

export const shopEpic = createStore({
  dataList: [],
  filterCondition: {
    popularType: null,
    price: {
      from: 0,
      to: 10000,
    },
    rate: {
      from: 0,
      to: 10000,
    },
    searchKey:"",
  },
  sortCondition: {
    isByPrice: {
      isLowToHigh: null,
      isHighToLow: null
    } ,
    isByRate:{
      isLowToHigh: null,
      isHighToLow: null
    }
  }
});
