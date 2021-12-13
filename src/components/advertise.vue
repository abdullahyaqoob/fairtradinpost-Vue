<template>
  <div class="wholePage">
    <div class="mainContent">
      <div class="heroContent heroPageAllContent">
        <img
          class="fairtraderLogo leftMargin"
          src="https://fairtrader.io/wp-content/uploads/2021/08/FairTrader_logo.svg"
          width="150px"
          alt="logo"
        />
        <p class="pageNavBottomLogo leftMargin">
          Your assurance to a fair outcome
        </p>
        <div class="row">
          <div class="col-6">
            <div class="heroTextContentFirst" data-aos="fade-left">
              <h2 class="earnHeroCont leftMargin">
                Do you have skills and are you good at problem solving?
              </h2>
              <img
                class="leftMargin heroImageHolding"
                src="../assets/img/2 person.png"
                alt="Person Holding Laptop"
              />

              <div class="heroBottomContentDiv">
                <div class="heroBottomContent">
                  <div class="row">
                    <div class="col-4">
                      <h1 class="getPaid">
                        Get paid for helping people on a new payment gateway
                      </h1>
                      <p class="Greatearningpotential">
                        Great earning potential
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 applyFormDivDiv1">
            <iframe
              src="https://fairtrader.activehosted.com/f/1"
              class="ApplyForm"
              frameborder="0"
            ></iframe>
          </div>

          <div class="col-6 applyFormDivDiv2">
            <iframe
              src="https://fairtrader.activehosted.com/f/5"
              class="ApplyForm"
              frameborder="0"
            ></iframe>
          </div>

          <div class="applyFormDivDiv3">
            <iframe
              src="https://fairtrader.activehosted.com/f/7"
              class="ApplyForm"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="footerContentDiv">
      <div class="footerContent" data-aos="zoom-in">
        <h1 class="footerContentHeading">
          Register as a Mediator for a new global trading platform
        </h1>
        <p class="footerContentpara1">
          Join our global community of skilled mediators now!
          <span class="footerContentPara1Span">
            Earn money working for yourself by helping the world transact more
            fairly. We are not charging the mediator license fee for the first
            20,000 mediators.</span
          >
        </p>
        <br />
        <p class="footerContentApply">
          Apply now and see if you qualify to mediate disputes on our platform
          and earn money by solving problems for other people.
        </p>

        <p class="footerContentpara3">
          To Read Fair Trader Terms & Conditions
          <a href="/termsAndCondition">Click Here</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  name: "mediation",
  mounted() {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  },
};
</script>

<style scoped>
* {
  font-family: nunito;
  margin: 0;
  padding: 0;
}

.TopContent {
  position: fixed;
  background-color: white !important;
  z-index: 100 !important;
  width: 100%;
  height: 30px;
}

.topTextContents {
  display: inline;
}

.topTextContents span {
  position: relative;
  top: 5px;
}

.advertiseTopTextContent {
  margin-left: 25px;
  font-size: 13px;
  font-weight: 700;
  color: #10559e;
}

.RegisterTopTextContent {
  margin-left: 30px;
}

.socialLinksTop {
  display: inline;
  position: absolute;
  right: 30px;
  margin-top: 7px;
}

.socialLinksTop span i {
  font-size: 15px;
  color: #0b5d9b;
  padding-left: 5px;
}

.fairtraderLogo {
  padding-top: 30px;
}

.wholePage {
  margin-bottom: -16px;
  background-color: #10559e;
  height: 100vh;
}

.pageNav {
  position: fixed;
  background-color: #0d54ae;
  color: white;
  padding-top: 10px;
  padding-left: 20px;
  width: 100%;
  /* height: 85px; */
  overflow: hidden;
  z-index: 99;
}

.pageNavRightSideContent {
  color: #1ab8f1;
  font-size: 20px;
  float: right;
  margin-right: 30px;
  margin-top: 30px;
  font-family: nunito;
}

.pageNavBottomLogo {
  color: white;
  margin-top: 1px;
  font-size: 11px;
}

/* heroContent */

.mainContent {
  margin-bottom: -20px;
  background-color: #0d54ae;
}

.heroContent {
  width: 100%;
  /* height: 650px; */
  overflow: hidden;
}

