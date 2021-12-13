<template>
  <div class="wholeThankYouPage">
    <div class="mainDiv">
      <div class="logoWithDesc">
        <img src="../assets/img/logoWithDesc.png" alt="logoWithDesc" />
      </div>
      <div class="ThankYouText">
        <img src="../assets/img/ThankYou Text.png" alt="logoWithDesc" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wholeThankYouPage {
  width: 100%;
  height: 100vh;
  overflow: hidden !important;
  background-color: #eee;
}
.mainDiv {
  background-color: #0453af;
  width: 40%;
  height: 500px;
  margin: 0 auto;
  margin-top: 180px;
  border-radius: 10px;
  /* box-shadow: 0px 0px 10px 10px #0453af; */
}
.logoWithDesc img {
  width: 450px;
  margin-top: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
.ThankYouText img {
  width: 350px;
  position: absolute;
  left: 50%;
  margin-top: 300px;
  /* top: 50%; */
  transform: translate(-50%, 0);
}
@media (max-width: 1100px) {
  .mainDiv {
    width: 80%;
  }
}
@media (max-width: 750px) {
  .mainDiv {
    width: 90%;
  }
}
@media (max-width: 600px) {
  .logoWithDesc img {
    width: 350px;
  }
  .ThankYouText img {
    width: 250px;
  }
  .wholeThankYouPage {
    background-color: #0453af;
  }
}
@media (max-width: 400px) {
  .logoWithDesc img {
    width: 300px;
  }
  .ThankYouText img {
    width: 200px;
  }
}
</style>