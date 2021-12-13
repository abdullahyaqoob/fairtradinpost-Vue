<template>
  <div class="MainPageWhole">
    <div class="textContentDiv">
      <div class="loginDiv" data-aos="fade-right">
        <h1>Fair Trader Login</h1>
        <input type="text" placeholder="enter your email" />
        <input type="text" placeholder="enter your password" />
        <button>LOG IN</button>
      </div>
      <div class="optionsDiv">
        <img
          src="https://fairtrader.io/wp-content/uploads/2021/08/FairTrader_logo.svg"
          width="200px"
          alt="landingLogo"
        />
        <p>your assurance to a fair outcome</p>

        <ul>
          <li data-aos="fade-left">
            <font-awesome-icon
              class="landingPageCheck"
              :icon="['fas', 'check']"
            />
            <span>Easy Resolution Options</span>
          </li>
          <li data-aos="fade-left">
            <font-awesome-icon
              class="landingPageCheck"
              :icon="['fas', 'check']"
            />
            <span>Automatic Payment Release</span>
          </li>
          <li data-aos="fade-left">
            <font-awesome-icon
              class="landingPageCheck"
              :icon="['fas', 'check']"
            />
            <span>3 Flexible TransactionsTypes</span>
          </li>
          <li data-aos="fade-left">
            <font-awesome-icon
              class="landingPageCheck"
              :icon="['fas', 'check']"
            />
            <span>Smart Invoicing & Reporting</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  name: "HelloWorld",
  mounted() {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: nunito;
  margin: 0;
  padding: 0;
}

.MainPageWhole {
  background-image: url("../assets/img/FairTradingPost\ -\ Home\ Page.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
}

.loginDiv {
  float: right;
  margin-right: 50px;
  margin-top: 40px;
}

.loginDiv h1 {
  font-weight: bold;
  color: #fecc02;
  margin-bottom: 10px;
}

.loginDiv input {
  width: 100%;
  height: 30px;
  display: block;
  margin-bottom: 10px;
  padding-left: 20px;
  border-radius: 3px;
  outline: none;
}

.loginDiv button {
  color: #1f4685;
  background-color: #fecc02;
  border: none;
  padding: 4px 24px;
  font-size: 25px;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  letter-spacing: 1px;
  float: right;
  border-radius: 5px;
}

.optionsDiv {
  position: absolute;
  left: 62%;
  top: 38%;
  transform: translate(-50%, 0);
}

.optionsDiv img {
  width: 330px;
}

.optionsDiv p {
  font-size: 23px;
  color: #73c1e9;
  margin-bottom: 25px;
}

.optionsDiv ul li {
  list-style: none;
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}

.optionsDiv ul li i {
  border: 2px solid #1dccff;
  border-radius: 20px;
  color: #96fdfe;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
}

.landingPageCheck {
  border: 2px solid #1dccff;
  border-radius: 20px;
  color: #96fdfe;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
}

@media (max-width: 1024px) {
  .optionsDiv {
    left: 64%;
    top: 38%;
  }
  .optionsDiv img {
    width: 300px;
  }
  .optionsDiv p {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .optionsDiv ul li {
    font-size: 16px;
    margin-bottom: 10px;
    width: 140%;
  }
  .optionsDiv ul li i {
    font-size: 17px;
    font-weight: bold;
    margin-right: 10px;
  }
}
@media only screen and (max-width: 940px) and (min-width: 500px) {
  .MainPageWhole {
    height: 180vh;
  }
}

@media (max-width: 940px) {
  .optionsDiv {
    /* left: 55%; */
    left: 50%;
    top: 50%;
  }
  .MainPageWhole {
    background-size: 400%;
    background-position: right;
  }
  .optionsDiv img {
    width: 220px;
  }
  .optionsDiv p {
    font-size: 15px;
    margin-bottom: 20px;
  }
  .optionsDiv ul li {
    font-size: 14px;
    margin-bottom: 10px;
  }
  .loginDiv {
    position: absolute;
    left: 35%;
    transform: translate(-50%, 0);
  }
  .optionsDiv {
    margin-top: 100px;
  }
}

@media (max-width: 700px) {
  .loginDiv {
    left: 25%;
  }
}
@media (max-width: 500px) {
  .loginDiv {
    left: 20%;
  }
}
@media (max-width: 463px) {
  .optionsDiv {
    /* left: 55%; */
    left: 49%;
    top: 37%;
  }
  .loginDiv {
    margin-left: 0px;
  }
  .loginDiv h1 {
    font-size: 29px;
    width: 120%;
  }
  .loginDiv button {
    padding: 2px 10px;
    font-size: 20px;
  }
}
@media (max-width: 420px) {
  .optionsDiv {
    /* left: 55%; */
    left: 50%;
    top: 42%;
  }
}
@media (max-width: 400px) {
  .loginDiv {
    margin-right: 65px;
  }
}
@media (max-width: 388px) {
  .loginDiv {
    margin-right: 60px;
  }
  .optionsDiv {
    /* left: 55%; */
    left: 48%;
    top: 42%;
  }
}
@media (max-width: 378px) {
  .loginDiv {
    margin-right: 55px;
  }
  .optionsDiv {
    /* left: 55%; */
    left: 49%;
    top: 42%;
  }
}

@media (max-width: 371px) {
  .loginDiv {
    margin-right: 50px;
  }
}

@media (max-width: 360px) {
  .loginDiv {
    margin-right: 44px;
  }
}
@media (max-width: 350px) {
  .loginDiv {
    margin-right: 38px;
  }
}
@media (max-width: 338px) {
  .loginDiv {
    margin-right: 33px;
  }
}

@media (max-width: 329px) {
  .loginDiv {
    margin-right: 28px;
  }
}
</style>
