import { useState } from 'react';

export default function CurrencyConverter() {
  const [usd, setUsd] = useState<number>(() => 0);

  const convertUsdToEuro = (dollar: number): number => dollar * 0.88;
  const convertEuroToUsd = (dollar: number): number => (dollar * 1) / 0.88;

  const convertUsdToJpnYen = (dollar: number): number => dollar * 115.42;
  const convertJpnYenToUsd = (dollar: number): number => (dollar * 1) / 115.42;

  const convertUsdToSgd = (dollar: number): number => dollar * 1.35;
  const convertSgdToUsd = (dollar: number): number => (dollar * 1) / 1.35;

  const roundAccurately = (number: number, decimalPlaces: number = 2): number =>
    Number(
      Math.round(Number(number + 'e' + decimalPlaces)) + 'e-' + decimalPlaces
    );

  return (
    <div>
      <label>USD</label>
      <input
        value={roundAccurately(usd)}
        onChange={(e) => {
          if (isNaN(Number(e.target.value))) return;
          setUsd(Number(e.target.value));
        }}
      ></input>
      <br />
      <label>EURO</label>
      <input
        value={roundAccurately(convertUsdToEuro(usd))}
        onChange={(e) => {
          if (isNaN(Number(e.target.value))) return;
          setUsd(convertEuroToUsd(Number(e.target.value)));
        }}
      ></input>
      <br />
      <label>Japanese Yen</label>
      <input
        value={roundAccurately(convertUsdToJpnYen(usd))}
        onChange={(e) => {
          if (isNaN(Number(e.target.value))) return;
          setUsd(convertJpnYenToUsd(Number(e.target.value)));
        }}
      ></input>
      <br />
      <label>SGD</label>
      <input
        value={roundAccurately(convertUsdToSgd(usd))}
        onChange={(e) => {
          if (isNaN(Number(e.target.value))) return;
          setUsd(convertSgdToUsd(Number(e.target.value)));
        }}
      ></input>
    </div>
  );
}
