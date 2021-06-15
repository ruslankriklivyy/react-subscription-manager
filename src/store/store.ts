import { combine, createEvent, createStore } from 'effector';
import { ISubsColor, ISubsItem } from '../interfaces/interfaces';

// Events subsItems
export const addToSubsItems = createEvent<ISubsItem>();
export const removeItemFromSubs = createEvent<string>();
export const editSubItem = createEvent<ISubsItem>();

// Events visibleModals
export const setIsVisibleModal = createEvent<boolean>();
export const setIsVisiblePicker = createEvent<boolean>();

// Events user
export const setUserProfit = createEvent<number>();

// Events AddModal inputs values
export const setSubColor = createEvent<ISubsColor>();
export const setSubName = createEvent<string>();
export const setSubPrice = createEvent<number>();
export const setSubPayment = createEvent<number>();

// Events edit mode
export const setEditSubId = createEvent<string>();
export const setIsEditSub = createEvent<boolean>();

// Stores AddModal inputs values
export const $subColor = createStore({ r: 0, g: 0, b: 0 }).on(setSubColor, (state, color) => color);
export const $subName = createStore('').on(setSubName, (state, name) => name);
export const $subPrice = createStore(0).on(setSubPrice, (state, price) => price);
export const $subPayment = createStore(0).on(setSubPayment, (state, payment) => payment);

// Stores edit mode
export const $editSubId = createStore('').on(setEditSubId, (state, subId) => subId);
export const $isEditSub = createStore(false).on(setIsEditSub, (state, visible) => visible);

// Stores visibleModals
export const $isVisibleModal = createStore(false).on(
  setIsVisibleModal,
  (state, visible) => visible,
);
export const $isVisiblePicker = createStore(false).on(
  setIsVisiblePicker,
  (state, visible) => visible,
);

// Stores subsItems
export const $subsItems = createStore([
  { id: '1', name: 'Netflix', price: 14.5, payment: 1, color: [66, 153, 118] },
])
  .on(addToSubsItems, (state, sub) => [...state, sub])
  .on(removeItemFromSubs, (state, subId) => state.filter((item) => item.id !== subId))
  .on(editSubItem, (state, subObj) => {
    return state.map((sub) => {
      if (sub.id === subObj.id) {
        sub = subObj;
      }
      return sub;
    });
  });

// Stores user
export const $userProfit = createStore(120).on(setUserProfit, (state, profit) => profit);
export const $userTotalSubs = createStore(0);

// Stores total sum
export const $totalSumSubs = combine($subsItems, $userTotalSubs, (subs, total) => {
  const totalSubs = subs.map((item) => item.price);
  const totalSum = totalSubs.reduce((acc, num) => (acc += num));
  return (total = totalSum);
});
export const $totalSpend = combine($totalSumSubs, $userProfit, (totalSumSubs, userProfit) => {
  let percent = (totalSumSubs / userProfit) * 100;
  if (percent > 100) {
    percent = 100;
  }
  return percent;
});