.heroPageAllContent {
  width: 100%;
  margin: 0 auto;
}

.startHeroCont {
  color: red;
  font-weight: 1000;
  font-size: 35px;
}

.onlineHeroCont {
  color: #fecc02;
  font-weight: 1000;
  font-size: 85px;
  line-height: 85px;
}
.leftMargin {
  margin-left: 100px;
}
.earnHeroCont {
  font-family: "Barlow Condensed", sans-serif;
  margin-top: 40px;
  width: 57%;
  font-size: 55px;
  color: #ffffff;
  font-weight: 900;
}

.heroImageHolding {
  margin-top: 20px;
  width: 400px;
}

.personHoldingImg {
  width: 500px;
  margin-top: 80px;
  margin-left: -80px;
}

/* apply form */

.applyFormDiv {
  width: 60%;
  height: 750px;
  float: right;
  background-color: #fecc02;
  padding: 20px;
  margin-top: -40px;
  color: white;
  margin-right: 130px;
}

.applyForm {
  width: 100%;
}

.applyTxt {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 80px;
  /* font-size: 45px; */
  margin-left: 10px;
  color: #ffffff;
  font-weight: 1000;
  margin-top: -10px;
}

.onlineTxt {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 175px;
  color: #ffffff;
  font-weight: 1000;
  margin-top: -25px;
  margin-bottom: -10px;
}

.doHaveTxt {
  font-family: "Barlow Condensed", sans-serif;
  text-align: center;
  font-size: 50px;
  color: rgb(0, 0, 0);
  margin-top: 20px;
  font-weight: bold;
}

.applyInputfield {
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  outline: none;
  padding-left: 20px;
  font-size: 20px;
  color: black;
  font-family: nunito;
  border-radius: 5px;
}

.applyBtnDiv {
  position: absolute;
  left: 53%;
  transform: translate(-50%, 0);
  margin-top: 20px;
}

.applyFormDivDiv2 {
  display: none;
}
.applyFormDivDiv3 {
  display: none;
}

.applyBtn {
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 1000;
  padding: 10px 25px;
  font-size: 30px;
  color: rgb(255, 255, 255);
  background-color: red;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
}

.applyBtn:focus {
  outline: none;
}

.underBtnTxt {
  font-family: "Barlow Condensed", sans-serif;
  margin-top: 120px;
  font-size: 36px;
  text-align: center;
  color: #000000;
  font-weight: bold;
}

/* input feild */

.form-controll {
  position: relative;
  /* margin: 20px 0; */
  margin: 0 auto;
  width: 90%;
  margin-top: 15px;
}

.form-controll input {
  border: 0;
  border-bottom: 2px solid #333;
  padding: 15px 0;
  display: block;
  font-size: 18px;
  font-family: "Muli", sans-serif;
  width: 100%;
  transition: 0.1s ease-in;
  padding-left: 20px;
}

.form-controll input:focus,
.form-controll input:valid {
  border-bottom-color: rgb(77, 32, 241);
  outline: none;
  /* margin-left: 20px; */
}

.form-controll input:focus + label span,
.form-controll input:valid + label span {
  color: rgb(77, 32, 241);
  transform: translateY(-30px);
}

.form-controll label {
  color: rgb(61, 61, 61);
  padding-left: 20px;
  position: absolute;
  top: 10px;
  left: 0;
}

.form-controll label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* heroBottomContent */

.heroBottomContentDiv {
  /* margin-top: -110px; */
  background-color: #000711;
  color: white;
  width: 200%;
  height: 145px;
}

.heroBottomContent {
  width: 90%;
  margin: 0 auto;
}

.getPaid {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 40px;
  color: #fecc02;
  width: 80%;
  margin-top: 8px;
  font-weight: bold;
  margin-left: 30px;
}

