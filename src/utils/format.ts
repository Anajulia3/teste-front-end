const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export const formatPrice = (value: number): string => brl.format(value).replace(/\u00a0/g, ' ');

export const formatInstallment = (value: number, times = 2): string =>
  `ou ${times}x de ${formatPrice(value / times)} sem juros`;
