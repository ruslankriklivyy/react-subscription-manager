import { combine, createEvent, createStore } from 'effector';
import { ISubsItem } from '../interfaces/interfaces';

// Events
export const addToSubsItems = createEvent<ISubsItem>();
export const removeItemFromSubs = createEvent<number>();
export const setIsVisibleModal = createEvent<boolean>();
export const setIsVisiblePicker = createEvent<boolean>();
export const setUserProfit = createEvent<number>();

/// Stores
export const $isVisibleModal = createStore(false).on(
  setIsVisibleModal,
  (state, visible) => visible,
);
export const $isVisiblePicker = createStore(false).on(
  setIsVisiblePicker,
  (state, visible) => visible,
);

export const $subsItems = createStore([
  { id: 1, name: 'Netflix', price: 14.5, payment: 1, color: [66, 153, 118] },
])
  .on(addToSubsItems, (state, sub) => [...state, sub])
  .on(removeItemFromSubs, (state, subId) => state.filter((item) => item.id !== subId));

export const $userProfit = createStore(120).on(setUserProfit, (state, profit) => profit);
export const $userTotalSubs = createStore(0);
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