.Greatearningpotential {
  font-size: 21px;
  font-weight: bold;
  width: 80%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* footerContent */

.footerContentDiv {
  background-color: #0d54ae;
  width: 100%;
  margin: 0 auto;
  margin-top: -20px;
}

.footerContent {
  width: 80%;
  margin: 0 auto;
  color: white;
  font-family: nunito;
}

.footerContentHeading {
  color: #1dccff;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 20px;
  font-size: 63px;
  font-weight: 1000;
  font-family: "Barlow Condensed", sans-serif;
}

.footerContentpara1 {
  font-size: 30px;
  font-weight: bold;
  color: white;
  /* font-family: 'Barlow Condensed', sans-serif; */
}

.footerContentPara1Span {
  font-size: 27px;
  font-family: nunito;
  color: white;
  font-weight: normal;
}

.footerContentApply {
  font-size: 26px;
  font-weight: normal;
  color: white;
  /* font-family: 'Barlow Condensed', sans-serif; */
  text-align: center;
}

.footerContentpara3 {
  font-size: 22px;
  font-weight: 1000;
  text-align: center;
  margin-top: 50px;
  color: #1dccff;
  padding-bottom: 20px;
}

.footerContentpara3 a {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 24px;
  text-decoration: underline;
  color: #1dccff;
  font-weight: bold;
}

/* toaster */

#snackbarName,
#snackbarEmail,
#snackbarIndustry {
  visibility: hidden;
  min-width: 200px;
  margin-left: -125px;
  background-color: red;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 18px;
  /* border-radius: 5px; */
}

#snackbarrSubmited {
  visibility: hidden;
  min-width: 200px;
  margin-left: -125px;
  background-color: green;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 18px;
  /* border-radius: 5px; */
}

#snackbarName.show,
#snackbarEmail.show,
#snackbarIndustry.show,
#snackbarrSubmited.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@media (max-width: 1840px) {
  .earnHeroCont {
    font-size: 52px;
  }
  .applyFormDiv {
    margin-top: -48px;
  }
}

@media (max-width: 1831px) {
  .getPaid {
    font-size: 42px;
  }
  .onlineTxt {
    font-size: 165px;
  }
  .applyFormDiv {
    height: 725px;
    margin-top: -25px;
  }
  .doHaveTxt {
    font-size: 45px;
  }
}

@media (max-width: 1807px) {
  .footerContentHeading {
    font-size: 58px;
  }
  .footerContentpara1 {
    font-size: 27px;
  }
  .footerContentPara1Span {
    font-size: 25px;
  }
  .footerContentApply {
    font-size: 24px;
  }
}

@media (max-width: 1742px) {
  .earnHeroCont {
    font-size: 48px;
    width: 54%;
  }
  .onlineTxt {
    font-size: 150px;
  }
  .applyFormDiv {
    height: 710px;
  }
}

@media (max-width: 1714px) {
  .getPaid {
    font-size: 40px;
  }
  .Greatearningpotential {
    font-size: 19px;
  }
}

@media (max-width: 1698px) {
  .earnHeroCont {
    font-size: 45px;
  }
  .applyFormDiv {
    margin-top: -33px;
  }
}

@media (max-width: 1656px) {
  .doHaveTxt {
    font-size: 42px;
  }
  .footerContentApply {
    font-size: 22px;
  }
  .footerContentpara1 {
    font-size: 25px;
  }
  .footerContentPara1Span {
    font-size: 23px;
  }
}

@media (max-width: 1635px) {
  .getPaid {
    font-size: 38px;
  }
}

@media (max-width: 1594px) {
  .earnHeroCont {
    font-size: 43px;
  }
  .onlineTxt {
    font-size: 140px;
  }
  .doHaveTxt {
    font-size: 39px;
  }
  .applyFormDiv {
    margin-top: -9px;
    height: 680px;
  }
  .applyBtnDiv {
    left: 51%;
  }
}

@media (max-width: 1594px) {
  .getPaid {
    font-size: 36px;
  }
}

@media (max-width: 1525px) {
  .earnHeroCont {
    font-size: 41px;
  }
  .applyFormDiv {
    margin-top: -15px;
  }
}

@media (max-width: 1525px) {
  .onlineTxt {
    font-size: 130px;
  }
  .doHaveTxt {
    font-size: 37px;
  }
  .underBtnTxt {
    font-size: 33px;
  }
  .footerContentpara1 {
    font-size: 23px;
  }
  .footerContentPara1Span {
    font-size: 21px;
  }
  .footerContentApply {
    font-size: 19px;
  }
  .footerContentpara3 {
    margin-top: 30px;
  }
}

