export const checkCorrectInput = (name: string, price: string, payment: number) => {
  if (!name || !price || !payment) {
    alert('⚠ Enter info!');
    return false;
  }

  if (!/^\d+\.?\d*$/gm.test(price) || parseFloat(price) < 1 || parseFloat(price) > 10000) {
    alert('⚠ Enter correct price!');
    return false;
  }

  if (payment < 1 || payment >= 31) {
    alert('⚠ Enter correct payment!');
    return false;
  }

  return true;
};
