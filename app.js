let abilityContainer = document.querySelector(".abilityContainer");



const abilityTimerInterval = setInterval(dropAbility, Math.floor(Math.random() * 1000 + 20000));

function dropAbility(){
var abilityAnimation = gsap.timeline();
var randomX = Math.floor(Math.random() * -2000 + 550);
abilityAnimation.fromTo(
    ".abilityContainer",
    { y: 00, x: randomX },
    { y: 4000, duration: 5, ease: "power1.inOut" });
};




let pointsContainer = document.querySelector(".points");
let gameTimerContainer = document.querySelector(".gameTimer");
let points = 0;
pointsContainer.innerText = points;

let initialTime = 2000;
let bonusTime = 3;
let gameTimer = initialTime;


const myInterval = setInterval(myTimer, 1000);

function myTimer(){
  gameTimer--;
  gameTimerContainer.innerText = gameTimer;
  console.log(gameTimer);

  if (gameTimer <= 0) {
    console.log('TIMER ENDED');
        gameTimer = initialTime;
        points = 0;
        pointsContainer.innerText = points;
        document.querySelector(".letterPost").innerHTML = '';
        loadNewFace();
  }
};




let nameArray = [
  {
    name: "ፊልሞን",
    photoURL: "https://rb.gy/adxnp"
  },

  {
    name: "ፍሬሰላም",
    photoURL: "https://rb.gy/k98qi"
  },

  {
    name: "ኤቫ",
    photoURL: "https://rb.gy/u94bf"
  },

  {
    name: "ኣሮን",
    photoURL: "https://rb.gy/u37br"
  },
  //
  {
    name: "ናኦድ",
    photoURL: "https://rb.gy/qlh6v"
  },

  {
    name: "ሱዛና",
    photoURL: "https://rb.gy/rmm5p"
  },

  {
    name: "ዮቤል",
    photoURL:
      "https://lh3.googleusercontent.com/pw/AJFCJaWU5WSSNhYMusqTGDzx8pUxag-J6vcM8tHK4ZjTS8AI3UQjRgDoox0j8UY8FO9i4Cya21lo9uNC8L-KCTBc9ZVA9Mz4_niPycXgOuD2aB1ajO_z_VJ2KmlWtocc4DK9prwwlYQ405rjEjejh-KDwKjipQ=w2880-h1620-s-no?authuser=0"
  },

  {
    name: "ኣማን",
    photoURL: "https://rb.gy/zcfds"
  },

  {
    name: "ኣሌክስ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaUjr_61YKYFNBAFl8sp_7EITbc5jGKDASUXjWgswjFBpu30ZtyCkXk7TwuxBTkoGf4yJ8tXiW9te2eLy2E6bad5KCRXdtUhXZjC0m7GER9i0LgBqoD81N3k2y3mIzHbv6cgjGcLmU23BHPyH7TA9eFNyw=w2570-h1713-s-no?authuser=0"
  },

  {
    name: "ሱቱኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaX_yBjsAXTbJTCb2HJHiY3NPE8s0-wtEPAxi9l5ZB1LXAhWkH0BsmS5UUnKWUoi73iO4QKtzI21YpeEItV1QQgbIkYLEbj0-iCsOIs1C7OozvEhCk9ab8ogjwNz6ZIjV4nH4Yzdja9xk5ybZyJuMTRK-w=w2570-h1713-s-no?authuser=0"
  },

  {
    name: "ዳንኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaU42VzOJFiBS03lTIRM2D1LVVIx9AHxdXHFCxm9mlYtcc33JzqGkOBardA_KXJIcmprsDQxdSbfc8l6069-7l2-4aJhSEvCWOmePt1E90_1T5oPkc0yzX-uhPJ6SCQZ2luUiYBoL2k1EWCJByhzRUSEhg=w2570-h1713-s-no?authuser=0"
  },

  {
    name: "ሞኮነን",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaV9Vb7C6b1yVZjZjQKj9sq5D9Jbos6pZXV-B-FE2h2JCS0MNqhyNLpo8YcUWT1MHgbRJSaeqD2hIkqWNaVDSR120J9kbDUr-eAiqb_V7QBwbGogJz6X49WRUP4NMkav_8NutYAZD8itLVWg9FxDThVssg=w2570-h1713-s-no?authuser=0"
  },

  {
    name: "ርግበ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWmi7f6RWHHSQQnv2h_8CpuhPGlTwKBm8VZaJ0cMRKyap2YhbkP5LrreSQ52bmT5ueI5XIFVh1hCEsjtO807Ymnd5OR7jx1JuWp9sQLf0aYRvIjWvbU6kopP7Pj160Y7eYrUY5ESz38By5znOv3pO_0Bw=w2570-h1713-s-no?authuser=0"
  },

  {
    name: "ራሄል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXbcxboe0Lu8ijo3rMgPG6kmxPjuNo733w_XnmOYsKAVeKvE567oj4_50uLOS4exXUqxQ2PX6TnLvtRUdlSnjqcumRwoy7aVYaLoLLvwDItpMH-KioM_ZLTjNebhHQJKmbeBtB3EdsisNwDltcwViW_Yg=w2570-h1713-s-no?authuser=0"
  },

  {
    name: "ርግኣት",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaV8DjmKOgjGCrYrwqSCmv1KpSUmLX7pHKc6UuQdpECkrBB7WQaYpFOeHTrooHwlLL96bZFFUQ_zYFekcclN5OYX4_7Kve2Vx8uuxnexIQAAFQpq-8yKAaz1nZgjGnLrp3LcdUF7UWQNMPWT6Jzcb5nQWQ=w2570-h1713-s-no?authuser=0"
  },

  {
    name: "እስራኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWiaaomT590YaT3ppl8Z-LH590ZXDCpwT0OE0EYp3qijF4rRX7jY5ebCoHD_CyKx-aVwB81kQTG-0_VjYweKKz_tKPHxPZkRqyTZ_Ab5KB7cPTpgEd-shlCl7uStcx_Bj39zizYCSQzA7tcOQzFBx_vYw=w2570-h1713-s-no?authuser=0"
  },


  {
      name: "ኣማኑኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXKEuQmz6OrStfg2sVYCwlnzQToLE7um-BZLe3nIFRXt0DV6GbIU1KHDu5AVzyf8STzGVzCp2SL9kz0fKsWjXgyqJIiew6t-R0QRFX99N-p6z3vpZMxQfkgjT5YNva7MDCYDetBJhf4eDAd_1iAYJoc8g=w2570-h1713-s-no?authuser=0"
  },

 
 
  {
    name: "ናትናኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWhXb7R-o7QXBkjwd9M-d33FzbSRCojWIX4ZYrIwXo8iXNVZaBEbi2qrkj0wizZTzHsH0wUzZYyQAWWVWHqOkwV1yYlZZXhX9w6uaI0H7vIRGXHbn3RXo91lN9WddhVJxbdVOIkagChp8ZRUhHgMuux2g=w1278-h852-s-no?authuser=0"
  },

  {
   name: "መሪና",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWDC9be5rEiBLKhH8XzxavGNUj6Dp3-xApaS9hiSNbOAUKTCSPsLnBb0clER6gaHW89YF1CLqRprMTiw4W5sjarCjrFtJtIvoHLxk3jwFH_xiZUBJDiuwRnpBBTBKf_AKuiDaeWlx8pRGS2oAxYPHsKdw=w1278-h852-s-no?authuser=0"
  },

  {
    name: "ናታን",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVK_IPqJ6pcjG7tgbKYBhDpb07TiYKGXQzIL7vS27xY1o0BTGUHI5Z2z-0pzs8PUeBPhy06kTBkOUKRBZhqbZvEWh0DNN3rZgGVYe9RpwqtYNhxvL95bGQilP1VBaL3rbGfGrIF95RdlZj_tJ6h1IW8DQ=w1278-h852-s-no?authuser=0"
  },

  {
   name:"ራህዋ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaUXsViXICg2G3NzpXNIA426o6_jX2Bp9uHfmoEz0Z_rbuQSymwvXl8KhjBBe05vfLhwtJTQREmHugbjYcELVx4AndJWSb0NvJu0Bk5ICxIKbTOASdzhLywGUDtDbmJWguwDZ6lbT1ri5p2AfKpbhslOgQ=w1278-h852-s-no?authuser=0"
  },

  {
    name: "ሶልያና",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXahgxmsK1NDtOaW88OK9e5QDwY-Z199eTJo9qYLIVXrhDn-WYgtGUIRuZq5BALGrODQV2z-gNML55wcXkQpDDJAw6pE21krf7iKF5Qar1LSywgycAb6XpoaBKoK1NEcIGaGpNiaZH3RVqs3e_gWGL7rg=w1278-h852-s-no?authuser=0"
  },


  {
    name: "ደሃብ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaUiGOCSgoyGglx60btM4rw6tyYapcB1zBmib5npVD8VBXsqk9d9cAXyB0gTzV0ZTmw2FUONNsiN8aUg7NdhYhE_fNGATXqBjXtnmfLee8F1-Hj9gTkbfvKH3lwXX8nZn16WCieJLvgdz7A2muli72k4mA=w1278-h852-s-no?authuser=0"
  },

  {
  name: "ደሴት",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVc-NDo0ZRKeSMjaz3FD_U6ARcb2KS5R1tSTsNtZP2Ryroul2gBO793ohUXzunbYE3lZHXrcEqhZuQXQ2j7iILeWuy-lQhDLqqFTaaECkrof9JNC4oq9ueK2Md3KuFuohOhr9R7F8i1RuyrkqEMubpo0w=w1278-h852-s-no?authuser=0"
  },


  {
name: "ቴዎድሮስ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaW_UOJQALQefpPR8vxeAKIfu9_qZ7YQcaci5o84rOYCFDBUVJhfsAgv7eJoN8Fh0vX98L75nkWvzx1CeHuLuW1OsIWlkegNhVi-Dzm1lj0vlnGwWMSJBjc1TmS52ii6MLS6Hv62GnlcdfQMkIl4BDOE3A=w1278-h852-s-no?authuser=0"
  },

  {
  name: "ሩታ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaU3keqEpAqzSs3a__lrJvSfhCl8LZCG23orOo5zUpSxFQKpAUNrTdd6ONXKoKURC_FNYtcHVIkJ9pe8GO3OPDp9rp91ta9sjte42AG4D81hTzdojFINqc6LuWPmV53kCVytpCISWWd_WgzsAPLbKiisIg=w1278-h852-s-no?authuser=0"
  },

  {
name: "ፍትሓዊ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVoW2Y1j05jSm9PRiCufioJwQ_wvjYnOgB6hrpk3JqRDO-ICDVUOdeDJBrS3EHMHmcOnF1cyrtABoWuCQ42HVSy9XegsvHoWgwsGCY3WcNrqdWq4ZlHhIZ9dvM47syQZMAYnEtkLpTPEs7JzrId6FRarA=w1278-h852-s-no?authuser=0"
  },

  {
    name: "ዮሃንስ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVm65iz_ezP_3a1s084U47gsNeFYsbWf6jLsPJt0Gd-epdMeEvI5Rfv8nQN4yhfegwIhF8eKtODT-gKChKQ8Urk7a6mmyU_gdicJw5u4FyP3elO6q7gkhYRDUGufk6YuiuiotRFBOjjpkwSBLStvoIqCA=w1278-h852-s-no?authuser=0"
  },

  {
    name: "ልዋም",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXYfh528ycdywDVKMhLMxMM4r1-raqzc1A6dd9fM3IsHTey-Z3l9ufF_LCj5K3_olcHjDdREAPwsJtbLF_M4TEEzXeC3k1otibd2rllHLo9Z-Vt46N9aOfDAQpfHM_qIWivZyxYl_IyeTRCtYj-Ba7Ryg=w1278-h852-s-no?authuser=0"
  },

  {
    name: "ዳንኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWVAQTUXmDm7cwop3dO7Hb6lY3TrUVEM5zkn3MAIdfupo3_DY8M8lOB6s_bn6i5wUxrwY6PNMCbbCkTdCwD7E42UvVdHHZBcuYYhpfNIwcRZ2PH4ec2y4d3Z7xFrouH6RBDH-8vAdmHJgPt5v8sm_ziXw=w1278-h852-s-no?authuser=0"
  },

  {
name: "ናኦሚ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaUBMCLHZm1mA6rO1mgXld2DHeb0RPSHsj7EUkA0cEhOKSx4GrIk4ktfPvuwJ5MuxF1YqtjixQmXuJAWnFArhJLIXr0cwNxCFyX20jzvAjG_Q_QqVmCvV3JYgcxi3zDcs5VPLYGar5sNkrjsoioh2Y23tg=w1278-h852-s-no?authuser=0"
  },

  {
 name: "ተራን",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaU5lUNiPTdaIQucjENZYqMfCeflZPD-O9KdrfBJvdhuIN6aQ0YWgblxpIX6X6vQJeNneBgX2J6O3lygPXQxuezvBrjAIuYrLdIsAO11C8VTxX2lYJbbiJYGIjp_NXjC9WKIcHnWjK0vTkIwSbZXNssoNA=w1278-h852-s-no?authuser=0"
  },

  {
  name: "ማቴዎስ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWlif5bGsReoz29Kb-8PhLen-CmkHDIYYtnYa-5YV7jDVzKSDUyxujNjmZC1YWZA4cP8iYuIcml0R6N8dNU3gHrY5M5gvESSCBmKzZ4pDYwgamX9Ep7qQfsliaYcpB-_I5VRcZTSPSFETVjrIFu5FhG8g=w1278-h852-s-no?authuser=0"
  },

  {
name: "ናትናኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXIK6W9TllNegYrUUyO8dTxh7E55GeqnBG3o2OCHPX_AgywuNeqTZ3UmbWKcQLF1htRKpHR-LZTxVjKceWuuX4Ad1p3dP7sPZLgbBROLu8s2SN4qxRgIXFWeN2FaWbw5j1W4c6w9MHIaspLMv46fIjzuQ=w1278-h852-s-no?authuser=0"
  },

  {
   name: "ስኒት",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaW00WsMo6UsI4Kv0SD6kfxNnKcrX8y4KvUlKUmZG_nE9xU6UD6mGtBCN98iS1k4cICpvHINtyub41oRTgkHgsF8nXBOmnQ-geDwE-r3oA91DXdtpDq8ds5aeB2JlV8ZHkY_yEbiKynutA8WWlPyBSsyEQ=w1278-h852-s-no?authuser=0"
  },

  {
 name: "ዮሳን",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVIf9BK4W58K2kRZZaI-fCjYlF7InUT4wqx-TY7b2guZgObHw7EOJxSz17ojfPE_cRs_5p0_VMSkKAjPKNRyJrmAntXb3M8P5DjM0mTQ86pg50ExcyJr5_niYROyvQnHPjwh3UkGfc6pgYk9mczdLCEZQ=w1278-h852-s-no?authuser=0"
  },

  {
   name: "ዕንባባ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWPd-dD5lIr2-cKm7u1NtVyuNCEwnIz-rvbmgv_xuffqPRGMe_w8wPspJcFeMUbKIZKbhQO3fgblPKW_SYd0lLBKD2IxurFc8hFD9aQDAEnn_2aShse_0OeUOK8hDP_HzQAzag_Dunz2zchnxiQUOtL9Q=w1278-h852-s-no?authuser=0"
  },

  {
  name: "ባርካ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWATdx7OdcIMAVSREFh1q99mIjXbv1zkDwYfpX8VfrG3gAi8jCjjbyOgjHutGGWhyJSGq3Sg4nuDo0jhD1mWMSY9-W0nnwneoL4Csz90WioCHy_5iW7Yz6oVoVDBzQtovrA6db91oNA25R4Hm3Ju3u9Jw=w1278-h852-s-no?authuser=0"
  },

  {
  name: "ሳብሪና",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXWAL44ZmnRhBjGODt9NTy7GWh1tyvT_310Da-2BQ1jLmCysyhKp5jvZPGw1qAhlU-rLQIYNNFvOcxmYJXy16t7MFDETo9Wn9GEnXl46m9p5YvwzPjqlLn-F26FAHoIEWFhzDTiIlpJkpnC55q6y1HQEA=w1278-h852-s-no?authuser=0"
  },

  {
    name: "ፋኑኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWFuNNXGd9ixYgh4w-RqaGlULLQ0-Z-ex5eoNHLwcQ8yNoawVUXom29sOHNhZUSJVc72R9JUZSRDh3HT4hc1IMcIKttTWCIlBNXDtoouSJ_a6CNlkS2m6K5YHE3He0xKLwTI4WZTWOebxfxyiJ0O34p0Q=w1278-h852-s-no?authuser=0"
  },


  {
    name: "ሆሳእና",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaX4oQlbONF7iGu24Vk_-CcSScVms5vG-1aMynwrf4GLK-x-2nEEwCvG77qhcpOrCsWF1DZMlkYroUjMA-qb5xGzPTPEOJ771p6klqOn8whaWKaUYq4wpnL82hpQ0RHf4DKv1Sojcwxtag-ZiVOuoq97EA=w1278-h852-s-no?authuser=0"
  },

  {
   name: "ትምኒት",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaU0pLXDSuQB_doGaga1uqa3lLcfl2PRN78EPR7IlS0mB3O2Tk7CVuBH5IBJ_dQZEKg-aUFU1xCdefs7i4SEOAOTosIxEehtpGFngjjFXHMsrDbL7Zhn6uIvlBEv5bb72N9ac_DnwC2XfeFxnPVUPgTjbg=w1278-h852-s-no?authuser=0"
  },

  {
  name: "ዮሳን",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWaiffLDIkyV6ge3ajT83EOoyVQxb0UaOQPeDP3fKiJlqal7M_GLjemxI1Va5n8vFClD_nhKEZf46uiboQaqdPfl0jxiocyAXla2IQqlK89D9LzEyzr50k6lNddZbHr7p6CC0ktMzFIzfN6TqthdrUvZw=w1278-h852-s-no?authuser=0"
  },

  {
    name: "ዮሳን",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaULzQv5IywatJgB4G6JBdmmW2vdE4tvwKmIVTms96xZ8_ZaN5wSv386Xmd_BNX-in8DvpXLsbh0bJTLJ1xieXBT7wZTtJTlq3hEYAO2-LL_CjmGsNPyMhiq8orf7Nng39YrNUFYj7FlpH1qzKU4R5oauA=w1741-h982-s-no?authuser=0"
  },

  {
   name: "ኣቤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaX-LdkQsOaeeHPlpaVKT0X-YXK_w6vTuxv7dwwbsx6orF6sCLXIGZI_N-ArzFrZEM7Op2qvxoH22EMpSMIQ-hZLRSfOZrIGZptQO3K12O1rYOz0ckLXCT9UxIZYmGKUfbWcSuA1tsVLoXBtLK4SgOBEdw=w1278-h721-s-no?authuser=0"
  },

  {
    name: "ሃይማኖት",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaV0bv-y9tWO0GcCWi5G81LO_gcZs-GrlxVqrdOfVr3K3zn_HGFlgODEte4j778aMviK9I-mCObdzbSNwqKX94KMMjols0lAOLPB8sKVfWmHJE1hx5M4syBxUNmKbOLFFAAYBgXGNEFGCBGEB-iykct6fA=w1278-h852-s-no?authuser=0"
  },

  {
 name: "ሓበን",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVHUypcMrmVe8DLV4ByjC3oWP7JKrV0F5CBGrn4UdZEHdTb-oX_PPOHEPXWiZl-yX1hI8_3rW9Mfusktq7cvAwqV8uzCKy6fBkfyxnnUzdmvEJ-CrxLXTnHQBeg0sMBS2AqKCLl0DQ_Do42WxgqRbWNZg=w1278-h852-s-no?authuser=0"
  },


  {
   name: "መሪና",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVQgnp56B3uTgXCYr5Bh4OC2Hd4sIPtIilWmcpU-Uf3A_Jey4PUBE059vwsPXVTvHS_4ILecIgAjTu7fSkBuk3ROMDyh2cJSGBlGyb5cMQJPzYP3FqG-fJzcyjlmGPgei3AnIffg-MNY2yDbumVu_cljA=w1278-h852-s-no?authuser=0"
  },

  {
   name: "እስራኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWehkePnXmESaoE0SuCDtrIiEuvmoEQlJZ8l0ZoiOTJPRu9_dCBivD5YcUZlrs1Cc5nr6H1SZHjM55iNXwf6j9RquJNYi9UgKGTrQksM50JIFvV5FdBdxWPcUL51XDHUda89izwcvNwaRXt0i6jK1BU9A=w1278-h852-s-no?authuser=0"
  },

  {
    name: "ሩፍታ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaUf9Zfg1kSkXQKf52Dx6OHdqoSeeXSSffkU6mfUkuRVhsQEJp9_P-KNMztFW6HS0yJt-uP2rSZdwl9uDiucQvUblXKaAutqlacZj5j5w-G4l-CVQfS6UXXblCofTdfgPdhXrw7muguLBLOIh1bQIBs3eQ=w1278-h852-s-no?authuser=0"
  },

  {
   name: "ሚካል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVFsdnTNlKXX0pNupvYDEo8UVRZUqrLv5GfPWvVJYhlB4lY25FKdFJvgnhn8UY82Qur_VqNOGcpY9KbEbtRAaedi8L-YRBYRZmsD2gKcSkd9Iyi2HwzVKzi2IFpmBh3BwkeWbXrUeUxLSIoO6tB2wvGxA=w1278-h720-s-no?authuser=0"
  },

  {
    name: "ፊልሞን",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXUejEHlwSuxVKrK33Tz3HxOIYffBTa5jhbnTiQldPeiydWT0ioQj01CgkZm6xo2CQ62aEjfQK5A8OB0j0_bL5B77FTjTG9LXkWLm466Gzxrdt_PBODqy3rmxPO2RNRegPz1d3rDYymQuDJxCmKSRqO-g=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ዮቤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaUwdKAhroTdgOYPwOMtvbVx2HupliBq0qGvPlFLKvId-GL5mwEpKIkyDssa8w1eRUNBOXXUoeFOe_dlnC1as3g3T1YX7m74qzAhKrQEt-aXfLxI58iozYBm2kZqO9rTLKKfe3f57feSX3CcPK8SJjSsvg=w1278-h719-s-no?authuser=0"
  },
  {
 name: "ሚካል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVFsdnTNlKXX0pNupvYDEo8UVRZUqrLv5GfPWvVJYhlB4lY25FKdFJvgnhn8UY82Qur_VqNOGcpY9KbEbtRAaedi8L-YRBYRZmsD2gKcSkd9Iyi2HwzVKzi2IFpmBh3BwkeWbXrUeUxLSIoO6tB2wvGxA=w1278-h720-s-no?authuser=0"
  },

  {
   name: "ዳንኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWNLZDC1Tvx2ZkhzBoH7-FVJR-TdJl9DeVkbmlmyd_ErOUeT63egP_-fzCuvbrB-IA_9EG60wpSJ3f6qfbxUoWO4G9zFSYOqz98lVwsb1OegkBzKNZbOsWKfsRxuaQr9VZPPMLFeVQTcM7vVuR3Iar8CQ=w1278-h719-s-no?authuser=0"
  },

  {
name: "ታራን",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaW3Y9fSheVd9dUeNW1zwp3tgvtSX4PrIRK8wUW81hOima2tqltQmXacMNy_BiHV4KbmRjyVi8ZHjO5ItM-VkWFlTjbQDX4X8kotbRUF-_85EwJsaLdt53S92C-maDCYawYsgUDa3DzqPp8HwD3g628IwQ=w1278-h719-s-no?authuser=0"
  },

  {
   name: "ሶልያና",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXwwjmU93zKC4l4bn13nLVMcGHThpnkNDgy_HiuqfJn_-w11jtIJalXu0MjkHut8i4jujAaN45rkfKXdebNEXY4KH0LxOv1WK0SO78kzEVrcfSBro3WcqC7uvNGEIbiywctBf43h_fYj-iGzNvp_plrCQ=w1278-h719-s-no?authuser=0"
  },

  {
  name: "ፉርቱና",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXq-oVKMNkRhaueuftm-9IYNJMgauLcd4N0S-daYIaMKvHbALj9o_X9DhPd8yGmGEK-UTVlMyYXkwYMMiXbmF6REiQcTNSG4F13oGQmobmsJgGPGS-M9uGcvnbXQBdaDAk0bsL9q6CFED9mHOu7XWwGpw=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ሃና",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWGB8USLCqyr5fClceWbDyAGM2MhLD2JwHCuqHu_D0MzOO0NuMWAsRhJ0ulIDXPltqTexawpt459GuKB51MCt9O7KZ79CL20vmoVT749Mr1CAXNbjYqDGkvDKKQi-_HXYudpOepDTJZA9xYzror9tmjGQ=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ደናይት",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVwMJ-4MXecRBW69wWYpAe06_mwvs_gEROBDjdLdduSNtj08wd6Ufn3hvp1lz3r5xCKr5YvgpVyZRHrtj87upH_gOugro2KAKLoIACrXLAGH-Yf8BvDJW7JimSPT5fXoC7bO0mVXeIlUB5lieuPjM093A=w1278-h719-s-no?authuser=0"
  },

  {
   name: "ሄኖስ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXGDYCveTLCuuU_LAmuOhbUnpZ9eC7C3yMBpH3VuDK1ziqwAs6u0PJ8aGlJPcqch8GAtthzCjMMrGYPymgnmhjLVDj43zg2JMnbj_27YEWC-ut302y0clnKIWJscTQsLMK0qkx_-RK0Ed-9I-_O8sPL1A=w1278-h719-s-no?authuser=0"
  },

  {
   name: "ሄርሞን",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaUbgLlIDdsyuOGNHcVHPy2n7evNBgFp-Tojl47gzrLSLYxk0Si6Xs_hmohkMwz-z8slwUv04A5_PL5Ng-1uBRjEsLaZI6-jXA778nUHloeWb7Fja5CGAX7NPtBUHgZINkWPBuDgfzQQG-nVZH3C0MB7Fg=w1278-h719-s-no?authuser=0"
  },

  {
   name: "ሚካል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVFsdnTNlKXX0pNupvYDEo8UVRZUqrLv5GfPWvVJYhlB4lY25FKdFJvgnhn8UY82Qur_VqNOGcpY9KbEbtRAaedi8L-YRBYRZmsD2gKcSkd9Iyi2HwzVKzi2IFpmBh3BwkeWbXrUeUxLSIoO6tB2wvGxA=w1278-h720-s-no?authuser=0"
  },

  {
   name: "ዮቤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWU5WSSNhYMusqTGDzx8pUxag-J6vcM8tHK4ZjTS8AI3UQjRgDoox0j8UY8FO9i4Cya21lo9uNC8L-KCTBc9ZVA9Mz4_niPycXgOuD2aB1ajO_z_VJ2KmlWtocc4DK9prwwlYQ405rjEjejh-KDwKjipQ=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ጩሩቤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWPqSMICpL8iKjKlt5o-nMGyh8i7_eNjOxihGwmVfH6RPxCe0cA68QnQccotkI2LCWCoqFpQRmeaSxQtvcb0c0MbLT0sZJppCATHPmlRpUZEo6WLpvsGfbykuXwMwgMtviP1kUM5ur18cIuEN63UoKOgg=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ሰሊና",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWdD87qz1pbW1nZFAH7ilsjJs2TVKUsehaSv7-W3Rj893b9IVDgIEVGEtTnbzXSuNq83xUQf01EGMMyVtYvc4cnYc7ZnjTQW_UQQDXyfZlZq3MA6Vz2v_A4gHm39JbtMzLIovQo5X1SOUQqGdHT0a9DqQ=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ናዝሬት",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaUrKJ6S4N8m8o13Jb1AsezpEYv8ABeUCsgCLSSSp6jZGdf7QDy4V1q9I2HEIx3a3kODCQhAN9bGcIoIkNO6PEL81g-TUykepYZ6mXhSu8huBRjNBA2VShS0uJQkrDbqgUqRBoQyozWARgcrz3DMg6OqZg=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ሄርሜላ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWk4yTCB-KVh1MzlmXrcBSWSuU8hzLrN75xz7TltU8wnr0xa4qR8utImMgG4YKcPL9ncxR16YZlAthOfE5fUVFtMTffBp-_WyfnmlxNt9EBLsyjDm43g0T8aModjpqcaBuSzJoUHrQzeIBpnEjT5_VZsQ=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ኣቡነኤልያስ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWQAkXaSZ57zRg9w-8Jr5ULuojZMMvUm8XKQA-3UElEcXU0i3UrWvge6XXlK-X_b4MLHsyD7Olr7C7xC1JW_bM1TgkBkvB2oDYt7DfE61CJqtHMkw8gporxaULRfTuo2xgjvpNOJWemsSHy_7SZQgq41A=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ሙሴ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXuxvLUN9G4ObYkioGUMLYlU309BETM5ZH9CWYbcS3V6Ier63vz4jMAD2nmJfuNTYTRqYf9UJ3x3OxAl7mQ7UkgoW0x0YZOj7a6U7SjogurB7jkWtZazAyE7tsUk1T6-8xJbmpIgSCKMTl5CFat5_EzwA=w1278-h719-s-no?authuser=0"
  },


  {
    name: "ናሆም",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWP87f9WR-hr9Hdg79JIjBCGM3OVugc2dvcfJCc4Bq9WQr4a6wdmtZQQCvc1NrhbKOdVtXFm4yPXkfKm9-WQ86YFUieW-KHEIZi1Q9xTvrTBTkp7v9vJmPyFM88xT0uK0dI1N3CDvyigHKTW7AJLyRUCA=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ዮሳን",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaW1vXHgC0-dHK9OIBNBWPtSbCCeTUVluHwaUxzj2GzrSwIWQupSswx-w5OnejTs4PVByRfm7pxETl-Gu-cWb0xB0KkXobx4Sx-w8ne2MgXGpEpuTbeo9Ec6_hHWW3PwdMUyZHOSd7GNtYeeyTVFw-c_hQ=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ኣስቴር",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVbjwvQl1v7wlXluKTt_vfXi1XkKnvBVIg_3XOrf-u_bkEkL9bLUQ9fm49KqMlAxVLooEwl_lkf6dH_KS8NXiSzVOujxIpIVrrzE7JvI1yvJyKmx2ark1xh4anzBnk1XjdxrwJqQVqESpL3g_kpBNTtcg=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ሚካኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaW-cM9J-UdqEcy-Imn7FH2j4YP3r6BZgoSYtEB4WiXOWR4WdLlfAKUz0gvL5WPlQtXXcUnNjb4JoNZ8WlzrPwq1yvc8BlpIRJSG3F5S2AFroLQKIgUDCyeXiItx6xd0WMj6otbiSHZ_DqxisrNfZs_xSg=w1278-h719-s-no?authuser=0"
  },
  {
    name: "ይስሓቅ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVO6pOOy7PBRnMmNSUg1cCChCcLagFEnScZ4DvtOPm5RTf6UWfY4EEgQ6uvPAh4grMddLOTRdNNDBHzjbkMbInIoxgo4zhYwEwywYznYWeiTFGnkTws6fw12kpHeHnk3YqGMGnsfKVwVyv7bb00-cfr5g=w1278-h719-s-no?authuser=0"
  },

  {
    name: "ዮናስ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVjjFAx08Ak5pd9eASVNx89C81YgwFcj764FVvaYgrc_ytpIBae_-E00PrOCU_3ecLPkna5UMWWd9bO7fSgFRaCYXLlHR7dvfEeIxtScxbpxQJi1AQFEtseMCcV3feDpi3l6GXoydWZOKn9u3vuS1WEkw=w1278-h852-s-no?authuser=0"
  },
  {
    name: "ፋኑኤል",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaWXTeOatj5TkO4l6DN5bh7WblTSSe7UkvhR66-VBDJxXLWWWFL7x9q4eX976Q9tiSWAHe2B0tu20phm10ZtYv6eSyV28CoeaVz6jkJB3VbDXpQvjUPw693Hg2kL4aFtlBIMzSrKrpIzGzPwetj35dMtsw=w1278-h852-s-no?authuser=0"
  },
  {
    name: "ድሙ",
    photoURL: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2429&q=80"
  },
  {
    name: "ላም",
    photoURL: "https://images.unsplash.com/photo-1569858241634-5aee6e47091a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
   {
    name: "ብዕራይ",
    photoURL: "https://images.unsplash.com/photo-1623211270166-bc232d744d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
   {
    name: "ገመል",
    photoURL: "https://images.unsplash.com/photo-1558567279-e00b3c1bb41c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
   {
    name: "ኣድጊ",
    photoURL: "https://images.unsplash.com/photo-1596083873043-412ba19d86f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2432&q=80"
  },
  {
    name: "ዑፍ",
    photoURL: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "በጊዕ",
    photoURL: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
  },
  {
    name: "ንህቢ",
    photoURL: "https://images.unsplash.com/photo-1568526381923-caf3fd520382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    name: "ተመን",
    photoURL: "https://images.unsplash.com/photo-1552727309-0991a197bced?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
  },
  {
    name: "ኣንበሳ",
    photoURL: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "ማንቲለ",
    photoURL: "https://images.unsplash.com/photo-1480554840075-72cbdabbf689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "ሓርገጽ",
    photoURL: "https://images.unsplash.com/photo-1524697958400-63970dc9e178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2413&q=80"
  },
  {
    name: "ሓርማዝ",
    photoURL: "https://images.unsplash.com/photo-1486174070967-b0f1610f76de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "ጣንጡ",
    photoURL: "https://images.unsplash.com/photo-1539393412080-a68de18a3a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
  },
  {
    name: "ፈረስ",
    photoURL: "https://images.unsplash.com/photo-1616271939581-591f6a7abb4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1989&q=80"
  },
  {
    name: "ኣንጭዋ",
    photoURL: "https://images.unsplash.com/photo-1574246760314-6ce88ce43fbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "ሳሬት",
    photoURL: "https://plus.unsplash.com/premium_photo-1666536060536-f328f4a9b6d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "ሓጺርስረ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaXR1oyPOwM7oaM41NAI2mUl4PENi9YIDnkhNY9SooRCcck38w5hh3TrP3wXOLjPIkfQZg24BaL32sKDLynrxqhdBb23ZFMGFiP7kqs_97_OHHU0NlBXN3WSF4ZWkLAv7kf9vSN-W2tEh1CUEDeZ2gHsfg=w1278-h719-s-no?authuser=0"
  },
  {
    name: "ካሚሻ",
    photoURL: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80"
  },
  {
    name: "ካልሲ",
    photoURL: "https://images.unsplash.com/photo-1585499583264-491df5142e83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ጫማ",
    photoURL: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80"
  },
  {
    name: "ሻርባ",
    photoURL: "https://images.unsplash.com/photo-1574376395632-4a0a492a728a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1493&q=80"
  },
  {
    name: "ስረ",
    photoURL: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ቆቢዕ",
    photoURL: "https://images.unsplash.com/photo-1510114054347-3b2610d5e362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
  },
  {
    name: "ቁልፊ",
    photoURL: "https://images.unsplash.com/photo-1621365039903-fd09cc003898?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ጎልፎ",
    photoURL: "https://images.unsplash.com/photo-1567303568460-8d3952f540dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
  },
 {
    name: "ኮቦሮ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVAXHB2JRonYWp6qm0tQQhtyEU1Nf4j3pmS2qnthCCXK1pVk7SkidfPyXdrcuDEP0ZFankQJ679Et-QcEt3G3GKmN542CcFfkYzLSlN75pHf8jMZBgDR6lHtXneb2daQhsTBpmRvWPBs0nVECO9Zfk5dg=w1278-h719-s-no?authuser=0"
  },
  {
    name: "ክፍለኢየሱስ",
    photoURL: "https://lh3.googleusercontent.com/pw/AJFCJaVwl0TTmm1GJFhSpYnkT_nbU14UjSRApXWpimpjpG-PA3E8b5NMfgZz4IZ7fPyLnQAZ5i1KDhX9CjHcavRxByUDxE8JdFH-8HHBtgABbvvx30ARoZkSE4gFd_V4cj8fnO5hC7SX4auzFoWQ8nRQhzOipw=w1278-h852-s-no?authuser=0"
  },
  {
    name: "ጣውላ",
    photoURL: "https://images.unsplash.com/photo-1573104049264-5324ea0027d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    name: "ፋርኬታ",
    photoURL: "https://plus.unsplash.com/premium_photo-1666739031577-1edb0ca25a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    name: "ካራ",
    photoURL: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
  },
  {
    name: "ማንካ",
    photoURL: "https://images.unsplash.com/photo-1566759103159-6bdfc6725316?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ተለጃ",
    photoURL: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
  },
  {
    name: "ማዕጾ",
    photoURL: "https://images.unsplash.com/photo-1464316325666-63beaf639dbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ኣስካላ",
    photoURL: "https://images.unsplash.com/photo-1519963759188-0e9264cd7992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ሞኾስ",
    photoURL: "https://images.unsplash.com/photo-1538928760374-76c912ceddb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ሞኾስ",
    photoURL: "https://images.unsplash.com/photo-1538928760374-76c912ceddb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ፍንስቴራ",
    photoURL: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1296&q=80"
  },
  {
    name: "እምኒ",
    photoURL: "https://images.unsplash.com/18/stones.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ገረብ",
    photoURL: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ሳዕሪ",
    photoURL: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ቃንጥሻ ",
    photoURL: "https://images.unsplash.com/photo-1519305124423-5ccccff55da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  },
  {
    name: "ቆጽሊ",
    photoURL: "https://images.unsplash.com/photo-1557427083-363bf1d4f82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ጸሓይ",
    photoURL: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ወርሒ",
    photoURL: "https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ጫካ",
    photoURL: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
  },
  {
    name: "ሓመድ",
    photoURL: "https://images.unsplash.com/photo-1511991095822-5637dcf1365e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "ፈለግ",
    photoURL: "https://images.unsplash.com/photo-1451903978882-b165bd94e45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  
  
  
  
    
];

let currentLettersClicked = [];
let bodyForImage = document.querySelector(".bodyContainer");

function loadNewFace() {
  gsap.fromTo(
    ".bodyContainer",
    { scale: 0.9 },
    { scale: 1, duration: 0.5, ease: "bounce.out" }
  );
  let currentFace = Math.floor(Math.random() * nameArray.length);

  bodyForImage.style.backgroundImage = `url(${nameArray[currentFace].photoURL})`;

  for (var i = 0; i < nameArray[currentFace].name.length; i++) {
    let randomNumber = Math.floor(Math.random() * -130) + 70;

    let newH1 = document.createElement("h1");
    newH1.innerHTML = nameArray[currentFace].name[i].split('');
    newH1.classList.add("newLetterStyle");
    newH1.classList.add("newLetter" + i);

    newH1.addEventListener("click", function (e) {
      console.log("target.textContent: " + e.target.textContent);
      currentLettersClicked.push(e.target.textContent);
      function removeLetter() {
        e.target.remove();
      }
      var lettersClicked = gsap.timeline();
      lettersClicked.to(e.target, {
        scale: "0",
        ease: "power1.inOut",
        duration: 0.1,
        onComplete: removeLetter
      });

      //gsap.fromTo(e.target, {scale: 1}, {scale:0, duration: .1, ease: "bounce.out"});
      console.log("convert this to string: "+currentLettersClicked.join(''));
      console.log(nameArray[currentFace].name);
      if (currentLettersClicked.join('') == nameArray[currentFace].name) {
        console.log("matched");

        // alert("we matched");
        points++;

        gameTimer += bonusTime;
        pointsContainer.innerText = points;
        currentLettersClicked = [];
        loadNewFace();
      }
      console.log(currentLettersClicked.length);
      console.log(nameArray[currentFace].name.length);

      if (currentLettersClicked.length == nameArray[currentFace].name.length) {
        //alert("failed");
        currentLettersClicked = [];
        points = 0;
        pointsContainer.innerText = points;
        gameTimer = initialTime;
        loadNewFace();
      
      }
    });

    document.querySelector(".letterPost").appendChild(newH1);

    var tl = gsap.timeline();
    tl.fromTo(
      ".newLetter" + i,
      {
        opacity: 0,
        x: "random(-1000, 1000, 5)",
        y: "random(-1000, 1000, 5)",
        ease: "power1.inOut",
        duration: 0.4,
        delay: 0.5
      },
      {
        opacity: 0.8,
        x: "random(-300, 300, 5)",
        y: "random(-300, 300, 5)",
        ease: "power1.inOut",
        duration: 0.4,
        delay: 0.5
      }
    );
  }
}

loadNewFace();