/* @media (max-width: 1500px) {
  .applyTxt {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 60px;
  }
  .applyFormDiv {
    height: 640px;
    margin-top: -25px;
  }
  .heroBottomContentDiv {
    margin-top: -60px;
  }
} */

@media (max-width: 1478px) {
  .getPaid {
    font-size: 35px;
  }
  .applyBtnDiv {
    position: absolute;
    left: 50%;
  }
}

@media (max-width: 1455px) {
  .earnHeroCont {
    font-size: 39px;
  }
  .applyFormDiv {
    margin-top: -34px;
  }
}

@media (max-width: 1439px) {
  .getPaid {
    font-size: 33px;
  }
}

@media (max-width: 1405px) {
  .underBtnTxt {
    font-size: 30px;
  }
  .footerContentHeading {
    font-size: 45px;
  }
}

@media (max-width: 1386px) {
  .onlineTxt {
    font-size: 120px;
  }
  .doHaveTxt {
    font-size: 35px;
  }
  .underBtnTxt {
    font-size: 28px;
  }
  .earnHeroCont {
    font-size: 37px;
  }
  .applyFormDiv {
    height: 620px;
    margin-top: -20px;
  }
  .getPaid {
    width: 90%;
    font-size: 35px;
  }
  .footerContentpara1 {
    font-size: 21px;
  }
  .footerContentPara1Span {
    font-size: 19px;
  }
  .footerContentApply {
    font-size: 18px;
  }
}

@media (max-width: 1330px) {
  .onlineTxt {
    font-size: 110px;
  }
  .underBtnTxt {
    font-size: 25px;
  }
  .doHaveTxt {
    font-size: 32px;
  }
}

@media (max-width: 1024px) {
  .earnHeroCont {
    font-size: 38px;
    width: 75%;
  }
  .applyTxt {
    font-size: 60px;
  }
  .leftMargin {
    margin-left: 30px;
  }
  .onlineTxt {
    margin-top: -15px;
    font-size: 130px;
  }
  .doHaveTxt {
    font-size: 35px;
  }
  .underBtnTxt {
    font-size: 20px;
  }
  .applyBtnDiv {
    position: absolute;
    left: 41%;
  }
  .applyFormDiv {
    height: 650px;
  }
  /* .applyFormContentDiv {
      margin-right: 120px;
  } */
  .heroImageHolding {
    width: 430px;
  }
  .getPaid {
    font-size: 27px;
  }
  .Greatearningpotential {
    width: 100%;
    font-size: 12px;
  }
  .footerContentHeading {
    font-size: 35px;
  }
  .footerContentpara1 {
    font-size: 18px;
  }
  .footerContentPara1Span {
    font-size: 16px;
  }
  .footerContentApply {
    font-size: 16px;
    text-align: start;
  }
  .footerContentpara3 {
    font-size: 18px;
  }
  .footerContentpara3 a {
    font-size: 18px;
  }
  .form-controll label span {
    font-size: 12px;
  }
  .applyBtn {
    font-size: 18px;
  }
  .applyFormDiv {
    width: 90%;
    margin-right: 0;
  }
  .applyBtnDiv {
    left: 53%;
  }
  .heroBottomContentDiv {
    height: 105px;
  }
}

@media (max-width: 982px) {
  .earnHeroCont {
    font-size: 36px;
  }
  .heroImageHolding {
    width: 436px;
  }
}

@media (max-width: 938px) {
  .getPaid {
    font-size: 23px;
  }
  .ApplyForm {
    width: 450px !important;
    height: 670px;
  }
}

@media (max-width: 932px) {
  .earnHeroCont {
    font-size: 34px;
  }
  .heroImageHolding {
    width: 410px;
  }
  .onlineTxt {
    font-size: 120px;
  }
  .applyFormDiv {
    height: 620px;
  }
  .applyFormDivDiv1 {
    margin-top: -70px;
  }
}

@media (max-width: 892px) {
  .doHaveTxt {
    font-size: 32px;
  }
  .heroImageHolding {
    width: 390px;
  }
  .onlineTxt {
    font-size: 110px;
  }
  .underBtnTxt {
    margin-top: 110px;
  }
  .applyFormDiv {
    height: 600px;
  }
}

