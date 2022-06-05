import { useState } from 'react';
import InputMask from 'react-input-mask';
import './index.css';

function App() {

  const [backface, setBackface] = useState(false)


  function focus() {
    setBackface(true)
  }

  function blur() {
    setBackface(false)
  }


  const [number, setNumber] = useState("");
  function getNumber(num) {
    setNumber(num.target.value);

  }

  const [name, setName] = useState(null);
  function getName(val) {
    setName(val.target.value);

  }

  const [expiry, setExpiry] = useState(null);
  function getExpiry(expiry) {
    setExpiry(expiry.target.value)
  }

  const [cvv, setCvv] = useState(null);
  function getCvv(cvv) {
    setCvv(cvv.target.value)
  }

  let card = {
    number,
    name,
    expiry,
    cvv
  }

  const addCard = () => {
    console.log(card)
  }


  return (
    <section className='container'>
      <main className={backface === true ? "card" + " hover" : "card"}  >
        <section className={number && number[0] == 5 ? "front" + " masterbg" : "front"} >
          <figure className='card-top'>
            <img src='images/chip.svg' alt='chip' />
            {
              number && number[0] == 5 ? <img src='images/masterCart.svg' alt='masterCart' /> : <img src='images/visa.svg' alt='masterCart' />
            }
          </figure>
          <h1 className='card-number'>
            {number || "**** **** **** 8090"}
          </h1>
          <aside className='card-bottom'>
            <nav>
              <h4 className='key'>Card Holder Name</h4>
              <h3 className='value'>{name || "---"}</h3>
            </nav>
            <nav>
              <p className='key'>expiry date</p>
              <span className='value'>{expiry || "**/**"}</span>
            </nav>
          </aside>
        </section>
        <section className="back">
          <div className='card-back'>
            CVV <em>{cvv || "***"}</em>
          </div>
        </section>
      </main>
      <div className='input'>

        <InputMask mask='9999 9999 9999 9999' type="text" onChange={getNumber} placeholder="kart numarası" />
        <input type="text" onChange={getName} placeholder="kart sahibi" />
        <InputMask type="text" onChange={getExpiry} mask="99/99" placeholder="Son geçerlilik tarihi" />
        <InputMask type="text" onChange={getCvv} placeholder="cvv " mask='# 999'
          onFocus={focus} onBlur={blur}
        />
        <button onClick={() => alert("kart bilgisi kaydedildi")}>kaydet</button>
      </div>

    </section>
  );
}

export default App;
