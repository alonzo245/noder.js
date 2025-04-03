# 🧿 Noder.js – Neder Shel Ach Yakar

> _"Because regular Promises are for nerds. This one's for brothers."_

Welcome to **Noder.js**, the only JavaScript Promise wrapper that brings you:

- ✅ Asynchronous control
- ✅ Real energy
- ✅ And a touch of Hafla in every `.then()`

This is not just async.  
This is async **with keffiyeh and confidence**.

---

## 📖 Live Demo (HTML Version)

```html
<script>
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

  window.Noder = Noder;

  const out = document.getElementById("output");

  new Noder((tenGazVeSayem, eizeSalat) => {
    setTimeout(() => {
      const chance = Math.random();
      if (chance > 0.5) {
        tenGazVeSayem("✔️ shuki amar slicha – nechshev shalom bayit");
      } else {
        eizeSalat("❌ roni tafas kriza");
      }
    }, 1500);
  })
    .nishba((result) => {
      out.innerHTML += `✅ <b>noder:</b> ${result}<br>`;
    })
    .achSheli((err) => {
      out.innerHTML += `🚨 <b>noder:</b> ${err}<br>`;
    })
    .azovNeshama(() => {
      out.innerHTML += `🔚 azov oti, ani noder sh osim sholem leolam<br>`;
    });
</script>
```

## 🌯 Why Use Noder.js?

- Because Neder is better!
- Because life's too balagn to `.catch()` without kavod.
- Because you want your code to smell like fresh laffa.

---

## ⚠️ Production Use Disclaimer

This package is **EXPERIMENTAL** and **NOT** intended for production use. It's created for educational purposes only. Using this package in production environments:

- May cause unexpected behavior
- Is not recommended for critical systems
- Comes with no guarantees or warranties
- Is at your own risk

We strongly recommend using standard Promise implementations for any production code.

⚠️ **IMPORTANT DISCLAIMER** ⚠️

> This package is **NOT** intended for production use. It's a fun experiment and should be used at your own risk. We take no responsibility for any issues that may arise from using this package in production environments.

---

## 📜 License

MIT — use it freely, just don't look at it עקום.

---

## ❤️ Special Thanks

To Shuki, Roni, and the entire shutafim bchirim.