@media (max-width: 882px) {
  .earnHeroCont {
    font-size: 32px;
  }
  .ApplyForm {
    width: 440px !important;
  }
}

@media (max-width: 868px) {
  .getPaid {
    font-size: 21px;
  }
}

@media (max-width: 849px) {
  .footerContentHeading {
    font-size: 30px;
  }
  .applyFormDivDiv1,
  .applyFormDivDiv3 {
    display: none;
  }
  .applyFormDivDiv2 {
    display: initial;
    margin-top: -50px;
  }
  .ApplyForm {
    width: 380px !important;
  }
}

@media (max-width: 832px) {
  .earnHeroCont {
    font-size: 30px;
  }
  .heroImageHolding {
    width: 400px;
  }
}

@media (max-width: 825px) {
  .doHaveTxt {
    font-size: 30px;
  }
  .onlineTxt {
    font-size: 100px;
  }
}

@media (max-width: 798px) {
  .getPaid {
    font-size: 19px;
  }
}

@media (max-width: 782px) {
  .earnHeroCont {
    font-size: 27px;
  }
  .applyTxt {
    font-size: 50px;
  }
  .onlineTxt {
    font-size: 90px;
  }
  .doHaveTxt {
    font-size: 26px;
  }
  .applyFormDiv {
    height: 550px;
  }
  .heroImageHolding {
    width: 358px;
  }
}

@media (max-width: 764px) {
  .getPaid {
    font-size: 17px;
  }
  .footerContentHeading {
    font-size: 25px;
  }
  .Greatearningpotential {
    width: 110%;
    font-size: 12px;
  }
  .applyFormDivDiv2 {
    margin-top: -70px;
  }
  .ApplyForm {
    width: 350px !important;
  }
}

@media (max-width: 707px) {
  .earnHeroCont {
    font-size: 26px;
  }
  .Greatearningpotential {
    width: 115%;
    font-size: 12px;
  }
}

@media (max-width: 696px) {
  .onlineTxt {
    font-size: 80px;
  }
  .applyTxt {
    font-size: 45px;
  }
  .doHaveTxt {
    font-size: 22px;
  }
  .applyFormDiv {
    height: 520px;
  }
  .heroImageHolding {
    width: 327px;
  }
}

@media (max-width: 682px) {
  .earnHeroCont {
    font-size: 24px;
  }
  .heroImageHolding {
    width: 335px;
  }
  .footerContentpara1,
  .footerContentpara3,
  .footerContentpara3 a,
  .footerContentPara1Span,
  .footerContentApply {
    font-size: 14px;
  }
  .applyFormDivDiv2 {
    margin-top: -80px;
  }
  .ApplyForm {
    width: 330px !important;
  }
}

@media (max-width: 659px) {
  .getPaid {
    font-size: 16px;
  }
  .earnHeroCont {
    width: 80%;
    font-size: 35px;
  }
  .heroImageHolding {
    margin-top: 22px;
    width: 250px;
  }
}

@media (max-width: 624px) {
  .earnHeroCont {
    font-size: 32px;
  }
  .getPaid {
    font-size: 15px;
  }
  .Greatearningpotential {
    width: 120%;
    font-size: 10px;
  }
  .heroImageHolding {
    margin-top: 33px;
  }
}

@media (max-width: 609px) {
  .doHaveTxt {
    font-size: 20px;
  }
  .applyFormDiv {
    width: 100%;
  }
  .footerContentHeading {
    font-size: 20px;
  }
  .footerContentpara1,
  .footerContentpara3,
  .footerContentpara3 a,
  .footerContentPara1Span,
  .footerContentApply {
    font-size: 12px;
  }
}
@media (max-width: 590px) {
  .getPaid {
    font-size: 14px;
  }
}
@media (max-width: 560px) {
  .earnHeroCont {
    font-size: 26px;
  }
  .onlineTxt {
    font-size: 70px;
  }
  .applyTxt {
    font-size: 40px;
  }
  .doHaveTxt {
    font-size: 20px;
  }
  .applyFormDiv {
    height: 470px;
  }
  .heroImageHolding {
    width: 260px;
  }
  .applyBtnDiv {
    left: 50%;
  }
  .applyBtn {
    font-size: 15px;
  }
  .underBtnTxt {
    margin-top: 90px;
  }
  .getPaid {
    font-size: 13px;
  }
  .Greatearningpotential {
    font-size: 9px;
    font-weight: normal;
  }
}
@media (max-width: 526px) {
  .earnHeroCont {
    font-size: 25px;
  }
  .underBtnTxt {
    font-size: 17px;
  }
}
@media (max-width: 512px) {
  .earnHeroCont {
    font-size: 23px;
  }
  .heroImageHolding {
    width: 220px;
    margin-top: 76px;
  }
  .doHaveTxt {
    font-size: 18px;
  }
}

