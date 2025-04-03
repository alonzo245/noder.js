/**
 * Noder.js – Neder shel ach yakar.
 */

class Noder {
  constructor(BaYakarLi) {
    this.neder = new Promise(BaYakarLi);
  }

  nishba(kshenitzliach, kshenichshal) {
    return new Noder((tenGazVeSayem, eizeSalat) => {
      this.neder.then(
        (tosha) => {
          try {
            const pitaron = kshenitzliach ? kshenitzliach(tosha) : tosha;
            tenGazVeSayem(pitaron);
          } catch (taut) {
            eizeSalat(taut);
          }
        },
        (taut) => {
          try {
            const mivtza = kshenichshal ? kshenichshal(taut) : taut;
            eizeSalat(mivtza);
          } catch (smash) {
            eizeSalat(smash);
          }
        }
      );
    });
  }

  achSheli(kshenichshal) {
    return this.nishba(null, kshenichshal);
  }

  azovNeshama(baSof) {
    return new Noder((tenGazVeSayem, eizeSalat) => {
      this.neder.finally(() => {
        try {
          baSof();
          tenGazVeSayem();
        } catch (taut) {
          eizeSalat(taut);
        }
      });
    });
  }

  static meKabel(baKesef) {
    return new Noder((tenGazVeSayem) => tenGazVeSayem(baKesef));
  }

  static loBaLi(error) {
    return new Noder((_, eizeSalat) => eizeSalat(error));
  }

  static kulamMitmasrim(promisot) {
    return new Noder((tenGazVeSayem, eizeSalat) => {
      Promise.all(promisot.map((p) => (p instanceof Noder ? p.neder : p)))
        .then(tenGazVeSayem)
        .catch(eizeSalat);
    });
  }

  static miYakdim(promisot) {
    return new Noder((tenGazVeSayem, eizeSalat) => {
      Promise.race(promisot.map((p) => (p instanceof Noder ? p.neder : p)))
        .then(tenGazVeSayem)
        .catch(eizeSalat);
    });
  }
}

module.exports = Noder;
