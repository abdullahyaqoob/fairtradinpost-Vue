<template>
  <div class="profileMainDiv">
    <div class="profileDiv">
      <div class="LogoImg">
        <img src="../assets/img/logoWithDesc.png" alt="logoWithDesc" />
      </div>
      <div class="textContainer">
        <h1>Your Application has been submited</h1>
        <p class="ftpSoon">
          Fair Trader will soon send you some FTP coins to the Digital Wallet
          you have provided. You will need to have these coins in your wallet,
          in order to be register on Fair Trader Global Platform.
        </p>

        <!-- <p class="needHelp">
          If you need help setting up a Digital Wallet please email
          <span>support@FairTrader.io</span>
        </p> -->

        <h2 class="thankYTou">Thank You</h2>
        <p class="thankTxt">
          Please check your email daily for your approval or in case we require
          additional information to confirm your identity or qualifications.
        </p>
      </div>

      <div class="bottomLinks">
        <h6 class="linkUs">Please follow us for important updates:</h6>
        <div class="row">
          <div class="col-6">
            <p style="text-align: center">
              <img src="../assets/img/facebookDiv.png" alt="facebookDiv" />
            </p>
          </div>
          <div class="col-6">
            <p style="text-align: center">
              <img src="../assets/img/telegramDiv.png" alt="telegramDiv" />
            </p>
          </div>
        </div>
      </div>

      <div class="thankPageBottom">
        <img src="../assets/img/thankPageBottom.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// import {initializeApp} from 'https://www.gstatic'
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.profileMainDiv {
  background-color: #f9c602;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
.profileDiv {
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;
  overflow: hidden;
}
.LogoImg {
  text-align: center;
}
.LogoImg img {
  display: inline-block;
  width: 300px;
}
.textContainer h1 {
  font-size: 40px;
  text-align: center;
  font-family: nunito;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 10px;
}
.ftpSoon {
  font-size: 20px;
  margin-bottom: 20px;
  /* text-align: center; */
}
.needHelp {
  font-weight: bold;
  font-family: nunito;
  font-size: 20px;
  text-align: center;
}
.needHelp span {
  color: #096189;
  font-weight: bold;
  font-size: 20px;
}
.textContainer h2 {
  margin-top: 70px;
  color: white;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
}
.thankTxt {
  font-size: 20px;
  color: white;
  /* text-align: center; */
}
.thankPageBottom {
  display: none;
}
.linkUs {
  text-align: center;
  font-size: 20px;
  margin-top: 80px;
  margin-bottom: 20px;
}
.col-8 p {
  margin-left: 10px;
  font-size: 17px;
}
.col-8 {
  margin-bottom: 80px;
}
.thankYTou {
  font-size: 70px !important;
}
@media (max-width: 1000px) {
  .profileDiv {
    width: 90%;
  }
}
@media (max-width: 600px) {
  .profileDiv {
    padding-top: 40px;
  }
}
@media (max-width: 500px) {
  .bottomLinkSec {
    position: relative;
    left: 50px;
  }
  .thankTxt {
    text-align: start;
  }
  .col-8 p {
    margin-left: 20px;
  }
  .textContainer h1 {
    text-align: center;
    font-size: 25px;
    font-family: nunito;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 10px;
  }
  .ftpSoon {
    font-size: 15px;
    word-spacing: 3px;
  }
  .thankYTou {
    font-size: 45px !important;
    font-weight: bold !important;
  }
  .thankTxt {
    font-size: 15px;
    font-weight: bold;
  }
  .textContainer h2 {
    margin-top: 40px;
  }
  .bottomLinks {
    display: none;
  }
  .thankPageBottom {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, 0);
    display: initial;
  }
}
@media (max-width: 435px) {
.textContainer h1 {
  font-size: 23px !important;
}
}
@media (max-width: 413px) {
  .bottomLinkSec {
    left: 20px;
  }
  .LogoImg img {
    width: 230px;
  }
  .thankYTou {
    font-size: 50px !important;
  }
.textContainer h1 {
  font-size: 20px !important;
}
}
@media (max-width: 377px) {
  .textContainer h1 {
    font-size: 35px;
  }
}
@media (max-width: 358px) {
.textContainer h1 {
  font-size: 18px !important;
}
}
@media (max-width: 349px) {
  .LogoImg img {
    width: 200px;
  }
}
@media (min-height: 690px) and (max-height: 800px) {
  .thankYTou {
    font-size: 55px !important;
  }
  .thankTxt {
    font-size: 18px;
  }
  .textContainer h1 {
    font-size: 30px;
  }
}
</style>