function mwst(betrag, satz = 0.19) {
  const steuer = betrag * satz;
  return Math.round(steuer * 100) / 100;
}

function brutto(betragNetto, satz = 0.19) {
  const steuer = mwst(betragNetto, satz);
  return Math.round((Number(betragNetto) + steuer) * 100) / 100;
}

module.exports = {
  mwst,
  brutto
};
