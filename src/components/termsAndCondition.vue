<template>
  <div class="termsPageWhole">
    <div class="termsPage">
      <p class="logoImgTerms">
        <img
          src="https://fairtrader.io/wp-content/uploads/2021/08/FairTrader_logo.svg"
          class="TermsLogo"
          alt="logo"
        />
      </p>

      <p class="logoBottomTxt">your assurance to a fair outcome</p>

      <h3>Fair Trader Terms and Conditions</h3>
      <p data-aos="fade-right">
        Fair Trader is a community operated resolution platform designed to
        resolve disputes in business transactions between buyer and seller of
        goods and services. Fair Trader is not a company nor an employment
        agency and does not provide financial advice or guarantee employment to
        any individual or applicant.
      </p>
      <p data-aos="fade-left">
        All mediators, community supervisors and moderators are all individual
        entities and do not work directly for Fair Trader or represent Fair
        Trader. Fair Trader Platform allows the buyer and seller to agree on
        common terms, condition of mediation, and payment options.
      </p>
      <p data-aos="fade-right">
        By using the Fair Trader Platform, both the buyer and seller of goods
        and services will not hold Fair Trader responsible for the agreement
        that was made between both parties and the mediator options chosen on
        common terms.
      </p>
      <p data-aos="fade-left">
        All mediators are individual operatives and must abide by the laws in
        the country they provide their services to the community. The mediator
        understands that if they are involved in any criminal activity they can
        be held responsible by the local authority and Fair Trader will not be
        providing any advice on legal matters in such a circumstance.
      </p>
      <p data-aos="fade-left">
        Fair Trader is family Friendly and will not permit prohibited items or
        services on its platform. The community moderators will automatically
        remove any attempts to sell drugs, weapons and adult content or services
        without Privacy.
      </p>
      <p data-aos="fade-right">
        By clicking submit, you agree to send your information to Fair Trader
        who confirms the information provided will be used in accordance with
        the Fair Trader Privacy policy. Facebook will also use the information
        provided subject to its Data Policy, including auto-fill form for ads.
        <a href="">View Fair Trader Privacy Policy</a>
      </p>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  name: "termsAndCondition",
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

.termsPageWhole {
  background-color: #0d5ca9;
  width: 100%;
  overflow: hidden;
  color: white;
}

.termsPage {
  width: 70%;
  margin: 0 auto;
  padding-bottom: 120px;
}

.logoImgTerms,
.logoBottomTxt {
  text-align: center;
  margin: 0 auto;
}

.TermsLogo {
  width: 300px;
  margin-top: 60px;
}

.logoBottomTxt {
  color: #5ebcff;
  font-size: 15px;
  margin-top: -25px;
}

.termsPage h3 {
  text-align: center;
  font-weight: bold;
  margin-top: 70px;
  font-size: 35px;
  margin-bottom: 10px;
}

.termsPage p {
  font-size: 23px;
  margin-bottom: 22px;
}

.termsPage p a {
  font-size: 23px;
  font-weight: bold;
  color: white;
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .TermsLogo {
    width: 200px;
    margin-top: 40px;
  }
  .logoBottomTxt {
    font-size: 14px !important;
  }
  .termsPage h3 {
    margin-top: 60px;
    font-size: 30px;
  }
  .termsPage p {
    font-size: 17px;
  }
  .termsPage p a {
    font-size: 17px;
  }
}
@media (max-width: 800px) {
  .TermsLogo {
    width: 160px;
    margin-top: 30px;
  }
  .logoBottomTxt {
    margin-top: -20px;
    font-size: 11px !important;
  }
  .termsPage h3 {
    margin-top: 40px;
    font-size: 22px;
  }
  .termsPage p {
    font-size: 15px;
  }
  .termsPage p a {
    font-size: 15px;
  }
}
@media (max-width: 600px) {
  .TermsLogo {
    width: 120px;
    margin-top: 30px;
  }
  .logoBottomTxt {
    margin-top: -20px;
    font-size: 9px !important;
  }
  .termsPage h3 {
    margin-top: 20px;
    font-size: 17px;
  }
  .termsPage p {
    font-size: 12px;
  }
  .termsPage p a {
    font-size: 12px;
  }
}
@media (max-width: 420px) {
  .termsPage {
    width: 90%;
  }
}
</style>