@media (max-width: 500px) {
  .applyFormDivDiv1,
  .applyFormDivDiv2 {
    display: none;
  }
  .applyFormDivDiv3 {
    display: initial;
    margin-top: -20px !important;
    /* margin-top: 120px; */
    margin: 0 auto;
  }
  .ApplyForm {
    width: 440px !important;
  }
  .fairtraderLogo {
    width: 130px;
    margin-top: -30px;
    margin-left: 20px;
  }
  .pageNavBottomLogo {
    margin-top: 1px !important;
    margin-left: 20px !important;
    font-size: 9px !important;
  }
  .mainContent {
    width: 100%;
    padding-top: 50px;
  }
  .earnHeroCont {
    width: 180%;
    font-size: 38px;
    margin-left: 20px;
  }
  .heroImageHolding {
    display: initial;
    width: 400px;
    position: absolute;
    left: 85%;
    transform: translate(-50%, 0);
    margin-top: 20px;
  }
  .col-4 {
    min-width: 50%;
  }
  .getPaid {
    text-align: center;
    width: 200%;
    margin-left: 0;
    margin-right: 0;
    /* margin-left: 20px; */
    font-size: 30px;
  }
  .Greatearningpotential {
    font-size: 18px;
    width: 200%;
  }
  .heroBottomContentDiv {
    /* margin-top: -847px; */
    margin-top: 380px;
    height: 130px;
  }
  .applyFormContentDiv {
    /* width: 200%; */
    margin-top: 0px;
    /* padding: 30px; */
    padding-right: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 15px;
  }
  .footerContentDiv {
    /* margin-top: 650px; */
    padding-top: 50px;
  }
  .applyFormContentDiv {
    background-color: #ddb30c;
    width: 100%;
  }
  .heroPageAllContent {
    width: 100%;
  }
  .applyTxt {
    font-size: 80px;
  }
  .onlineTxt {
    font-size: 130px;
  }
  .doHaveTxt {
    font-size: 35px;
  }
  .underBtnTxt {
    margin-top: 130px;
  }
  .applyBtn {
    padding: 7px 40px;
    font-size: 30px;
    white-space: nowrap;
  }
  .underBtnTxt {
    font-size: 28px;
  }
  .footerContentDiv {
    background-color: #0d54ae;
  }
  .footerContentHeading {
    margin-top: 50px;
    text-align: start;
    font-size: 45px;
  }
  .footerContentApply {
    text-align: start;
  }
  .footerContentpara3 {
    font-size: 12px;
  }
  .footerContentpara3 a {
    font-size: 12px;
  }
  .footerContentpara1,
  .footerContentPara1Span,
  .footerContentApply {
    font-size: 23px;
  }
}

@media (max-width: 439px) {
  .ApplyForm {
    width: 430px !important;
  }
}
@media (max-width: 430px) {
  .ApplyForm {
    width: 430px !important;
  }
}
@media (max-width: 428px) {
  .ApplyForm {
    width: 425px !important;
  }
}
@media (max-width: 423px) {
  .ApplyForm {
    width: 420px !important;
  }
}
@media (max-width: 418px) {
  .ApplyForm {
    width: 400px !important;
  }
}
@media (max-width: 397px) {
  .ApplyForm {
    width: 380px !important;
  }
}
@media (max-width: 380px) {
  .ApplyForm {
    width: 360px !important;
  }
}
@media (max-width: 360px) {
  .ApplyForm {
    width: 350px !important;
  }
}
@media (max-width: 347px) {
  .ApplyForm {
    width: 340px !important;
  }
}
.ApplyForm {
  width: 477px;
  height: 670px;
  overflow: hidden;
}
</style>